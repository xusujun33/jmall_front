const fs = require('fs');
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    before(app, serve) {
      //获取首页数据
      app.get("/api/home", (req, res) => {
        fs.readFile("./db/db.json", "utf-8", function (err, data) {
          if (!err) {
            res.json(JSON.parse(data));
          } else {
            res.json({
              message: err.message
            });
          }
        });
      });
      // 价格从低到高排序
      function sortAsc(a, b) {
        return a['salePrice'] - b['salePrice'] < 0 ? -1 : 1;
      };
      // 价格从高到低排序
      function sortDesc(a, b) {
        return a['salePrice'] - b['salePrice'] < 0 ? 1 : -1;
      };
      // 获取全部商品
      app.get("/api/allgoods", (req, res) => {
        fs.readFile("./db/allgoods.json", "utf-8", function (err, data) {
          if (!err) {
            let page = req.query.page;
            let sort = req.query.sort;
            let goodsData = JSON.parse(data).result;
            let total = goodsData.total;
            if (sort == -1) {
              let num = parseInt(page);
              let sorted = goodsData.data.sort(sortAsc);
              let sliceResult = sorted.slice((num - 1) * 20, num * 20);
              res.json({
                total: total,
                result: sliceResult
              });
            } else if (sort == 1) {
              let num = parseInt(page);
              let sorted = goodsData.data.sort(sortDesc);
              let sliceResult = sorted.slice((num - 1) * 20, num * 20);
              res.json({
                total: total,
                result: sliceResult
              });
            } else {
              let num = parseInt(page);
              let sliceResult = goodsData.data.slice((num - 1) * 20, num * 20);
              res.json({
                total: total,
                result: sliceResult
              });
            }

          } else {
            res.json({
              message: err.message
            })
          }
        })
      });
    }
  }
}
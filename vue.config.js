const fs = require('fs');
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    before(app, serve) {
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
      })
    }
  }
}
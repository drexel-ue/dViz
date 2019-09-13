const path = require("path");

module.exports = {
  entry: "./client/lib/index.js",
  output: {
    path: path.resolve(__dirname, "client", "dist"),
    filename: "bundle.js"
  }
};

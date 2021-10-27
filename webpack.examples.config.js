const path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    horizontal_stepper: './src/examples/HorizontalStepper/index.js',
    growing_button: './src/examples/GrowingButton/index.js'
  },
 output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist/examples")
  },
  devServer: {
    historyApiFallback: true,
    allowedHosts: 'all',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    client: {
      webSocketURL: {
        hostname: 'localhost'
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader",
      },
    ],
  },
};

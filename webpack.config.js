const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  mode: "production",
  output: {
    filename: "bundle-[fullhash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
    assetModuleFilename: "static/images/[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Coach Benneth",
      template: "./src/index.html",
      favicon: path.resolve(__dirname, "src/static/favicon.ico"),
    }),
    new MiniCssExtractPlugin({
      filename: "styles-[fullhash].css",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/static", to: "static" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "static/images/[name].[contenthash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "static/images/[name].[contenthash][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css", ".scss"],
  },
  devServer: {
    port: 3002,
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/",
    },
    historyApiFallback: true,
  },
};

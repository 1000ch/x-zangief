module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    module: true
  },
  experiments: {
    mjs: true,
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/i,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.(gif)$/i,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  }
};

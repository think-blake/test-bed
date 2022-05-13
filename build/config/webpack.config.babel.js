import path from 'path';
import optimization from './webpack.optimization';
import plugins from './webpack.plugins';
import rules from './webpack.rules';
import common from './webpack.common';

const isDev = process.env.NODE_ENV !== 'production';

export default {
  devtool: 'source-map',
  entry: './src/index.js',
  mode: isDev ? 'development' : 'production',
  module: {
    rules: rules.concat(common.rules)
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/assets', // Explicitly set for background images in CSS
    filename: '[name].js',
    library: 'standard-library',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: plugins.concat(common.plugins),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      'node_modules', 
      'src', 
      'tokens'
    ]
  },
  optimization
};

import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const plugins = [
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new CopyPlugin({
    patterns: [
      {
        from: 'src/styles/settings',
        to: 'settings'
      }
    ]
  }),
];

export default plugins;

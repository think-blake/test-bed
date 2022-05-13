import CssMinimizerPlugin  from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const isDev = process.env.NODE_ENV !== 'production';

export default {
  minimize: isDev ? false : true,
  minimizer: [
    new TerserPlugin({
      extractComments: {
        filename: 'LICENSE.txt'
      },
      parallel: true,
      terserOptions: {
        /* eslint-disable-next-line camelcase */
        keep_fnames: true
      },
    }),
    new CssMinimizerPlugin()
  ]
};

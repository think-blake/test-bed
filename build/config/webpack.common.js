// Reserved for any webpack configuration that should be common between 
// the dev storybook build and production webpack build.
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV !== 'production';

const plugins = [
  new StyleLintPlugin({
    configFile: '.stylelintrc.json',
    context: 'src',
    emitErrors: false,
    failOnError: false,
    files: '**/*.scss',
    fix: true,
    lintDirtyModulesOnly: true,
    quiet: true,
    syntax: 'scss'
  }),
  new MiniCSSExtractPlugin({
    filename: '[name].css',
    chunkFilename: 'bundle-[id].css'
  })
];

const rules = [{
    test: /\.(sa|sc|c)ss$/,
    use: [
      isDev ? 'style-loader' :  MiniCSSExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
}];

module.exports = {
  plugins,
  rules
};

# Think Company Design System Starter

A template for creating design systems with Storybook.

Built with the following:

- [Babel v7](https://github.com/babel/babel)
- [Storybook v6](https://storybook.js.org/)
- [Webpack v5](https://webpack.js.org/)

## 📦 Install

After downloading this repository, install all the package dependencies:

```
npm install
```

Most of the dependencies are only used to develop or compile code and will not be included in the final bundle.

## 🛠 Build

There are a few different build scripts included in this project.

Build the static files for distribution (potentially as an NPM package):

```
npm run build
```

Create the SVG icon sprite based on the icon files located in [`./src/assets/svg`](src/assets/svg):

```
npm run build-icons
```

Build the Storybook library as a static site deployable to a server:

```
npm run build-storybook
```

Generate the Sass variables and mixins based off the design token system:

```
npm run build-tokens
```

Generate template files for a new component using PlopJS

```
npm run generate component-name
```

## 🧰 Develop

Build components in the Storybook development environment:

```
npm start
```

This will open your browser at [http://localhost:6006](http://localhost:6006/)

## 🎨 Format

Lint and format code to standard conventions:

```
npm run lint
```

This runs the code through [ESlint](https://eslint.org/docs/user-guide/getting-started), [Stylelint](https://stylelint.io/user-guide/get-started), and [Prettier](https://prettier.io/docs/en/options.html).

## 🔖 Prefix

The default "tsl-" classname prefix can be updated with a script:

```
npm run prefix <NEW_PREFIX>
```

<br />

## Getting Started

To get a new project up and running, first install the [Think Company Application Starter CLI](https://github.com/thinkcompany/starter-cli#application-starter-cli).

Once you have the CLI tool installed, follow these steps to be up and running in under two minutes:

1. `think new-library`
2. `cd <PROJECT_NAME>`
3. `npm install`
4. `npm run prefix <NEW_PREFIX>`
5. `npm start`

<br />

## File Structure

| File                                                            | Purpose                                                                       |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [.storybook/main.js](.storybook/main.js)                        | Setup Storybook addons                                                        |
| [.storybook/manager.js](.storybook/manager.js)                  | Configure custom Storybook theme                                              |
| [.storybook/preview.js](.storybook/preview.js)                  | Configure global decorators and parameters                                    |
| [.storybook/webpack.config.js](.storybook/webpack.config.js)    | Webpack overrides for Storybook                                               |
| [.eslintrc.js](.eslintrc.js)                                    | [ESlint](https://github.com/eslint/eslint) config settings                    |
| [.gitignore](.gitignore)                                        | Files and directories for Git to ignore                                       |
| [.prettierignore](.prettierignore)                              | Files and directories for Prettier to ignore                                  |
| [.prettierrc.json](.prettierrc.json)                            | [Prettier](https://github.com/prettier/prettier) config settings              |
| [.stylelintrc.json](.stylelintrc.json)                          | [Stylelint](https://github.com/stylelint/stylelint) config settings and rules |
| [babel.config.json](babel.config.json)                          | [Babel](https://babeljs.io/docs/en/configuration) presets and plugins         |
| [combine-svg.js](build/scripts/combine-svg.js)                  | Generate combined SVG sheet from SVG source files                             |
| [LICENSE](LICENSE)                                              | [MIT license](https://choosealicense.com/licenses/mit/) for source code       |
| [package-lock.json](package-lock.json)                          | Keeps track of NPM dependency tree                                            |
| [package.json](package.json)                                    | Contains list of NPM dependencies                                             |
| [postcss.config.js](postcss.config.js)                          | [PostCSS](https://postcss.org/) config settings                               |
| [plopfile.js](plopfile.js)                                      | [PlopJS](https://plopjs.com/) config settings                                 |
| [tokens.js](build/scripts/tokens.js)                            | Generate variable tokens from JSON files                                      |
| [webpack.config.babel.js](build/config/webpack.config.babel.js) | [Webpack](https://webpack.js.org/configuration/) config settings              |
| [webpack.optimization.js](build/config/webpack.optimization.js) | Minification and code splitting options                                       |
| [webpack.plugins.js](build/config/webpack.plugins.js)           | Webpack plugins                                                               |
| [webpack.rules.js](build/config/webpack.rules.js)               | Webpack rules                                                                 |

/**
 * Concatenates a directory of individual SVGs into a single SVG sheet
 * For recommended SVG usage see the docs
 */
/* eslint-disable no-sync */

const fs = require('fs-extra');
const path = require('path');
const SVGSpriter = require('svg-sprite');
const cwd = process.cwd();

/**
 * configure options for svg-sprite
 * see the svg-sprite docs for details
 * https://github.com/jkphl/svg-sprite/blob/master/docs/configuration.md
 */
const config = {
  dest: './',
  shape: {
    // SVG shape related options
    id: {
      // SVG shape ID related options
      separator: '-', // Separator for directory name traversal
      generator: name => `icon-${path.parse(name).name}` // SVG shape ID generator callback
      // pseudo: '~' // File name separator for shape states (e.g. ':hover')/
    },
    dimension: {
      // Dimension related options
      maxWidth: 2000, // Max. shape width
      maxHeight: 2000, // Max. shape height
      precision: 2, // Floating point precision
      attributes: false // Width and height attributes on embedded shapes
    },
    spacing: {
      // Spacing related options
      padding: 0, // Padding around all shapes
      box: 'content' // Padding strategy (similar to CSS `box-sizing`)
    }
  },
  variables: {},
  mode: {
    preview: {
      mode: 'symbol',
      sprite: 'preview-body.html',
      dest: '.storybook/',
      inline: true
    },
    collection: {
      mode: 'symbol',
      sprite: 'icons.svg',
      dest: 'src/assets/svg/',
      inline: true
    }
  }
};

// instantiate svg-sprite
const spriter = new SVGSpriter(config);

const svgList = fs.readdirSync(`${cwd}/src/assets/svg/`);

// Add SVG source files
svgList.forEach(svg => {
  const dir = `${cwd}/src/assets/svg/${svg}`;

  spriter.add(dir, null, fs.readFileSync(dir, { encoding: 'utf-8' }));
});

// Compile the sprite
spriter.compile((error, result) => {
  Object.keys(result).map(version => {
    const { path, contents } = result[version].sprite; // eslint-disable-line no-shadow

    console.log(`writing ${version} to ${result[version].sprite.path}`); // eslint-disable-line no-console
    fs.writeFileSync(path, contents);
  });
});

const fs = require('fs');

const colors = require('../../tokens/colors.json');
const spacing = require('../../tokens/spacing.json');
const zIndex = require('../../tokens/z-index.json');
const type = require('../../tokens/typography.json');
const bordersShadows = require('../../tokens/borders-shadows.json');
const breakpoints = require('../../tokens/breakpoints.json');

const outputDir = './src/styles/settings/variables';

const intro = `// This is a generated file, do not edit directly. Use the 'npm run tokens' command to rebuild. \n\n`;

const genColorTokens = input => {
  let output = intro;

  input.map(item => {
    if (item.variants) {
      item.variants.map(variant => {
        output += `$color-${item.section}-${item.name}-${variant.name}: ${variant.color}; \n`;
        if (item.alias) {
          output += `$color-${item.section}-${item.alias}-${variant.name}: $color-${item.section}-${item.name}-${variant.name}; \n`;

          if (variant.alias) {
            output += `$color-${item.section}-${item.alias}-${variant.alias}: $color-${item.section}-${item.name}-${variant.name}; \n`;
          }
        }

        if (variant.alias) {
          output += `$color-${item.section}-${item.name}-${variant.alias}: $color-${item.section}-${item.name}-${variant.name}; \n`;
        }
      });
    } else {
      output += `$color-${item.section}-${item.name}: ${item.color}; \n`;
      if (item.alias) {
        output += `$color-${item.section}-${item.alias}: $${item.section}-${item.name}; \n`;
      }
    }
  });

  return output;
};

const genSpacingTokens = input => {
  let output = intro;

  Object.keys(input).map(item => {
    input[item].map(subitem => {
      switch (item) {
        case 'inset':
          output += `@mixin spacing-${item}-${subitem} {\n  padding: ${subitem}px;\n} \n\n`;
          break;
        case 'squish':
          output += `@mixin spacing-${item}-${subitem.y}-${subitem.x} {\n  padding: ${subitem.y}px ${subitem.x}px;\n} \n\n`;
          break;
        case 'stack':
        case 'inline':
          output += `$spacing-${item}-${subitem}: ${subitem}px; \n`;
          break;
        default:
          break;
      }
    });
  });

  return output;
};

const genTypeTokens = input => {
  let output = intro;

  Object.keys(input).map((item, index) => {
    if (Array.isArray(input[item])) {
      input[item].map(subitem => {
        switch (item) {
          case 'size':
            output += `$font-size-${subitem}: rem(${subitem}); \n`;
            break;
          case 'weight':
            output += `$font-weight-${subitem}: ${subitem}; \n`;
            break;
          default:
            break;
        }
      });
    } else if (item === 'stack') {
      Object.keys(input[item]).map(subitem => {
        output += `$font-stack-${subitem}: ${input[item][subitem]}; \n`;
      });
    }
    if (index !== Object.keys(input).length - 1) {
      output += `\n`;
    }
  });

  return output;
};

const genZIndexTokens = input => {
  let output = intro;

  Object.keys(input).map(item => {
    output += `$z-index-${item}: ${zIndex[item]}; \n`;
  });

  return output;
};

const genBordersShadowTokens = input => {
  let output = intro;

  Object.keys(input).map((item, index) => {
    Object.keys(input[item]).map(subitem => {
      switch (item) {
        case 'radius':
          output += `$border-radius-${subitem}: ${input[item][subitem]}; \n`;
          break;
        case 'shadow':
          output += `$box-shadow-${subitem}: ${input[item][subitem]}; \n`;
          break;
        case 'border':
          output += `$border-${subitem}: ${input[item][subitem]}; \n`;
          break;
        default:
          break;
      }
    });
    if (index !== Object.keys(input).length - 1) {
      output += `\n`;
    }
  });

  return output;
};

const genBreakpointTokens = input => {
  let output = intro;

  Object.keys(input).map(item => {
    output += `$breakpoint-${item}: ${input[item]}px; \n`;
  });

  return output;
};


fs.writeFile(`${outputDir}/_colors.scss`, genColorTokens(colors), err => {
  if (err) {throw err;}
});

fs.writeFile(`${outputDir}/_spacing.scss`, genSpacingTokens(spacing), err => {
  if (err) {throw err;}
});

fs.writeFile(`${outputDir}/_type.scss`, genTypeTokens(type), err => {
  if (err) {throw err;}
});

fs.writeFile(`${outputDir}/_z-index.scss`, genZIndexTokens(zIndex), err => {
  if (err) {throw err;}
});

fs.writeFile(`${outputDir}/_borders-shadows.scss`, genBordersShadowTokens(bordersShadows), err => {
  if (err) {throw err;}
});

fs.writeFile(`${outputDir}/_breakpoints.scss`, genBreakpointTokens(breakpoints), err => {
  if (err) {throw err;}
});

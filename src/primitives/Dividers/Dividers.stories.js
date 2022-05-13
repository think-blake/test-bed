const config = [
  {
    name: 'Horizontal',
    class: 'tsl-divider--horizontal',
    sass: '@include divider-horizontal'
  },
  {
    name: 'Vertical',
    class: 'tsl-divider--vertical',
    sass: '@include divider-vertical'
  }
];

const wrapGrid = input =>
  `<div class="tsl-doc-grid tsl-doc-grid--list">${input}</div>`;
const blockStyles = input =>
  input.name === 'Vertical' ? 'style="height: 200px;"' : '';
const nameBlock = input =>
  input.name ? `<p><strong>${input.name}</strong></p>` : '';
const classBlock = input =>
  input.class ? `<p><code>.${input.class}</code></p>` : '';
const sassBlock = input =>
  input.sass ? `<p><code>${input.sass}</code></p>` : '';
const cardItem = input => `
  <div class="tsl-doc-grid-item">
    <div class="tsl-doc-card"${blockStyles(input)}>
      <hr class="${input.class}" />
    </div>
    <div class="tsl-doc-footer">
      ${nameBlock(input)}
      ${classBlock(input)}
      ${sassBlock(input)}
    </div>
  </div>
  `;

export const all = () => wrapGrid(config.map(cardItem).join(''));

export const horizontal = () => `<hr class="${config[0].class}" />`;

export const vertical = () =>
  `<div style="display: flex; justify-content: center; height: 500px;"><hr class="${config[1].class}" /></div>`;

export default {
  title: 'Primitives / Dividers',
  parameters: {
    options: {
      showPanel: false
    }
  }
};

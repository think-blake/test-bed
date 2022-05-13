const config = [
  {
    name: 'Card Container Border',
    class: 'tsl-card tsl-card-container--border',
    sass: '@include card-container-border'
  },
  {
    name: 'Card Container Shadow',
    class: 'tsl-card tsl-card-container--shadow',
    sass: '@include card-container-shadow'
  },
  {
    name: 'Card Communication Neutral',
    class: 'tsl-card tsl-card-communication--neutral',
    sass: '@include card-communication-neutral'
  },
  {
    name: 'Card Communication Success',
    class: 'tsl-card tsl-card-communication--success',
    sass: '@include card-communication-success'
  },
  {
    name: 'Card Communication Warning',
    class: 'tsl-card tsl-card-communication--warning',
    sass: '@include card-communication-warning'
  },
  {
    name: 'Card Communication Error',
    class: 'tsl-card tsl-card-communication--error',
    sass: '@include card-communication-error'
  }
];

const wrapGrid = input => `<div class="tsl-doc-grid">${input}</div>`;
const nameBlock = input =>
  input.name ? `<p><strong>${input.name}</strong></p>` : '';
const classBlock = input =>
  input.class ? `<p><code>${input.class}</code></p>` : '';
const sassBlock = input =>
  input.sass ? `<p><code>${input.sass}</code></p>` : '';
const cardItem = input => `
<div class="tsl-doc-grid-item">
  <div class="tsl-doc-card">
    <div class="${input.class}">
      <div class="tsl-doc-card-content"></div>
    </div>
  </div>
  <div class="tsl-doc-footer">
    ${nameBlock(input)}
    ${classBlock(input)}
    ${sassBlock(input)}
  </div>
</div>
`;

export const all = () => wrapGrid(config.map(cardItem).join(''));
export default {
  title: 'Primitives / Cards',
  parameters: {
    options: {
      showPanel: false
    }
  }
};

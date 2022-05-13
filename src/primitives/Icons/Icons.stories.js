const config = [
  {
    name: 'Add',
    id: 'icon-add'
  },
  {
    name: 'Alert',
    id: 'icon-alert'
  },
  {
    name: 'Check',
    id: 'icon-check'
  },
  {
    name: 'Chevron Down',
    id: 'icon-chevron-down'
  },
  {
    name: 'Chevron Left',
    id: 'icon-chevron-left'
  },
  {
    name: 'Chevron Right',
    id: 'icon-chevron-right'
  },
  {
    name: 'Chevron Up',
    id: 'icon-chevron-up'
  },
  {
    name: 'Close',
    id: 'icon-close'
  },
  {
    name: 'File',
    id: 'icon-file'
  },
  {
    name: 'Minus',
    id: 'icon-minus'
  },
  {
    name: 'Search',
    id: 'icon-search'
  },
  {
    name: 'Trash',
    id: 'icon-trash'
  }
];

const icons = list => {
  let response = '<div class="tsl-doc-grid">';

  list.map(item => {
    response += `
    <div class="tsl-doc-grid-item">
      <div class="tsl-doc-card tsl-doc-card--centered">
        <svg class="tsl-icon" width="16" height="16" viewBox="0 0 16 16">
          <title>${item.name}</title>
          <use xlink:href="#${item.id}"></use>
        </svg>
      </div>
    <div class="tsl-doc-footer">
      <p><code>${item.id}</code></p>
    </div>
    </div>`;
  });

  response += '</div>';

  return response;
};

export const all = () => icons(config);
export default {
  title: 'Primitives / Icons'
};

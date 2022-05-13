const styles = {
  Primary: 'primary',
  Secondary: 'secondary',
  Danger: 'danger',
  Link: 'link'
};

const sizes = {
  Large: 'large',
  Medium: 'medium',
  Small: 'small'
};

const linkSizes = {
  Medium: 'medium',
  Small: 'small',
  XSmall: 'xsmall',
  Tiny: 'tiny'
};

const icons = {
  Add: 'icon-add',
  Alert: 'icon-alert',
  Check: 'icon-check',
  ChevronDown: 'icon-chevron-down',
  ChevronLeft: 'icon-chevron-left',
  ChevronRight: 'icon-chevron-right',
  ChevronUp: 'icon-chevron-up',
  Close: 'icon-close',
  File: 'icon-file',
  Minus: 'icon-minus',
  Search: 'icon-search',
  Trash: 'icon-trash'
};

export const All = () => {
  const buttonText = 'Button';
  const iconId = icons.Add;

  // wrapper div for each button example
  const itemWrapper = children => `
    <div class="tsl-doc-grid-item">
      ${children}
    </div>`;

  // iterate over style and size objects to get all button examples
  const textButtonExamples = Object.keys(styles)
    .filter(style => style !== 'Link')
    .map(styleKey =>
      Object.keys(sizes)
        .map(sizeKey =>
          itemWrapper(`
          <div class="tsl-doc-card tsl-doc-card--centered" style="min-height: 55px">
            <button type="button" class="tsl-btn tsl-btn--${styles[styleKey]} tsl-btn--${sizes[sizeKey]}">
              ${buttonText}
            </button>
          </div>
            <div class="tsl-doc-footer">
              <span class="tsl-type-style--bold">Text Button</span>
              <span>style: ${styleKey}</span>
              <span>size: ${sizeKey}</span>
            </div>
          `)
        )
        .join('')
    )
    .join('');

  const iconButtonExamples = Object.keys(styles)
    .filter(style => style !== 'Link')
    .map(styleKey =>
      Object.keys(sizes)
        .map(sizeKey =>
          itemWrapper(`
          <div class="tsl-doc-card tsl-doc-card--centered" style="min-height: 55px">
            <button type="button" class="tsl-btn tsl-btn--icon tsl-btn--${styles[styleKey]} tsl-btn--${sizes[sizeKey]}">
              <svg class="tsl-icon tsl-icon--medium" width="16" height="16" viewBox="0 0 16 16">
                <use xlink:href="#${iconId}"></use>
              </svg>
              <span class="tsl-accessibly-hidden">${buttonText}</span>
            </button>
            </div>
            <div class="tsl-doc-footer">
              <span class="tsl-type-style--bold">Icon Button</span>
              <span>style: ${styleKey}</span>
              <span>size: ${sizeKey}</span>
            </div>
          `)
        )
        .join('')
    )
    .join('');

  const iconTextButtonExamples = Object.keys(styles)
    .filter(style => style !== 'Link')
    .map(styleKey =>
      Object.keys(sizes)
        .map(sizeKey =>
          itemWrapper(`
          <div class="tsl-doc-card tsl-doc-card--centered" style="min-height: 55px">
            <button type="button" class="tsl-btn tsl-btn--icon-text tsl-btn--${styles[styleKey]} tsl-btn--${sizes[sizeKey]}">
              <svg class="tsl-icon tsl-icon--medium" width="16" height="16" viewBox="0 0 16 16">
                <use xlink:href="#${iconId}"></use>
              </svg>
              ${buttonText}
            </button>
            </div>
            <div class="tsl-doc-footer">
              <span class="tsl-type-style--bold">Icon Button With Text</span>
              <span>style: ${styleKey}</span>
              <span>size: ${sizeKey}</span>
            </div>
          `)
        )
        .join('')
    )
    .join('');

  const linkButtonExamples = Object.keys(linkSizes)
    .map(sizeKey =>
      itemWrapper(`
      <div class="tsl-doc-card tsl-doc-card--centered" style="min-height: 55px">
        <button type="button" class="tsl-btn tsl-btn--link tsl-btn--${linkSizes[sizeKey]}">
          ${buttonText}
        </button>
        </div>
        <div class="tsl-doc-footer">
          <span class="tsl-type-style--bold">Link Button</span>
          <span>size: ${sizeKey}</span>
        </div>
      `)
    )
    .join('');

  const buttonExamples = [
    textButtonExamples,
    iconButtonExamples,
    iconTextButtonExamples,
    linkButtonExamples
  ];

  return `<div class="tsl-doc-grid">${buttonExamples.join('')}</div>`;
};

All.parameters = {
  options: {
    showPanel: false
  }
};

const Template = args => {
  const { disabled, label, size, style } = args;
  const styleClass = `tsl-btn--${style}`;
  const sizeClass = `tsl-btn--${size}`;

  return `
    <button type="button" class="tsl-btn ${styleClass} ${sizeClass}" ${
    disabled ? 'disabled' : ''
  }>
      ${label}
    </button>`;
};

export const Text = Template.bind({});

Text.args = {
  style: styles.Primary
};

export const Link = Template.bind({});

Link.args = {
  style: styles.Link
};

Link.argTypes = {
  size: {
    control: 'inline-radio',
    options: linkSizes
  }
};

const IconTemplate = args => {
  const { disabled, hideLabel, icon, label, size, style } = args;
  const iconClass = hideLabel ? 'tsl-btn--icon' : 'tsl-btn--icon-text';

  return `
    <button type="button" class="tsl-btn ${iconClass} tsl-btn--${style} tsl-btn--${size}" ${
    disabled ? 'disabled' : ''
  }>
      <svg class="tsl-icon" width="16" height="16" viewBox="0 0 16 16">
        <use xlink:href="#${icon}"></use>
      </svg>
      ${
        hideLabel
          ? `<span class="tsl-accessibly-hidden">${label}</span>`
          : label
      }
    </button>`;
};

export const Icon = IconTemplate.bind({});

Icon.args = {
  icon: icons.Add,
  style: styles.Primary,
  hideLabel: true
};

Icon.argTypes = {
  icon: {
    control: 'select',
    options: icons
  }
};

export const IconText = IconTemplate.bind({});

IconText.args = {
  icon: icons.Trash,
  style: styles.Danger,
  hideLabel: false
};

IconText.argTypes = {
  icon: {
    control: 'select',
    options: icons
  }
};

export default {
  title: 'Controls & Inputs / Button',
  args: {
    label: 'Button Text',
    size: sizes.Medium,
    disabled: false
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: sizes
    },
    style: {
      control: 'inline-radio',
      options: styles
    }
  }
};

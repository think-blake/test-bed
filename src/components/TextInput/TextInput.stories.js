const sizeOptions = {
  large: 'tsl-form-input--large',
  medium: 'tsl-form-input--medium',
  small: 'tsl-form-input--small'
};

const stateOptions = {
  default: '',
  success: 'success',
  error: 'error'
};

const typeOptions = [
  'text',
  'password',
  'number',
  'search',
  'email',
  'tel',
  'url'
];

/**
 * Returns SVG icon markup based on the provided `state`.
 * Expects `state` to follow the naming conventions of the state classes found in _forms.scss
 * @param {string} state
 */

const stateIcon = state => {
  switch (state) {
    case 'success':
      return '<svg class="tsl-form-state-icon tsl-form-state-icon--success"><use xlink:href="/svg/icons.svg#icon-check"></use></svg>';
    case 'error':
      return '<svg class="tsl-form-state-icon tsl-form-state-icon--error"><use xlink:href="/svg/icons.svg#icon-alert"></use></svg>';
    default:
      return '';
  }
};

const Template = args => {
  const { disabled, errorMessage, label, placeholder, size, state, type } =
    args;
  const stateClass = state ? `tsl-form-field--${state}` : '';

  return `
    <div class="tsl-form-field ${stateClass}">
      <label 
        for="example-text-input"
        class="tsl-form-label"
      >
        ${label}
      </label>
      <input
        type="${type}" 
        class="tsl-form-input ${size}"
        id="example-text-input"
        placeholder="${placeholder}"
        ${disabled ? '\n\tdisabled' : ''}
      >
      ${stateIcon(state)}${
    state === stateOptions.error
      ? `<p class="tsl-form-input-message" role="alert">${errorMessage}</p>`
      : ''
  }
    </div>
  `;
};

export const TextInput = Template.bind({});

TextInput.args = {
  label: 'Text Input',
  placeholder: 'Enter text...',
  disabled: false,
  errorMessage: 'Invalid input',
  size: sizeOptions.medium,
  state: stateOptions.default,
  type: typeOptions[0]
};

export default {
  title: 'Controls & Inputs / Text Input',
  argTypes: {
    size: {
      control: 'inline-radio',
      options: sizeOptions
    },
    state: {
      control: 'inline-radio',
      options: stateOptions
    },
    type: {
      control: 'select',
      options: typeOptions
    }
  }
};

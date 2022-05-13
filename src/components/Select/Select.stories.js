const selectOptions = ['Red', 'Green', 'Blue'];
const sizeOptions = {
  large: 'tsl-form-select--large',
  medium: 'tsl-form-select--medium',
  small: 'tsl-form-select--small'
};

const Template = args => {
  const { disabled, placeholder, label, options, size } = args;

  return `
    <div class="tsl-form-field">
      <label for="example-select" class="tsl-form-label">${label}</label>
      <div class="tsl-form-select ${size}">
        <select
          class="tsl-form-select-element"
          id="example-select"
          ${disabled ? 'disabled' : ''}
        >
        <option value="">${placeholder}</option>
        ${options.map(option => `<option>${option}</option>`).join('\n\t')}
        </select>
      </div>
    </div>
  `;
};

export const Select = Template.bind({});

Select.args = {
  label: 'Select',
  options: selectOptions,
  placeholder: 'Select a color...',
  size: sizeOptions.medium,
  disabled: false
};

export default {
  title: 'Controls & Inputs / Select',
  argTypes: {
    size: {
      control: 'inline-radio',
      options: sizeOptions
    }
  }
};

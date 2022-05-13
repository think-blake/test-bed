import { useEffect } from '@storybook/client-api';

const stateOptions = {
  unchecked: '',
  checked: 'checked',
  indeterminate: 'indeterminate',
  disabled: 'disabled',
  error: 'error'
};

const Template = args => {
  const { errorMessage, label, state } = args;
  const error = state === stateOptions.error;
  const errorClass = error ? 'tsl-form-field--error' : '';

  useEffect(() => {
    if (state === stateOptions.indeterminate) {
      document.getElementById('example-checkbox').indeterminate = true;
    }
  });

  return `
      <div class="tsl-form-field ${errorClass}">
        <input class="tsl-form-input-checkbox" id="example-checkbox" type="checkbox" name="example-checkbox" value="1" ${state} />
        <label class="tsl-form-label" for="example-checkbox">${label}</label>
        ${
          error
            ? `<p class="tsl-form-input-message" role="alert">${errorMessage}</p>`
            : ''
        }
      </div>
      `;
};

export const Checkbox = Template.bind({});

Checkbox.args = {
  label: 'Checkbox',
  state: stateOptions.unchecked,
  errorMessage: 'This field is required.'
};

export default {
  title: 'Controls & Inputs / Checkbox',
  argTypes: {
    state: {
      control: 'inline-radio',
      options: stateOptions
    }
  }
};

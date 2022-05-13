const stateOptions = {
  unchecked: '',
  checked: 'checked',
  disabled: 'disabled',
  error: 'error'
};

const Template = args => {
  const { errorMessage, label, state } = args;
  const error = state === stateOptions.error;
  const stateClass = state ? `tsl-form-field--${state}` : '';

  return `
  <div class="tsl-form-field ${stateClass}">
    <input class="tsl-form-input-radio" id="radio-option" type="radio" name="radio-group" value="1" ${
      !error ? state : ''
    } />
    <label class="tsl-form-label" for="radio-option">${label}</label>
    ${
      error
        ? `<p class="tsl-form-input-message" role="alert">${errorMessage}</p>`
        : ''
    }
  </div>`;
};

export const Radio = Template.bind({});

Radio.args = {
  label: 'Radio',
  state: stateOptions.unchecked,
  errorMessage: 'You must select an option'
};

export default {
  title: 'Controls & Inputs / Radio',
  argTypes: {
    state: {
      control: 'inline-radio',
      options: stateOptions
    }
  }
};

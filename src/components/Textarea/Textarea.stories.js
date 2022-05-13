const stateOptions = {
  default: '',
  error: 'error'
};

const Template = args => {
  const { disabled, errorMessage, label, placeholder, state } = args;
  const stateClass = state ? `tsl-form-field--${state}` : '';

  return `
    <div class="tsl-form-field ${stateClass}">
      <label
        for="example-textarea"
        class="tsl-form-label"
      >
        ${label}
      </label>
      <textarea 
        class="tsl-form-input tsl-form-input--textarea"
        id="example-textarea"
        placeholder="${placeholder}"
        ${disabled ? '\n\tdisabled' : ''}
      ></textarea>
      ${
        state === stateOptions.error
          ? `<p class="tsl-form-input-message" role="alert">${errorMessage}</p>`
          : ''
      }
    </div>`;
};

export const Textarea = Template.bind({});

Textarea.args = {
  label: 'Textarea',
  placeholder: 'Enter message...',
  errorMessage: 'Invalid input',
  state: stateOptions.default,
  disabled: false
};

export default {
  title: 'Controls & Inputs / Textarea',
  argTypes: {
    state: {
      control: 'inline-radio',
      options: stateOptions
    }
  }
};

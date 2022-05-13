const Template = args => {
  const { checked, disabled, label } = args;

  return `
  <div class="tsl-form-field">
    <input 
        class="tsl-form-toggle"
        id="example-toggle"
        type="checkbox"
        value="1"
        ${checked ? 'checked' : ''}
        ${disabled ? 'disabled' : ''}
    />
    <label class="tsl-form-label" for="example-toggle">${label}</label>
  </div>`;
};

export const Toggle = Template.bind({});

export default {
  title: 'Controls & Inputs / Toggle',
  args: {
    label: 'Toggle',
    checked: false,
    disabled: false
  }
};

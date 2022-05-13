
const Template = args => {
  return `<div class="tsl-Header">
    // code goes here
    <h1>Test</h1>
  </div>`;
};

export const Header = Template.bind({});

export default {
  title: 'Components / Header',
  parameters: {
    options: {
      showPanel: false
    }
  }
};
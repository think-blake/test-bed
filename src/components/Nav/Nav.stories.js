
const Template = args => {
  return `<div class="tsl-Nav">
 
  <ul class="tsl-Nav-list">
    <li><a href="#">Home</a></li>
    <li><a href="#">Not Home</a></li>
    <li><a href="#">At the store</a></li>
    <li><a href="#">At Bobby's House</a></li>

    </ul>


  </div>`;
};

export const Nav = Template.bind({});

export default {
  title: 'Components / Nav',
  parameters: {
    options: {
      showPanel: false
    }
  }
};

const Template = args => {
  return `<div class="tsl-Nav">
 
  <ul class="tsl-Nav-list">
  <li class="tsl-Nav-list-logo"><a href="#"><img src="https://i.gifer.com/o8G.gif" alt="a rock" style="width:42px;height:42px;"></a>
    <li class="tsl-Nav-list-item"><a class="tsl-Nav-list-link" href="#">Home</a></li>
    <li class="tsl-Nav-list-item"><a class="tsl-Nav-list-link" href="#">Not Home</a></li>
    <li class="tsl-Nav-list-item"><a class="tsl-Nav-list-link" href="#">At the store</a></li>
    <li class="tsl-Nav-list-item"><a class="tsl-Nav-list-link" href="#">At Bobby's House</a></li>

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
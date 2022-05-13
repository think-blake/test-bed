module.exports = plop => {
  plop.setGenerator('component-story', {
    description: 'Create a new Component story',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'append',
        path: '../../src/components/index.scss',
        pattern: /(\/\/ IMPORT FILES HERE)/g,
        template: "@import '{{ pascalCase name }}/{{ pascalCase name }}';"
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: './BasicSetupComponent/BasicSetupComponent.stories.js.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
        templateFile: './BasicSetupComponent/BasicSetupComponent.scss.hbs'
      }
    ]
  });
};

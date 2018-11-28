'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => [ // eslint-disable-line arrow-body-style
        'Stateless Function',
        'React.PureComponent',
        'React.Component',
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'ExampleComponent',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/class.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../../packages/{{properCase name}}/index.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{properCase name}}/tests/index.spec.js',
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{properCase name}}/package.json',
        templateFile: './component/package.json.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{properCase name}}/README.md',
        templateFile: './component/README.md.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../packages/{{properCase name}}/index.stories.js',
        templateFile: './component/storybook.js.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};

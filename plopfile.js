module.exports = plop => {
  plop.setPrompt('fuzzypath', require('inquirer-fuzzy-path'))

  plop.setHelper('multiline', text => {
    return text.split(';').map(line => `${require('os').EOL}${line.trim()}`)
  })

  const commonComponentPrompts = [
    {
      type: 'input',
      name: 'name',
      message: 'Component name'
    },
    {
      type: 'list',
      name: 'type',
      message: 'Select type',
      choices: ['components', 'common']
    },
    {
      type: 'fuzzypath',
      name: 'path',
      message: 'Select a target directory for your component:',
      rootPath: 'src',
      default: 'components/',
      suggestOnly: false,
      pathFilter: (isDirectory, nodePath) =>
        isDirectory &&
        (nodePath.includes('components') || nodePath.includes('common')),
      when: answers => answers.type === 'custom'
    }
  ]

  plop.setGenerator('classComponentCommon', {
    description: 'Class component (/common)',
    prompts: commonComponentPrompts,
    actions: answers => {
      const path = answers.path ? answers.path : 'src/{{type}}'

      return [
        {
          type: 'add',
          path: `${path}/{{name}}/{{name}}.tsx`,
          templateFile: './templates/component/classComponentCommon.hbs'
        },
        {
          type: 'add',
          path: `${path}/{{name}}/package.json`,
          templateFile: './templates/component/package.json.hbs'
        }
      ]
    }
  })

  plop.setGenerator('classComponentComponent', {
    description: 'Class component (/component)',
    prompts: commonComponentPrompts,
    actions: answers => {
      const path = answers.path ? answers.path : 'src/{{type}}'

      return [
        {
          type: 'add',
          path: `${path}/{{name}}/{{name}}.tsx`,
          templateFile: './templates/component/classComponentComponent.hbs'
        },
        {
          type: 'add',
          path: `${path}/{{name}}/package.json`,
          templateFile: './templates/component/package.json.hbs'
        }
      ]
    }
  })

  plop.setGenerator('pageComponent', {
    description: 'Page component',
    prompts: commonComponentPrompts,
    actions: answers => {
      const path = answers.path ? answers.path : 'src/{{type}}'

      return [
        {
          type: 'add',
          path: `${path}/{{name}}/{{name}}.tsx`,
          templateFile: './templates/component/pageComponent.hbs'
        },
        {
          type: 'add',
          path: `${path}/{{name}}/package.json`,
          templateFile: './templates/component/package.json.hbs'
        }
      ]
    }
  })

  plop.setGenerator('reduxState', {
    description: 'New Redux state',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'State name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/state/{{name}}/{{name}}.actions.tsx',
        templateFile: './templates/redux/actions.hbs'
      },
      {
        type: 'add',
        path: 'src/state/{{name}}/{{name}}.reducer.tsx',
        templateFile: './templates/redux/reducer.hbs'
      },
      {
        type: 'add',
        path: 'src/state/{{name}}/{{name}}.saga.tsx',
        templateFile: './templates/redux/sagas.hbs'
      }
    ]
  })

  plop.setGenerator('type', {
    description: 'TypeScript Type',
    prompts: [
      {
        type: 'list',
        name: 'typeGroup',
        message: 'Type group:',
        choices: [
          'public',
          'partner',
          'auth',
          'sms',
          'marketing',
          'subscriptions',
          'members',
          'locations',
          'registrations',
          'clients',
          'nearly',
          'notifications',
          'user',
          'integrations',
          'invoices'
        ]
      },
      {
        type: 'input',
        name: 'typeName',
        message: 'Type name:'
      },
      {
        type: 'input',
        name: 'props',
        message: 'Type properties:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/types/{{typeGroup}}/{{typeName}}.type.tsx',
        templateFile: './templates/type/type.hbs'
      }
    ]
  })
}

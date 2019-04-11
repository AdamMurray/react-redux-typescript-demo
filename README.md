# React Redux Typescript Demo

- [React Redux Typescript Demo](#react-redux-typescript-demo)
  - [Recommended Development Environment](#recommended-development-environment)
  - [What do you need before cloning?](#what-do-you-need-before-cloning)
  - [What should you do after cloning the repo?](#what-should-you-do-after-cloning-the-repo)
  - [Code Formatting](#code-formatting)
  - [Code Generator](#code-generator)
  - [Testing](#testing)
  - [Linting](#linting)
  - [Keeping Dependencies Up-To-Date](#keeping-dependencies-up-to-date)
  - [Changing Webpack or Babel config](#changing-webpack-or-babel-config)
  - [Important Notes](#important-notes)
    - [Default props issue](#default-props-issue)
    - [FProps interface](#fprops-interface)
    - [Typescript](#typescript)

## Recommended Development Environment

For ideal results, grab the latest version of [Visual Studio Code](https://code.visualstudio.com/download)
for your operating system. (You can use any editor you like, but you'll have to
make sure that you have all the equivalent VSCode extensions and settings installed
for yourself, as well as making sure that your editor config respects formatting
rules set out in the project).

Once you've got a copy of VSCode, install the following extensions:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - JavaScript linting tooling
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Great tool for tracking git history in VSCode
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Automated code formatting
- [TSLint](https://github.com/Microsoft/vscode-typescript-tslint-plugin) - TypeScript linting tooling

## What do you need before cloning?

Before cloning this repo, make sure that you have the following software (at the version indicated):

| Software | Version  |
| :------: | :------: |
| Node     | ^11.13.0 |
| Npm      | ^6.7.0   |
| Yarn     | ^1.15.2  |

## What should you do after cloning the repo?

Once you've got the code, run the following commands from your CLI:

```bash
# Install package.json dependencies into /node_modules
> yarn

# Run the application locally
> yarn start
# ...the app will now be available at http://localhost:3000/
```

## Code Formatting

One of the most annoying things about any project is a PR full of comments
telling you to change the style of your code.

Well f*** that. Prettier to the rescue!

Prettier is an automated code formatting tool. We supply it with some rules
(via [`tslint.json`](./tslint.json), [`.prettierrc`](.prettierrc), and [`.prettierignore`](.prettierignore)), along with some tweaks
to VSCode's settings (see: [`./.vscode/settings.json`](./.vscode/settings.json)), and it does all the code
formatting work for us.

Nice.

## Code Generator

We're using the [`plop`](https://github.com/amwmedia/plop) library in this project to allow us to quickly generate boilerplate for commonly used components.

Plop is a 'micro-generator framework' which allows us to create custom generators, tailored to our needs.

We currently have generators for the following components: types, redux state, React class components, React stateless functional components.

Run `yarn generator` to see all available generators.

## Testing

// TODO: work out best testing strategy and update info here

`yarn test` command runs all tests with Jest.

## Linting

TSLint doesn't support runtime rules in the watch mode, so to see all linting errors you should run `yarn lint`.

See: https://github.com/palantir/tslint/issues/3155

## Keeping Dependencies Up-To-Date

You need to ensure that all `npm` dependencies are kept up-to-date.

Use the command `yarn generator` to check for which dependencies require updating.
This command will display each out-of-date dependency and show the latest version number.

To update a dependency to the latest version, use the following command:

```bash
# Upgrade packages individually by name to the latest version
> yarn upgrade --latest [package-name], ...

# OR...

# Upgrade all packages to the latest version
> yarn upgrade --latest
```

## Changing Webpack or Babel config

The Webpack and Babel configs are hidden by the `react-scripts` package. It's desired to avoid ejecting the config at all cost. Some modifications are still possible using `react-app-rewired`, which is being configured inside the `config-overrides.js` file.

## Important Notes

### Default props issue

Currently TypeScript doesn't support well defaultProps, therefore they need to have a separate type:

```ts
interface Props {
  initialCount?: number
}

interface DefaultProps {
  initialCount: number
}

class Component extends BaseComponent<Props> {
  static defaultProps: DefaultProps = {
    initialCount: 0
  }
}
```

See:
https://github.com/piotrwitek/react-redux-typescript-guide#--with-default-props
and
https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11640

### FProps interface

Because of a TSLint issue in the `react-unused-props-and-state` rule, we call the stateless functional component's props interface as `FProps` to preserve type checking. Although SFC are rarely being used because of their re-rendering (prefer class PureComponent instead).

See: https://github.com/Microsoft/tslint-microsoft-contrib/issues/339#issuecomment-413647144

### Typescript

The Typescript integration is based on the following guide:

https://github.com/piotrwitek/react-redux-typescript-guide

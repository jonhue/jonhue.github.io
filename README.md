# Jonas Hübotter

Student, developer, open-source activist.

**https://jonhue.github.io**

### Development

This project uses [asdf](https://github.com/asdf-vm/asdf) as version manager and [Yarn](https://github.com/yarnpkg/yarn) as JavaScript package manager.

Dependencies are listed in the [.tool-versions](.tool-versions) file.

1. Clone this repository

    `$ git clone ssh://git@github.com/jonhue/jonhue.github.io.git`

2. Install dependencies

    ```
    $ asdf install
    $ yarn install
    ```

5. Start development server

    `$ yarn start`

### Testing

```
$ yarn run stylelint
$ yarn run eslint
```

### Deployment

Every push to `development` is automatically deployed. You can manually deploy with:

```
$ yarn build
$ yarn deploy
```

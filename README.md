# Project Scaffolding CLI

A simple CLI to manage templates and scaffold any project quickly and easily (Uses degit inside).

## Description

It's a simple command-line interface (CLI) utility tool to store some of your templates/starter-projects in the cli's storage and use them with friendly names. For example: You can store `KrishGarg/vite-vanillajs-tailwind-template#main` as `vite-vanilla-tailwind` and then whenever you need it, you can use `scaff make vite-vanilla-tailwind new_app_name` !

## Getting Started

### Installing

**Note: Not yet published.**

To install just use:

```shell
# NPM
npm i -g project-scaffold

# Yarn
yarn global add project-scaffold
```

### Executing program

**Note: Not all commands are yet finished.**

After it is installed, you can use the cli.

- To scaffold a project with the nickname:

  ```shell
  scaff make <nickname> [project name = "new_app"]
  ```

- To list all the default templates it comes with:

  ```shell
  scaff list
  ```

- To add a template in the list:

  ```shell
  scaff add <nickname> <degit url>
  ```

  Degit URL would be of form: `username/repo-name#branch`

- To remove an existing template:

  ```shell
  scaff remove <nickname>
  ```

## Help

```shell
scaff -h
```

## Authors

- [@KrishGarg](https://github.com/KrishGarg)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

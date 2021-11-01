#!/usr/bin/env node

const { program } = require("commander");
const chalk = require("chalk");

// Commands' imports
const make = require("./commands/make");

program
  .version("0.0.1")
  .description("A utility tool to scaffold some projects quickly.");

// Commands

program
  .command("make <templateName> [projectName]")
  .description(
    `To scaffold a project. To see all available projects, use the ${chalk.blue.bold(
      "list"
    )} command.`
  )
  .action(make);

program.parse(process.argv);

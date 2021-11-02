const chalk = require("chalk");
const degit = require("degit");
const fs = require("fs");
const path = require("path");

const conf = require("../config");

const log = console.log;

const make = (templateName, projectName = "new_app") => {
  const availableProjects = conf.get("available-projects");

  if (!(templateName in availableProjects)) {
    throw new Error(
      `${chalk.red.bold(
        "This project isn't in the available scripts."
      )}\n${chalk.yellow.bold(
        `Maybe it's a type? Check with the ${chalk.blue.bold("list")} command.`
      )}`
    );
  }

  if (fs.existsSync(projectName) && projectName !== ".") {
    log(
      chalk.red.bold(
        `A folder with the given name ${chalk.yellow.bold(
          "(" + projectName + ")"
        )} already exists!`
      )
    );
    return;
  }

  if (projectName === "." && !isEmpty(process.cwd())) {
    log(
      chalk.red.bold(
        "The current working directory isn't empty. Either clear it out or scaffold the project in a new directory."
      )
    );
    return;
  }

  if (projectName !== ".") {
    fs.mkdirSync(projectName);
  }

  const emitter = degit(availableProjects[templateName], {
    cache: true,
    verbose: true,
  });

  emitter.clone(path.resolve(process.cwd(), projectName)).then(() => {
    log(
      chalk.blue.bold(
        `Successfully cloned to ${chalk.cyan.bold(
          projectName !== "." ? projectName : "the current directory."
        )}`
      )
    );
  });
};

function isEmpty(absolutePath) {
  const contents = fs.readdirSync(absolutePath);
  return !contents.length;
}

module.exports = make;

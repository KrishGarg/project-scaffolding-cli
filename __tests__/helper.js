const path = require("path");
const exec = require("child_process").exec;
const fs = require("fs");

/**
 * @param {Array} args The arguments, instead of seperating by spaces, make every phrase individual string of the array.
 * @param {String} cwd The current working directory
 * @returns { { code: number, error: string, stdout: string, stderr: string } }
 */
exports.cli = (args, cwd) => {
  return new Promise((resolve) => {
    exec(
      `node ${path.resolve("./index")} ${args.join(" ")}`,
      { cwd },
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr,
        });
      }
    );
  });
};

const defaultAppName = "new_app";

exports.DEFAULT_APP_NAME = defaultAppName;

exports.cleanUp = (folderName = defaultAppName, dontCheckIfExists = false) => {
  if (!fs.existsSync(folderName) && !dontCheckIfExists) {
    throw new Error("The given folder doesn't exist.");
  } else {
    fs.rmSync(folderName, { recursive: true });
  }
};

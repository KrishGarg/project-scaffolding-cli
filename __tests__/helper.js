let path = require("path");
let exec = require("child_process").exec;

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

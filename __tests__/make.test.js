const { cli, DEFAULT_APP_NAME, cleanUp } = require("./helper");
const fs = require("fs");

describe("test make command", () => {
  const testAppName = "test_app_name";

  afterAll(() => {
    if (fs.existsSync(DEFAULT_APP_NAME)) {
      cleanUp(DEFAULT_APP_NAME, true);
    }
    if (fs.existsSync(testAppName)) {
      cleanUp(testAppName, true);
    }
  });

  it("displays help for make", async () => {
    const result = await cli(["make", "-h"], ".");
    expect(result.stdout.length).toBeGreaterThan(0);
    expect(
      result.stdout.includes(
        "To scaffold a project. To see all available projects, use the list command."
      )
    ).toBeTruthy();
    expect(result.code).toBe(0);
  });

  it("throw error if template not exists", async () => {
    const result = await cli(["make", "non-existing-template"], ".");

    expect(result.stdout.length).toBe(0);
    expect(result.stderr.length).toBeGreaterThan(0);
    expect(result.error).toBeTruthy();
    expect(result.code).not.toBe(0);
  });

  it("scaffolds the correct project with the given template name (no app name)", async () => {
    // Its a default template.
    const result = await cli(["make", "vite-vanilla-tailwind"]);
    expect(fs.existsSync(DEFAULT_APP_NAME)).toBeTruthy();

    cleanUp();

    console.log(`no app one \n${JSON.stringify(result)}`);
    expect(result.stdout.length).toBeGreaterThan(0);
    expect(result.code).toBe(0);
    expect(result.error).toBeFalsy();
    expect(result.stderr).toBeFalsy();
  });

  it("scaffolds the correct project with the given template name (app name given)", async () => {
    // Its a default template.
    const result = await cli(["make", "vite-vanilla-tailwind", testAppName]);
    expect(fs.existsSync(testAppName)).toBeTruthy();

    cleanUp(testAppName);

    expect(result.stdout.length).toBeGreaterThan(0);
    expect(result.code).toBe(0);
    expect(result.error).toBeFalsy();
    expect(result.stderr).toBeFalsy();
  });
});

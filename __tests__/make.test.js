const { cli } = require("./helper");
const fs = require("fs");

describe("test make command", () => {
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
});

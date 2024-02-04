import baseConfig from "../src/index";

describe("Config Snapshot", () => {
  test("Configuration remains as expected", async () => {
    expect(baseConfig).toMatchSnapshot();
  });
});

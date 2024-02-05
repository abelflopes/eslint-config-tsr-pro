import baseConfig from "../src";

describe("eslint config", () => {
  it("configuration remains as expected", () => {
    expect(baseConfig).toMatchSnapshot();
  });
});

import { ESLint } from "eslint";
import baseConfig from "../src";
import path from "path";

describe("eslint config", () => {
  it("should be a compatible configuration object", () => {
    expect(() => {
      // eslint-disable-next-line no-new -- in this case its necessary for testing
      new ESLint({
        baseConfig,
        useEslintrc: true,
      });
    }).not.toThrow();
  });

  it("should not throw errors", async () => {
    const instance = new ESLint({
      baseConfig,
      useEslintrc: true,
    });

    const res = await instance.lintText("", {
      filePath: path.resolve(process.cwd(), "./src/index.ts"),
    });

    expect(res.flatMap((i) => i.messages)).toHaveLength(0);
  });

  it("should not have much deprecated rules", async () => {
    const instance = new ESLint({
      baseConfig,
      useEslintrc: true,
    });

    const res = await instance.lintText("", {
      filePath: "./index.ts",
    });

    expect(res.map((i) => i.usedDeprecatedRules).length).toBeLessThanOrEqual(5);
  });
});

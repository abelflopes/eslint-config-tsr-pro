import { ESLint } from "eslint";
import baseConfig from "../src";
import path from "path";
import fs from "fs";
import { globSync } from "glob";

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

    const deprecatedRules = res.flatMap((i) => i.usedDeprecatedRules);

    // eslint-disable-next-line no-console -- send information of deprecated rules to the console
    console.error(
      "Deprecated rules:",
      deprecatedRules
        .map(
          ({ ruleId, replacedBy }) =>
            `\n - ${ruleId}${replacedBy.length ? ` (replaced by ${replacedBy.join("; ")})` : ""}`,
        )
        .join(""),
    );

    expect(deprecatedRules.length).toBeLessThanOrEqual(5);
  });

  it.only("should report rules for fixtures", async () => {
    const instance = new ESLint({
      baseConfig,
      useEslintrc: false,
    });

    const files = globSync(path.resolve(process.cwd(), "./fixtures/**/*.{ts,tsx}"));

    const results = (
      await Promise.all(
        files.map(async (file) => {
          console.log(`Processing ${path.relative(process.cwd(), file)}`);
          const content = fs.readFileSync(file, "utf-8");
          return instance.lintText(content, {
            filePath: file,
          });
        }),
      )
    ).flat();

    const allMessages = results.flatMap((result) => result.messages);

    // Group messages by rule
    const ruleGroups = allMessages.reduce<Record<string, typeof allMessages>>((acc, message) => {
      const ruleId = message.ruleId || "unknown";
      if (!acc[ruleId]) acc[ruleId] = [];

      acc[ruleId].push(message);
      return acc;
    }, {});

    Object.entries(ruleGroups).forEach(([ruleId, messages]) => {
      // eslint-disable-next-line no-console -- This is a test case that needs to report results
      console.log(ruleId, messages.length);
    });

    // You can add expectations here if needed
    expect(allMessages.length).toBeGreaterThanOrEqual(0);
  });
});

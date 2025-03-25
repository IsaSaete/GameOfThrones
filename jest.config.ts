import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  rootDir: "src",
  resolver: "ts-jest-resolver",
  verbose: true,
  testEnvironment: "jsdom",
  ...createDefaultPreset(),
};

export default jestConfig;

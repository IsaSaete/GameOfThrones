import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  rootDir: "src",
  verbose: true,
  testEnvironment: "jsdom",
  ...createDefaultPreset(),
};

export default config;

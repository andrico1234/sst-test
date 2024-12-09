/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-test",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          profile: 'personal'
        }
      },
    };
  },
  async run() {
    await import("./infra/storage");
    await import("./infra/api");
  },
});

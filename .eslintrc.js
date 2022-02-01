module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "import/no-extraneous-dependencies": ["error", {devDependencies: true}], // if imported into code, must be listed in dependencies
    "import/prefer-default-export": "off", // default exports are annoying
    "no-console": "warn", // should be using logger for output, but ok to have when debugging
    "class-methods-use-this": "off", // not compatible with NestJS. Also gets overriden when using with edang-react package.
    "no-plusplus": "off",
    "max-classes-per-file": "off", // Sometimes like to have more than one class in a single file
    "no-underscore-dangle": "off", // Allow underscore in method names which indicate private
    "guard-for-in": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:jest/recommended",
        "plugin:promise/recommended",
        "plugin:prettier/recommended",
      ],
      parser: "@typescript-eslint/parser",
      env: {
        node: true,
        jest: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        // makes verbose ugly code when using async/await
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: false,
          },
        ],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "variable",
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
          },
          {
            selector: "function",
            format: ["camelCase", "PascalCase"],
          },
          {
            selector: "typeLike",
            format: ["PascalCase"],
          },
        ],
      },
      overrides: [
        {
          files: ["**/__tests__/**"],
          rules: {
            "@typescript-eslint/unbound-method": "off", // allow unbound methods for expectation calls in tests
            "jest/unbound-method": "error",
            "no-restricted-syntax": "off", // allow for loops
            "no-await-in-loop": "off", // allow awaits in loops
          },
        },
      ],
    },
  ],
};

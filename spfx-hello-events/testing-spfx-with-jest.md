Go to [SPFx Hello Events README](./README.md)

# Testing a SharePoint Framework Project with Jest

## Prerequisites

### Install Packages

Go to the folder where the `package.json` of the project is located and install the following development packages.

`cd c:\Dev\GitHub\leberns\sp-hello-events\spfx-hello-events`

```
npm install --save-dev jest ts-jest @types/jest
npm install --save-dev react-test-renderer
npm install --save-dev sinon
npm install --save-dev identity-obj-proxy
npm install --save-dev jest-html-reporters
```

* `jest` is the test runner, basically it finds your tests, executes them and shows the results
* `ts-jest` allows Jest to test projects with TypeScript. This package is needed as SPFx uses TypeScript
* `@types/jest` TypeScript type definitions of Jest
* `react-test-renderer` creates JavaScript objects based on the components being tested. The tests you write check then these objects.
* `sinon` allows mocking
* `identity-obj-proxy` is needed to allow the loading of modules like scss. The following error appears while running the tests if it is not installed:
`could not locate module ./HelloEvents.module.scss (mapped as identity-obj-proxy`
* `jest-html-reporters` build a HTML result with the test results

These packages are just needed if using Enzyme for the tests (just in case):

```
npm install --save-dev enzyme enzyme-adapter-react-16 jest-environment-enzyme jest-enzyme
npm install --save-dev @types/enzyme-adapter-react-16
```

### Update package.json

Update the scripts object and add the jest configuration as follows.

```
"scripts": {
    ...
    "test": "jest",                   // run tests (use it instead of gulp test)
    "test-watch": "jest --watch",     // to let jest keep watching
    "verify-tests": "jest --coverage" // report code coverage
  },
  ...
  "jest": {
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "testMatch": [
      "**/src/**/*.test.+(ts|tsx|js)"
    ],
    "collectCoverage": true,
    "coverageReporters": [
      "json",
      "lcov",
      "text",
      "cobertura"
    ],
    "coverageDirectory": "<rootDir>/jest",
    "moduleNameMapper": {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    "reporters": [
      "default",
      ["jest-html-reporters", {
        "publicPath": "./jest",
        "filename": "test-results.html"
      }]
    ],
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    }
  }
```

A few of the jest configurations are explained in the following sections.

#### Reporters

Jest allows the testing reports to be generated in distinct formats.

* `default` -> outputs to the console
* `jest-html-reporters` -> outputs to a html file

It is possible to use others formatters, for example for [JUnit](https://www.npmjs.com/package/jest-junit). In this case the respective NPM package has to be installed on the project.

#### Adjust Test Coverage Thresholds

Depending on project needs it might not be relavant to achieve a 100% test coverage.

Under `coverageThreshold` it is possible to define how much percent of the code that has to be covered by the tests so that they pass.

Adjust thresholds in the configurations of jest as seen in this example (here, 50%):

```
    "coverageThreshold": {
      "global": {
        "branches": 50,
        "functions": 50,
        "lines": 50,
        "statements": 50
      }
    }
```

### Update tsconfig.json

Add `"esModuleInterop": true,` to `compilerOptions`, for example:

```
    {
      "extends": "./node_modules/@microsoft/rush-stack-compiler-2.7/includes/tsconfig-web.json",
      "compilerOptions": {
        "esModuleInterop": true,
        "target": "es5",
```

This is needed to avoid errors while trying to load the TestRenderer into the test files.

## Writing Tests

* Go to a folder where there is source code to test (for TDD, the source code is developed after the tests are written)

* Create a test specification file: according to the jest configuration that is a file ending with `.test.ts`, `.test.tsx` or `.test.js`

* Write the test, use as reference the code in this repositiory or see further reading, below.

## Running the Tests

`npm test`

## Testing Examples and Further Reading

- [React Testing in 2019](https://codeburst.io/revisiting-react-testing-in-2019-ee72bb5346f4)
- [Testing React Components: The Mostly Definitive Guide (ft. react-test-renderer)](https://www.valentinog.com/blog/testing-react/)
- [Test Renderer](https://reactjs.org/docs/test-renderer.html)
- [Unit Test your SharePoint Framework solution with Jest](https://blog.velingeorgiev.com/unit-test-your-sharepoint-framework-solution-with-jest)
- [SPFx / React Jest Testing: Examples](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-jest-testing/src/webparts/iceCreamShop/test)

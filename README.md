# wds-react

The `wds-react` project is a library of Planetary Data System (PDS) web components based on the Horizon Design System (HDS).

This web component library relies on the CSS/SASS styles defined in the [PDS Web Design System (WDS) repository](https://github.com/nasa-pds/wds). The `wds-react` library imports the styles defined in `wds` and applies them to the web components. Then, `wds-react` exports CSS and other assets so that a client app can consume the library by importing the needed CSS and web components.

## Prerequisites

- Node.js: https://nodejs.org/en (We recommend the use of [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to easily switch between versions of Node.js)
- Git installed: https://git-scm.com
- A code editor installed. We prefer Visual Studio Code: https://code.visualstudio.com

## Getting Started with Development

1. Use Git to clone the WDS repository and the component library. Switch branches to develop.
    - https://github.com/NASA-PDS/wds
    - https://github.com/NASA-PDS/wds-react

2. If using `nvm`, be sure to activate the proper version of Node.js by running the following command from the root folder of where the `wds` and `wds-react` repos are cloned.

    ```
    nvm use
    ```

    Example:

    ```
    wds-react % nvm use
    Found '/some/path/to/wds-react/.nvmrc' with version <lts/iron>
    Now using node v20.16.0 (npm v10.8.1)
    wds-react % 
    ```

3. Build wds.

    - Open a terminal in the root of the wds repository. 
    - Run `npm clean-install` (See notes about differences between `npm install` and `npm clean-install`)
    - Run `npm run build:css`
    - Run `npm run build:icons`

4. Set up wds-react.

    - Open a terminal in the root of the wds-react repository. 
    - Run `npm clean-install` (See notes about differences between `npm install` and `npm clean-install`)
    - Run `npm run build-icons`
    - Run `npm run build-lib-watch`

5. Set up an application to test the packages. (optional)

    - Run `npm create vite@latest`
    - Follow the prompts. Enter a project name, choose React, choose Typescript or JavaScript. (JavaScript is simpler and faster to test).
    - Follow the message. `cd <project_name>`, `npm install`, `npm run dev`
    - Open a browser and go the the link shown in the message. By default it is http://localhost:5173/, but it can change if that port is already being used.

6. Link wds, wds-react, and the application that needs these packages.

    - In the wds terminal run `npm link`
    - In the wds-react terminal run `npm link @nasapds/wds`
    - In the wds-react terminal run `npm link`
    - In the tester app terminal run `npm link @nasapds/wds-react`

    ___Note about using `npm link`___: This is only needed when working with the `wds` and `wds-react` packages _locally_.

7. Import library and styles into the tester app.

    - Open the main entry point Typescript/JavaScirpt file for your application in a code editor. For the application created above, open the `src/App.jsx` or `src/App.tsx` file.
    - Add the imports:

      CSS:
      ```
      import "@nasapds/wds-react/dist/cjs/wds.css";
      ```

      Package:
      ```
      import { HelloWorld } from "@nasapds/wds-react";
      ```

8. Use components.

    - In the return block add the line `<div><HelloWorld /></div>`

9. Verify component is there and styled.

    - Open the http://localhost:5173/ page or equivalent and then verify that the hello world message is displayed.

## Deployments

Deployments are managed automatically by using GitHub's release features. By creating a new release that contains a tag in the format, `vX.Y.Z`, the publishing workflow will be automatically triggered and a new version of the package will be deployed.

## Notes

### NPM Package Nanagement 

We utilize many third-party packages from the NPM package repository. To better manage these packages, we need to better understand the two relevant npm cli commands, `npm install` and `npm clean-install`.

#### `npm install` (aka `npm i`)

This command should be used for the installation of new packages or those specified in `package.json`. It will generate or update a file named `package-lock.json`. This command aims to resolve the dependencies of the packages being installed. The dependency resolution may introduce changes with the versions of the dependencies needing to be installed, which is why the `package-lock.json` is updated after running `npm install`. Because of the differences in the dependecy versions this command introducees, unexepected behaviors or errors with the application could be introduced which will need to be resolved.

#### `npm clean-install` (aka `npm ci`)

This command should be used to produce deterministic builds. _This is especially critical for deployments or running tests_. To use `npm clean-install`, a project ***must*** have one of two files, `package-lock.json` or `npm-shrinkwrap.json` which is used to inform the command of the specific packages and the version of those packages to install _without_ performing any dependency resolution.

## References

### Design References
- PDS WDS Specifications: https://www.figma.com/file/QqXo2XsUrKVu7KVjOHVeHk/PDS-Design-Library
- Horizon Design System (HDS) Specifications — https://website.nasa.gov/horizon-design-system/
- The current NASA (https://www.nasa.gov) and Science@NASA (https://science.nasa.gov/) sites demonstrate component usage for HDS.

### Technical References

#### NPM

- https://docs.npmjs.com/cli/v9/commands/npm-install
- https://docs.npmjs.com/cli/v9/commands/npm-ci
- https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json
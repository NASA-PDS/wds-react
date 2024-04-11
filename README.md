# wds-react

The wds-react project is a library of pds components based on the Horizon Design System.

The process overview is we have our css/sass styles in the WDS repository. The library then imports those styles and applies them to the components. That css is then exported so that the client app that uses the library will import both the components and the css.

**Prerequisites:**
- Have nodejs installed: https://nodejs.org/en
- Have git installed: https://git-scm.com
- Have a code editor installed. We prefer visual studios code: https://code.visualstudio.com

## Getting Started
1. Use Git to clone the WDS repository and the component library. Switch branches to develop. 
  - https://github.com/NASA-PDS/wds
  - https://github.com/NASA-PDS/wds-react
2. Build wds.
  - Open a terminal in the root of the wds repository. 
  - Run `npm run install`
  - Run `npm run build:css`
  - Run `npm run build:icons`
3. Set up wds-react
  - Open a terminal in the root of the wds-react repository. 
  - Run `npm run install`
  - Run `npm run build-icons`
  - Run `npm run build-lib-watch`
4. Set up tester app.
  - Run `npm create vite@latest`
  - Follow the prompts. Enter a project name, choose react, choose typescript or javascript. (javascript is simpler and faster to test).
  - Follow the message. `cd <project_name>`, `npm install`, `npm run dev`
  - Open a browser and go the the link shown in the message. By default it is http://localhost:5173/ but it can change if that port is already being used.
5. Link wds, wds-react and the tester app to each other.
  - In the wds terminal run `npm link`
  - In the wds-react terminal run `npm link @nasapds/wds`
  - In the wds-react terminal run `npm link`
  - In the tester app terminal run `npm link @nasapds/wds-react`
6. Import library and styles into the tester app
  - Open the tester app in a code editor.
  - Open the src/App.jsx file.
  - At the top of the page add the imports:
    - `import @nasapds/wds-react/dist/cjs/wds.css`
    - `import {HelloWorld} from '@nasapds/wds-react`
7. Use components.
  - In the return block add the line `<div><HelloWorld/></div>`
8. Verify component is there and styled.
  - Open the http://localhost:5173/ page or equivalent and then verify that the hello world message is displayed.
    
## Links
- PDS WDS Specifications: https://www.figma.com/file/QqXo2XsUrKVu7KVjOHVeHk/PDS-Design-Library
- HDS Specifications: https://website.nasa.gov/hds/
- Current Nasa Site has working components for HDS: https://www.nasa.gov


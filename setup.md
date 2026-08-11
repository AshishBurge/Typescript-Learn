# Getting Started with TypeScript

### Node.js
Node.js provides the runtime environment required to execute TypeScript and JavaScript code. It comes with npm (Node Package Manager), which you need to download TypeScript.

To check if Node.js is already installed on your system, run command:
```
node -v
```
To check npm version, run:
```
npm -v
```

*If Node.js is not installed, download and install it from the official [Node.js website](https://nodejs.org/).*

### TypeScript Compiler (tsc)

The TypeScript compiler translates (transpiles) TypeScript code into standard JavaScript code so it can run in any browser or Node.js environment.
```
npm install -g typescript
```
Verify installing of typescript with below command:
```
tsc -v
```

### VS Code Editor

Visual Studio Code is the recommended code editor, providing built-in support, syntax highlighting, and debugging tools for TypeScript.
Install it from official website - https://code.visualstudio.com/

### Typescript Executor
tsx (TypeScript Execute) is a blazing-fast TypeScript and ESM (ECMAScript Modules) runner for Node.js. Powered by esbuild, it lets you execute .ts files directly without needing manual compilation, configuration files, or build steps.

#### How to Install
To use it anywhere on your machine, install it globally using npm (requires Node.js):
```
npm install -g tsx
tsx --version OR tsx -v
```
*(Alternatively, save it to a specific project as a dev dependency using npm install -D tsx)*
### How To run code :
#### Way1: Recommended
To run code simply pass your TypeScript file to the command:
```
tsx first.ts
```
*(If you prefer not to install it at all, you can run files on the fly using npx tsx filename.ts)*

#### Way2: Not Recommended
We can run .ts file using node.js command. But it uses "Type Stripping". It literally erases your TypeScript annotations (replacing them with blank spaces to keep line numbers intact) and executes the remaining plain JavaScript.That is, it will not do type checking and also it can't run typescript features like enum and namespaces.
```
node filename.ts
``` 
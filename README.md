# AngularExamTraining-FE

This project is a training front-end application built with Angular 20 and Node.js 22.19. It demonstrates modern Angular features, including zoneless change detection and signals.

It is meant to train and study for the Angular Certifiation Exam, paired with the Backend repository (AngularExamTraining-BE).

Feel free to make changes, fork, create pull requests for custom proprietary branches.

## Features

- Angular 20 with strict TypeScript settings
- Zoneless change detection (OnPush strategy)
- Example of signals and computed/linked signals
- Simple counter component with increment/decrement logic

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22.19 or compatible)
- [Angular CLI](https://angular.dev/tools/cli) (v20.2.2 or compatible)

### Installation

Install dependencies:

```sh
npm install
```

### Development Server

Start the development server:

```sh
npm run start
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser. The app will reload automatically if you change any source files.

### Building

To build the project for production:

```sh
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute unit tests via [Karma](https://karma-runner.github.io):

```sh
npm test
```

### Code Scaffolding

Generate a new component:

```sh
ng generate component component-name
```

For more schematics, run:

```sh
ng generate --help
```

## VS Code Integration

Recommended extension: `angular.ng-template` (see [.vscode/extensions.json](.vscode/extensions.json)).

## Additional Resources

- [Angular Documentation](https://angular.dev/docs)
- [Angular CLI Reference](https://angular.dev/tools/cli)

---

This project is for educational and training purposes, under MIT License.

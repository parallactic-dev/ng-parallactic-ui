# Prallactic UI

## Code scaffolding

Run `ng generate component component-name --project parallactic-ui` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project parallactic-ui`.
> Note: Don't forget to add `--project parallactic-ui` or else it will be added to the default project in your `angular.json` file. 

## Build Library

Run `npm run build_lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Pack Library

Run `npm run npm_pack` to pack your builded library. This runs `npm pack` and creates a .tgz package file in the `dist/` directory.

## Publishing

After building your library with `npm run build_lib` (or `ng build parallactic-ui`), run `npm run publish_lib` or go to the dist folder `cd dist/parallactic-ui` and run `npm publish`.

# daisyui-v3-to-v4-codemods

A collection of codemods for upgrading [DaisyUI](https://daisyui.com) from v3 to v4

## Usage

To run a specific codemod from this project, you would run the following:

```
npx daisyui-v3-to-v4-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add daisyui-v3-to-v4-codemods
daisyui-v3-to-v4-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [add-uppercase-to-btn](transforms/add-uppercase-to-btn/README.md)
* [tab-modifiers](transforms/tab-modifiers/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`

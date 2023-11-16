# tab-modifiers


## Usage

```
npx daisyui-v3-to-v4-codemods tab-modifiers path/of/files/ or/some**/*glob.js

# or

yarn global add daisyui-v3-to-v4-codemods
daisyui-v3-to-v4-codemods tab-modifiers path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js tab-modifiers path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/tab-modifiers/__testfixtures__/basic.input.js)</small>):
```js
<div className="tabs">
  <a className="tab tab-bordered">Tab 1</a>
  <a className="tab tab-bordered tab-active">Tab 2</a>
  <a className="tab tab-bordered">Tab 3</a>
</div>;

```

**Output** (<small>[basic.output.js](transforms/tab-modifiers/__testfixtures__/basic.output.js)</small>):
```js
<div className="tabs tabs-bordered">
  <a className="tab">Tab 1</a>
  <a className="tab tab-active">Tab 2</a>
  <a className="tab">Tab 3</a>
</div>;

```
<!--FIXTURES_CONTENT_END-->
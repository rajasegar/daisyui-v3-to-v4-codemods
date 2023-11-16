
# add-uppercase-to-btn


## Usage

```
npx daisyui-v3-to-v4-codemods add-uppercase-to-btn path/of/files/ or/some**/*glob.js

# or

yarn global add daisyui-v3-to-v4-codemods
daisyui-v3-to-v4-codemods add-uppercase-to-btn path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js add-uppercase-to-btn path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [advanced](#advanced)
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="advanced">**advanced**</a>

**Input** (<small>[advanced.input.js](transforms/add-uppercase-to-btn/__testfixtures__/advanced.input.js)</small>):
```js
function Button() {
  return (
    <div>
      <button className="btn"></button>
      <button className="btn btn-secondary"></button>
      <button className="btn btn-primary uppercase"></button>
      <p name="myp"></p>
    </div>
  );
}

```

**Output** (<small>[advanced.output.js](transforms/add-uppercase-to-btn/__testfixtures__/advanced.output.js)</small>):
```js
function Button() {
  return (
    <div>
      <button className="btn uppercase"></button>
      <button className="btn btn-secondary uppercase"></button>
      <button className="btn btn-primary uppercase"></button>
      <p name="myp"></p>
    </div>
  );
}

```
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/add-uppercase-to-btn/__testfixtures__/basic.input.js)</small>):
```js
<button className="btn"></button>
```

**Output** (<small>[basic.output.js](transforms/add-uppercase-to-btn/__testfixtures__/basic.output.js)</small>):
```js
<button className="btn uppercase"></button>
```
<!--FIXTURES_CONTENT_END-->

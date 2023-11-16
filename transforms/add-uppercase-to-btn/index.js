// const jsc = require('jscodeshift-collections');
module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  // j.registerCollections(jsc);

  const root = j(file.source);
  const body = root.get().value.program.body;

  root
    .find(j.JSXAttribute, {
      name: {
        name: 'className'
      }
    })
    .forEach((path) => {
      const classList = path.value.value.value.split(' ');
      // console.log(path.value.value.value)
      if (!classList.includes('uppercase') && classList.includes('btn')) {
        classList.push('uppercase');
        path.value.value.value = classList.join(' ');
      }
    });

  return root.toSource();
};

module.exports.parser = 'babel';

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const body = root.get().value.program.body;

  const tabModifierClasses = [
    'tab-lifted',
    'tab-bordered',
    'tab-lg',
    'tab-md',
    'tab-sm',
    'tab-xs'
  ];

  let classFound = '';

  root
    .find(j.JSXAttribute, {
      name: {
        name: 'className'
      }
    })
    .forEach((path) => {
      let classList = path.value.value.value.split(' ');
      // Remove the modifier class
      tabModifierClasses.forEach((c) => {
        if (classList.includes(c)) {
          classFound = c;
          classList = classList.filter((x) => x !== c);
          // Identify the parent and new modifier class
          const parentEl = path.parent.parent.parent.value.openingElement;

          const parentAttrs = parentEl.attributes;
          const hasTabs = parentAttrs.find((a) => a.value.value === 'tabs');
          if (hasTabs) {
            const attr = hasTabs.value.value.split(' ');
            attr.push(classFound.replace('tab', 'tabs'));
            hasTabs.value.value = attr.join(' ');
          }
        }
      });

      path.value.value.value = classList.join(' ');
    });

  return root.toSource();
};

module.exports.type = 'js';

module.exports.parser = 'babel';

const componentGenerator = require('./component/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}')); // eslint-disable-line
};

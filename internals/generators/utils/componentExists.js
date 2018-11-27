const fs = require('fs');
const path = require('path');

const pageComponents = fs.readdirSync(
  path.join(__dirname, '../../../packages'),
);

/**
 * Keep this commented until we decide if we want our connected
 * components to be called containers
 */
// const pageContainers = fs.readdirSync(
//   path.join(__dirname, '../../../containers'),
// );
// const components = pageComponents.concat(pageContainers);

function componentExists(comp) {
  return pageComponents.indexOf(comp) >= 0;
}

module.exports = componentExists;

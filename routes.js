const routes = require('next-routes');

module.exports = routes()
  .add('index', '/')
  .add('collections', '/collections', 'collections')
  .add('collectionGenus', '/collections/:genus', 'collections')
  .add('collectionCategory', '/collections/:genus/:category', 'collections');

(function() {
  'use strict';

  angular
    .module('webapp')
    .config(routerConfig)
    .controller('RouterController', RouterController);

  /** @ngInject */
  function routerConfig($componentLoaderProvider) {
    $componentLoaderProvider.setTemplateMapping(function(name) {
      return 'app/' + name + '/' + name + '.html';
    });
  }

  /** @ngInject */
  function RouterController($router) {
    $router.config([
      { path: '/', component: 'main' },
      { path: '/about', component: 'about' },
      { path: '/join', component: 'join' },
      { path: '/contact', component: 'contact' },
      { path: '/blog', component: 'blog' }
    ]);
  }

})();

(function() {
  'use strict';

  angular
    .module('webapp')
    .config(routerConfig)
    .controller('RouterController', RouterController)
    .controller('HeaderController', HeaderController);

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
      { path: '/team', component: 'team' },
      { path: '/join', component: 'join' },
      { path: '/contact', component: 'contact' },
      { path: '/blog', component: 'blog' },
      { path: '/collective', component: 'collective' },
      { path: '/consulting', component: 'consulting' },
      { path: '/about', component: 'about' }
    ]);
  }
  /** question for chris: where should this actually be 
   *http://stackoverflow.com/questions/16199418/how-do-i-implement-the-bootstrap-navbar-active-class-with-angular-js */
  function HeaderController($scope, $location) 
  { 
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  }

})();

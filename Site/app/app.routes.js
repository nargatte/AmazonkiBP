appModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/components/stronaGlowna/stronaGlownaView.html',
        controller: 'stronaGlownaController'
      }, null)
  }]);

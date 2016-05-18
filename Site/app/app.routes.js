appModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/components/stronaGlowna/stronaGlownaView.html',
        controller: 'stronaGlownaController'
      }, null)
      .when('/status', {
        templateUrl: '/app/components/status/statusView.html',
        controller: 'statusController'
      }, null)
      .when('/sprawozdanie', {
        templateUrl: '/app/components/sprawozdanie/sprawozdanieView.html',
        controller: 'sprawozdanieController'
      }, null)
      .when('/oNas', {
        templateUrl: '/app/components/oNas/oNasView.html',
        controller: 'oNasController'
      }, null)
      .when('/linki', {
        templateUrl: '/app/components/linki/linkiView.html',
        controller: 'linkiController'
      }, null)
      .when('/kontakt', {
        templateUrl: '/app/components/kontakt/kontaktView.html',
        controller: 'kontaktController'
      }, null)
      .when('/hymnAmazonek', {
        templateUrl: '/app/components/hymnAmazonek/hymnAmazonekView.html',
        controller: 'hymnAmazonekController'
      }, null)
  }]);

appModule.controller('mainController', function($scope, $location, anchorSmoothScroll) {
    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };

    $scope.gotoElement = function(eID) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);

    };

  })
  .directive("scroll", function($window) {
    return function(scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
        if (this.pageYOffset >= 55) {
          console.log('Scrolled below header.');

          scope.headerAnimation = 'navbar-amazonki';

          var myEl = angular.element(document.querySelector('#navBar'));
          // myEl.removeClass('navbar-amazonki');
          // setTimeout(function() {
          //   myEl.addClass('navbar-amazonki-animation');
          // }, 0.00001);

        } else {
          console.log('Header is in view.');

          scope.headerAnimation = '';

          var myEl = angular.element(document.querySelector('#navBar'));

          // myEl.removeClass('navbar-amazonki-animation');
          // setTimeout(function() {
          //   myEl.addClass('navbar-amazonki');
          // }, 0.6);

        }
        scope.$apply();
      });
    };
  });

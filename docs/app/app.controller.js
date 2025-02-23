appModule.controller('mainController', function($scope, $location, anchorSmoothScroll) {
  $scope.ifShowStatut = false;
  $scope.ifNotShowStatut = true;

    $scope.gotoElement = function(eID) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);

    };

    $scope.showStatut = function() {
      $scope.ifShowStatut = true;
      $scope.ifNotShowStatut = false;
      window.scrollTo(0, 0);
    };
    $scope.hideStatut = function() {
      $scope.ifShowStatut = false;
      $scope.ifNotShowStatut = true;
      setTimeout(
        function(){
          anchorSmoothScroll.scrollTo('oNas');
        }, 0.1);

    };

  })
  .directive("scroll", function($window) {
    return function(scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
        if (this.pageYOffset >= 55) {
          // console.log('Scrolled below header.');

          scope.headerAnimation = 'navbar-amazonki';

          var myEl = angular.element(document.querySelector('#navBar'));

        } else {
          // console.log('Header is in view.');

          scope.headerAnimation = '';

          var myEl = angular.element(document.querySelector('#navBar'));

        }
        scope.$apply();
      });
    };
  });

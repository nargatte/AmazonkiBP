appModule.controller('mainController', function($scope, $location, anchorSmoothScroll) {
  $scope.ifShowStatut = false;
  $scope.ifNotShowStatut = true;
    $scope.map = {
      center: {
        latitude: 52.03423083137626,
        longitude: 23.110715071749624
      },
      zoom: 15
    };
    $scope.title = "trochę tekstu";

    $scope.marker = {
      id: 1,
      coords: {
        latitude: 52.03423083137626,
        longitude: 23.110715071749624
      },
      options: {
        draggable: false,
        labelContent: '<div style="color:#ff3385; font-size:10px; background: rgba(0, 0, 0, 0.7); border-radius: 5px; padding:4px;">' +
          'Bialskopodlaskie </br> Stowarzyszenie </br> "Amazoneki"</div>',
        labelAnchor: '40 -5',
        labelClass: 'marker-labels',
        labelVisible: true
      }
    };

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

appModule.controller('mainController', function ($scope, $rootScope) {
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        $scope.scrollAnimation = function(obj) {
            obj.preventDefault();
            var goto = angular.element(obj.currentTarget).attr('href');

            $('html, body').animate({
                scrollTop: $(goto).offset().top
            }, 500);
        };

    })
    .directive("scroll", function($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                if (this.pageYOffset >= 50) {
                    console.log('Scrolled below header.');

                    scope.headerAnimation = true;

                    var myEl = angular.element(document.querySelector('#navBar'));
                    myEl.removeClass('navbar-amazonki');
                    setTimeout(function () {
                        myEl.addClass('navbar-amazonki-animation');
                    }, 0.0000000001);

                } else {
                    console.log('Header is in view.');

                    scope.headerAnimation = false;

                    var myEl = angular.element(document.querySelector('#navBar'));

                    myEl.removeClass('navbar-amazonki-animation');
                    setTimeout(function () {
                        myEl.addClass('navbar-amazonki');
                    }, 0.0000000001);

                }
                scope.$apply();
            });
        };
    });

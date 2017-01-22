appModule.controller('mainController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.scrollAnimation = function(obj) {
            obj.preventDefault();
            var goto = angular.element(obj.currentTarget).attr('href');

            $('html, body').animate({
                scrollTop: $(goto).offset().top
            }, 500);
        };

    }])
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
                    }, 0.001);
                    
                } else {
                    console.log('Header is in view.');

                    scope.headerAnimation = false;

                    var myEl = angular.element(document.querySelector('#navBar'));

                    myEl.removeClass('navbar-amazonki-animation');
                    setTimeout(function () {
                        myEl.addClass('navbar-amazonki');
                    }, 0.001);
                    
                }
                scope.$apply();
            });
        };
    });
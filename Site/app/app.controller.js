appModule.controller('mainController', ['$scope', function($scope) {
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
                    var myEl = angular.element(document.querySelector('#navBar'));
                    myEl.addClass('navbar-amazonki-animation').removeClass('navbar-amazonki');
                } else {
                    console.log('Header is in view.');
                    var myEl = angular.element(document.querySelector('#navBar'));
                    myEl.addClass('navbar-amazonki').removeClass('navbar-amazonki-animation');
                }
                scope.$apply();
            });
        };
    });

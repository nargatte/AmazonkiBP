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
                    var myEl = angular.element(document.querySelector('.navbar-amazonki'));
                    myEl.addClass('navbar-amazonki-animation');
                    // add navbar class with background
                } else {
                    console.log('Header is in view.');
                    var myEl = angular.element(document.querySelector('.navbar-amazonki'));
                    myEl.removeClass('navbar-amazonki-animation');
                    // remove navbar class
                }
                scope.$apply();
            });
        };
    });

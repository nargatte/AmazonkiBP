appModule.controller('mainController', ['$scope', function($scope) {
  $scope.scrollAnimation = function(obj) {
    obj.preventDefault();
    var goto = angular.element(obj.currentTarget).attr('href');

    $('html, body').animate({
        scrollTop: $(goto).offset().top
    }, 500);
  };
}]);

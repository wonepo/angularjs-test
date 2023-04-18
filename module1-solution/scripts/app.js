(function(){
    //http://wonepo.github.io/angularjs-test/
    "use strict";

    angular.module("LunchCheck",[])
    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope){
        
        $scope.message = "";
        $scope.check = function () {

            let text = $scope.message.trim();
            
            if(text != "") {
                let i = text.split(',').length;

                if(i<=3) {
                    $scope.result = "Enjoy!";
                } else {
                    $scope.result = "Too much!";
                }
            }else{
                $scope.result = "Please enter data first" ;
            }
            
        }
    }
})();
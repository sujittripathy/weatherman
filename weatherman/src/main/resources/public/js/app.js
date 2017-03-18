angular.module("weatherman-module",[])
		.controller("MainController", function($scope,$http)
			{
				$scope.getWeather = function(){
						$http.get('/weather/v1/city/'+$scope.city+'/'+$scope.unit)
							.then(function(result,error){
								$scope.response = result.data;
								$scope.error = error;
						 });
				}					
			});

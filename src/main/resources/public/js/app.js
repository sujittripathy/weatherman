angular.module("weatherman-module",[])
		.controller("MainController", function($scope,$http)
			{
			    $scope.onSubmit = function(valid){
			        if(valid){
			                            console.log("Form Submitted");
			                            getWeather();

			        }else{
			                            console.log("Invalid Form Submitted");

			        }
			    };
				getWeather = function(){
				console.log($scope.formModel);
						$http.get('/weather/v1/city/'+$scope.formModel.city+'/'+$scope.formModel.unit)
							.then(function(result,error){
								$scope.response = result.data;
								$scope.error = error;
						 });
				}					
			});

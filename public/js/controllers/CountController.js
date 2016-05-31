app.controller('CountCtrl', function($scope, $interval){
	$scope.actualTime = 0;
	var limitTimer, interval, stop;
	$scope.start = function(timer){
		timer = parseInt(timer);
		if(typeof timer != 'undefined' && timer > 0){
			if(!stop){
				limitTimer = timer;
			}
			startCount(limitTimer);
		}
	}

	$scope.pause = function(){
		if(typeof interval != 'undefined'){
			cancelCount();
		}
	}

	$scope.stop = function(){
		limitTimer = 0;
		$scope.actualTime = 0;
		stop = false;
		cancelCount();
	}

	function startCount(timer){
		interval = $interval(function(){
				$scope.actualTime += 1;
				if($scope.actualTime >= timer){
					$interval.cancel(interval);
				}
		}, 1000);
	}

	function cancelCount(){
		$interval.cancel(interval);
	}
});
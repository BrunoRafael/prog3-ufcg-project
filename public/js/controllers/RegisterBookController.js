app.controller('RegisterBookCtrl', function($scope, $mdDialog, BookService){
	$scope.close = function(){
		$mdDialog.cancel();
	}

	$scope.save = function(book){
		console.log(book);
		BookService.save(book);
	}
});
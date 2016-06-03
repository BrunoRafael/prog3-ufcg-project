app.controller('CommentCtrl', function($rootScope, $scope, $mdDialog, BookService, data){

	$scope.close = function(){
		$mdDialog.cancel();
	};

	$scope.save = function(ev, comment){
		comment.bookId = data.book._id;
		BookService.addComment(comment).then(function(){
			$scope.comments.unshift(comment);
		}).catch( function(json){
			$scope.close();
			$mdDialog.show(
					$mdDialog.alert()
							.parent(angular.element(document.querySelector('#popupContainer')))
							.title('Erro')
							.textContent(json.data.msg)
							.targetEvent(ev)
							.ok('Fechar')
			);
		});
	};


	BookService.getAllComments(data.book._id).then(function(json){
		$scope.comments = json.data;
		$scope.$applyAsync();
	});

	$scope.removeCommentCallback = function(book){
		for(var i in $scope.books){
			if(book._id == $scope.books[i]._id){
				$scope.books.splice(i, 1);
				$scope.$applyAsync();
				break;
			}
		}
	};

	$rootScope.$on('commentSaved', function(status,json){
		for(var i in json) {
			$scope.books.unshift(json[i].data);
		}
	});

	$rootScope.$on('commentUpdated', function(status, array){
		for(var i in array){
			for(var j in $scope.books){
				if(array[i].data._id == $scope.books[j]._id) {
					$scope.books[j] = array[i].data;
					$scope.$applyAsync();
				}
			}
		}
	});
});
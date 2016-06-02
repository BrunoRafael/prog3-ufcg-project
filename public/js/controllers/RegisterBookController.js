app.controller('RegisterBookCtrl', function($rootScope, $scope, $mdDialog, BookService, data){
	$scope.close = function(){
		$mdDialog.cancel();
	};

	$scope.book = data.book ? data.book : {};

	$scope.save = function(ev, book){
		console.log(book);
		var bookCopy = angular.copy(book);
		if( Object.prototype.toString.call( bookCopy.authors ) !== '[object Array]' ) {
			bookCopy.authors = bookCopy.authors.split(',');
		}
		for(var i in bookCopy.authors){
			if(bookCopy.authors[i].trim() ==  ""){
				bookCopy.authors.splice(i, 1);
			}
			bookCopy.authors[i] = bookCopy.authors[i].trim();
		}
		data.execute(bookCopy).then( function() {
			$scope.close();
			$mdDialog.show(
					$mdDialog.alert()
							.parent(angular.element(document.querySelector('#popupContainer')))
							.title('Sucesso!')
							.textContent('Informações salvas com sucesso.')
							.targetEvent(ev)
							.ok('Fechar'));
			$rootScope.$broadcast('bookSaved', [bookCopy]);
		}).catch( function(exception){
			$scope.close();
			$mdDialog.show(
					$mdDialog.alert()
							.parent(angular.element(document.querySelector('#popupContainer')))
							.title('Erro')
							.textContent('Não foi possível salvar os dados.')
							.targetEvent(ev)
							.ok('Fechar')
			);
		});
	}
});
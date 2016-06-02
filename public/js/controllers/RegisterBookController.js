app.controller('RegisterBookCtrl', function($rootScope, $scope, $mdDialog, BookService){
	$scope.close = function(){
		$mdDialog.cancel();
	};

	$scope.save = function(ev, book){
		console.log(book);
		var bookCopy = angular.copy(book);
		bookCopy.authors = bookCopy.authors.split(',');
		for(var i in bookCopy.authors){
			if(bookCopy.authors[i].trim() ==  ""){
				bookCopy.authors.splice(i, 1);
			}
			bookCopy.authors[i] = bookCopy.authors[i].trim();
		}
		BookService.save(bookCopy).then( function() {
			$scope.close();
			$mdDialog.show(
					$mdDialog.alert()
							.parent(angular.element(document.querySelector('#popupContainer')))
							.title('Sucesso!')
							.textContent('Livro salvo com sucesso.')
							.targetEvent(ev)
							.ok('Fechar'));
			$rootScope.$broadcast('bookSaved', [book]);
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
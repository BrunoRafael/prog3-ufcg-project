app.controller('RegisterBookCtrl', function($rootScope, $scope, $mdDialog, BookService){
	$scope.close = function(){
		$mdDialog.cancel();
	};

	$scope.save = function(ev, book){
		console.log(book);
		book.authors = book.authors.split(',');
		for(var i in book.authors){
			if(book.authors[i].trim() ==  ""){
				book.authors.splice(i, 1);
			}
			book.authors[i] = book.authors[i].trim();
		}
		BookService.save(book).then(function() {
			$scope.close();
			$mdDialog.show(
					$mdDialog.alert()
							.parent(angular.element(document.querySelector('#popupContainer')))
							.title('Sucesso!')
							.textContent('Livro salvo com sucesso.')
							.targetEvent(ev)
							.ok('Fechar'));
			$rootScope.$broadcast('bookSaved', [book]);
		}).catch(function(){
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
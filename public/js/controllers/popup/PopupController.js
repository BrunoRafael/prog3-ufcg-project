app.controller('PopupCtrl', function($scope, $mdDialog, BookService){

	$scope.showConfirm = function(ev, bookId, removeBookCallback) {
	    var confirm = $mdDialog.confirm()
          .title('Deseja realmente remover esse livro?')
          .textContent('O livro será removido e não poderá ser recuperado')
          .targetEvent(ev)
          .ok('Confirmar')
          .cancel('Cancelar');

    $mdDialog.show(confirm).then(function() {
      console.log('removed!');
      BookService.remove(bookId).then(function(id){
        console.log(id);
          removeBookCallback(bookId);
      }).catch(function(exception){
          console.log('error');
        });

    }, function() {
      console.log('canceled!');
    });
  };

  $scope.showAddBookForm = function(ev){
    $mdDialog.show({
      controller: 'RegisterBookCtrl',
      templateUrl: '../../../views/templates/form-template.html',
      parent: angular.element(document.body),
      targetEvent: ev
    });
  };
});
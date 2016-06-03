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
          BookService.remove(bookId).then(function(json){
            console.log(json);
            removeBookCallback(json.data.data);
          }).catch(function(exception){
              console.log(exception.message);
          });

    }, function() {
      console.log('canceled!');
    });
  };

    /*
     locals: {
     book: $scope.items
     },
     */
    $scope.showAddBookForm = function(ev){
        $mdDialog.show({
            controller: 'RegisterBookCtrl',
            templateUrl: '../../../views/templates/form-template.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            locals:{
               data:{
                   book: undefined,
                   execute: BookService.save
               }
            }
        });
    };

    $scope.showUpdateBook = function(ev, book, callback){
        $mdDialog.show({
            controller: 'RegisterBookCtrl',
            templateUrl: '../../../views/templates/form-template.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            locals:{
                data:{
                    book: book,
                    execute : BookService.update
                }
            }
        });
    };
});
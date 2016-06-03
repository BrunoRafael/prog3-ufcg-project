app.controller('PopupCtrl', function($scope, $rootScope, $mdDialog, BookService){

	$scope.showConfirm = function(ev, bookId, removeBookCallback) {
        var confirm = $mdDialog.confirm()
            .title('Deseja realmente remover esse livro?')
            .textContent('O livro será removido e não poderá ser recuperado')
            .targetEvent(ev)
            .ok('Confirmar')
            .cancel('Cancelar');


        $mdDialog.show(confirm).then(function () {
            console.log('removed!');
            BookService.remove(bookId).then(function (json) {
                console.log(json);
                removeBookCallback(json.data.data);
            }).catch(function () {
                console.log(exception.message);
            });

        }, function () {
            console.log('canceled');
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
                   execute: BookService.save,
                   callback: function(json) {
                       $mdDialog.cancel();
                       showFormPopup(ev, json);
                       $rootScope.$broadcast('bookSaved', [json.data]);
                   }
               }
            }
        });
    };

    $scope.showUpdateBook = function(ev, book){
        $mdDialog.show({
            controller: 'RegisterBookCtrl',
            templateUrl: '../../../views/templates/form-template.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            locals:{
                data:{
                    book: angular.copy(book),
                    execute : BookService.update,
                    callback: function(json) {
                        $mdDialog.cancel();
                        showFormPopup(ev, json);
                        $rootScope.$broadcast('bookUpdated', [json.data]);
                    }
                }
            }
        });
    };

    $scope.showComments = function(ev, book){
        $mdDialog.show({
            controller: 'CommentCtrl',
            templateUrl: '../../../views/templates/comments-view.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            locals:{
                data:{
                    book: angular.copy(book),
                    execute : BookService.update,
                    callback: function(json) {
                        $mdDialog.cancel();
                        showFormPopup(ev, json);
                        $rootScope.$broadcast('bookUpdated', [json.data]);
                    }
                }
            }
        });
    };

    function showFormPopup(ev, json){
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .title('Sucesso!')
                .textContent(json.data.msg)
                .targetEvent(ev)
                .ok('Fechar'));
    }
});
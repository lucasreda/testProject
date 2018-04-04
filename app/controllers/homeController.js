app.controller('homeController', function($scope) {

    $scope.showAdicionar =false;
    $scope.fecharBotao = false;
    $scope.exibirBotao = true;
    $scope.buttonAdd = function(){
        $scope.showAdicionar = true;
        $scope.fecharBotao = true;
        $scope.exibirBotao = false;
    }

    $scope.fecharAdd = function(){
        $scope.showAdicionar = false;
        $scope.fecharBotao = false;
        $scope.exibirBotao = true;
    }

	    $scope.item = {};
        $scope.itens = [
            {nome: 'Carlos Roberto', email: 'email@teste.com', mensagem: 'Lorem Ipsum' },
            {nome: 'Ana Figueiredo', email: 'meumail@gmail.com', mensagem: 'Lorem Ipsum'}
        ];
    
        $scope.adicionaItem = function () {
            
            

            $scope.itens.push({nome: $scope.item.nome, email: $scope.item.email, mensagem: $scope.item.mensagem});
            $scope.item.nome = $scope.item.email = '';
            $scope.fecharAdd();

            toastr.success("Item adicionado com sucesso.");
        };
    
    
        

});
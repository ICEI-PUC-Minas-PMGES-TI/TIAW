document.addEventListener('DOMContentLoaded', function () {
    exibirCadastros();
});

function exibirCadastros() {
    var cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    var listaCadastros = document.getElementById('listaCadastros');

    listaCadastros.innerHTML = '';

    cadastros.forEach(function (cadastro, index) {
        var listItem = document.createElement('li');

        listItem.textContent = 'Nome: ' + cadastro.nome + ', Telefone: ' + cadastro.telefone;

        var deleteButton = document.createElement('a');
        deleteButton.textContent = 'X';
        deleteButton.onclick = function() {
            apagarCadastro(index);
        };

        listItem.appendChild(deleteButton);

        listaCadastros.appendChild(listItem);
    });
}

function apagarCadastro(index) {
    var cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    cadastros.splice(index, 1);

    localStorage.setItem('cadastros', JSON.stringify(cadastros));

    exibirCadastros();
}

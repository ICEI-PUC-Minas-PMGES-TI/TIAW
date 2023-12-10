function salvarCadastro() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    cadastros.push({
        nome: nome,
        telefone: telefone
    });
    localStorage.setItem('cadastros', JSON.stringify(cadastros));
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}

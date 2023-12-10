// Funcionalidade de escolher temas
const selectedButtons = [];

function handleButtonClick(buttonId, tema) {
    const button = document.getElementById(buttonId);
    if (selectedButtons.includes(buttonId)) {
        // Desselecionar o botão
        button.style.backgroundColor = '';
        const index = selectedButtons.indexOf(buttonId);
        if (index > -1) {
            selectedButtons.splice(index, 1);
        }
    } else if (selectedButtons.length < 3) {
        // Selecionar o botão
        button.style.backgroundColor = 'lightyellow';
        selectedButtons.push(buttonId);
    }
}

document.getElementById('button1').addEventListener('click', () => handleButtonClick('button1', 'Esportes'));
document.getElementById('button2').addEventListener('click', () => handleButtonClick('button2', 'Redes Sociais'));
document.getElementById('button3').addEventListener('click', () => handleButtonClick('button3', 'Viagens'));
document.getElementById('button4').addEventListener('click', () => handleButtonClick('button4', 'Filmes e Séries'));
document.getElementById('button5').addEventListener('click', () => handleButtonClick('button5', 'Música'));
document.getElementById('button6').addEventListener('click', () => handleButtonClick('button6', 'Comida'));
document.getElementById('button7').addEventListener('click', () => handleButtonClick('button7', 'Hobbies e Passatempos'));
document.getElementById('button8').addEventListener('click', () => handleButtonClick('button8', 'Jogos de Videogame'));
document.getElementById('button9').addEventListener('click', () => handleButtonClick('button9', 'Livros'));
document.getElementById('button10').addEventListener('click', () => handleButtonClick('button10', 'Moda'));
document.getElementById('button11').addEventListener('click', () => handleButtonClick('button11', 'Animais'));
document.getElementById('button12').addEventListener('click', () => handleButtonClick('button12', 'Carros'));
document.getElementById('button13').addEventListener('click', () => handleButtonClick('button13', 'Cultura Pop'));
document.getElementById('button14').addEventListener('click', () => handleButtonClick('button14', 'Memes e Internet'));
document.getElementById('button15').addEventListener('click', () => handleButtonClick('button15', 'Festas e Eventos'));
document.getElementById('button16').addEventListener('click', () => handleButtonClick('button16', 'Vida Noturna e Entretenimento'));


document.getElementById('salvar').addEventListener('click', () => {
    const resultado = document.getElementById('resultado');
    const temasSelecionados = selectedButtons.map(buttonId => {
        const button = document.getElementById(buttonId);
        return button.getAttribute('data-tema');
    });
    resultado.textContent = `Temas selecionados: ${temasSelecionados.join(', ')}.`;
});

// Funcionalidade de filtrar nomes
function searchNames() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    var nameList = document.getElementById('nameList');
    var names = nameList.getElementsByTagName('li');

    for (var i = 0; i < names.length; i++) {
        var name = names[i].innerText.toLowerCase();
        if (name.includes(searchValue)) {
            names[i].style.display = 'block';
        } else {
            names[i].style.display = 'none';
        }
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        searchNames();
    }
}
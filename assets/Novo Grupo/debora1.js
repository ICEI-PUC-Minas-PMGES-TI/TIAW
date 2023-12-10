document.getElementById("btn-criar-grupo").addEventListener("click", function () {
  const name = document.getElementById("input-nome").value;
  const creator = document.getElementById("input-criador").value;
  const members = document.getElementById("input-membros").value;

  const group = {
      nome: name,
      criador: creator,
      membros: members.split(",").map(member => member.trim()),
  };

  // Load existing groups from local storage
  let data = load();

  // Add the new group to the data
  data.push(group);

  // Save the updated data back to local storage
  save(data);

  // Update the displayed group list in the menu
  updateGroupList(data);

  // Show details of the newly created group
  showGroupDetails(group);
});

// Adiciona dinamicamente os grupos à lista no menu lateral
function updateGroupList(groups) {
  const groupList = document.getElementById("groupList");

  // Limpa a lista antes de adicionar os novos grupos
  groupList.innerHTML = '';

  // Cria um item de lista para cada grupo
  groups.forEach(group => {
    const groupItem = document.createElement("li");
    groupItem.classList.add("list-group-item", "list-group-item-action");
    groupItem.textContent = group.nome;
    groupItem.onclick = () => showGroupDetails(group);
    groupList.appendChild(groupItem);
  });
}

// Exibe os detalhes do grupo ao clicar no nome do grupo
function showGroupDetails(group) {
  const groupDetails = document.getElementById('groupDetails');

  // Atualiza o conteúdo da lista de detalhes do grupo
  groupDetails.innerHTML = `
    <h3>${group.nome}</h3>
    <ul>
        <li>Criador: ${group.criador}</li>
        <li>Membros:</li>
        <ul>
            ${group.membros.map(member => `<li>${member}</li>`).join('')}
        </ul>
    </ul>
    <button class="btn btn-danger" onclick="deleteGroup('${group.nome}')">Apagar Grupo</button>
  `;

  // Exibe os detalhes do grupo
  groupDetails.style.display = 'block';
}

function deleteGroup(groupName) {
  // Load existing groups from local storage
  let data = load();

  // Find the index of the group to be deleted
  const index = data.findIndex(group => group.nome === groupName);

  // If the group is found, remove it from the array
  if (index !== -1) {
    data.splice(index, 1);

    // Save the updated data back to local storage
    save(data);

    // Update the displayed group list in the menu
    updateGroupList(data);

    // Clear the group details
    const groupDetails = document.getElementById('groupDetails');
    groupDetails.innerHTML = '';
    groupDetails.style.display = 'none';
  }
  // Exibe os detalhes do grupo
  showGroupDetails.style.display = 'block';
}


function load() {
  let data = localStorage.getItem("grupos");

  if (!data) {
    data = [];
  } else {
    data = JSON.parse(data);
  }

  return data;
}

function save(data) {
  localStorage.setItem("grupos", JSON.stringify(data));
}

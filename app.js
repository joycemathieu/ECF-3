// selection ul du html
const list = document.querySelector('.list');

// fonction showdata
function showData(employees) {
  employees.forEach((employees, index) => {
    const listItem = createMyLi(employees, index);
    list.appendChild(listItem);
  });
}

function createMyLi(employees) {
    // creation de mes li '<li></li>'
    const listItem = document.createElement('li');
    // creation de '<button class="edit btn btn-primary">Modifier</button>'
    const btnEdit = createBtns('edit btn btn-primary', 'Modifier');
    // creation de '<button class="delete btn btn-danger">Supprimer</button>'
    const btnDelete = createBtns('delete btn btn-danger', 'Supprimer');
    // creation de '<span class="name">le nom de l'employé "employees.name"</span>'
    const name = createColumn('span', 'name', employees.name);
    // creation de '<span class="lastName">le nom de famille de l'employé "employees.last_name"</span>'
    const lastName = createColumn('span', 'lastName', employees.last_name);
    // creation du '<span class="job"> de l'employé "employees.job_title"</span>'
    const jobTitle = createColumn('span', 'job',employees.job_title);
    // creation du '<span class="email"> de l'employé "employees.email"</span>'
    const email = createColumn('span', 'email',employees.email);
    // ajout attribut "id" a '<li id="student.id"></li>'
    listItem.setAttribute('id', employees.id);
  
    // ajout de name a listItem
    listItem.appendChild(name);
    // ajout de lastname a listItem
    listItem.appendChild(lastName);
    // ajout de job a listItem
    listItem.appendChild(jobTitle);
    // ajout de email a listItem
    listItem.appendChild(email);
    // ajout de btnEdit a listItem
    listItem.appendChild(btnEdit);
    // ajout de btnDelete a listItem
    listItem.appendChild(btnDelete);
  
    // ajout listener on click EDIT qui utilise la function editStudent(event)
    btnEdit.addEventListener('click', editStudent);
  
    // ajout listener on click DELETE
    btnDelete.addEventListener('click', function (event) {
      if (confirm(`Souhaitez vous retirer l'employé ? "${employees.name}"`)) {
        list.removeChild(listItem);
      }
    });
    // la fonction createMyLi est egal a :
    // <li id="MON ID">
    //   <img class="avatar" src="avatar.png">
    //   <span class="name">LE NOM</span>
    //   <span class="date">LA DATE</span>
    //   <button class="edit btn btn-primary">Modifier</button>
    //   <button class="delete btn btn-danger">Supprimer</button>
    // </li>
    return listItem;
}

// création de la function 'createBtns' avec 2 arguments
function createBtns(className, text) {
    const btnElement = document.createElement('button');
    btnElement.innerHTML = text;
    btnElement.setAttribute('class', className);
    return btnElement;
  }
  
  // création de la function 'createColumn' avec 3 arguments
  function createColumn(type, className, data) {
    const node = document.createElement(type);
    node.setAttribute('class', className);
    if (data) {
      node.innerText = data;
    }
    return node;
  }
  
  // création de la function 'loadData'
  function loadData() {
    // Requete AJAX
    // Créer un objet XML HTTP Request
    var xhttp = new XMLHttpRequest();
    // Créer la fonction à exécuter lors d’une réponse
    xhttp.onreadystatechange = function () {
      console.log('readyState', this.readyState);
      if (this.readyState === 4 && this.status === 200) {
        // "this.responseText" est le resultat de la requete
        // "this.responseText" est du JSON de type text
        // il faut le "parser" pour le convertir en object javascript
        const employee = JSON.parse(this.responseText);
        // Utilisation de la function 'showData'
        showData(employee);
      }
    };
    // Ouvrir la requête
    xhttp.open('GET', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees', true);
    // Envoyer la requête
    xhttp.send();
  }
  // Utilisation de la function 'loadData'
  loadData();
  
  // création de la function 'editStudent'
  function editStudent(event) {
    const li = event.target.parentNode;
    const nameSpan = li.querySelector('.name');
    const name = nameSpan.innerText;
    const id = li.id;
    var studentName = prompt('Modifier le nom', name);
    if (studentName !== '') {
      const newData = {
        id: id,
        name: studentName,
        createdAt: new Date()
      };
      const listItem = createMyLi(newData, null);
      console.log(listItem);
      li.replaceWith(listItem);
    }
  }
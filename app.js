
const list = document.querySelector('.list');

// MANIPULATION DOM --------------------------------

// fonction showdata 
function showData(employees) {
  employees.forEach((employees, index) => {
    const listItem = createMyLi(employees, index);
    list.appendChild(listItem);
  });
}

function createMyLi(employees) {
    const listItem = document.createElement('li');
    const btnEdit = createBtns('edit btn btn-success', 'Modifier');
    const btnDelete = createBtns('delete btn btn-danger', 'Supprimer');
    const name = createColumn('span', 'name', employees.name);
    const lastName = createColumn('span', 'lastName', employees.last_name);
    const jobTitle = createColumn('span', 'job',employees.job_title);
    const email = createColumn('span', 'email',employees.email);
    listItem.setAttribute('id', employees.id);
  
    listItem.appendChild(name);
    listItem.appendChild(lastName);
    listItem.appendChild(jobTitle);
    listItem.appendChild(email);
    listItem.appendChild(btnEdit);
    listItem.appendChild(btnDelete);
  
    btnEdit.addEventListener('click', editEmployee);
  
    btnDelete.addEventListener('click', function (event) {
      if (confirm(`Souhaitez vous retirer l'employé ? "${employees.name}"`)) {
        list.removeChild(listItem);
      }
    });
    return listItem;
}

function createBtns(className, text) {
    const btnElement = document.createElement('button');
    btnElement.innerHTML = text;
    btnElement.setAttribute('class', className);
    return btnElement;
  }
  
  function createColumn(type, className, data) {
    const node = document.createElement(type);
    node.setAttribute('class', className);
    if (data) {
      node.innerText = data;
    }
    return node;
  }

  // Ma requête d'envoie des datas  GET -----------------------------
  function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      console.log('readyState', this.readyState);
      if (this.readyState === 4 && this.status === 200) {
        const employee = JSON.parse(this.responseText);
        showData(employee);
      }
    };
    xhttp.open('GET', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees', true);
    xhttp.send();
  }
  loadData();
  // Fin de requête ------------------------------------------------
  
  // création de la function 'editEmployee'
  function editEmployee(event) {

    };

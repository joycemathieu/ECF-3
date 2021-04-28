const list = document.getElementById('list');

// function show API
function showData(employees) {
  employees.forEach((employe, index) => {
    const listItem = createMyLi(employe, index);
    list.appendChild(listItem);
  });
}

// function creation list
function createMyLi(employe) {
    const listItem = document.createElement('li');
    const btnView = createBtns('view btn btn-primary', 'View more');
    const name = createColumn('span', 'name', employe.name);
    const lastName = createColumn('span', 'lastName', employe.last_name);
    listItem.setAttribute('id', employe.id);

    listItem.appendChild(name);
    listItem.appendChild(lastName);
    listItem.appendChild(btnView);
  
    btnView.addEventListener('click', function(event) {
      viewMore(employe);
    });
  
    return listItem;
}

function viewMore(employe){
  console.log(employe);
  
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

  // request datas  GET -----------------------------
  function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const employee = JSON.parse(this.responseText);
        showData(employee);
      }
    };
    xhttp.open('GET', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees', true);
    xhttp.send();
  }
  loadData();
  // End request ------------------------------------------------


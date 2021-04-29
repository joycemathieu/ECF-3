const list = document.getElementById('list');

// function show API
function showData(employees) {
  employees.forEach((employe) => {
    const listItem = createMyLi(employe);
    list.appendChild(listItem);
  });
}

// function creation list
function createMyLi(employe) {
    const listItem = document.createElement('li');
    const btnViewMore = linkBtns('btn btn-primary', 'View more', 'modal', '#modal', 'button');
    const name = createColumn('span', 'name', employe.name);
    const lastName = createColumn('span', 'lastName', employe.last_name);
    listItem.setAttribute('id', employe.id);

    listItem.appendChild(name);
    listItem.appendChild(lastName);
    listItem.appendChild(btnViewMore);
  
    btnViewMore.addEventListener('click', function(event) {
      viewMore(employe);
      const modalContent = document.getElementsByClassName('modal-content')[0];
      modalContent.innerHTML = "";
      const editBtn = btnModal('btn btn-primary', 'Edit', '#modal2', 'modal', 'modal'); 
      const deleteBtn = createBtns('btn btn-danger', 'Delete');
      const name = createColumn('span', 'name', employe.name);
      const lastName = createColumn('span', 'lastName', employe.last_name);
      const job = createColumn('span', 'job', employe.job_title);
      const email = createColumn('span', 'email', employe.email);
    
      modalContent.appendChild(name);
      modalContent.appendChild(lastName);
      modalContent.appendChild(job);
      modalContent.appendChild(email);
      modalContent.appendChild(editBtn);
      modalContent.appendChild(deleteBtn);
    });
 
    return listItem;
}

function btnModal(className, text, dataTarget, dataToggle, dataDismiss) {
  const btnModalElement = document.createElement('button');
  btnModalElement.innerHTML = text;
  btnModalElement.setAttribute('data-bs-target', dataTarget);
  btnModalElement.setAttribute('data-bs-toggle', dataToggle);
  btnModalElement.setAttribute('data-bs-dismiss', dataDismiss);
  btnModalElement.setAttribute('class', className);
  
  return btnModalElement;
}

function viewMore(employeId){
  console.log(employeId);
  function loadDataEmploye() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const employeId = JSON.parse(this.responseText);
        console.log(employeId);
      }
    };
    xhttp.open('GET', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/:id', true);
    xhttp.send();
  }
  loadDataEmploye();


}

function linkBtns(className, text, dataToggle, link, role) {
  const linkBtnElement = document.createElement('a');
  linkBtnElement.innerHTML = text;
  linkBtnElement.setAttribute('data-bs-toggle', dataToggle);
  linkBtnElement.setAttribute('class', className);
  linkBtnElement.setAttribute('href', link);
  linkBtnElement.setAttribute('role', role);

  return linkBtnElement;
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


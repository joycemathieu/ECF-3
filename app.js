const list = document.getElementById('list');
const formList = document.getElementById('form');
const addBtn = document.getElementById('formAddBtn');
const nameFormAdd = document.getElementById('formName');
const lastNameFormAdd = document.getElementById('formLastname');
const jobFormAdd = document.getElementById('formJob');
const emailFormAdd = document.getElementById('formEmail');

// function show API
function showData(employees) {
  employees.forEach((employe) => {
    const listItem = createMyLi(employe);
    list.appendChild(listItem);
  });
}

// function add employe
function addEmploye(e) {

  addBtn.addEventListener('click', function add(e){
    e.preventDefault();
    nameFormAddValue = nameFormAdd.value;
    lastNameFormAddValue = lastNameFormAdd.value;
    jobFormAddValue = jobFormAdd.value;
    emailFormAddValue = emailFormAdd.value;
    data = {
      id : "",
      name : nameFormAddValue,
      last_name : lastNameFormAddValue,
      job_title : jobFormAddValue,
      email : emailFormAddValue
    }
    console.log(data)
  
  // request POST
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 201) {
     data = JSON.stringify(data);
    }
  else { alert ("sorry !")}
  };
  xhttp.open("POST", 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees', true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(data)
  });
  return formList
};
addEmploye();

// function creation list
function createMyLi(employe) {
    const listItem = document.createElement('li');
    const btnViewMore = linkBtns('btn btn-primary', 'View more', 'modal', '#modal', 'button');
    const name = createColumn('span', 'name', employe.name);
    const lastName = createColumn('span', 'lastName', employe.last_name);


    listItem.appendChild(name);
    listItem.appendChild(lastName);
    listItem.appendChild(btnViewMore);
  

    btnViewMore.addEventListener('click', function(event) {
      viewMore(employe);
      const modalContent = document.getElementsByClassName('modal-content')[0];
      modalContent.innerHTML = "";
      const editBtn = btnModal('edit btn btn-primary', 'Edit', '#modal2', 'modal', 'modal'); 
      const deleteBtn = createBtns('delete btn btn-danger', 'Delete');
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

function viewMore(employe){
  /*let id = employe.id;
  function editDataEmploye() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const employees = JSON.parse(this.responseText);
        return employees;
      }
    };
    xhttp.open('GET', 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/'+id, true);
    xhttp.send();
  }
  editDataEmploye();*/
  
  //const editData = document.getElementsByClassName('editData')[0];
  //editData.addEventListener('submit', editEmploye)

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


const list = document.getElementById('list');
const formList = document.getElementById('form');
const addBtn = document.getElementById('formAddBtn');
const nameFormAdd = document.getElementById('formName');
const lastNameFormAdd = document.getElementById('formLastname');
const jobFormAdd = document.getElementById('formJob');
const emailFormAdd = document.getElementById('formEmail');
const formModal = document.getElementById('formModal');
const editName = document.getElementById('formNameModal');
const editLastName = document.getElementById('formLastNameModal');
const editJob = document.getElementById('formJobModal');
const editEmail = document.getElementById('formEmailModal');

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

  // request POST
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 201) {
    alert("your send is ok !");
    }
  };
  xhttp.open("POST", 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees', true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send('name='+nameFormAdd.value+'&last_name='+lastNameFormAdd.value+'&job_title='+jobFormAdd.value+'&email='+emailFormAdd.value)
  });
  return formList
};
addEmploye();

// function creation list and show all employees
function createMyLi(employe) {
    const listItem = document.createElement('li');
    const btnViewMore = linkBtns('btn btn-primary', 'View more', 'modal', '#modal', 'button');
    const deleteBtn = createBtns('delete btn btn-danger', 'Delete', 'submit', 'deleteBtn');
    const name = createColumn('span', 'name', employe.name);
    const lastName = createColumn('span', 'lastName', employe.last_name);
    let id = employe.id;

    listItem.appendChild(name);
    listItem.appendChild(lastName);
    listItem.appendChild(btnViewMore);
    listItem.appendChild(deleteBtn);

        //delete your employe 
    deleteBtn.addEventListener('click',function remove(event){
    event.preventDefault();
    const confirmation = confirm("Are you sure ?");

    if (confirmation === true) {
            // request DELETE
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert("your delete is ok !");
        }
      };
      xhttp.open("DELETE", 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/'+id, true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send(null)
    };
  });

    btnViewMore.addEventListener('click', function() {
      viewMore(employe);
      const modalContent = document.getElementsByClassName('modal-content')[0];
      modalContent.innerHTML = "";
      const editBtn = btnModal('edit btn btn-primary', 'Edit', '#modal2', 'modal', 'modal'); 
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

// show 1 employe
function viewMore(employe){
  let id = employe.id;
  const btnEdit = document.getElementsByClassName('editData')[0];

  // edit your employe 
  btnEdit.addEventListener('click', function edit(e){
    e.preventDefault();
    let data = 'name='+editName.value+'&last_name='+editLastName.value+'&job_title='+editJob.value+'&email='+editEmail.value;
  // request PUT
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    alert("your edit is ok !");
    }
  };
  xhttp.open("PUT", 'https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees/'+id, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(data)
  });

  return formModal
};

function linkBtns(className, text, dataToggle, link, role) {
  const linkBtnElement = document.createElement('a');
  linkBtnElement.innerHTML = text;
  linkBtnElement.setAttribute('data-bs-toggle', dataToggle);
  linkBtnElement.setAttribute('class', className);
  linkBtnElement.setAttribute('href', link);
  linkBtnElement.setAttribute('role', role);

  return linkBtnElement;
}

function createBtns(className, text, type, id) {
    const btnElement = document.createElement('button');
    btnElement.innerHTML = text;
    btnElement.setAttribute('class', className);
    btnElement.setAttribute('type', type);
    btnElement.setAttribute('id', id);
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

  // SHOW LIST -- request datas  GET -----------------------------
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


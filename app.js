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
  
    btnView.addEventListener('click', viewMore);
  
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

  // Add employees ----------------------------------------
  function addEmployee() {

  }

  function addData() {
    
  }

  // creation function 'viewMore'
  function viewMore(event) {
 
    // creation modal ------------------------------------------
    const modal = document.getElementById('myModal');
    const clickBtnView = document.querySelector('.view');
    const closeModal = document.getElementsByClassName("close")[0];
    const listModal = document.getElementById('modalList');
    const form = document.getElementById('form');
    form.style.display = "none";

    // function creation modalLi
    function viewEmploye(employe) {
        const listModal = document.createElement('li');
        const btnEdit = createBtns('edit btn btn-success', 'Edit');
        const btnDelete = createBtns('delete btn btn-danger', 'Delete');
        const name = createColumn('span', 'name', employe.name);
        const lastName = createColumn('span', 'lastName', employe.last_name);
        const job = createColumn('span', 'job', employe.job_title);
        const email = createColumn('span', 'email', employe.email);
        listModal.setAttribute('id', employee.id);
      
        listModal.appendChild(name);
        listModal.appendChild(lastName);
        listModal.appendChild(job);
        listModal.appendChild(email);
        listModal.appendChild(btnEdit);
        listModal.appendChild(btnDelete);
      
        btnEdit.addEventListener('click', editEmployee);
        //btnDelete.addEventListener('click', deleteEmployee);

        return listModal;
    }

    clickBtnView.onclick = function() {
      modal.style.display = "block";
    }

    closeModal.onclick = function() {
      modal.style.display = "none";
      listModal.style.display = "block";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        listModal.style.display = "block";
      }
    }
    // end creation modal -----------------------------------------
  
    function editEmployee(event) {
      const closeUl = document.getElementById('modalList');
      closeUl.style.display = "none";
      form.style.display = "block";
      

    }

  };
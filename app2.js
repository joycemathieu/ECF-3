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
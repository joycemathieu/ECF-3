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

    formList.addEventListener('submit', function addEmploye(event) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          
        }
        else {
          alert('Sorry, this post is impossible')
        }
      };
      xhttp.open("POST", "https://6057e432c3f49200173ad08d.mockapi.io/api/v1/employees", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("name="+nameValue+'last_name='+lastNameValue+'job_title'+jobValue+'email'+emailValue);
      });



  };
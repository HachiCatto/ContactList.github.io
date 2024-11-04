let IdCounter = 0; 
const inputname = document.querySelector('#form-input-name[type="text"]')
const inputphone = document.querySelector('#form-input-phone[type="text"]')

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    addContact();
});

let addContact = () =>{
    IdCounter++;

    let newnameValue = inputname.value;
    let newphoneValue = inputphone.value;

    list.innerHTML += `
        <li class="list-item" id="${IdCounter}">
            <button class="list-item-delete-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="PE-list-item-delete-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>                                
                </button>
        <input type="text" value="${newnameValue}" readonly class="list-item-input-name" class="input-name-target">
        <input type="text" value="${newphoneValue}" readonly class="list-item-input-phone" class="input-phone-target">
        </li>
`

        inputname.value = '';
        inputphone.value = '';
};

list.addEventListener('click', (event)=>{
        if(event.srcElement.nodeName == 'BUTTON'){
            deleteContact(event.srcElement.parentNode.id);
        };
    });

list.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName == 'svg'){
        deleteContact(event.srcElement.parentNode.parentNode.id);
    }
})

let deleteContact = (id)=>{
    let contactToDelete = document.getElementById(id);
    list.removeChild(contactToDelete);
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".edit-contact-btn");
const closeModalBtn = document.querySelector(".btn-regret");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
let PEIdCounter = 0; 
const PEinputname = document.querySelector('#PE-form-input-name[type="text"]')
const PEinputphone = document.querySelector('#PE-form-input-phone[type="text"]')

PEform.addEventListener('submit', (event)=>{
    event.preventDefault();
    PEaddContact();
});

let PEaddContact = () =>{
    IdCounter++;

    let PEnewnameValue = PEinputname.value;
    let PEnewphoneValue = PEinputphone.value;

PElist.innerHTML += `
        <li class="PE-list-item" id="${IdCounter}">
            <div id="PE-btns-container">
            <button class="PE-list-item-delete-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="PE-list-item-delete-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>                                
                </button>
            <button class="PE-list-item-edit-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="PE-list-item-edit-btn-icon">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
            </button>
            </div>
        <input type="text" value="${PEnewnameValue}" readonly class="PE-list-item-input-name" class="PE-input-name-target">
        <input type="text" value="${PEnewphoneValue}" readonly class="PE-list-item-input-phone" class="PE-input-phone-target">
        </li>
`

        PEinputname.value = '';
        PEinputphone.value = '';
};

PElist.addEventListener('click', (event)=>{
        if(event.srcElement.nodeName == 'BUTTON'){
            PEdeleteContact(event.srcElement.parentNode.id);
        };
    });

PElist.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName == 'svg'){
        PEdeleteContact(event.srcElement.parentNode.parentNode.parentNode.id);
    }
})

let PEdeleteContact = (id)=>{
    let PEcontactToDelete = document.getElementById(id);
    PElist.removeChild(PEcontactToDelete);
}


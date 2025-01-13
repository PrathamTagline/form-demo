const form = document.getElementById("dataForm");
const tableBody = document.querySelector("#dataTable tbody");
let userDataBase = [];
const stateCityMap = {
    "gujarat": ["ahmedabad", "surat", "bharuch", "navsari"],
    "panjab": ["Mohali", "Ludhiana", "Amritsar"]
}
const state = document.getElementById("state");
const city = document.querySelector("#city select");

// one static data
userDataBase.push({
    "fname": "pratham",
    "lname": "patel",
    "email": "p@xyx.copm",
    "age": 21,
    "DOB": "2001-01-01",
    "gender": "Male",
    "hobbies": ["p", "a"],
    "state": "Gujarat",
    "city": "Surat"
}
);

addDataIntable({ DB: userDataBase, index: 0 });


form.addEventListener("submit", (event) => {
    event.preventDefault();
    //add form data to DB
    addFormDataInDB(userDataBase);
    //add DB data to table
    let lastIndex = userDataBase.length - 1;
    addDataIntable({DB:userDataBase,index:lastIndex});
})



tableBody.addEventListener("click" , (event) => {
    if(event.target.classList.contains("delete")){

        const row = event.target.closest("tr");
        console.log(`row index ${row.rowIndex}`);
        
        tableBody.removeChild(row);
        form.reset();
    }
})






function deleteDataFromDB(DB,index){
    DB.splice(index,1);
}















function addFormDataInDB(DB) {
    const formData = new FormData(form);
    userData = {}
    for (const [key, value] of formData.entries()) {
        userData[`${key}`] = value;
    }
    DB.push(userData);
    console.log(DB.length - 1)
}


function addDataIntable({ DB, index }) {
    let userData = DB[index];
    console.log(userData);
    const firstrow = document.createElement("tr");
    tableRowDataSteing = "";
    let userDataKeys = Object.keys(userData);

    for (let i of userDataKeys) {
        tableRowDataSteing += `<td>${userData[i]}</td>`;
    }
    tableRowDataSteing += `<td>
                <button class="edit" value="edit">edit</button>
                <button class="delete" value="delete">delete</button>
            </td>`;
    firstrow.innerHTML = tableRowDataSteing;
    tableBody.appendChild(firstrow);
}


// filter event 
state.addEventListener("change", () => {

    currentstate = state.value;
    const arr = stateCityMap[`${currentstate}`].sort();;
    let optionList = "<option disabled selected value>---- select city ----</option>"

    for (let i = 0; i < arr.length; i++) {
        cityOption = `<option id="${arr[i]}" value="${arr[i]}">${arr[i]}</option>`;
        optionList += cityOption;
    }

    const newselect = document.createElement("select")
    newselect.innerHTML = optionList;
    document.getElementById("city").innerHTML = optionList;

})


// edit and delete option
tableBody.addEventListener("click", (event) => {
    // if (event.target.classList.contains("delete")) {

    //     const row = event.target.closest("tr");
    //     tableBody.removeChild(row);
    //     form.reset();
    // }

    if (event.target.classList.contains("edit")) {

        const row = event.target.closest("tr");
        const ceil = row.querySelectorAll("td");
        index = row.rowIndex;

        document.getElementById("fname").value = ceil[0].textContent;
        document.getElementById("lname").value = ceil[1].textContent;
        document.getElementById("email").value = ceil[2].textContent;
        document.getElementById("age").value = ceil[3].textContent;
        document.getElementById("DOB").value = ceil[4].textContent;
        document.querySelector(`input[name="gender"][value="${ceil[5].textContent}"]`).checked = true;
        const checkBoxArray = ceil[6].textContent

        console.log(`${checkBoxArray}`);
        document.querySelectorAll('input[name="hobbies"]').forEach(cb => {
            cb.checked = checkBoxArray.includes(cb.value);
        });
        document.getElementById("state").value = ceil[7].textContent;
        document.getElementById("city").value = ceil[8].textContent;
        tableBody.removeChild(row);

    }
});

// search bar 
//filter table by text  
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
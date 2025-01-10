const form = document.getElementById("dataForm");
const tableBody = document.querySelector("#dataTable tbody");
const state = document.getElementById("state");
const city = document.querySelector("#city select");
//static data
const arr = ["pratham", "patel", "p@xyz.com", 21, "2001-01-01", "male", ["book reading", "problem solving"], "gujarat", "surat"];
// city filter data 
const stateCityMap = {
    "gujarat": ["ahmedabad", "surat", "bharuch", "navsari"],
    "panjab": ["Mohali", "Ludhiana", "Amritsar"]
}

const firstrow = document.createElement("tr");

firstrow.innerHTML = `
            <td>${arr[0]}</td>
            <td>${arr[1]}</td>
            <td>${arr[2]}</td>
            <td>${arr[3]}</td>
            <td>${arr[4]}</td>
            <td>${arr[5]}</td>
            <td>${arr[6]}</td>
            <td>${arr[7]}</td>
            <td>${arr[8]}</td>
            <td>
                <button class="edit" value="edit">edit</button>
                <button class="delete" value="delete">delete</button>
            </td>
            `;

tableBody.appendChild(firstrow);

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

// validation part

function formValid(email, age) {

    let toggle = true
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email) == false) {
        document.getElementById("emailvalidation").innerHTML = "plz enter the vaild email";
        console.log("print not heloo 1");
        toggle = false
    }
    if ((age < 1 && age > 100)) {
        document.getElementById("agevalidation").innerHTML = "plz enter age 0 to 100";
        console.log("print not heloo 2");
        toggle = false
    }
    if (state == "") {
        document.getElementById("statevalidation").innerHTML = "plz enter age 0 to 100";
        console.log("print not heloo 3");
        toggle = false
    }
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        // errorMessage.textContent = "Please select a gender."
        console.log("dwqwfwfdsadfs");
        toggle = false
    }


    return toggle
}

//form submition event 
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const DOB = document.getElementById("DOB").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const hobbies = Array
        .from(document.querySelectorAll('input[type="checkbox"]'))
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

    const state = document.getElementById("state").value;
    console.log(state)
    const city = document.getElementById("city").value;

    console.log(typeof state)
    const isValid = formValid(email, age);

    if (isValid == true) {
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${fname}</td>
            <td>${lname}</td>
            <td>${email}</td>
            <td>${age}</td>
            <td>${DOB}</td>
            <td>${gender}</td>
            <td>${hobbies}</td>
            <td>${state}</td>
            <td>${city}</td>
            <td>
                <button class="edit" value="edit">edit</button>
                <button class="delete" value="delete">delete</button>
            </td>
            `;

        tableBody.appendChild(newRow);
        form.reset();
    }
});

// edit and delete option
tableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {

        const row = event.target.closest("tr");
        tableBody.removeChild(row);
        form.reset();
    }

    else if (event.target.classList.contains("edit")) {

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
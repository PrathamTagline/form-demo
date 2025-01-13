const form = document.getElementById("dataForm");
const tableBody = document.querySelector("#dataTable tbody");
let id = 0;
let currentIndex = 0;
//state city list 
let stateCityMap = [];
//user database
let userDataBase = [

];
//add static data in tha user database 
addDataInDatabase({ tableName: userDataBase, fname: "pratham", lname: "patel", email: "p@xyx.copm", age: 21, DOB: "2001-01-01", gender: "Male", hobbies: ["p", "a"], state: "gujarat", city: "surat" });
//add the state and cities data
addDataInStateCities({ stateCityList: stateCityMap, state: "panjab", cities: ["Amritsar", "Ludhiana"] });
addDataInStateCities({ stateCityList: stateCityMap, state: "gujrat", cities: ["surat", "baruch"] });

// one static data added 
addDataIntable({ database: userDataBase, index: 0 });
// submitForm();



    // Log all form data
    
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }



let data = []

let temp = te
function submitForm(){
    const formData = new FormData(form);
    data.push(formData);
    
}


function addDataIntable({ database, index }) {
    let userID = database[index]["id"];
    let userData = database[index]["data"];
    const firstrow = document.createElement("tr");
    let tableRowDataSteing = `<td>${userID}</td>`;
    let userDataKeys = Object.keys(userData);

    for (let i of userDataKeys) {
        tableRowDataSteing += `<td>${userData[i]}</td>`;
    }

    firstrow.innerHTML = tableRowDataSteing;
    // tableBody.appendChild(firstrow);
}


function addDataInStateCities({ stateCityList, state, cities }) {
    stateCityList.push({
        "state": state,
        "cities": cities
    })
}


function addDataInDatabase({ tableName, fname, lname, email, age, DOB, gender, hobbies, state, city }) {
    id += 1
    tableName.push({
        "id": id,
        "data": {
            "fname": fname,
            "lname": lname,
            "email": email,
            "age": age,
            "DOB": DOB,
            "gender": gender,
            "hobbies": hobbies,
            "state": state,
            "city": city
        }
    })
}

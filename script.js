var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["number"] = document.getElementById("number").value;
    formData["date"] = document.getElementById("date").value;
    formData["time"] = document.getElementById("time").value;
    formData["color"] = document.getElementById("color").value;
    formData["radio"] = document.getElementById("Phone pay").value;
    formData["file"] = document.getElementById("file").value;
    
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.number;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.time;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.color;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.radio;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.file;
    cell9= newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("color").value = "";
    document.getElementById("Phone pay").value = "";
    document.getElementById("file").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("number").value = selectedRow.cells[2].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
    document.getElementById("time").value = selectedRow.cells[4].innerHTML;
    document.getElementById("color").value = selectedRow.cells[5].innerHTML;
    document.getElementById("radio").value = selectedRow.cells[5].innerHTML;
    document.getElementById("file").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.number;
    selectedRow.cells[3].innerHTML = formData.date;
    selectedRow.cells[4].innerHTML = formData.time;
    selectedRow.cells[5].innerHTML = formData.color;
    selectedRow.cells[6].innerHTML = formData.radio;
    selectedRow.cells[7].innerHTML = formData.file;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

function manageData(){
    //retrieving data
    var name= document.getElementById("fName").value ;
    var email=document.getElementById("Email").value;
    var number=document.getElementById('Number').value;

    //storing data

    var num=localStorage.setItem("name",name);
    var em=localStorage.setItem("email",email);
    var num=localStorage.setItem("number",number);


    
}
var form = `<div>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Your Name">
  </div>
  <div class="form-group mt-3">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter Your email">
  </div>
  <div class="form-group mt-3">
    <label for="number">Number</label>
    <input type="number" class="form-control" id="number" placeholder="Enter Your number">
  </div>
  <div class="form-group mt-3">
    <label for="brithday">Brithday</label>
    <input type="date" class="form-control" id="date" placeholder="Enter Your brithday">
  </div>
  <div class="form-group mt-3">
    <label for="time">appointment time</label>
    <input type="time" class="form-control" id="time" placeholder="Enter Your time">
  </div>
  <div class="form-group mt-3">
    <label for="age">Age</label>
    <input type="range" class="form-control" id="age" placeholder="Enter Your age">
  </div><br>
  <div>
  <div class="form-group mt-3">
    <label for="color">color</label>
    <input type="color" class="form-control" id="color">
  </div><br>
  <div>
                    
  <div>
  <label>payment method</label>:--
  <input type="radio" id="radio" name="fav_language" value="Phone pay">phone pay
  <input type="radio" id="radio" name="fav_language" value="Phone pay"><span>Banking</span>
  <input type="radio" id="radio" name="fav_language" value="Phone pay"><span>ATM</span>
                    
  </div><br>
    <div class="form-group mt-3">
    <label for="photo">photo</label>
    <input type="file" class="form-control" id="file" placeholder="Enter Your photo">
  </div>
  <div>
  <button type="submit" class="btn btn-primary mt-3" onclick="save()">Save</button>
</div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th clsaa="col-1">NO</th>
      <th clsaa="col-3">Name</th>
      <th clsaa="col-4">Email</th>
      <th clsaa="col-4">Number</th>
      <th clsaa="col-4">Date</th>
      <th clsaa="col-4">time</th>
      <th clsaa="col-4">Age</th>
      <th clsaa="col-4">color</th>
      <th clsaa="col-4">payment method</th>
      <th clsaa="col-4">photo</th>
      <th clsaa="col-2">Edit</th>
      <th clsaa="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].name}</td>
      <td>${details[i].email}</td>
      <td>${details[i].number}</td>
      <td>${details[i].date}</td>
      <td>${details[i].time}</td>
      <td>${details[i].age}</td>
      <td>${details[i].color}</td>
      <td>${details[i].radio}</td>
      <td>${details[i].file}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    let date = document.getElementById("date");
    let time = document.getElementById("time");
    let age = document.getElementById("age");
    let color = document.getElementById("color");
    let file = document.getElementById("file");
    let radio = document.getElementById("radio");


    if (name.value == 0) {
        alert("name is Empty");
        return
    }
    let data = {
        name: name.value,
        email: email.value,
        number:number.value,
        date:date.value,
        time:time.value,
        age:age.value,
        color:color.value,
        file:file.value,
        radio:radio.value,
    };
    details.push(data);
    setData();

    // console.log(details)
    // console.log(email.value)
    table();
    name.value = "";
    email.value = "";
    number.value="";
    date.value="";
    time.value="";
    age.value="";
    color.value="";
    file.value="";
    radio.value="";
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    // console.log('delete work')
    // console.log(details)
};

function edit(index) {
    let editForm = `<div>
  <div class="form-group">
    <label for="name">Update Name</label>
    <input type="text" value="${details[index].name}" class="form-control" id="newName" aria-describedby="emailHelp" placeholder="Update Your Name">
  </div>
  <div class="form-group mt-3">
    <label for="email">Email</label>
    <input type="email" value="${details[index].email}" class="form-control" id="newEmail" placeholder="Update Your email">
  </div>
  <div class="form-group mt-3">
    <label for="email">Number</label>
    <input type="email" value="${details[index].number}" class="form-control" id="newNumber" placeholder="Update Your number">
  </div>
  <div class="form-group mt-3">
    <label for="date">date</label>
    <input type="date" value="${details[index].date}" class="form-control" id="newDate" placeholder="Update Your date">
  </div>
  </div>
  <div class="form-group mt-3">
    <label for="time">time</label>
    <input type="time" value="${details[index].time}" class="form-control" id="newTime" placeholder="Update Your time">
  </div>
  <div class="form-group mt-3">
  <label for="age">age</label>
  <input type="age" value="${details[index].age}" class="form-control" id="newAge" placeholder="Update Your age">
</div>
<div class="form-group mt-3">
  <label for="color">age</label>
  <input type="color" value="${details[index].color}" class="form-control" id="newColor">
</div>

<div class="form-group mt-3">
  <label for="method">payment method</label>
  <input type="radio" value="${details[index].radio}" class="form-control" id="newMethod" placeholder="Update Your color">
  <input type="radio" value="${details[index].radio}" class="form-control" id="newMethod" placeholder="Update Your color">
  <input type="radio" value="${details[index].radio}" class="form-control" id="newMethod" placeholder="Update Your color">
</div>
  <label for="file">photo</label>
  <input type="file" value="${details[index].file}" class="form-control" id="newFile" placeholder="Update Your photo">
</div>
   
  <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
    // console.log('edit work');
};
function update(index) {
    let newName = document.getElementById('newName');
    let newEmail = document.getElementById('newEmail');
    let newNumber = document.getElementById('newNumber');
    let newDate = document.getElementById('newDate');
    let newTime = document.getElementById('newTime');
    let newAge = document.getElementById('newAge');
    let newColor = document.getElementById('newColor');
    let newFile = document.getElementById('newFile');
    let newMethod = document.getElementById('newMethod');





        details[index] = {
        name: newName.value,
        email: newEmail.value,
        number:newNumber.value,
        date:newDate.value,
        time:newTime.value,
        age:newAge.value,
        color:newColor.value,
        file:newFile.value,
        radio:newMethod.value,
        
        
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;
// console.log('update work')
// console.log(details)
}


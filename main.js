var submitButton = document.getElementById("submit");
document.addEventListener("DOMContentLoaded", function () {
  console.log("vscode");
  localStorage.getItem();
});

if (document.readyState !== "loading") {
  console.log("vscode");
  var keys = Object.keys(localStorage),
      //taking out all the keys that are there in the local storage
  i = keys.length; //6

  console.log("keys", keys);
  var stringifiedDetailsOfPeople, detailsOfPeople; // 6 to 0

  Object.keys(localStorage).forEach(function (key) {
    //i==2
    if (key.match(/userDetails/g)) {
      //we only care about keys that start with userDetails
      //this is called regex matching
      stringifiedDetailsOfPeople = localStorage.getItem(key);
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      console.log("details", detailsOfPeople);
      addNewLineElement(detailsOfPeople);
    }
  });
} // const listOfPeople = []


submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  var emailId = document.getElementById("email").value;
  var name = document.getElementById("name").value;

  if (emailId.length > 0 && name.length > 0) {
    var object = {
      name: name,
      emailId: emailId //unique

    };
    localStorage.setItem("userDetails" + emailId, JSON.stringify(object)); // localStorage.setItem("userDetailEmail" + emailId, emailId);
    // listOfPeople.push(object)

    addNewLineElement(object);
  }
});

function addNewLineElement(object) {
  var ul = document.getElementById("listOfPeople");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(object.name + " " + object.emailId + " ")); // li.appendChild()

  console.log(document.createElement("i"));
  var a1 = document.createElement("input");
  a1.id = "yash";
  a1.type = "button";
  a1.value = "Edit";
  a1.addEventListener("click", function () {
    console.log(object);
    document.getElementById("name").value = object.name;
    document.getElementById("email").value = object.emailId;
    li.remove();
  });
  a1.className = "delete";
  a1.style.border = "2px solid green";
  console.log(a1);
  li.appendChild(a1);
  var a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.addEventListener("click", function () {
    localStorage.removeItem("userDetails" + object.emailId); // axios.delete(`${apiendpoint}/registeruser/${object._id}`);

    li.remove();
  });
  a.className = "delete";
  a.style.border = "2px solid red";
  console.log(a);
  li.appendChild(a);
  console.log(li);
  ul.appendChild(li);
}

// event listener for submit 
var form = document.getElementById('addForm');  
var itemList = document.getElementById('items');  

// Form submit event 
form.addEventListener('submit', addForm);   
itemList.addEventListener('click', removeItem); 

function addForm(e){
    e.preventDefault();     


      // Get input value 
      var fname = document.getElementById('fname').value; 
      var lname = document.getElementById('lname').value; 
      // Create new li element 
      var p = document.createElement('p');  
     
      // Add class 
      p.className = 'list-group-item';  
      // Add text node with input value 
      p.appendChild(document.createTextNode(fname + " " + lname + " "));  
         
      // Append li to list
    itemList.appendChild(p);    

      // Create delet button element 
      var deletBtn = document.createElement('button'); 
      // Add clases to del button 
      deletBtn.className= 'btn btn-danger btn-sm float-right delete'; 
      // Append text node 
      deletBtn.appendChild(document.createTextNode('X'));  
      // Append button to li
  p.appendChild(deletBtn);    

  p.addEventListener("click", () => {
    localStorage.removeItem(fname);
    // axios.delete(`${apiendpoint}/registeruser/${object._id}`);
    p.remove();
  });


// Create edit button element   
var editBtn = document.createElement('button'); 
// Add clases to del button 
editBtn.className= 'btn btn-danger btn-sm float-right delete'; 
// Append text node 
editBtn.appendChild(document.createTextNode('edit'));  
// Append button to li
p.appendChild(editBtn); 





    if(fname.length >0 && lname.length>0){
    let myObj = {
      inputfname: fname,  
      inputlname: lname
  };    
  
  let myobj_serialized = JSON.stringify(myObj); 
  localStorage.setItem(myObj.inputfname,myobj_serialized); 
  let myObj_deserialized = JSON.parse(localStorage.getItem(myObj.inputfname));  
  console.log(myObj_deserialized);   
}
}    


 function removeItem(e){
   if(e.target.classList.contains('delete')){
           var li = e.target.parentElement;  
           itemList.removeChild(li); 
           localStorage.removeItem(li);
   }
   }
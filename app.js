function userClick() {
  const userInput = document.querySelector("#inputField");
  const userValue = userInput.value;
  console.log(userValue);
  if (userValue) {
    //list create
    const countryList = document.createElement("li");
    countryList.className="countryListGap";
    //span create
    let countryName = document.createElement("span");

    // delete button create for add items and add class
    let deleteBtn = document.createElement("button");
    deleteBtn.className="dltBtn"
    deleteBtn.textContent = "Delete";
    //remove list items
    deleteBtn.addEventListener("click", function () {
      countryList.remove();
    });

    //Update button create and class add

    let updateBtn=document.createElement("button");
    updateBtn.className="updateBtn";
    updateBtn.textContent="Update";
    //update list value items
    updateBtn.addEventListener("click",function(){
      let updatedCountry=prompt("Update Country Name",userValue);
      if (updatedCountry !==null){
        countryName.textContent=updatedCountry;
        alert("Updated Country Name");
      }
    })

    // span,dlt btn append in li
    countryList.appendChild(countryName);
    countryList.appendChild(deleteBtn);
    countryList.appendChild(updateBtn);

    //span value= get user value
    countryName.textContent = userValue;

    //li append in ul
    document.querySelector("#countries").appendChild(countryList);
    userInput.value = "";
  }
}
function KeyPress(event) {
  //if the pressed key is Enter
  if (event.keyCode === 13) {
    // Prevent the default action of the Enter key (form submission)
    event.preventDefault();

    // Trigger the "Add country" functionality
    userClick();
  }
}

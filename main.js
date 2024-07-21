let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let inputText = document.getElementById("input-text");

window.onload = function() {
    inputText.focus();
}


allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      check();
    }
    if (e.target.classList.contains("add-item")) {
      add();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-item")) {
      show();
    }

    function checkInput() {
      if (inputText.value == "") {
        results.innerHTML = "Input Cant Be Empty";
      }
    }
  });
});

function check() {
  if (inputText.value !== "") {
    if (localStorage.getItem(inputText.value)) {
      results.innerHTML = `the  <span>${inputText.value}</span> found in Local Storage`;
    } else {
      results.innerHTML = `The <span>${inputText.value}</span> Not found in Local Storage`;
    }
  } else {
    checkInput();
  }
}
function add() {
  if (inputText.value !== "") {
    localStorage.setItem(inputText.value, "test");
    results.innerHTML = `the  <span>${inputText.value}</span> added in Local Storage`;
    inputText.value = "";
  } else {
    checkInput();
  }
}
function deleteItem() {
    if (inputText.value !== "") {
        if (localStorage.getItem(inputText.value)) {
            localStorage.removeItem(inputText.value);
          results.innerHTML = `the  <span>${inputText.value}</span> deleted from Local Storage`;
          inputText.value = "";

        } else {
          results.innerHTML = `The <span>${inputText.value}</span> Not found in Local Storage`;
        }
      } else {
        checkInput();
      }
}

function show() {
    //that mean if local have items
    if(localStorage.length){
results.innerHTML='';
//loop on object that contain items in local storage
for( let [key,value]of Object.entries(localStorage)){
    results.innerHTML +=`<span class='keys'>${key}</span>`
}
    }else{
        results.innerHTML = "local storage is empty!";
  
    }
}

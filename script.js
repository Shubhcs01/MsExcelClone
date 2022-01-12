let row = 100;
let col = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let cellCont = document.querySelector(".cell-cont");
let addressBar = document.querySelector(".address-bar");

for (let i = 1; i <= row; i++) {
  let addressCol = document.createElement("div");
  addressCol.innerText = i;
  addressCol.setAttribute("class", "col-address");
  addressColCont.append(addressCol); //-> Append to container
}

for (let i = 1; i <= col; i++) {
  let addressRow = document.createElement("div");
  addressRow.innerText = String.fromCharCode(64 + i);
  addressRow.setAttribute("class", "row-address");
  addressRowCont.append(addressRow); //-> Append to container
}

for (let i = 1; i <= row; i++) {
  let cellRow = document.createElement("div");
  cellRow.setAttribute("class", "cell-row");
  for (let j = 1; j <= col; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class", "row-address");
    cell.setAttribute("contenteditable", "true");
    cell.addEventListener("click", (e) => {
      addressBar.value = i + String.fromCharCode(64 + j);
    });
    cellRow.append(cell);
  }
  cellCont.append(cellRow);
}

const form = new FormData();
const userEmail = getLocalStorage('email');
const userGroup = "200";
const dataJason = {};
form.append("group", userGroup);
form.append("email", userEmail);

let settings = {
  "url": `${HOST_URL_EID_DAEMON}/accounts/list_accounts`,
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(async function (res) {
  const obj = JSON.parse(res);
  console.log(obj);
  await renderTable(obj);
});

function renderTable(objData){
  let tbodyContent = "";
  let tbody = document.getElementById("tbody");
  objData.accounts.forEach(function (item,i){
    console.log(item);
    tbodyContent += `
    <tr>
      <td class="align-middle text-center">Chika</td>
      <td class="align-middle text-center">${item}</td>
      <td class="align-middle text-center">文書處理</td>
      <td class="align-middle text-center">20</td>
    </tr>
    `
    tbody.innerHTML = tbodyContent;
  });
}
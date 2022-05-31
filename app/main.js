///////////////////////// CONSTANTS /////////////////////////
const accordion = "#accordion";

$(() => {
  FetchData();
});

///////////////////////// FETCH DATA FROM ZOHO /////////////////////////
function FetchData() {
  ZOHO.CREATOR.init().then(function () {
    config = {
      reportName: "FAQs_Report",
      criteria: "",
    }

    // Get data from Zoho
    ZOHO.CREATOR.API.getAllRecords(config).then(function (response) {
      console.log(response);
      for (var index in response.data) {
        var element = response.data[index];
        console.log(element);
      }
      InitAccordion(response.data);
    });
  });
}

function InitAccordion(pData) {
  console.log(pData);
    //Title
    let title = "<h1>Q&A - ITCP Plattform</h1>";
    $(accordion).append(title);
    console.log(pData);
    var aux;
    for (let i = 0; i < pData.length; i++) {
      aux = "<div class='accordion-item'>";
      aux += `<h2 class='accordion-header' id='heading${i}'>`;
      aux += `<button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse${i}' aria-expanded='true' aria-controls='heading${i}'>${pData[i].FAQ}</button>`;
      aux += "</h2>";
      aux += `<div id='collapse${i}' class='accordion-collapse collapse' aria-labelledby='collapse${i}' data-bs-parent='#accordion'>`;
      aux += `<div class='accordion-body'>${pData[i].Answer}</div></div></div>`;
      $(accordion).append(aux);
    }
}
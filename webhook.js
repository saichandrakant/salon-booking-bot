function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.phone,
    data.service,
    data.date,
    data.time
  ]);

  return ContentService.createTextOutput("Success");
}

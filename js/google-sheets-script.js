/* ═══════════════════════════════════════════════════
   Google Apps Script — Paste this into Apps Script
   ═══════════════════════════════════════════════════
   
   HOW TO SET UP:
   
   1. Go to https://sheets.google.com and create a new spreadsheet
   2. Name it "DentaCare Appointments"
   3. Add these headers in Row 1:
      A1: Timestamp | B1: Name | C1: Phone | D1: Email | E1: Service | F1: Date | G1: Notes | H1: Status
   4. Go to Extensions > Apps Script
   5. Delete everything in the editor and paste the code below (only the part inside the comment block)
   6. Click Deploy > New Deployment
   7. Select Type: Web App
   8. Set "Execute as": Me
   9. Set "Who has access": Anyone
   10. Click Deploy, authorize, and copy the URL
   11. Paste the URL into chatbot-config.js → GOOGLE_SHEETS_URL

   ─── COPY EVERYTHING BELOW THIS LINE INTO APPS SCRIPT ───
*/

/*
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date().toLocaleString(),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.service || '',
      data.date || '',
      data.notes || '',
      'New'
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Appointment recorded' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'DentaCare Appointment API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
*/

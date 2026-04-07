// GOOGLE SHEETS INTEGRATION SETUP
// Follow these steps to capture RSVPs in Google Sheets automatically

// STEP 1: Create a Google Sheet
// 1. Go to https://sheets.google.com
// 2. Click "Blank Spreadsheet"
// 3. Create columns:
//    - A: Timestamp
//    - B: Guest Name
//    - C: Attendance (Yes/No)
//    - D: Number of Guests
//    - H: Special messages
//    - I: Email
// 4. Name the sheet "RSVPs"
// 5. Add invited guest names under column B (starting from B2)

// STEP 2: Create Google Apps Script
// 1. Go to https://script.google.com
// 2. Create new project
// 3. Paste this code into the editor:

/*
function doGet(e) {
  const action = (e.parameter.action || '').toLowerCase();
  const sheet = SpreadsheetApp.getActiveSheet();

  if (action === 'guests') {
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) {
      return ContentService.createTextOutput(JSON.stringify({ guests: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const values = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
    const guests = values
      .map(row => String(row[0] || '').trim())
      .filter(Boolean)
      .map(name => ({ name }));

    return ContentService.createTextOutput(JSON.stringify({ guests }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents || '{}');

    const guestName = String(data.guestName || '').trim();
    const attendance = String(data.attendance || '').trim();
    const numberOfGuests = Number(data.numberOfGuests || 1);
    const specialMessage = String(data.specialMessage || '').trim();
    const email = String(data.email || '').trim();
    const timestamp = String(data.timestamp || new Date().toLocaleString());

    const lastRow = sheet.getLastRow();
    let rowToUpdate = -1;

    if (lastRow >= 2) {
      const nameValues = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
      for (let i = 0; i < nameValues.length; i++) {
        if (String(nameValues[i][0]).trim().toLowerCase() === guestName.toLowerCase()) {
          rowToUpdate = i + 2;
          break;
        }
      }
    }

    if (rowToUpdate === -1) {
      sheet.appendRow([timestamp, guestName, attendance, numberOfGuests, '', '', '', specialMessage, email]);
    } else {
      sheet.getRange(rowToUpdate, 1).setValue(timestamp);
      sheet.getRange(rowToUpdate, 3).setValue(attendance);
      sheet.getRange(rowToUpdate, 4).setValue(numberOfGuests);
      sheet.getRange(rowToUpdate, 8).setValue(specialMessage);
      sheet.getRange(rowToUpdate, 9).setValue(email);
    }
    
    return ContentService.createTextOutput(
      JSON.stringify({success: true})
    ).setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(
      JSON.stringify({success: false, error: error.toString()})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
*/

// STEP 3: Deploy as Web App
// 1. Click "Deploy" button (top right)
// 2. Select "New Deployment"
// 3. Type: "Web app"
// 4. Execute as: YOUR_EMAIL
// 5. Who has access: "Anyone"
// 6. Click "Deploy"
// 7. Copy the deployment URL (will look like):
//    https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec

// STEP 4: Add to Wedding Website
// Edit YOUR_PROJECT/config.json
// Add both URLs (same value):

/*
"googleSheetsUrl": "YOUR_GOOGLE_APPS_SCRIPT_URL",
"googleSheetsGuestsUrl": "YOUR_GOOGLE_APPS_SCRIPT_URL"
*/

// Now you get:
// ✅ Guest names loaded from Google Sheet
// ✅ RSVP updates in the same guest row
// ✅ Automatic tracking in columns A, B, C, D, H, I

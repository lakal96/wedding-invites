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
//    - E: Guest Names
//    - F: Dietary Preferences
//    - G: Other Dietary Info
//    - H: Special Requests
//    - I: Email
// 4. Name the sheet "RSVPs"

// STEP 2: Create Google Apps Script
// 1. Go to https://script.google.com
// 2. Create new project
// 3. Paste this code into the editor:

/*
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date().toLocaleString(),
      data.guestName,
      data.attendance,
      data.numberOfPlusOnes,
      data.plusOneNames.join('; '),
      data.dietaryPreferences,
      data.otherDietary,
      data.specialRequests,
      data.guestEmail
    ]);
    
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
//    https://script.googleapis.com/macros/d/YOUR_ID/userweb

// STEP 4: Add to Wedding Website
// Edit YOUR_PROJECT/js/script.js
// Find the submitRsvp() function
// Replace the Formspree section with:

/*
const googleSheetsUrl = "YOUR_GOOGLE_APPS_SCRIPT_URL";

const response = await fetch(googleSheetsUrl, {
  method: 'POST',
  body: JSON.stringify(submissionData)
});
*/

// STEP 5: Also use Formspree for Email Notifications
// 1. Go to https://formspree.io
// 2. Create a new form with your email
// 3. Copy the Form ID
// 4. Add to config.json: "formspreeId": "YOUR_ID"

// Now you get:
// ✅ Instant email notification
// ✅ Automatic Google Sheets entry
// ✅ Clean tracking in Sheets

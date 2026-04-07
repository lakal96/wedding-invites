# Google Sheets Integration Guide

This guide will help you connect your wedding RSVP form to a Google Sheet to automatically track guest responses.

## Overview

When guests submit the RSVP form, their responses are automatically sent to your Google Sheet.

---

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Create"** or open a new blank spreadsheet
3. Name it: **"Wedding RSVPs - Lakmi & Sukitha"**

## Step 2: Set Up Your Sheet Structure

Create column headers in row 1:

| A | B | C | D | H | I |
|---|---|---|---|---|---|
| Timestamp | Guest Name | Attendance (Yes/No) | Number of Guests | Special Messages | Email |

- **A1**: "Timestamp"
- **B1**: "Guest Name"
- **C1**: "Attendance (Yes/No)"
- **D1**: "Number of Guests"
- **H1**: "Special Messages"
- **I1**: "Email"

Add all invited guest names under **B2:B** before sharing your link.

## Step 3: Create a Google Apps Script

1. In your Google Sheet, go to **Tools → Script Editor**
2. Delete any existing code
3. Replace with this code:

```javascript
function doGet(e) {
  const action = (e.parameter.action || '').toLowerCase();
  const sheet = SpreadsheetApp.getActiveSheet();

  if (action === 'guests') {
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) {
      return jsonResponse({ guests: [] });
    }

    const values = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
    const guests = values
      .filter(row => String(row[0] || '').trim())
      .map(row => ({ name: String(row[0]).trim() }));

    return jsonResponse({ guests: guests });
  }

  return jsonResponse({ status: 'ok', message: 'Use ?action=guests to fetch guest names.' });
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents || '{}');

  const guestName = String(data.guestName || '').trim();
  const attendance = String(data.attendance || '').trim();
  const numberOfGuests = Number(data.numberOfGuests || 1);
  const specialMessage = String(data.specialMessage || '').trim();
  const email = String(data.email || '').trim();
  const timestamp = String(data.timestamp || new Date().toLocaleString());

  if (!guestName) {
    return jsonResponse({ status: 'error', message: 'Guest name is required.' });
  }

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

  return jsonResponse({ status: 'success', message: 'RSVP recorded successfully' });
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **"Save"** (Ctrl+S or Cmd+S)
5. Name the project: "Wedding RSVP Handler"
6. Click **"Save"**

## Step 4: Deploy as Web App

1. Click **"Deploy"** (blue button at top)
2. Click **"New Deployment"**
3. Select deployment type: **"Web app"**
4. Fill in these settings:
   - **Execute as**: Select your Google Account
   - **Who has access**: "Anyone"
5. Click **"Deploy"**
6. A dialog will appear with your **Deployment URL**
7. **Copy this URL** - you'll need it next

The URL looks like:
```
https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

## Step 5: Update Your Website Config

1. Open `config.json` in your repository
2. Find the line with `"googleSheetsUrl": ""`
3. Paste your deployment URL there

**Before:**
```json
"googleSheetsUrl": ""
```

**After:**
```json
"googleSheetsUrl": "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
"googleSheetsGuestsUrl": "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```

## Step 6: Verify It Works

1. Go to your wedding website
2. Scroll to the RSVP form
3. Fill in the form with test data:
   - Select a guest name
  - Choose attendance (Yes/No)
  - Enter number of guests
  - Add optional special message
   - Enter test email
4. Click **"✨ CONFIRM MY SEAT ✨"**
5. You should see a green success message
6. Check your Google Sheet - the data should appear!

## Troubleshooting

### Form doesn't submit
- Check browser console (F12 → Console tab)
- Verify deployment URL is correct in `config.json`
- Make sure your deployment is set to "Anyone" can access

### Data doesn't appear in Sheet
- Check that you granted permission when deploying the script
- Verify the column headers match exactly in A, B, C, D, H, I
- Try submitting the form again
- Check the script execution log in the Apps Script editor

### Permission errors
- Re-authorize the script deployment
- Go back to Script Editor → Deploy → New Deployment
- Select your account when prompted

## Security Notes

- Your Google Sheet URL is visible in `config.json` - this is okay since it's public and read-only
- Anyone can submit to your form, which is intended for your guests
- Guest responses are stored in your private Google Sheet (only you can view it)
- Delete test data from your Sheet before sharing the form with guests

## Next Steps

Once verified:
1. Update `config.json` with your actual guest list in the `guests` array
2. Share your website URL with guests
3. Monitor responses in your Google Sheet
4. Export data to Excel if needed

## Additional Features

### Get Attendance Count
In your Google Sheet, use formulas:
```
=COUNTIF(C:C,"Yes")
=COUNTIF(C:C,"No")
```

### Add Data Validation
To prevent errors, add data validation to your form dropdown and ensure guests are listed in `config.json`

### Export to Other Services
Google Sheets integrates with:
- Google Forms
- Gmail (send emails based on responses)
- Slack (notifications)
- Zapier (automate workflows)

---

## Questions?

Check the [README.md](README.md) for more information about the wedding website.

# 📊 RSVP Tracking: Google Sheets + Email Setup

Complete guide to capture RSVPs automatically in Google Sheets AND get email notifications!

## 🎯 How It Works

```
Guest submits form
      ↓
  [Your Website]
      ↓
    ├─→ Google Sheets (auto-sync) → You track on spreadsheet
    ├─→ Formspree → Email notification to you
    └─→ LocalStorage (backup)
```

---

## Step 1️⃣: Set Up Formspree (Email Notifications)

### Get Email Alerts for Each RSVP

1. Go to **https://formspree.io**
2. Click **Sign Up** (free account)
3. Click **New Form**
4. Enter your email address
5. Click **Complete Setup**
6. You'll see a **Form ID** (looks like: `abcd1234efgh5678`)
7. Copy this ID
8. Open `config.json` in your project
9. Paste into: `"formspreeId": "YOUR_ID_HERE"`
10. Save config.json

**That's it!** Now each RSVP = Email to you ✅

---

## Step 2️⃣: Set Up Google Sheets (Automatic Tracking)

### Create Your Google Sheet

1. Go to **https://sheets.google.com**
2. Click **New** → **Blank Spreadsheet**
3. Name it: `Wedding RSVPs - Lakmi & Sukitha`
4. Create these column headers (in row 1):

```
A: Timestamp
B: Guest Name
C: Attendance (Yes/No)
D: Number of Guests
E: Guest Names
F: Dietary Preferences
G: Other Dietary Info
H: Special Requests
I: Email
```

5. Share the sheet with yourself (optional - for easy access)

### Create Google Apps Script

**This is where the RSVP data flows automatically from your website!**

1. Go to **https://script.google.com**
2. Click **New Project**
3. Delete the default code
4. **Paste this exactly (copy all of it):**

```javascript
function doPost(e) {
  try {
    // Get the active sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheets()[0]; // First sheet
    
    // Parse incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Create new row with all data
    const newRow = [
      new Date().toLocaleString('en-IN'),  // Timestamp in Indian time
      data.guestName || '',
      data.attendance || '',
      data.numberOfPlusOnes || '0',
      (data.plusOneNames ? data.plusOneNames.join('; ') : ''),
      data.dietaryPreferences || '',
      data.otherDietary || '',
      data.specialRequests || '',
      data.guestEmail || ''
    ];
    
    // Add row to sheet
    sheet.appendRow(newRow);
    
    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Return error
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. Click **Save** (top left)
6. Name it: `Wedding RSVP Handler`
7. Click **Deploy** button (upper right)
8. Select **New Deployment**
9. Click the gear icon → **Web app**
10. Settings:
    - **Execute as:** Your email
    - **Who has access:** Anyone
11. Click **Deploy**
12. **IMPORTANT:** Copy the deployment URL (it's long and looks like):
    ```
    https://script.googleapis.com/macros/d/A1bc2D3eFg4HiJkLmNoPqRsTuVwXyZ/userweb
    ```

### Connect Website to Google Sheet

1. Open `config.json` in your project
2. Paste the URL into:
   ```json
   "googleSheetsUrl": "YOUR_LONG_URL_HERE"
   ```
3. Save!

**Now RSVPs = Auto-added to Google Sheet!** ✅

---

## Step 3️⃣: Test Everything!

1. Open **http://localhost:8000** in your browser
2. Fill out the RSVP form:
   - Select your name
   - Choose attendance
   - Add dietary preference
   - Click Submit

3. Check three places:

   **A) Google Sheet** (should see new row)
   - Go to https://sheets.google.com
   - Open your sheet
   - New entry at bottom!

   **B) Email Inbox** (should see email)
   - Check your email
   - Formspree email with all details

   **C) Browser Storage** (backup)
   - Press F12 in browser
   - Go to Application → Local Storage
   - See the RSVP data there too!

🎉 **All three working?** Perfect! You're ready to deploy!

---

## 📱 Share with Guests

Once deployed (GitHub Pages or Netlify):

```
Message on WhatsApp:

💕 You're invited to our wedding! 💕

Please RSVP here: [YOUR_WEBSITE_URL]

It only takes 30 seconds! 🎊
Looking forward to celebrating with you!
```

---

## 📊 Managing Your Spreadsheet

### Daily RSVP Monitoring

1. Open your Google Sheet whenever you want
2. New RSVPs appear automatically at the bottom
3. You can:
   - Add notes in extra columns
   - Color-code responses (Yes/No)
   - Create a dashboard at the top
   - Share with your co-organizer

### Sample Dashboard (Add to Top of Sheet)

```
ROW 1: Header info (can be hidden)
ROW 2-10: Dashboard stats

Total Responses: =COUNTA(B:B)-1
Attending: =COUNTIF(C:C,"yes")
Not Attending: =COUNTIF(C:C,"no")
Total Headcount: =SUM(D:D)
Vegetarian: =COUNTIF(F:F,"veg")
Vegan: =COUNTIF(F:F,"vegan")
Gluten-free: =COUNTIF(F:F,"gluten-free")
```

---

## 🔄 What Happens with Each RSVP

**Timeline:**

1. **0 seconds** - Guest opens link on WhatsApp
2. **30 seconds** - Guest fills form and clicks Submit
3. **1 second** - Data sent to:
   - ✅ Google Sheets (added as new row)
   - ✅ Formspree (email sent to you)
   - ✅ Browser LocalStorage (backup)
4. **5-30 minutes** - Email arrives in your inbox

---

## 💡 Pro Tips

### 1. Create a Summary Tab
Create a second sheet called "Summary"
```
Tracking sheet with formulas:
- Total RSVP count
- Attendance breakdown
- Dietary breakdown
- Share with vendors
```

### 2. Organize by Group
Add a column in Google Sheet:
- "Family Group"
- "Friend Circle"
- "Work Colleagues"

### 3. Easy Export
Share sheet with caterer/venue:
- Copy the URL
- They can view in real-time
- No need to send files!

### 4. Multi-admin Access
Share Google Sheet with co-organizers:
- Right-click sheet
- Click **Share**
- Add their emails
- All see updates in real-time

---

## ❌ Troubleshooting

### Google Sheet Not Getting Updates

**Check 1:** Google Apps Script deployed correctly?
- Go to https://script.google.com
- See your script?
- Click Deploy → see the URL?
- URL copied to config.json?

**Check 2:** Is the URL correct?
- Open config.json
- Is googleSheetsUrl filled in?
- No extra spaces?
- Exactly as copied?

**Check 3:** Browser console errors?
- Press F12
- Go to Console tab
- See any red errors?
- Share in Slack/email for help

### Email Not Arriving

**Check 1:** Formspree Form ID correct?
- Go to https://formspree.io
- See your form?
- Is Form ID matches config.json?

**Check 2:** Check spam folder
- Formspree emails sometimes go to spam
- Mark as "Not Spam"

### Test Submission Failed?

**Do this:**
1. Go to http://localhost:8000
2. Open browser console (F12)
3. Check for error messages
4. Try submitting simple form (no plus-ones)
5. Check browser console again

---

## 🔐 Privacy & Security

✅ **Your data is safe:**
- Only you own the Google Sheet
- Only you get emails
- Guests don't see other guests' info
- No data shared with third parties

---

## 📞 Questions Answered

**Q: Can guests edit the Google Sheet?**
A: No, they can't access it. Only you can.

**Q: What if I need to reset?**
A: Create a new sheet, new script, new URL. Takes 5 minutes.

**Q: Can I export RSVPs later?**
A: Yes! Download as Excel/CSV from Google Sheets.

**Q: What if a guest's RSVP doesn't sync?**
A: They'll see success message locally. Check browser console for errors. Always have LocalStorage backup.

**Q: Can I share the link with co-organizers?**
A: Yes! Google Sheet can be shared with Team. Each RSVP visible to all.

---

## 🚀 You're All Set!

- ✅ Formspree for email notifications
- ✅ Google Sheets for tracking
- ✅ LocalStorage for backup
- ✅ Real-time updates

**Next:** Deploy to GitHub Pages and share with guests! 🎉

---

**Testing locally?** Keep using http://localhost:8000
**Ready to deploy?** Push to GitHub and turn on Pages!

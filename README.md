# 💕 Wedding Invitation Website

A beautiful, romantic, and fully functional wedding invitation website that you can share via WhatsApp with all your guests. Built with HTML, CSS, and JavaScript - completely free to host!

## Features

✨ **Beautiful Design**
- Responsive and mobile-friendly
- Romantic, elegant styling
- Smooth animations and transitions

🎯 **Guest Management**
- Guest name dropdown selector
- Plus-one support (up to 4 additional guests)
- Custom name option if guest not in list

📝 **RSVP Form**
- Attendance confirmation (Yes/No)
- Dietary preferences (Veg, Vegan, Gluten-free, Halal, Kosher, Other)
- Special requests field
- Email for confirmation

📍 **Wedding Details**
- Couple photo display
- Wedding story section
- Date, time, and venue information
- Dress code guidance
- Event details

💾 **Data Management**
- Local storage backup (all RSVPs saved automatically)
- Optional: Formspree integration for email notifications
- CSV export functionality for RSVP management

## Quick Start

### 1. Customize Your Content

Edit `config.json` with your details:

```json
{
  "couple": {
    "bride": "Your Bride Name",
    "groom": "Your Groom Name",
    "photoUrl": "couple-photo.jpg"
  },
  "story": "Your love story here...",
  "weddingDate": "Saturday, May 15, 2026",
  "weddingTime": "Evening: 6:00 PM onwards",
  "venue": {
    "name": "Venue Name",
    "address": "Full Address"
  },
  "events": "Evening Reception & Dinner",
  "dressCode": "Semi-Formal / Indian Festive Attire",
  "formspreeId": ""
}
```

### 2. Add Your Couple Photo

1. Place your couple photo in the project folder
2. Name it `couple-photo.jpg` (or update the filename in config.json)
3. Ensure it's high quality for best display

### 3. Build Your Guest List

Edit `guests.json` and add all guest names:

```json
{
  "guests": [
    "Guest Name 1",
    "Guest Name 2",
    "Guest Name 3"
  ]
}
```

## Deployment Options (All FREE!)

### Option 1: Netlify (EASIEST - Recommended)

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub or email
3. Drag and drop your project folder
4. Your site is live! Get the link
5. Share via WhatsApp

**Result:** Each guest gets a unique link like `https://your-wedding.netlify.app`

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repo or upload folder
4. Your site is live!

### Option 3: GitHub Pages (Requires GitHub)

1. Create a [GitHub account](https://github.com)
2. Create a new repo named `your-username.github.io`
3. Upload your files
4. Access at `https://your-username.github.io`

### Option 4: Firebase Hosting

1. Go to [firebase.google.com](https://firebase.google.com)
2. Create a new project
3. Install Firebase CLI: `npm install -g firebase-tools`
4. Run: `firebase deploy`

## Setting Up Email Notifications (Optional)

By default, RSVPs are saved in the browser's localStorage. To get email notifications:

### Setup Formspree (FREE - 50 submissions/month)

1. Go to [formspree.io](https://formspree.io)
2. Sign up
3. Click "New Form"
4. Enter your email address
5. Get your Form ID (looks like: `abc12def`)
6. Add it to `config.json`:

```json
{
  "formspreeId": "your_form_id_here"
}
```

Now you'll receive an email for each RSVP submission!

## Managing RSVPs

### Method 1: Email Notifications (if using Formspree)
- RSVPs arrive in your email inbox
- Check details, notes, dietary preferences

### Method 2: Browser Storage
- Open the website in your browser
- Press `F12` to open Developer Tools
- Go to "Application" > "Local Storage"
- View all saved RSVPs
- Share with co-organizer by copying data

### Method 3: CSV Export
- From browser console, run: `exportRsvpsToCSV()`
- Download CSV file with all RSVPs
- Open in Excel for easy management

## Customization Tips

### Change Colors
Edit `css/styles.css`:
```css
:root {
    --primary-color: #d4a574;      /* Gold tone - change this */
    --secondary-color: #2c3e50;    /* Dark blue - change this */
    --accent-color: #e74c3c;       /* Red - change this */
}
```

### Add More Events
In `config.json`, update:
```json
"events": "Pre-Wedding Mehendi - 5:00 PM\nWedding Ceremony - 6:00 PM\nReception - 8:00 PM"
```

### Multiple Photos
Create additional sections in `index.html` and update CSS as needed

## WhatsApp Sharing Instructions

1. Get your live website URL (from Netlify/Vercel)
2. Test it works on mobile
3. Share in WhatsApp:

```
Hi everyone! 💕

You're invited to our wedding! 

Please RSVP here: [YOUR_LINK_HERE]

We can't wait to celebrate with you! 🎉
```

Each guest clicks the link and fills their RSVP directly.

## File Structure

```
wedding_invites/
├── index.html          # Main page
├── config.json         # Your wedding details (EDIT THIS!)
├── guests.json         # Guest list (EDIT THIS!)
├── couple-photo.jpg    # Your couple photo (ADD THIS!)
├── css/
│   └── styles.css      # Styling
├── js/
│   └── script.js       # Functionality
└── README.md           # This file
```

## Troubleshooting

### Photo Not Showing?
- Check filename matches `photoUrl` in config.json
- Ensure photo is in project root folder
- Try reloading the page

### Guest List Not Loading?
- Make sure guests.json is valid JSON
- Check browser console (F12) for errors
- Ensure all guest names are in quotes

### Form Not Submitting?
- Check internet connection
- Make sure formspreeId is correct (if using Formspree)
- Check browser console for error messages

### Link Sharing Issues on WhatsApp?
- Ensure your site is publicly accessible
- Test the link in a new browser before sharing
- Check that WhatsApp preview shows correctly

## Security & Privacy

✅ **Secure:**
- No sensitive data stored on server
- RSVPs encrypted in browser storage
- No cookies or tracking

## Support & Updates

- Push updates to live site instantly (within 2-3 minutes)
- All guests see latest information automatically
- No need to resend links

---

**Made with ❤️ for your special day! Congratulations! 🎊**

Questions? Check the browser console (F12) for any error messages.

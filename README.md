# 💕 Lakmi & Sukitha's Wedding Website

A beautiful, romantic, and fully functional wedding invitation website. Built with HTML, CSS, and JavaScript - completely free to customize and host!

## ✨ Features

✅ **Responsive Design**
- Works perfectly on desktop, tablet, and mobile
- Smooth parallax scrolling effects
- Elegant animations and transitions

🎯 **Guest Management**
- Guest name dropdown selector (dynamically populated)
- Easy RSVP confirmation
- Email collection for updates

📝 **RSVP Form**
- Guest name selection from invited list
- Attendance confirmation (Yes/No)
- Email address collection
- Automatic timestamp recording
- Real-time form validation

📊 **Google Sheets Integration**
- Responses automatically saved to Google Sheet
- Track attendance in real-time
- Export data for analysis

📱 **Mobile First**
- Optimized for all devices
- Touch-friendly interface
- Fast loading times

## 🚀 Quick Start

### 1. Clone & Setup
```bash
# Already installed in:
cd /Users/lakalgamage/repos/wedding_invites
python3 -m http.server 8001
```
Visit: **http://localhost:8001**

### 2. Edit Configuration
Open `config.json` and update:
```json
{
  "couple": {
    "bride": "Lakmi",
    "groom": "Sukitha"
  },
  "weddingDate": "Thursday, May 28, 2026",
  "weddingTime": "9:00 AM to 4:00 PM",
  "poruwaTime": "10:00 AM",
  "venue": { "name": "Saminro Grand Palace", "address": "Makola" },
  "guests": [
    { "name": "Guest Name 1" },
    { "name": "Guest Name 2" }
  ],
  "googleSheetsUrl": "https://script.google.com/macros/d/YOUR_SCRIPT_ID/userweb"
}
```

### 3. Add Your Photos

Replace these files with your own:
- `couple-photo.jpg` - Hero couple image (portrait orientation recommended)
- `photo1.jpg` - Gallery image
- `photo2.jpg` - Parallax background
- `photo4.jpg` - Registry section image

### 4. Setup Google Sheets

Follow the detailed guide: **[GOOGLE_SHEETS_INTEGRATION.md](GOOGLE_SHEETS_INTEGRATION.md)**

## 🔗 Website Sections

**Navigation** → OUR STORY | DETAILS | PROMISES

**Hero** - Couple names, tagline, call-to-action

**Timeline** - Sacred Poruwa Ceremony with 10:00 AM highlight

**Story** - "A Journey of Love & Tradition" narrative

**Gallery** - Three wedding photos

**Quote** - Inspirational message

**Travel & Stay** - 3 items: Getting There, Things to Do, Where to Stay

**RSVP Form** ⭐ - Main feature with Google Sheets integration

**Footer** - Contact information

## 📱 Mobile & Desktop

- **Desktop**: Side-by-side layout with large images
- **Tablet**: Adapted spacing and sizing
- **Mobile**: Responsive single-column, full-width images

Test mobile view: Press F12 in browser, click device icon

See [MOBILE_TESTING.md](MOBILE_TESTING.md) for complete checklist

## 🚀 Deployment

### GitHub Pages (Recommended)
```bash
git add .
git commit -m "Update wedding website"
git push origin main
```
Live at: **https://lakal96.github.io/wedding-invites**

### Netlify (Easiest)
1. Go to netlify.com
2. Sign up
3. Drag & drop your folder
4. Get instant live URL

### Vercel
Go to vercel.com, import your GitHub repo

## 📊 Google Sheets Data Sync

Your form automatically sends data to Google Sheets:

**Data Tracked:**
- Guest Name
- Attendance (Yes/No)
- Email
- Timestamp

**To Setup:**
1. Create Google Sheet
2. Deploy Google Apps Script
3. Paste URL into `config.json`
4. Test form submission
5. See responses appear in Table

[Full Setup Guide →](GOOGLE_SHEETS_INTEGRATION.md)

## ✅ Preparation Checklist

- [ ] Updated `config.json` with couple info
- [ ] Added guest list to `config.json`
- [ ] Replaced all 4 photos with your images
- [ ] Setup Google Sheets integration (optional but recommended)
- [ ] Tested form submission
- [ ] Tested on mobile device
- [ ] Pushed to GitHub / Deployed to hosting
- [ ] Shared URL with guests

## 🛠️ Technology

- **HTML5** - Content structure
- **CSS3** - Responsive design, animations
- **JavaScript** - Form handling, interactions, scroll effects
- **Google Sheets** - RSVP data storage

No frameworks, no backend server needed - completely static!

## 📞 Support

- **Mobile Issues?** → See [MOBILE_TESTING.md](MOBILE_TESTING.md)
- **Google Sheets?** → See [GOOGLE_SHEETS_INTEGRATION.md](GOOGLE_SHEETS_INTEGRATION.md)
- **Customization?** → Edit `index.html`, `config.json`, or `css/styles.css`

## 📝 File Guide

| File | Purpose |
|------|---------|
| `index.html` | Main website content |
| `config.json` | Your settings (EDIT HERE) |
| `css/styles.css` | All styling & responsive design |
| `js/script.js` | Form handling & animations |
| `couple-photo.jpg` | Hero image (portrait) |
| `photo1.jpg`, `photo2.jpg`, `photo4.jpg` | Gallery images |

## 🎉 Ready to Share!

Your website is ready to customize and share:

1. **Customize**: Update `config.json` and add photos
2. **Test**: View locally and on mobile
3. **Deploy**: Push to GitHub / Netlify
4. **Share**: Send URL to your guests via email/WhatsApp

**Website URL**: https://lakal96.github.io/wedding-invites

**Good luck with your wedding! 💍✨**

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
# wedding-invites

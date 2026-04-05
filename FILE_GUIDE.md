# 📁 Project Structure & File Guide

```
wedding_invites/
│
├── 📄 index.html                    ← Main webpage (don't edit)
├── 📄 config.json                   ← YOUR WEDDING DETAILS (EDIT THIS! 🎯)
├── 📄 guests.json                   ← YOUR GUEST LIST (EDIT THIS! 🎯)
├── 📄 couples-photo.jpg             ← ADD YOUR PHOTO (🎯)
│
├── 📁 css/
│   └── 📄 styles.css                ← Beautiful styling (don't edit)
│
├── 📁 js/
│   └── 📄 script.js                 ← Form functionality (don't edit)
│
├── 📋 README.md                     ← Full documentation
├── 📋 GETTING_STARTED.md            ← Simple setup guide
├── 📋 SETUP.md                      ← Quick start (5 minutes)
├── 📋 LAUNCH_CHECKLIST.md           ← Before you go live
├── 📋 MANAGING_300_GUESTS.md        ← RSVP management guide
├── 📋 TECH_STACK.md                 ← Technical details
│
├── 🐍 csv_to_guests.py              ← Convert CSV to guest list
├── 📄 config.template.json          ← Reference template
├── 📄 netlify.toml                  ← Netlify configuration
└── 📄 .gitignore                    ← Git ignore file
```

## Which Files To Edit (The Important Ones!)

### 1. **config.json** 🎯 MUST EDIT
Your wedding details go here:
- Couple names
- Wedding story (2-3 sentences)
- Date and time
- Venue name and address
- Dress code
- Event details

**Edit with:** Notepad, Word, VS Code, any text editor
**Format:** JSON (don't worry, template provided)

### 2. **guests.json** 🎯 MUST EDIT
All 300 guest names go here, sorted alphabetically

**Format:**
```json
{
  "guests": [
    "Aarav Kumar",
    "Priya Singh",
    "Rohan Patel"
  ]
}
```

**Can't organize 300 names?**
Use the Python script:
```bash
python3 csv_to_guests.py your_guest_list.csv
```

### 3. **couple-photo.jpg** 🎯 MUST ADD
Your best couple photo (portrait orientation recommended)
- Rename to: `couple-photo.jpg`
- Or update filename in config.json
- Place in root folder (same level as index.html)

## Files NOT To Edit

These work perfectly as-is:

| File | Purpose | Why Don't Edit |
|------|---------|---|
| index.html | Main page structure | Complex markup |
| css/styles.css | Styling & design | Carefully crafted |
| js/script.js | Form & interactivity | Critical functionality |
| netlify.toml | Deployment settings | Pre-configured |

**Exception:** If you know HTML/CSS/JS, feel free to customize! 😊

## Documentation Files

### For Getting Started
- **GETTING_STARTED.md** ← Start here (simple guide)
- **SETUP.md** ← 5-minute quick start
- **README.md** ← Complete documentation

### For Launch
- **LAUNCH_CHECKLIST.md** ← Before going live
- **MANAGING_300_GUESTS.md** ← RSVP management

### For Tech Details
- **TECH_STACK.md** ← How it works technically

## Deployment Files

| File | Purpose |
|------|---------|
| netlify.toml | Netlify configuration |
| .gitignore | Git configuration |
| csv_to_guests.py | Helper script for guest list |

## How It All Works Together

```
1. Person visits: https://your-wedding.netlify.app

2. Browser loads:
   ├─ index.html (structure)
   ├─ css/styles.css (beautiful design)
   ├─ js/script.js (makes it work)
   ├─ config.json (your details)
   └─ guests.json (guest list)

3. Guest sees:
   ├─ Your couple photo
   ├─ Your love story
   ├─ Wedding details
   └─ RSVP form

4. Guest fills form → RSVP submitted → You get data ✅
```

## File Size Reference

| File | Size | Notes |
|------|------|-------|
| index.html | ~12 KB | HTML structure |
| styles.css | ~15 KB | All styling |
| script.js | ~8 KB | All functionality |
| config.json | <1 KB | Your details |
| guests.json | ~10-20 KB | 300 names |
| Your photo | 500 KB - 2 MB | Depends on image |
| **Total** | **~1.5-2.5 MB** | Super fast! ⚡ |

All files are lightweight = instant loading!

## Sample Content

### config.json Example
```json
{
  "couple": {
    "bride": "Priya Sharma",
    "groom": "Vikram Patel",
    "photoUrl": "couple-photo.jpg"
  },
  "story": "We met in college during a philosophy debate and instantly connected over shared dreams. Five years later, here we are - ready to build our forever together!",
  "weddingDate": "Saturday, May 15, 2026",
  "weddingTime": "6:00 PM onwards",
  "venue": {
    "name": "Grand Ballroom, Marriott New Delhi",
    "address": "123 Diplomat Drive, New Delhi 110001"
  },
  "events": "Evening Ceremony at 6:00 PM | Dinner at 8:00 PM",
  "dressCode": "Traditional Indian Festive Attire",
  "formspreeId": ""
}
```

### guests.json Example  
```json
{
  "guests": [
    "Aarav Kumar",
    "Abhinav Singh",
    "Akshay Patel",
    "Aman Verma",
    ...
    "Zara Ahmed",
    "Zoya Khan"
  ]
}
```

## Quick Reference

**You need to edit:**
1. ✏️ config.json
2. ✏️ guests.json  
3. 📸 Add couple-photo.jpg

**Everything else is ready to go!** ✅

---

**That's it! Just 3 files to worry about, and you're done for launch!** 🚀

Next step → Read **GETTING_STARTED.md** for detailed instructions!

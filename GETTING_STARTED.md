# 👰💍 Getting Started - For Everyone (Even Non-Tech)

## What You're Building

A **beautiful wedding webpage** that you'll share with guests via WhatsApp. When they click the link, they see:
- Your couple photo 💕
- Your love story
- Wedding date, time & venue
- An easy RSVP form

**Cost: $0** ✅

---

## The 3 Simple Steps

### STEP 1: Update Your Details (5 minutes)

You need to edit ONE file: `config.json`

**How to edit:**
1. Open `config.json` with any text editor (Notepad, Word, etc.)
2. Find these lines and replace with YOUR info:

```
"bride": "Bride Name" → "bride": "Priya Sharma"

"groom": "Groom Name" → "groom": "Vikram Patel"

"story": "Love story..." → "story": "We met in college and fell in love over coffee dates. 
Now we're starting our forever journey together!"

"weddingDate": "Saturday, May 15, 2026" → Your actual date

"weddingTime": "6:00 PM onwards" → Your actual time

"venueName": "Venue Name" → "Grand Ballroom, Marriott New Delhi"

"venueAddress": "Full Address" → "123 Delhi Marg, New Delhi 110001"

"dressCode": "Semi-Formal" → "Traditional Indian Festive Wear"
```

3. **Save the file**

**That's it!** ✅

---

### STEP 2: Add Your Couple Photo (2 minutes)

1. Find your best couple photo on your computer
2. **Copy it to this project folder** (same folder where you see index.html)
3. **Rename it to: `couple-photo.jpg`** 
   - Or update `config.json` if you named it something else
4. Done! ✅

**Photo tips:**
- Portrait orientation works best (taller than wide)
- 1000x1200 pixels minimum size
- JPG or PNG format

---

### STEP 3: Add Your Guest List (5-10 minutes)

Open `guests.json` and replace the sample names with your 300 guests.

**Example:**
```json
{
  "guests": [
    "Aarav Kumar",
    "Priya Singh",
    "Rohan Patel"
  ]
}
```

**Easiest way (if you have Excel):**
1. Open your guest list in Excel
2. Copy all guest names (Column A)
3. Paste into `guests.json` between the quotes
4. Format should look like the example above
5. Save

**Don't worry about perfect formatting!** Just make sure each name is in quotes and separated by commas.

---

## Publishing to the Internet (The Easy Part!)

### Option A: Netlify (RECOMMENDED - 30 seconds)

1. Go to **https://netlify.com**
2. Click **Sign Up** (use email or GitHub)
3. After login, look for **"Sites"** → **"Add new site"**
4. **Drag and drop your entire project folder** into the marked area
5. Wait 30 seconds...
6. ✅ **Your site is LIVE!** You'll see a URL like:
   ```
   https://magical-name-12345.netlify.app
   ```

That's your shareable link!

### Option B: Vercel (Also Easy - 1 minute)

1. Go to **https://vercel.com**
2. Click **New Project**
3. Upload your folder or connect GitHub
4. Click **Deploy**
5. Get your link and share!

---

## Sharing with Your Guests (The Fun Part!)

### On WhatsApp:

Send this message to your guest groups:

```
💕 You're Invited! 💕

Dear Friends & Family,

We're thrilled to invite you to our wedding!

Please RSVP here: [PASTE YOUR LINK HERE]

Just click the link, find your name, and let us know if you can make it!

Can't wait to celebrate with you! 🎉

Love,
[Your Names]
```

### They'll see:
- Photo of you two
- Your love story
- Wedding details
- A form to RSVP

**It's that simple!** ✅

---

## Monitoring RSVPs

### Daily RSVP Checking:

#### Option 1: Via Email (If you set up Formspree)
- RSVPs come to your email inbox
- Check whenever you want
- Easy to track

#### Option 2: Via Browser (Always works)
1. Open your wedding website
2. Press **F12** or **Fn + F12** (opens developer tools)
3. Click **"Application"** or **"Storage"**
4. Click **"Local Storage"**
5. You'll see all guest RSVPs!

#### Option 3: Download List
- From browser console, you can export to Excel
- Share with co-organizer

---

## Making Changes Later

### Updating Info (e.g., Time Changed):

1. Edit `config.json`
2. Go to your Netlify/Vercel site
3. Drag & drop your folder again
4. Changes live in 30 seconds!
5. **All guests automatically see the update** ✅

No need to resend links!

---

## Customization (Optional)

### Changing Colors:

Want a different color scheme?

Edit `css/styles.css`:
```CSS
--primary-color: #d4a574;      /* Gold - change to your color */
--secondary-color: #2c3e50;    /* Navy - change to your color */
```

Use color names like: `#FF69B4` (pink), `#FFD700` (gold), `#008000` (green)

[Get colors here: colorpicker.com](https://www.colorpicker.com)

---

## Common Questions

**Q: Will guests' phones show the site properly?**
A: Yes! It works perfectly on iPhones, Android, all phones.

**Q: Can guests see other guests' info?**
A: No! Everyone gets their own personal page.

**Q: What if a guest shares the link with someone?**
A: They can RSVP too! That's fine.

**Q: I updated info, but guests don't see it?**
A: Make sure you re-uploaded to Netlify/Vercel.

**Q: My guest list has 300 names - is that okay?**
A: Perfect! The site handles unlimited guests.

**Q: Can I add more photos later?**
A: Yes! Update config.json and re-upload.

**Q: What if I made a typo in someone's name?**
A: Edit guests.json and upload again. Takes 30 seconds.

---

## Troubleshooting

### Photo not showing?
- Check file name is exactly `couple-photo.jpg`
- Make sure it's in the project folder
- Refresh the website

### Guest list not loading?
- Open guests.json
- Check commas are correct
- Each name should be in quotes
- Look for red error messages in browser (press F12)

### Website looks weird on phone?
- This is unusual, but try:
- Hard refresh: Hold Ctrl/Cmd + Shift + R
- Or use private/incognito browser

### Links not working on WhatsApp?
- Test link in regular browser first
- Make sure Netlify/Vercel deployment finished
- Copy the full URL with `https://`

---

## You're All Set! 🎊

Follow these 3 steps and you're done:
1. ✅ Update config.json
2. ✅ Add couple photo
3. ✅ Add guest list
4. ✅ Deploy to Netlify
5. ✅ Share link on WhatsApp

**That's it!** Your wedding website is ready to share with 300 guests.

Best of luck! 💕

---

**Questions or get stuck?**
- Check the README.md for more details
- This guide covers 99% of questions!
- Contact the developer who set this up for you

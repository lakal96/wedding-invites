# 🚀 Quick Setup Guide (5 Minutes)

## Step 1: Prepare Your Content

### Edit config.json
Open `config.json` and update these fields:

- **bride**: Your bride's name
- **groom**: Your groom's name  
- **photoUrl**: Name of your couple photo file (e.g., "couple-photo.jpg")
- **story**: Your love story (2-3 sentences)
- **weddingDate**: Date (e.g., "Saturday, May 15, 2026")
- **weddingTime**: Time (e.g., "Evening: 6:00 PM onwards")
- **venue.name**: Venue name
- **venue.address**: Full address with city
- **events**: What's happening (e.g., "Evening Ceremony & Reception")
- **dressCode**: Dress code (e.g., "Semi-Formal / Indian Festive")

### Edit guests.json
Replace the sample guest list with ALL your 300 guests. Format:
```json
{
  "guests": [
    "Guest 1 Full Name",
    "Guest 2 Full Name",
    "Guest 3 Full Name"
  ]
}
```

**Tip:** Keep names alphabetically sorted for easy finding.

## Step 2: Add Your Couple Photo

1. Download your best couple photo (JPG or PNG)
2. Move it to the project folder (same folder as index.html)
3. Recommended size: 1200x1200px or larger
4. Name it: `couple-photo.jpg` (or update photoUrl in config.json)

## Step 3: Choose Hosting & Deploy

### Best Option: Netlify (Drag & Drop - 1 minute)

1. Visit https://netlify.com
2. Sign up (free)
3. Click "Sites" from top menu
4. Look for "Deploys" section
5. **Drag and drop your entire project folder** into the marked area
6. Wait 30 seconds...
7. Your site is LIVE! Get the URL
8. Share via WhatsApp!

✅ **Netlify Features:**
- Free forever
- Automatic HTTPS
- Can update anytime (just drag new folder)

### Alternative: Vercel

1. Visit https://vercel.com
2. Sign up (free)
3. Click "New Project"
4. Select "Add GitHub App" or drag folder
5. Deploy in seconds

## Step 4: Test on Your Phone

1. Copy your website URL
2. Open it on your phone
3. Test the form submission
4. Try different screen sizes
5. Send yourself a test WhatsApp message with the link

## Step 5: Share with Guests

Send this WhatsApp message to your groups:

```
💕 You're invited to our wedding! 💕

Please confirm your attendance by:
[YOUR_WEBSITE_URL_HERE]

We can't wait to see you! 🎉
```

---

## Getting Email Notifications (Optional)

Want to receive each RSVP in your email?

1. Go to https://formspree.io
2. Click "New Form"
3. Enter your email address  
4. Complete setup
5. Copy your Form ID (e.g., `abc12def`)
6. Paste in config.json: `"formspreeId": "abc12def"`
7. Test by submitting RSVP - should get email!

---

## FAQ - Quick Answers

**Q: How many guests can I add?**
A: Unlimited! Just add all 300 to guests.json

**Q: Will it work on WhatsApp links?**
A: Yes! The website works perfectly when opened from WhatsApp

**Q: Can guests change their RSVP?**
A: They can submit again - just record the latest submission

**Q: What if I need to update info later?**
A: Edit config.json, redeploy, and all guests see it instantly

**Q: Can guests see other guests' info?**
A: No, it's just their personal page

**Q: How do I get all RSVPs in one place?**
A: Use Formspree (emails) or export from browser storage

---

## All Done! 🎊

Your wedding website is live! Now:

1. ✅ Test the link yourself
2. ✅ Share on WhatsApp
3. ✅ Monitor RSVPs as they come in
4. ✅ Enjoy the celebrations!

**Need updates?** Just edit config.json, re-upload to Netlify, and everyone sees changes instantly!

---

## Netlify Update Tips

Each time you need to update:
1. Edit config.json or guests.json
2. Go to Netlify
3. Drag & drop your entire project folder again
4. Changes live in 30 seconds!

**That's it! You're all set for your big day!** 💕

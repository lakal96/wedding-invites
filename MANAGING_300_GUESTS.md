# Handling 300 Guests - Practical Guide

## Full Guest List Format

Your `guests.json` should look like this with 300 guests:

```json
{
  "guests": [
    "Name One",
    "Name Two",
    "Name Three",
    ...
    "Name Three Hundred"
  ]
}
```

## Generating Guest List from Excel/Spreadsheet

### Method 1: Simple Copy-Paste (Easiest)

1. Open your guest list in Excel/Google Sheets
2. Copy the entire column of names
3. Go to **guests.json** in your project
4. Paste between the square brackets
5. Clean up formatting (remove extra commas/quotes at end)
6. Replace quotes and add commas as needed

### Method 2: Using Python Script

If you have names in `guests.csv`:

```bash
python3 csv_to_guests.py guests.csv
```

This automatically:
- Reads your CSV file
- Formats everything correctly
- Removes duplicates
- Sorts alphabetically
- Generates perfect guests.json

### Method 3: Online JSON Generator

1. Go to [jsonformatter.org](https://jsonformatter.org)
2. Format your guest list as:
   ```
   ["Name One", "Name Two", "Name Three"]
   ```
3. Use their tool to format beautifully
4. Copy into guests.json

---

## Managing 300 RSVPs

### Real-time Tracking Spreadsheet

Create a spreadsheet with columns:
- Guest Name ✓
- Status (Attending/Not attending)
- Plus-ones (0-4)
- Dietary Restrictions
- Notes
- Email received

As RSVPs come in, copy them to your tracking sheet.

### Categories for Organization

**Import to share with vendors:**

1. **Headcount**
   - Total confirmed attending
   - Total plus-ones
   - Total NOT attending

2. **Dietary Breakdown**
   - Vegetarian count
   - Vegan count
   - Gluten-free count
   - Other restrictions

3. **Confirmation Status**
   - Pending responses → send reminders
   - Confirmed
   - Declined

### Setting Reminders

**RSVP Timeline:**
- Day 1: Send invites to WhatsApp
- Day 7: First reminder (50% usually respond)
- Day 14: Second reminder (more respond)
- Day 21: Final reminder ("Last chance!")
- Day 28-30: Finalize headcount

### Weekly Summary Template

```
RSVP SUMMARY - Week of [Date]

Total Guests: 300
Responses Received: ____ (____%)

Attending: ____
Not Attending: ____
Pending: ____

Dietary Restrictions:
- Vegetarian: ____
- Vegan: ____
- Gluten-free: ____
- Other: ____

Important Notes:
- [Any special requests]
- [Any family groups]
- [Any VIPs]
```

---

## Managing Dietary Data

### Dietary Preference Categories

Expected breakdown (typical):
- No restrictions: ~50%
- Vegetarian: ~30%
- Vegan: ~10%
- Gluten-free: ~5%
- Other (Halal, Kosher, etc): ~5%

### Extract by Diet Type

Open browser console and run:
```javascript
const rsvps = JSON.parse(localStorage.getItem('weddingRsvps'));
const veg = rsvps.filter(r => r.dietaryPreferences === 'veg');
console.log('Vegetarians:', veg.map(v => v.guestName));
```

Share this list with catering team.

---

## Communication Templates

### First Reminder (Day 7)

```
Hi everyone! 👋

Hope you've seen our wedding invite! 💕

If you haven't already, please RSVP here:
[YOUR_LINK]

We need to finalize headcount soon. Thanks! 🎊
```

### Final Reminder (Day 21)

```
Last call for RSVPs! 📢

We need your response by [DATE] to finalize catering and arrangements.

If you haven't RSVPed yet, click here:
[YOUR_LINK]

Thank you! 💕
```

### Thank You Message (Post-Wedding)

```
Thank you so much for celebrating with us! 💕

We had an amazing time with you all. Special thanks to everyone who helped make our day unforgettable! 🎊
```

---

## Handling Issues with 300 Guests

### Guest Can't Find Their Name

1. Check if there are spelling variations
2. Ask them to use "custom name" option on form
3. Update guests.json for future clarity
4. Re-upload to Netlify (changes live in 30 seconds)

### Bulk Name Additions

If you discover a batch of missing guests:

1. Add all names to guests.json
2. Sort the list (A-Z)
3. Re-upload to Netlify
4. No need to resend links - same URL works
5. New guests can now find their names

### Managing Group RSVPs

Some groups might coordinate together. To handle:
- Don't combine RSVPs (one per person is best)
- Send link to each person individually
- Or: Send to group representative, they share link with their family
- You'll see duplicates/mistakes - just trust the last submission

---

## Data Export for Vendors

### Export Timeline

**2 weeks before wedding:**
- Share dietary breakdown with caterer
- Share headcount with venue

**1 week before:**
- Share final confirmed count
- Share table arrangement preferences

**3 days before:**
- Share final dietary list
- Final headcount confirmation
- Any last-minute changes

### Export Format for Caterer

```
DIETARY REQUIREMENTS - 2-3 days before event

TOTAL HEADCOUNT: 350 (300 guests + 50 plus-ones)

VEGETARIAN: 120 people
VEGAN: 35 people
GLUTEN-FREE: 18 people
HALAL: 12 people
OTHER: 10 people
NO RESTRICTIONS: 155 people

SPECIAL REQUESTS:
- Jayesh Patel (Nut allergy)
- Priya Singh (No spicy food)
- [etc]
```

### Export Format for Seating

```
TABLE ARRANGEMENTS

Table 1 (capacity 8):
1. Aarav Kumar (2)
2. Priya Singh (1)
3. Rohan Patel (3)
4. [continue...]

Table 2:
[continue...]
```

---

## Backup & Security

### Backup RSVP Data

**Weekly:**
1. Open website in browser
2. Press F12 → Application → Local Storage
3. Copy all RSVP data
4. Save to text file with date: `RSVPs_2026_04_15.txt`
5. Store in cloud (Google Drive, OneDrive, Dropbox)

### Create CSV for Safe Storage

```javascript
// In browser console, run:
const rsvps = JSON.parse(localStorage.getItem('weddingRsvps'));
console.log(JSON.stringify(rsvps, null, 2));
// Copy output and save to file
```

### Weekly Archive

Create backups every 3-4 days:
- `RSVPs_Week1.csv`
- `RSVPs_Week2.csv`
- etc.

This protects against accidental deletion or browser cache clearing.

---

## Analytics for Fun!

Track these metrics:

```
RSVP Analytics:
- Response rate: ___%
- Attendance rate: ___%
- Plus-one rate per guest: ____
- Most popular dietary choice: ________
- Time to respond (average): ___ days
- Peak RSVP time: _________ (morning/evening)
```

---

## Troubleshooting 300-Guest Issues

### Issue: Website feels slow with 300 names

**Solution:** 
- Guest list loads fine (it's just text)
- If dropdown feels slow, this is browser, not website
- Try refreshing browser

### Issue: Some guests get duplicated RSVPs

**Solution:**
- This is normal - they might submit twice
- Keep the **latest** submission
- Discard earlier versions

### Issue: Need to remove a guest quickly

**Solution:**
1. Edit guests.json
2. Remove that name
3. Re-upload to Netlify (30 seconds)
4. That guest will see "name not found" - they can use custom entry

### Issue: Dietary change mid-wedding

**Solution:**
1. Check your backup CSV
2. Accept verbal updates if last minute
3. Communicate with caterer immediately

---

## Success Checklist for 300 Guests

- [ ] All 300 names formatted correctly in guests.json
- [ ] Weekly RSVP tracking spreadsheet created
- [ ] Backup system in place (weekly exports)
- [ ] Reminder messages scheduled (Day 7, 14, 21)
- [ ] Dietary breakdown tracked
- [ ] Vendor communication plan set
- [ ] Table arrangement planning started
- [ ] Final headcount date set
- [ ] Contingency plan for no-shows

---

**You've got this! 300 guests is totally manageable with this system!** 💕

Any questions? Check README.md or GETTING_STARTED.md!

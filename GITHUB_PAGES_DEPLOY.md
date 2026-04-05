# 🚀 Deploy to GitHub Pages (Free!)

Complete guide to deploy your wedding website to GitHub Pages for free, forever!

---

## What is GitHub Pages?

- ✅ **Free** - No cost, ever
- ✅ **Unlimited** - No traffic limits
- ✅ **Fast** - Global CDN (super quick loads)
- ✅ **Secure** - HTTPS by default
- ✅ **Easy updates** - Just push code
- ✅ **Permanent link** - Same URL forever

---

## Step 1: Create GitHub Account (5 minutes)

1. Go to **https://github.com/signup**
2. Enter your email
3. Create password
4. Verify email
5. Done! ✅

---

## Step 2: Create Repository

1. Go to **https://github.com/new**
2. Fill in:
   - **Repository name:** `wedding-invites`
   - **Description:** "Wedding invitation website for Lakmi & Sukitha"
   - **Public** ← Important!
3. Click **Create repository**

---

## Step 3: Upload Your Project

### Option A: Using Command Line (Fastest)

Open Terminal and run these commands:

```bash
# Go to your project folder
cd /Users/lakalgamage/repos/wedding_invites

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial wedding website"

# Rename branch to main
git branch -M main

# Add GitHub as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/wedding-invites.git

# Push to GitHub
git push -u origin main
```

**Go to your repo on GitHub and you should see all files!** ✅

### Option B: GitHub Web Upload (No Terminal)

1. Go to your new repo on GitHub
2. Click **Add file** → **Upload files**
3. Drag & drop your entire project folder
4. Click **Commit changes**

---

## Step 4: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** (right side)
3. Click **Pages** (left menu)
4. Under **Source:**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

**Wait 1-2 minutes...** Your site is deploying! ⏳

---

## Step 5: Get Your Public URL

After 1-2 minutes:

1. Refresh the Settings → Pages
2. You'll see a message like:
   ```
   Your site is published at: 
   https://YOUR_USERNAME.github.io/wedding-invites
   ```

**That's your public link!** 🎉

---

## Test Your Site

1. Click the link
2. Your wedding website should load!
3. Form should work
4. Everything should work perfectly

---

## Share on WhatsApp! 📱

```
Copy this link and share:

https://YOUR_USERNAME.github.io/wedding-invites

Send on WhatsApp to your guests:
"Please RSVP here: [YOUR_LINK]"
```

---

## ✏️ Making Updates

**You need to update something?**

### From Terminal:

```bash
cd /Users/lakalgamage/repos/wedding_invites

# Make your changes to files (config.json, guests.json, etc.)

# Then:
git add .
git commit -m "Updated guest list and venue info"
git push
```

**Changes live in 1-2 minutes!** ✅

### Without Terminal:

1. Go to your repo on GitHub
2. Click the file you want to edit
3. Click the ✏️ (edit) icon
4. Make changes
5. Click **Commit changes**

**Changes live in 1-2 minutes!** ✅

---

## 🆚 GitHub Pages vs Netlify

| Feature | GitHub Pages | Netlify |
|---------|---|---|
| **Cost** | Free | Free |
| **Setup** | Easy | Very easy |
| **Updates** | Git push | Drag & drop or git |
| **URL** | github.io/wedding (longer) | custom-name.netlify.app (shorter) |
| **Automatic deploys** | Yes (if using git) | Yes (if connected) |
| **Ease** | Requires git knowledge | No git needed |

**If you like terminal:**
→ Use GitHub Pages

**If you prefer GUI:**
→ Use Netlify (drag & drop)

**My recommendation for you:**
Since we just set up git, **use GitHub Pages!** Everything already configured.

---

## 📂 Repository Structure on GitHub

Your GitHub repo will show:

```
wedding-invites/
├── index.html
├── config.json
├── guests.json
├── couple-photo.jpg
├── css/
├── js/
├── README.md
└── [other docs]
```

All your files visible on GitHub! ✅

---

## 🔐 Keep Your Code Private (Optional)

By default, anyone can see your code. To make it private:

1. Go to repo → **Settings**
2. Scroll down → **Change repository visibility**
3. Select **Private**
4. Click **Change visibility**

**Note:** Even if private, the website is still public!

---

## 🌱 Branching (Advanced)

Want to test changes before going live?

```bash
# Create dev branch
git checkout -b dev

# Make changes
# ... edit files ...

# Push dev branch
git add .
git commit -m "Testing new feature"
git push origin dev

# When ready, merge to main
git checkout main
git merge dev
git push
```

---

## 🆘 Troubleshooting

### Site Not Showing Up After 5 Minutes

1. Refresh the page (hard refresh: Cmd+Shift+R)
2. Check Settings → Pages (is it enabled?)
3. Is your repo **public**?
4. Check if there are any build errors (they show in Pages settings)

### Getting 404 Error

1. Make sure you have `index.html` at root
2. Check the URL is correct:
   ```
   ✅ https://YOUR_USERNAME.github.io/wedding-invites
   ❌ https://YOUR_USERNAME.github.io/wedding_invites (underscore!)
   ```

### Changes Not Showing Up

1. Hard refresh browser: **Cmd+Shift+R**
2. Clear browser cache
3. Try private/incognito window
4. Check `git push` completed successfully

### Want a Shorter URL?

Add custom domain:
1. Buy a domain (e.g., lakmi-sukitha-wedding.com)
2. Go to repo → Settings → Pages
3. Add domain name
4. Follow DNS instructions

**Cost:** ~$10/year for domain

---

## 💪 You're Now a Developer!

You've just:
- ✅ Created a GitHub account
- ✅ Created a repository
- ✅ Deployed a website
- ✅ Made it public on the internet

**Congratulations!** 🎉

---

## 📞 Next Steps

1. **Test locally** - Open http://localhost:8000
2. **Check everything works**
3. **Push to GitHub** (using commands above)
4. **Wait 2 minutes**
5. **Share link with friends!**

---

## 🎊 You're Live!

Your wedding website is now:
- 🌐 On the internet
- 📱 Works on all phones
- ⚡ Super fast
- 🔒 Secure with HTTPS
- 💰 Completely free
- 🎯 Ready for 300 guests

**Share your GitHub Pages URL with 300 guests!** 💕

---

## Pro Tips

### Update Tracking
Commit messages tell your story:
```
git commit -m "Updated venue address"
git commit -m "Added final 100 guests"
git commit -m "Changed wedding time"
```
All visible in GitHub history!

### Collaborate
Invite a co-organizer:
1. Go to repo → Settings → Collaborators
2. Add their email
3. They can push changes too!

### Analytics
See how many people visited:
1. Repo → Settings → Pages
2. Shows visitor stats!

---

**Everything working?** Great! Now go celebrate! 🎉

**Any issues?** Keep this guide handy for reference!

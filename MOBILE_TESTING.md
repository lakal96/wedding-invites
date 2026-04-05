# Mobile Responsiveness Testing Guide

This document helps you verify that your wedding website displays correctly on mobile devices.

## Quick Mobile Test

1. Open the website in your browser
2. Press **F12** (or **Cmd+Option+I** on Mac) to open Developer Tools
3. Click the **device icon** (or press **Ctrl+Shift+M** / **Cmd+Shift+M** on Mac)
4. Check different screen sizes:
   - **iPhone SE**: 375 × 667px
   - **iPhone 12/13**: 390 × 844px
   - **iPhone 14 Pro Max**: 430 × 932px
   - **iPad**: 768 × 1024px
   - **Tablet**: 1024 × 768px

## Mobile Checklist

### Navigation & Header ✓
- [ ] Hamburger menu appears on screens < 570px
- [ ] Menu opens/closes smoothly on tap
- [ ] "L&S" logo is visible and readable
- [ ] Navigation items are touchable (large buttons)

### Hero Section ✓
- [ ] Portrait image displays below text on mobile
- [ ] Text is centered and readable
- [ ] "CONFIRM YOUR COMING" button is full-width and tappable
- [ ] Spacing looks natural without crowding
- [ ] No horizontal scrolling

### Timeline Section ✓
- [ ] Image displays above timeline text on mobile
- [ ] "10:00 AM" text is large and visible
- [ ] Section background is not too dark
- [ ] Text is readable without zooming

### Story Section ✓
- [ ] Heading and text stack vertically on mobile
- [ ] Text is left-aligned and readable on narrow screens
- [ ] No text overflow issues
- [ ] Line spacing is comfortable

### Gallery ✓
- [ ] All images stack vertically
- [ ] Images are full-width or nearly full-width
- [ ] Aspect ratios are maintained
- [ ] No stretched or distorted images

### Travel & Stay Section ✓
- [ ] Three items stack vertically
- [ ] Each item is readable on its own line
- [ ] Text doesn't overflow
- [ ] Links are tappable

### RSVP Form ✓
- [ ] Form fields are full-width
- [ ] Select dropdown is easy to tap
- [ ] Radio buttons have good touch targets
- [ ] Email field shows mobile keyboard
- [ ] Submit button is full-width and tappable
- [ ] Success message is clear and readable
- [ ] Form resets properly

### Footer ✓
- [ ] Contact information is centered
- [ ] Text is readable
- [ ] No overflow issues
- [ ] Spacing is appropriate

## Detailed Mobile Issues to Watch

### Touch Targets
- Minimum touch target: **48px × 48px**
- Buttons should have at least **12px** padding
- Check: Can you easily tap form fields?

### Text Readability
- Minimum font size: **16px** (especially on form inputs)
- Line height should be **≥1.5**
- Line length should be **≤60 characters** for readability

### Image Scaling
- Use `max-width: 100%` for responsive images
- Background images should use `background-size: cover`
- Test on slow connections (throttle to 3G)

### Performance
- Images should be optimized (< 500KB each)
- No unoptimized hero images
- Parallax scrolling should be smooth

### Viewport
- Must include: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Check: Website responds to pinch-zoom

## Common Mobile Problems & Solutions

### Problem: Form inputs too small
**Solution**: Ensure minimum `font-size: 16px` on inputs
```css
input, select, textarea {
  font-size: 16px; /* Prevents iOS auto-zoom on focus */
}
```

### Problem: Images cut off on mobile
**Solution**: Use `background-size: cover` instead of `contain`
```css
.home-img {
  background-size: cover;
  background-position: center;
}
```

### Problem: Horizontal scrolling
**Solution**: Check all elements have proper max-width
```css
.container-out {
  max-width: 100vw;
  overflow: hidden;
}
```

### Problem: Form not submitting on mobile
**Solution**: Ensure proper event handling and network requests
- Check console for errors (F12 → Console)
- Verify `config.json` is loading
- Test with throttled network (F12 → Network → Slow 3G)

## Testing on Real Devices

### Recommended Devices
- iPhone (latest model)
- Android phone (latest Samsung/Pixel)
- iPad or Android tablet

### How to Test on Real Device
1. **Same WiFi**: Computer and phone on same network
2. **Find Your IP**: Run `ipconfig getifaddr en0` (Mac) or `ipconfig` (Windows)
3. **Visit**: `http://YOUR_IP:8001` on your phone browser
4. **Test**: Fill form, submit, check features

### Test Commands (Terminal)
```bash
# Find your computer's IP address
ipconfig getifaddr en0  # Mac
ipconfig               # Windows

# Start server
cd /Users/lakalgamage/repos/wedding_invites
python3 -m http.server 8001

# Then on your phone, visit: http://YOUR_IP:8001
```

## Browser Compatibility

### Minimum Supported Browsers
- iOS Safari 12+
- Android Chrome 60+
- Android Firefox 60+
- Samsung Internet 8+

### Test Feature Support
- CSS grid/flexbox
- CSS masks (for photo blending)
- JavaScript animations
- Form validation

## Performance Testing

### Mobile Speed Test
1. Go to [Google PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter your website URL
3. Check Mobile score (target: > 80)
4. Fix warnings suggested

### Lighthouse Testing (In DevTools)
1. Open DevTools (F12)
2. Click "Lighthouse" tab
3. Select "Mobile"
4. Run audit
5. Review suggestions

### Metrics to Check
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

## Testing Script

Use this checklist weekly:

```
Week X Mobile Test:
- Device: _______________
- Browser: ______________
- Connection: ___________

Navigation:
- [ ] Mobile menu works
- [ ] Links are clickable

Sections:
- [ ] Hero section looks good
- [ ] Image alignment is correct
- [ ] Text is readable

Form:
- [ ] All fields are accessible
- [ ] Submit button works
- [ ] Success message displays

Performance:
- [ ] Page loads in < 3 seconds
- [ ] Scrolling is smooth
- [ ] No horizontal scrolling

Issues Found:
1. _____________________
2. _____________________

Fixes Applied:
1. _____________________
2. _____________________
```

## Final Sign-Off

Before going live, verify:
- [ ] Website passes mobile checklist
- [ ] No console errors when testing
- [ ] Form submissions work correctly
- [ ] All images load properly
- [ ] Navigation works on mobile
- [ ] Footer is accessible and readable

---

## Questions?

See [README.md](README.md) for general setup instructions.

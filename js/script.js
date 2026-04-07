const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function()
{
    if (parallax) {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionX = offset*(-0.3)-100 + "px";
    }
})


window.addEventListener("scroll", function()
{
    if (parallax1) {
        let offset = window.pageYOffset;
        offset-=3100;
        parallax1.style.backgroundPositionY = offset*(0.1) + "px";
    }
})

window.addEventListener("scroll", function()
{
    if (parallax2) {
        let offset = window.pageYOffset;
        offset-=4800;
        parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
    }
})

function myFunction() {
    document.getElementById("check").checked = false;
}

// <===================COUNTDOWN===================>
(function () {
    const target = new Date('2026-05-28T10:00:00');
    const els = {
        days:    document.getElementById('cd-days'),
        hours:   document.getElementById('cd-hours'),
        minutes: document.getElementById('cd-minutes'),
        seconds: document.getElementById('cd-seconds'),
    };
    if (!els.days) return;

    function pad(n) { return String(n).padStart(2, '0'); }

    function pop(el) {
        el.classList.remove('pop');
        void el.offsetWidth;
        el.classList.add('pop');
        setTimeout(() => el.classList.remove('pop'), 200);
    }

    function tick() {
        const diff = target - Date.now();
        if (diff <= 0) {
            Object.values(els).forEach(el => el.textContent = '00');
            document.querySelector('.countdown-label').textContent = '🎉 Today is the day!';
            return;
        }
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000)  / 60000);
        const s = Math.floor((diff % 60000)    / 1000);

        const vals = { days: pad(d), hours: pad(h), minutes: pad(m), seconds: pad(s) };
        for (const [key, val] of Object.entries(vals)) {
            if (els[key].textContent !== val) {
                els[key].textContent = val;
                pop(els[key]);
            }
        }
    }

    tick();
    setInterval(tick, 1000);
})();

// <===================SLIDESHOW===================>
(function() {
    const slides = document.querySelectorAll('.slide');
    const dots   = document.querySelectorAll('.dot');
    if (!slides.length) return;

    let current = 0;
    let timer;

    function goTo(n) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (n + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() { timer = setInterval(next, 4000); }
    function resetAuto()  { clearInterval(timer); startAuto(); }

    document.querySelector('.slide-next').addEventListener('click', () => { next(); resetAuto(); });
    document.querySelector('.slide-prev').addEventListener('click', () => { prev(); resetAuto(); });

    dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetAuto(); }));

    // Swipe support
    let touchStartX = 0;
    const slideshow = document.querySelector('.slideshow');
    slideshow.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    slideshow.addEventListener('touchend',   e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetAuto(); }
    }, { passive: true });

    startAuto();
})();

// RSVP Form Handler
document.addEventListener('DOMContentLoaded', async function() {
    const rsvpForm = document.getElementById('rsvpForm');
    const guestSelect = document.getElementById('guestName');
    let googleSheetsUrl = '';
    let googleSheetsGuestsUrl = '';

    function normalizeGuests(payload) {
        if (!payload) return [];

        const rawGuests = Array.isArray(payload) ? payload : payload.guests;
        if (!Array.isArray(rawGuests)) return [];

        return rawGuests
            .map(guest => {
                if (typeof guest === 'string') {
                    return guest.trim();
                }
                if (guest && typeof guest === 'object' && typeof guest.name === 'string') {
                    return guest.name.trim();
                }
                return '';
            })
            .filter(Boolean);
    }

    function populateGuestDropdown(guestNames) {
        guestNames.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            guestSelect.appendChild(option);
        });
    }
    
    // Only proceed if form exists
    if (!rsvpForm || !guestSelect) {
        console.warn('RSVP form or guest select not found');
        return;
    }
    
    // Load guest list and config from config.json
    try {
        const response = await fetch('config.json');
        const config = await response.json();
        
        // Store Google Sheets URLs
        googleSheetsUrl = config.googleSheetsUrl || '';
        googleSheetsGuestsUrl = config.googleSheetsGuestsUrl || googleSheetsUrl;
        
        // Try to load guest names from Google Sheets first
        let guestNames = [];

        if (googleSheetsGuestsUrl) {
            try {
                const separator = googleSheetsGuestsUrl.includes('?') ? '&' : '?';
                const url = `${googleSheetsGuestsUrl}${separator}action=guests`;
                const response = await fetch(url, {
                    method: 'GET',
                    redirect: 'follow'
                });

                if (response.ok) {
                    const sheetData = await response.json();
                    guestNames = normalizeGuests(sheetData);
                }
            } catch (error) {
                console.warn('Could not load guest names from Google Sheets:', error);
            }
        }

        // Fallback to config.json guest list when Sheets isn't available
        if (guestNames.length === 0) {
            guestNames = normalizeGuests(config);
        }

        if (guestNames.length > 0) {
            populateGuestDropdown(guestNames);
        }
    } catch (error) {
        console.error('Error loading config:', error);
    }
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                action: 'rsvp',
                guestName: document.getElementById('guestName').value,
                attendance: document.querySelector('input[name="attendance"]:checked').value,
                numberOfGuests: Number(document.getElementById('numberOfGuests').value || 1),
                specialMessage: document.getElementById('specialMessage').value.trim(),
                email: document.getElementById('email').value,
                timestamp: new Date().toLocaleString()
            };
            
            const statusElement = document.getElementById('formStatus');
            
            // Validate form fields
            if (!formData.guestName || !formData.attendance || !formData.email || formData.numberOfGuests < 1) {
                statusElement.textContent = '⚠️ Please fill in all fields';
                statusElement.classList.add('error');
                statusElement.classList.remove('success');
                return;
            }
            
            try {
                let submitSuccess = false;
                let submitError = null;
                
                // Try sending to Google Sheets if URL is configured
                if (googleSheetsUrl) {
                    try {
                        // Google Apps Script does not handle CORS preflight.
                        // mode: 'no-cors' sends a simple request; response is opaque
                        // (status 0, type 'opaque') but the script still runs server-side.
                        const response = await fetch(googleSheetsUrl, {
                            method: 'POST',
                            mode: 'no-cors',
                            redirect: 'follow',
                            body: JSON.stringify(formData)
                        });

                        // Opaque response means request reached the server — treat as success
                        if (response.type === 'opaque' || response.ok) {
                            submitSuccess = true;
                            console.log('Data sent to Google Sheets successfully');
                        }
                    } catch (error) {
                        submitError = error;
                        console.error('Error sending to Google Sheets:', error);
                    }
                } else {
                    // Google Sheets not configured, just log data
                    submitSuccess = true;
                    console.log('Google Sheets URL not configured. Data logged locally:', formData);
                }
                
                if (submitSuccess) {
                    statusElement.innerHTML = '✨ Thank you, <strong>' + formData.guestName + '</strong>! Your seat is reserved. We can\'t wait to celebrate with you! ✨';
                    statusElement.classList.add('success');
                    statusElement.classList.remove('error');
                    
                    // Log data in console for backup
                    console.log('RSVP Confirmed:', formData);
                    
                    // Reset form after 4 seconds
                    setTimeout(() => {
                        rsvpForm.reset();
                        statusElement.textContent = '';
                        statusElement.classList.remove('success');
                        // Reset select to first option
                        guestSelect.selectedIndex = 0;
                    }, 4000);
                } else {
                    throw new Error(submitError?.message || 'Failed to submit RSVP');
                }
            } catch (error) {
                console.error('Error processing RSVP:', error);
                statusElement.textContent = '⚠️ Unable to process your RSVP. Please try again or contact us directly.';
                statusElement.classList.add('error');
                statusElement.classList.remove('success');
            }
        });
    }
});

// Reveal animation on scroll
const reveals = document.querySelectorAll('.reveal');

function reveal() {
    if (!reveals || reveals.length === 0) return;
    
    for (let i = 0; i < reveals.length; i++) {
        const windowheight = window.innerHeight;
        const revealtop = reveals[i].getBoundingClientRect().top;
        const revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal();
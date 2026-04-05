const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset*(-0.3)-100 + "px";
})


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=3100;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
})

function myFunction() {
    document.getElementById("check").checked = false;
}

// RSVP Form Handler
document.addEventListener('DOMContentLoaded', async function() {
    const rsvpForm = document.getElementById('rsvpForm');
    const guestSelect = document.getElementById('guestName');
    let googleSheetsUrl = '';
    
    // Load guest list and config from config.json
    try {
        const response = await fetch('config.json');
        const config = await response.json();
        
        // Store Google Sheets URL
        googleSheetsUrl = config.googleSheetsUrl || '';
        
        // Populate guest list
        if (config.guests && config.guests.length > 0) {
            config.guests.forEach(guest => {
                const option = document.createElement('option');
                option.value = guest.name;
                option.textContent = guest.name;
                guestSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error loading config:', error);
    }
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                guestName: document.getElementById('guestName').value,
                attendance: document.querySelector('input[name="attendance"]:checked').value,
                email: document.getElementById('email').value,
                timestamp: new Date().toLocaleString()
            };
            
            const statusElement = document.getElementById('formStatus');
            
            // Validate form fields
            if (!formData.guestName || !formData.attendance || !formData.email) {
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
                        const response = await fetch(googleSheetsUrl, {
                            method: 'POST',
                            body: JSON.stringify(formData),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        
                        if (response.ok) {
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
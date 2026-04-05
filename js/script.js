// Load configuration and initialize page
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Load config
        const configResponse = await fetch('config.json');
        const config = await configResponse.json();
        
        // Load guests
        const guestsResponse = await fetch('guests.json');
        const guestsData = await guestsResponse.json();
        
        // Populate page with config data
        populatePageContent(config);
        
        // Populate guest list
        populateGuestList(guestsData.guests);
        
        // Setup form handlers
        setupFormHandlers();
        
    } catch (error) {
        console.error('Error loading data:', error);
        alert('There was an error loading the page. Please refresh and try again.');
    }
});

// Populate page content from config
function populatePageContent(config) {
    // Couple names
    document.getElementById('coupleNames').textContent = `${config.couple.bride} & ${config.couple.groom}`;
    
    // Couple photo
    const couplePhoto = document.getElementById('couplePhoto');
    couplePhoto.src = config.couple.photoUrl;
    couplePhoto.alt = `${config.couple.bride} & ${config.couple.groom}`;
    
    // Story
    document.getElementById('storyText').textContent = config.story;
    
    // Wedding details
    document.getElementById('weddingDate').textContent = config.weddingDate;
    document.getElementById('weddingTime').textContent = config.weddingTime;
    document.getElementById('venueName').textContent = config.venue.name;
    document.getElementById('venueAddress').textContent = config.venue.address;
    document.getElementById('eventDetails').textContent = config.events;
    document.getElementById('dressCode').textContent = config.dressCode;
}

// Populate guest dropdown
function populateGuestList(guests) {
    const guestSelect = document.getElementById('guestName');
    
    guests.sort().forEach(guest => {
        const option = document.createElement('option');
        option.value = guest;
        option.textContent = guest;
        guestSelect.appendChild(option);
    });
}

// Setup form event handlers
function setupFormHandlers() {
    const rsvpForm = document.getElementById('rsvpForm');
    const attendanceRadios = document.querySelectorAll('input[name="attendance"]');
    const dietarySelect = document.getElementById('dietaryPreferences');
    const numberOfPlusOnes = document.getElementById('numberOfPlusOnes');
    
    // Handle attendance change (show/hide plus ones)
    attendanceRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            const plusOneGroup = document.getElementById('plusOneGroup');
            if (this.value === 'yes') {
                plusOneGroup.style.display = 'block';
            } else {
                plusOneGroup.style.display = 'none';
                numberOfPlusOnes.value = '0';
                document.getElementById('plusOneNamesDiv').innerHTML = '';
            }
        });
    });
    
    // Handle plus ones change
    numberOfPlusOnes.addEventListener('change', function() {
        const count = parseInt(this.value);
        const plusOneNamesDiv = document.getElementById('plusOneNamesDiv');
        plusOneNamesDiv.innerHTML = '';
        
        if (count > 0) {
            for (let i = 1; i <= count; i++) {
                const div = document.createElement('div');
                div.className = 'form-group plus-one-item';
                div.innerHTML = `
                    <label for="plusOne${i}">Guest ${i} Name</label>
                    <input type="text" id="plusOne${i}" name="plusOne${i}" placeholder="Guest ${i} name" class="form-input">
                `;
                plusOneNamesDiv.appendChild(div);
            }
        }
    });
    
    // Handle dietary preferences change
    dietarySelect.addEventListener('change', function() {
        const otherDietaryDiv = document.getElementById('otherDietaryDiv');
        if (this.value === 'other') {
            otherDietaryDiv.style.display = 'block';
        } else {
            otherDietaryDiv.style.display = 'none';
        }
    });
    
    // Handle form submission
    rsvpForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        await submitRsvp();
    });
}

// Show custom name input
function showCustomNameInput() {
    const guestName = document.getElementById('guestName');
    const customNameDiv = document.getElementById('customNameDiv');
    
    if (customNameDiv.style.display === 'none') {
        customNameDiv.style.display = 'block';
        guestName.value = '';
        guestName.required = false;
    } else {
        customNameDiv.style.display = 'none';
        guestName.required = true;
    }
}

// Submit RSVP
async function submitRsvp() {
    const form = document.getElementById('rsvpForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    // Hide previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    
    // Gather form data
    const guestName = document.getElementById('guestName').value || document.getElementById('customName').value;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    const numberOfPlusOnes = document.getElementById('numberOfPlusOnes').value;
    const dietaryPreferences = document.getElementById('dietaryPreferences').value;
    const otherDietary = document.getElementById('otherDietary').value;
    const specialRequests = document.getElementById('specialRequests').value;
    const guestEmail = document.getElementById('guestEmail').value;
    
    // Gather plus one names
    const plusOneNames = [];
    for (let i = 1; i <= parseInt(numberOfPlusOnes); i++) {
        const name = document.getElementById(`plusOne${i}`)?.value;
        if (name) {
            plusOneNames.push(name);
        }
    }
    
    // Validate
    if (!guestName) {
        errorMessage.textContent = '❌ Please select or enter your name.';
        errorMessage.style.display = 'block';
        return;
    }
    
    if (!attendance) {
        errorMessage.textContent = '❌ Please select your attendance status.';
        errorMessage.style.display = 'block';
        return;
    }
    
    // Prepare submission data
    const submissionData = {
        guestName,
        attendance,
        numberOfPlusOnes,
        plusOneNames,
        dietaryPreferences,
        otherDietary,
        specialRequests,
        guestEmail,
        timestamp: new Date().toISOString()
    };
    
    try {
        // Get your IDs from config.json
        const configResponse = await fetch('config.json');
        const config = await configResponse.json();
        
        let googleSheetsSuccess = false;
        let formspreeSuccess = false;
        
        // Send to Google Sheets (if configured)
        if (config.googleSheetsUrl) {
            try {
                const gsResponse = await fetch(config.googleSheetsUrl, {
                    method: 'POST',
                    body: JSON.stringify(submissionData)
                });
                googleSheetsSuccess = gsResponse.ok;
            } catch (error) {
                console.warn('Google Sheets submission failed:', error);
            }
        }
        
        // Send to Formspree (if configured) for email notification
        if (config.formspreeId) {
            try {
                const fsResponse = await fetch(`https://formspree.io/f/${config.formspreeId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(submissionData)
                });
                formspreeSuccess = fsResponse.ok;
            } catch (error) {
                console.warn('Formspree submission failed:', error);
            }
        }
        
        // Save to localStorage as backup (always works)
        saveToLocalStorage(submissionData);
        
        // Show success if at least one service worked (or always if none configured)
        if (googleSheetsSuccess || formspreeSuccess || (!config.formspreeId && !config.googleSheetsUrl)) {
            successMessage.style.display = 'block';
            form.reset();
            document.getElementById('customNameDiv').style.display = 'none';
        } else {
            throw new Error('Form submission failed');
        }
        
    } catch (error) {
        console.error('Error submitting form:', error);
        errorMessage.style.display = 'block';
    }
}

// Save RSVP to localStorage (as backup)
function saveToLocalStorage(data) {
    let allRsvps = JSON.parse(localStorage.getItem('weddingRsvps')) || [];
    allRsvps.push(data);
    localStorage.setItem('weddingRsvps', JSON.stringify(allRsvps));
}

// Utility: Export RSVPs to CSV (for download)
function exportRsvpsToCSV() {
    const rsvps = JSON.parse(localStorage.getItem('weddingRsvps')) || [];
    
    if (rsvps.length === 0) {
        alert('No RSVPs yet');
        return;
    }
    
    let csv = 'Guest Name,Attendance,Number of Guests,Guest Names,Dietary Preferences,Special Requests,Email,Timestamp\n';
    
    rsvps.forEach(rsvp => {
        const row = [
            rsvp.guestName,
            rsvp.attendance,
            rsvp.numberOfPlusOnes,
            rsvp.plusOneNames.join('; '),
            rsvp.dietaryPreferences,
            rsvp.specialRequests || '',
            rsvp.guestEmail || '',
            rsvp.timestamp
        ].map(field => `"${field}"`);
        
        csv += row.join(',') + '\n';
    });
    
    // Create download link
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    element.setAttribute('download', `wedding_rsvps_${new Date().toISOString().split('T')[0]}.csv`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

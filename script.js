    function showForm(formType) {
    console.log('showForm triggered for: ' + formType);  // Debugging log

    // Hide all forms initially
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('signinForm').style.display = 'none';
    document.getElementById('dobForm').style.display = 'none';
    document.getElementById('zodiacForm').style.display = 'none';
    document.getElementById('welcomeMessage').style.display = 'block';
    document.getElementById('navbar').style.display = 'block';

    // Show the selected form
    if (formType === 'signup') {
        document.getElementById('signupForm').style.display = 'block';
        document.getElementById('welcomeMessage').style.display = 'none';
    } else if (formType === 'signin') {
        document.getElementById('signinForm').style.display = 'block';
        document.getElementById('welcomeMessage').style.display = 'none';
    }
}

// Handle Sign-In event
function handleSignIn(event) {
    event.preventDefault(); // Prevent form submission

    console.log('Handling Sign-In...');  // Debugging log
    const userDOB = localStorage.getItem('dob');
    if (userDOB) {
        console.log('User DOB found in local storage');  // Debugging log
        showZodiacForm();
    } else {
        console.log('User DOB not found, showing DOB form');  // Debugging log
        goToDOBForm();
    }
    window.location.href = "select zodiac sign.html";
}
 
// Show Date of Birth form after completing Sign Up or Sign In form
function goToDOBForm(event) {
    event && event.preventDefault(); // Prevent form submission on Sign Up
    console.log('Navigating to DOB Form');  // Debugging log
    document.getElementById('signinForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('dobForm').style.display = 'block';
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('welcomeMessage').style.display = 'none';
}

// Save Date of Birth and Time, then go to Zodiac form
function saveDOB(event) {
    event.preventDefault(); // Prevent form submission

    const dob = document.getElementById('dob').value;
    const birthTime = document.getElementById('birthTime').value;

    console.log('Saving DOB:', dob, 'Time:', birthTime);  // Debugging log

    // Save DOB and time in local storage for future visits
    localStorage.setItem('dob', dob);
    localStorage.setItem('birthTime', birthTime);

    // Show Zodiac form
    showZodiacForm();

    window.location.href = "select zodiac sign.html";
}

// Show Zodiac selection form
function showZodiacForm() {
    console.log('Displaying Zodiac Form');  // Debugging log
   // document.getElementById('dobForm').style.display = 'none';
   // document.getElementById('zodiacForm').style.display = 'block';
}
// Auto-load the form based on whether the user has previously entered information
window.onload = function() {
    console.log('Window loaded');  // Debugging log
    const userDOB = localStorage.getItem('dob');
    const userZodiac = localStorage.getItem('zodiac');

    if (userDOB && userZodiac) {
        console.log('User has DOB and Zodiac in localStorage');  // Debugging log
        // Skip Sign-Up, Sign-In, and go directly to the Zodiac form
        showZodiacForm();
    } else {
        console.log('User not logged in, showing welcome message');  // Debugging log
        // Show Welcome message, navbar and Home section
        document.getElementById('welcomeMessage').style.display = 'block';
        document.getElementById('navbar').style.display = 'block';
    }
    
}
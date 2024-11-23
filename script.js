    function showForm(formType) {
    console.log('showForm triggered for: ' + formType);  

   
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('signinForm').style.display = 'none';
    document.getElementById('dobForm').style.display = 'none';
    document.getElementById('zodiacForm').style.display = 'none';
    document.getElementById('welcomeMessage').style.display = 'block';
    document.getElementById('navbar').style.display = 'block';

    
    if (formType === 'signup') {
        document.getElementById('signupForm').style.display = 'block';
        document.getElementById('welcomeMessage').style.display = 'none';
    } else if (formType === 'signin') {
        document.getElementById('signinForm').style.display = 'block';
        document.getElementById('welcomeMessage').style.display = 'none';
    }
}

function handleSignIn(event) {
    event.preventDefault(); 

    console.log('Handling Sign-In...');  
    const userDOB = localStorage.getItem('dob');
    if (userDOB) {
        console.log('User DOB found in local storage');  
        showZodiacForm();
    } else {
        console.log('User DOB not found, showing DOB form');  
        goToDOBForm();
    }
    window.location.href = "select zodiac sign.html";
}
 

function goToDOBForm(event) {
    event && event.preventDefault(); 
    console.log('Navigating to DOB Form');  
    document.getElementById('signinForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('dobForm').style.display = 'block';
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('welcomeMessage').style.display = 'none';
}


function saveDOB(event) {
    event.preventDefault(); 

    const dob = document.getElementById('dob').value;
    const birthTime = document.getElementById('birthTime').value;

    console.log('Saving DOB:', dob, 'Time:', birthTime);  

   
    localStorage.setItem('dob', dob);
    localStorage.setItem('birthTime', birthTime);

   
    showZodiacForm();

    window.location.href = "select zodiac sign.html";
}

function showZodiacForm() {
    console.log('Displaying Zodiac Form');  
}

window.onload = function() {
    console.log('Window loaded');
    const userDOB = localStorage.getItem('dob');
    const userZodiac = localStorage.getItem('zodiac');

    if (userDOB && userZodiac) {
        console.log('User has DOB and Zodiac in localStorage');  
        
        showZodiacForm();
    } else {
        console.log('User not logged in, showing welcome message');  
        
        document.getElementById('welcomeMessage').style.display = 'block';
        document.getElementById('navbar').style.display = 'block';
    }
    
}
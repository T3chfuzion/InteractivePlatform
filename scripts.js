function scrollToModel() {
    document.getElementById('model').classList.remove('hidden');
    document.getElementById('model').scrollIntoView({ behavior: 'smooth' });
}

function startScenario(scenario) {
    // Construct the URL based on the scenario with a subdirectory
    let fileName = "linux/" + scenario.toLowerCase().replace(/\s+/g, '-') + '.html';
    window.location.href = fileName;
}


function signUp() {
    alert('Redirecting to the sign-up page...');
    // Here you can redirect to the sign-up page or show a sign-up form
}
function scrollToModel() {
    document.getElementById('model').classList.remove('hidden');
    document.getElementById('model').scrollIntoView({ behavior: 'smooth' });
}

function startScenario(scenario) {
    alert(`Starting the ${scenario} learning module...`);
    // Here you can redirect to the actual learning module page or load the content dynamically
}

function signUp() {
    alert('Redirecting to the sign-up page...');
    // Here you can redirect to the sign-up page or show a sign-up form
}
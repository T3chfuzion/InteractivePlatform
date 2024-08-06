const questions = {
    'Linux Administration': [
        // Existing Linux questions here...
    ],
    'Active Directory': [
        // Existing Active Directory questions here...
    ],
    'Network Security': [
        {
            title: "Firewall Basics",
            description: "What is the primary function of a firewall?",
            options: ["To block all traffic", "To control incoming and outgoing network traffic", "To create a secure VPN"],
            answer: 1,
            explanation: "A firewall controls incoming and outgoing network traffic based on predetermined security rules. It does not block all traffic or create a VPN."
        },
        {
            title: "VPN Usage",
            description: "What does a VPN do?",
            options: ["Encrypts internet traffic", "Blocks malware", "Filters unwanted websites"],
            answer: 0,
            explanation: "A VPN encrypts internet traffic to secure data transfer. It does not block malware or filter websites."
        },
        {
            title: "Malware Protection",
            description: "Which tool is commonly used to detect and remove malware?",
            options: ["Antivirus software", "Firewall", "VPN"],
            answer: 0,
            explanation: "Antivirus software is designed to detect and remove malware. Firewalls and VPNs serve different functions."
        },
        {
            title: "Intrusion Detection Systems",
            description: "What is the purpose of an Intrusion Detection System (IDS)?",
            options: ["To detect and alert on suspicious activity", "To prevent unauthorized access", "To create encrypted connections"],
            answer: 0,
            explanation: "An IDS detects and alerts on suspicious activity within a network. It does not prevent unauthorized access or create encrypted connections."
        },
        {
            title: "Password Policies",
            description: "Why is it important to have strong password policies?",
            options: ["To reduce the risk of unauthorized access", "To increase network speed", "To reduce system memory usage"],
            answer: 0,
            explanation: "Strong password policies reduce the risk of unauthorized access. They do not affect network speed or system memory usage."
        },
        {
            title: "Phishing Attacks",
            description: "What is a common indicator of a phishing attack?",
            options: ["Suspicious email attachments", "High network traffic", "Low disk space"],
            answer: 0,
            explanation: "Suspicious email attachments are a common indicator of phishing attacks. High network traffic and low disk space are not directly related."
        },
        {
            title: "Network Encryption",
            description: "What is the purpose of network encryption?",
            options: ["To protect data from unauthorized access", "To increase internet speed", "To block all incoming traffic"],
            answer: 0,
            explanation: "Network encryption protects data from unauthorized access. It does not increase internet speed or block all incoming traffic."
        },
        {
            title: "Two-Factor Authentication",
            description: "What does Two-Factor Authentication (2FA) add to the security process?",
            options: ["An additional layer of security", "A faster login process", "A new password policy"],
            answer: 0,
            explanation: "2FA adds an additional layer of security by requiring a second form of verification. It does not affect login speed or password policies."
        },
        {
            title: "Network Segmentation",
            description: "Why is network segmentation important?",
            options: ["To limit access to sensitive areas", "To reduce network speed", "To simplify network design"],
            answer: 0,
            explanation: "Network segmentation limits access to sensitive areas to improve security. It does not inherently reduce network speed or simplify design."
        },
        {
            title: "Patch Management",
            description: "What is the purpose of patch management?",
            options: ["To fix security vulnerabilities", "To improve network speed", "To configure hardware settings"],
            answer: 0,
            explanation: "Patch management fixes security vulnerabilities in software. It does not improve network speed or configure hardware."
        }
    ]
};

let currentQuestionIndex = 0;

function startScenario(scenario) {
    currentQuestionIndex = 0;
    startLearning();
}

function startLearning() {
    displayQuestion();
}

function displayQuestion() {
    const question = questions['Network Security'][currentQuestionIndex];
    document.getElementById('question-title').innerText = question.title;
    document.getElementById('question-description').innerText = question.description;
    
    document.getElementById('options').innerHTML = question.options.map((option, index) => 
        `<button onclick="chooseOption(${index})">${option}</button>`
    ).join('');
}

function chooseOption(optionIndex) {
    const question = questions['Network Security'][currentQuestionIndex];
    const result = optionIndex === question.answer ? "Correct!" : "Incorrect.";
    const explanation = question.explanation;
    
    document.getElementById('question-title').innerText = result;
    document.getElementById('question-description').innerHTML = `
        <p>${question.options[optionIndex]} is ${result.toLowerCase()}.</p>
        <p><strong>Explanation:</strong> ${explanation}</p>
        <button onclick="nextQuestion()">Next</button>
    `;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions['Network Security'].length) {
        displayQuestion();
    } else {
        document.getElementById('question-section').innerHTML = `
            <h2>Congratulations!</h2>
            <p>You have completed all the questions.</p>
            <button onclick="location.href='../index.html'">Back to Home</button>
        `;
    }
}

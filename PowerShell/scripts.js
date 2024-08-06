const questions = {
    'Windows PowerShell': [
        {
            title: "Getting Help",
            description: "Which cmdlet is used to get help about PowerShell cmdlets?",
            options: ["Get-Help", "Help-Command", "Show-Help"],
            answer: 0,
            explanation: "'Get-Help' is the cmdlet used to retrieve help about cmdlets in PowerShell. 'Help-Command' and 'Show-Help' are not valid cmdlets."
        },
        {
            title: "Listing Processes",
            description: "What cmdlet can you use to list all running processes?",
            options: ["Get-Process", "List-Process", "Show-Process"],
            answer: 0,
            explanation: "'Get-Process' retrieves a list of all running processes. 'List-Process' and 'Show-Process' are not valid cmdlets."
        },
        {
            title: "Filtering Output",
            description: "Which cmdlet allows you to filter output based on conditions?",
            options: ["Where-Object", "Filter-Object", "Select-Object"],
            answer: 0,
            explanation: "'Where-Object' is used to filter output based on specified conditions. 'Filter-Object' is not a valid cmdlet, and 'Select-Object' is used to select specific properties."
        },
        {
            title: "Exporting Data",
            description: "How can you export data to a CSV file in PowerShell?",
            options: ["Export-Csv", "Save-CSV", "Write-CSV"],
            answer: 0,
            explanation: "'Export-Csv' is used to export data to a CSV file. 'Save-CSV' and 'Write-CSV' are not valid cmdlets."
        },
        {
            title: "Running a Script",
            description: "What cmdlet is used to run a PowerShell script?",
            options: ["Invoke-Expression", "Run-Script", "Execute-File"],
            answer: 0,
            explanation: "'Invoke-Expression' can be used to run a PowerShell script. 'Run-Script' and 'Execute-File' are not valid cmdlets."
        },
        {
            title: "Creating a New File",
            description: "Which cmdlet creates a new file in PowerShell?",
            options: ["New-Item", "Create-File", "Add-File"],
            answer: 0,
            explanation: "'New-Item' can be used to create new files and other items. 'Create-File' and 'Add-File' are not valid cmdlets."
        },
        {
            title: "Checking System Information",
            description: "Which cmdlet retrieves system information?",
            options: ["Get-ComputerInfo", "Show-Info", "System-Info"],
            answer: 0,
            explanation: "'Get-ComputerInfo' retrieves system information. 'Show-Info' and 'System-Info' are not valid cmdlets."
        },
        {
            title: "Handling Errors",
            description: "What cmdlet can you use to handle errors in a PowerShell script?",
            options: ["Try-Catch", "Handle-Error", "Error-Management"],
            answer: 0,
            explanation: "'Try-Catch' is used for error handling in PowerShell scripts. 'Handle-Error' and 'Error-Management' are not valid cmdlets."
        },
        {
            title: "Updating Modules",
            description: "Which cmdlet is used to update a PowerShell module?",
            options: ["Update-Module", "Install-Module", "Refresh-Module"],
            answer: 0,
            explanation: "'Update-Module' updates an installed module. 'Install-Module' is used to install new modules, and 'Refresh-Module' is not a valid cmdlet."
        },
        {
            title: "Scheduling Tasks",
            description: "What cmdlet is used to schedule a task in PowerShell?",
            options: ["New-ScheduledTask", "Schedule-Task", "Create-Task"],
            answer: 0,
            explanation: "'New-ScheduledTask' is used to schedule tasks. 'Schedule-Task' and 'Create-Task' are not valid cmdlets."
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
    const question = questions['Windows PowerShell'][currentQuestionIndex];
    document.getElementById('question-title').innerText = question.title;
    document.getElementById('question-description').innerText = question.description;
    
    document.getElementById('options').innerHTML = question.options.map((option, index) => 
        `<button onclick="chooseOption(${index})">${option}</button>`
    ).join('');
}

function chooseOption(optionIndex) {
    const question = questions['Windows PowerShell'][currentQuestionIndex];
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
    if (currentQuestionIndex < questions['Windows PowerShell'].length) {
        displayQuestion();
    } else {
        document.getElementById('question-section').innerHTML = `
            <h2>Congratulations!</h2>
            <p>You have completed all the questions.</p>
            <button onclick="location.href='../index.html'">Back to Home</button>
        `;
    }
}

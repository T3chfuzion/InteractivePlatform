const questions = {
    'Active Directory': [
        {
            title: "Creating Users",
            description: "What is the command to create a new user in Active Directory?",
            options: ["New-ADUser", "Add-ADUser", "Create-ADUser"],
            answer: 0,
            explanation: "The 'New-ADUser' cmdlet is used to create a new user in Active Directory. 'Add-ADUser' and 'Create-ADUser' are not valid cmdlets."
        },
        {
            title: "Group Management",
            description: "Which cmdlet is used to create a new Active Directory group?",
            options: ["New-ADGroup", "Add-ADGroup", "Create-ADGroup"],
            answer: 0,
            explanation: "'New-ADGroup' is used to create a new group in Active Directory. 'Add-ADGroup' and 'Create-ADGroup' are incorrect cmdlets."
        },
        {
            title: "User Password Reset",
            description: "How can you reset a user’s password in Active Directory?",
            options: ["Set-ADAccountPassword", "Reset-ADUserPassword", "Change-ADPassword"],
            answer: 0,
            explanation: "'Set-ADAccountPassword' is the cmdlet used to reset a user's password. 'Reset-ADUserPassword' and 'Change-ADPassword' are not valid cmdlets."
        },
        {
            title: "Viewing Group Membership",
            description: "What command can you use to view group membership for a user?",
            options: ["Get-ADUser -Identity username -Properties MemberOf", "Show-ADUserMembership", "List-ADGroups"],
            answer: 0,
            explanation: "'Get-ADUser -Identity username -Properties MemberOf' will show the groups a user is a member of. 'Show-ADUserMembership' and 'List-ADGroups' are not valid cmdlets."
        },
        {
            title: "Finding a User",
            description: "Which cmdlet can be used to find a user in Active Directory?",
            options: ["Get-ADUser", "Find-ADUser", "Search-ADUser"],
            answer: 0,
            explanation: "'Get-ADUser' is used to retrieve user objects from Active Directory. 'Find-ADUser' and 'Search-ADUser' are not valid cmdlets."
        },
        {
            title: "Deleting a User",
            description: "What is the cmdlet for deleting a user from Active Directory?",
            options: ["Remove-ADUser", "Delete-ADUser", "Remove-ADAccount"],
            answer: 0,
            explanation: "'Remove-ADUser' is used to delete a user from Active Directory. 'Delete-ADUser' and 'Remove-ADAccount' are not valid cmdlets."
        },
        {
            title: "Organizational Units",
            description: "Which cmdlet is used to create a new Organizational Unit (OU) in Active Directory?",
            options: ["New-ADOrganizationalUnit", "Create-ADOU", "Add-ADOU"],
            answer: 0,
            explanation: "'New-ADOrganizationalUnit' is used to create a new OU. 'Create-ADOU' and 'Add-ADOU' are incorrect cmdlets."
        },
        {
            title: "Active Directory Domain",
            description: "What cmdlet retrieves information about the current Active Directory domain?",
            options: ["Get-ADDomain", "Get-ADDomainInfo", "Show-ADDomain"],
            answer: 0,
            explanation: "'Get-ADDomain' retrieves information about the current domain. 'Get-ADDomainInfo' and 'Show-ADDomain' are not valid cmdlets."
        },
        {
            title: "Managing Computer Accounts",
            description: "Which cmdlet is used to add a computer account to Active Directory?",
            options: ["New-ADComputer", "Add-ADComputer", "Create-ADComputer"],
            answer: 0,
            explanation: "'New-ADComputer' adds a computer account to Active Directory. 'Add-ADComputer' and 'Create-ADComputer' are incorrect cmdlets."
        },
        {
            title: "Delegating Permissions",
            description: "What cmdlet is used to delegate permissions to an Active Directory object?",
            options: ["Add-ADPermission", "Set-ADPermission", "Grant-ADPermissions"],
            answer: 1,
            explanation: "'Set-ADPermission' is used to delegate permissions. 'Add-ADPermission' and 'Grant-ADPermissions' are not valid cmdlets."
        }
    ]
};

let currentQuestionIndex = 0;

function startLearning() {
    displayQuestion();
}

function displayQuestion() {
    const question = questions['Active Directory'][currentQuestionIndex];
    document.getElementById('question-title').innerText = question.title;
    document.getElementById('question-description').innerText = question.description;
    
    document.getElementById('options').innerHTML = question.options.map((option, index) => 
        `<button onclick="chooseOption(${index})">${option}</button>`
    ).join('');
}

function chooseOption(optionIndex) {
    const question = questions['Active Directory'][currentQuestionIndex];
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
    if (currentQuestionIndex < questions['Active Directory'].length) {
        displayQuestion();
    } else {
        document.getElementById('question-section').innerHTML = `
            <h2>Congratulations!</h2>
            <p>You have completed all the questions.</p>
<<<<<<< HEAD
            <button onclick="location.href='../index.html'">Back to Home</button>
=======
            <button onclick="location.href='./index.html'">Back to Home</button>
>>>>>>> 057317c923ef14862e4782b6c5ca24b5e3160dbf
        `;
    }
}


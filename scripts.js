const scenarios = [
    {
        title: "Checking Disk Space",
        description: "User: I received a 'disk space full' error on my server. What should I do?",
        options: [
            "Run 'df -h' to check disk usage.",
            "Delete random files to free up space.",
            "Restart the server."
        ],
        outcomes: [
            "Correct! Running 'df -h' will show you the disk usage in a human-readable format.",
            "Incorrect. Deleting random files can cause more issues. Always check disk usage first.",
            "Incorrect. Restarting the server won't solve the disk space issue."
        ]
    },
    {
        title: "User Permission Issues",
        description: "User: I can't access a directory. It says 'Permission denied'.",
        options: [
            "Check the directory permissions with 'ls -l'.",
            "Change the user password.",
            "Reinstall the operating system."
        ],
        outcomes: [
            "Correct! Using 'ls -l' will show the directory permissions and help diagnose the issue.",
            "Incorrect. Changing the password won't help with permission issues.",
            "Incorrect. Reinstalling the OS is too drastic for a permission issue."
        ]
    },
    {
        title: "Process Management",
        description: "User: My application is running slow. How can I check what processes are consuming the most resources?",
        options: [
            "Use the 'top' command to view resource usage.",
            "Restart the application.",
            "Increase the server's RAM."
        ],
        outcomes: [
            "Correct! The 'top' command shows a real-time list of processes and their resource usage.",
            "Incorrect. Restarting the application may help temporarily but doesn't identify the root cause.",
            "Incorrect. Increasing RAM is a long-term solution but doesn't address immediate performance issues."
        ]
    },
    // Add more scenarios as needed...
];

let currentScenarioIndex = 0;

function chooseOption(optionIndex) {
    const scenario = scenarios[currentScenarioIndex];
    const outcome = scenario.outcomes[optionIndex - 1];

    document.getElementById('scenario-title').innerText = "Outcome";
    document.getElementById('scenario-description').innerText = outcome;

    const optionsSection = document.getElementById('options');
    optionsSection.innerHTML = `<button onclick="nextScenario()">Next</button>`;
}

function nextScenario() {
    currentScenarioIndex++;
    if (currentScenarioIndex < scenarios.length) {
        const scenario = scenarios[currentScenarioIndex];
        document.getElementById('scenario-title').innerText = scenario.title;
        document.getElementById('scenario-description').innerText = scenario.description;

        const optionsSection = document.getElementById('options');
        optionsSection.innerHTML = scenario.options.map((option, index) => `<button onclick="chooseOption(${index + 1})">${option}</button>`).join('');
    } else {
        document.getElementById('scenario-title').innerText = "Congratulations!";
        document.getElementById('scenario-description').innerText = "You've successfully navigated all the Linux administration scenarios. You're well on your way to becoming a proficient Linux system administrator.";
        document.getElementById('options').innerHTML = '<button onclick="restart()">Restart</button>';
    }
}

function restart() {
    currentScenarioIndex = 0;
    document.getElementById('scenario-title').innerText = "Welcome to Linux System Administration!";
    document.getElementById('scenario-description').innerText = "Your mission is to learn the basics of Linux system administration and troubleshooting. Good luck!";
    document.getElementById('options').innerHTML = '<button onclick="chooseOption(1)">Start</button>';
}
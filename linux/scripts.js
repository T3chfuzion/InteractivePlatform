const questions = [
    {
        title: "Disk Space",
        description: "What command would you use to check disk space usage?",
        options: ["df -h", "top", "ls -l"],
        answer: 0,
        explanation: "The 'df -h' command provides a summary of disk space usage in a human-readable format. 'top' displays running processes, and 'ls -l' shows file permissions and details."
    },
    {
        title: "File Permissions",
        description: "How can you check file permissions?",
        options: ["ls -l", "chmod", "cp"],
        answer: 0,
        explanation: "'ls -l' lists files and directories along with their permissions. 'chmod' is used to change permissions, and 'cp' is used to copy files."
    },
    {
        title: "Process Management",
        description: "Which command shows running processes?",
        options: ["ps", "grep", "cat"],
        answer: 0,
        explanation: "'ps' displays information about currently running processes. 'grep' searches text using patterns, and 'cat' concatenates and displays file contents."
    },
    {
        title: "System Information",
        description: "What command would you use to view system information such as kernel version and CPU architecture?",
        options: ["uname -a", "df -h", "top"],
        answer: 0,
        explanation: "'uname -a' provides detailed system information including the kernel version and architecture. 'df -h' shows disk usage, and 'top' displays active processes."
    },
    {
        title: "Service Management",
        description: "How can you restart the Apache web server?",
        options: ["systemctl restart apache2", "service apache2 start", "systemctl stop apache2"],
        answer: 0,
        explanation: "'systemctl restart apache2' restarts the Apache service. 'service apache2 start' starts the service, and 'systemctl stop apache2' stops it."
    },
    {
        title: "User Management",
        description: "Which command creates a new user account in Linux?",
        options: ["useradd", "passwd", "adduser"],
        answer: 0,
        explanation: "'useradd' creates a new user account. 'passwd' changes user passwords, and 'adduser' is a more user-friendly script for adding users in some distributions."
    },
    {
        title: "Log Files",
        description: "Which command shows the last 10 lines of the system log file?",
        options: ["tail -n 10 /var/log/syslog", "head -n 10 /var/log/syslog", "less /var/log/syslog"],
        answer: 0,
        explanation: "'tail -n 10 /var/log/syslog' shows the last 10 lines of the syslog file. 'head -n 10' shows the first 10 lines, and 'less' allows paging through the file."
    },
    {
        title: "File Compression",
        description: "What command would you use to create a compressed archive of a directory?",
        options: ["tar -czvf archive.tar.gz directory/", "gzip directory/", "zip -r archive.zip directory/"],
        answer: 0,
        explanation: "'tar -czvf archive.tar.gz directory/' creates a compressed archive using tar and gzip. 'gzip' compresses individual files, and 'zip' creates a zip archive."
    },
    {
        title: "Network Configuration",
        description: "How can you view the IP address configuration of your system?",
        options: ["ifconfig", "ping", "netstat"],
        answer: 0,
        explanation: "'ifconfig' shows the IP address configuration. 'ping' checks network connectivity, and 'netstat' displays network connections and routing tables."
    },
    {
        title: "Package Management",
        description: "What command would you use to install a package using apt-get?",
        options: ["apt-get install package_name", "yum install package_name", "rpm -i package_name"],
        answer: 0,
        explanation: "'apt-get install package_name' installs packages using the apt package manager. 'yum install' is used with yum, and 'rpm -i' installs RPM packages."
    },
    {
        title: "File Searching",
        description: "Which command is used to search for a string within files?",
        options: ["grep", "find", "locate"],
        answer: 0,
        explanation: "'grep' searches for patterns within files. 'find' searches for files and directories, and 'locate' searches a database of file names."
    },
    {
        title: "Disk Usage",
        description: "Which command provides a summary of disk usage for each directory?",
        options: ["du -sh", "df -h", "ls -lh"],
        answer: 0,
        explanation: "'du -sh' summarizes disk usage of directories. 'df -h' shows disk space usage, and 'ls -lh' lists files with human-readable sizes."
    },
    {
        title: "Process Control",
        description: "What command sends a SIGTERM signal to a process?",
        options: ["kill", "pkill", "killall"],
        answer: 0,
        explanation: "'kill' sends signals to processes, including SIGTERM. 'pkill' sends signals based on process names, and 'killall' sends signals to all processes with a specific name."
    }
];

let currentQuestionIndex = 0;

function startLearning() {
    document.getElementById('question-section').innerHTML = `
        <h2>${questions[currentQuestionIndex].title}</h2>
        <p>${questions[currentQuestionIndex].description}</p>
        <div id="options">
            ${questions[currentQuestionIndex].options.map((option, index) => 
                `<button onclick="chooseOption(${index})">${option}</button>`).join('')}
        </div>
    `;
}

function chooseOption(optionIndex) {
    const question = questions[currentQuestionIndex];
    const result = optionIndex === question.answer ? "Correct!" : "Incorrect.";
    const explanation = question.explanation;
    
    document.getElementById('question-section').innerHTML = `
        <h2>${result}</h2>
        <p>${questions[currentQuestionIndex].options[optionIndex]} is ${result.toLowerCase()}.</p>
        <p><strong>Explanation:</strong> ${explanation}</p>
        <button onclick="nextQuestion()">Next</button>
    `;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        startLearning();
    } else {
        document.getElementById('question-section').innerHTML = `
            <h2>Congratulations!</h2>
            <p>You have completed all the questions.</p>
            <button onclick="location.href='../index.html'">Back to Home</button>
        `;
    }
}

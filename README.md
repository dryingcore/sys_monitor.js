# sys_monitor.js

Developed by Gabriel Antunes Rocha (personal script), I hope you enjoy this application as I did while developing it.

Made to monitor the system manjaro linux.

## Summary

This project is a Node.js application designed to monitor various system metrics, including CPU info and usage, RAM usage, storage, and network information. It periodically collects and displays this information in the console.

## To install and use this Program you will need:

1. [NodeJS](https://nodejs.org/en): Ensure you have Node.js installed. You can download it from nodejs.org.
2. [Git](https://git-scm.com/): If you don't have Git installed, you can download it from git-scm.com.

### How to Install and Use

1. **Clone the repository:**

   ```sh
   git clone https://github.com/dryingcore/sys_monitor.js.git
   cd sys_monitor.js
   ```

   ```javascript
    npm install
    node index.js
   ```

## Packages Used

- [systeminformation](https://github.com/sebhildebrandt/systeminformation): This package is used to fetch detailed system and hardware information.
- [os](https://nodejs.org/api/os.html): The built-in os module is used to get basic operating system-related utility functions.

## What's the sys_monitor.js Purpose?

The purpose of sys_monitor.js is to provide real-time monitoring of critical system resources and metrics. It is helpful for developers and system administrators who need to keep track of their system's performance and resource usage. The script fetches and displays:

- CPU Information and Usage: Provides detailed CPU information and the current load percentage.
- RAM Usage: Displays total, free, and used memory.
- Storage Information: Lists all disk devices with their size and type.
- Network Information: Shows network interface details including IP addresses and MAC addresses.

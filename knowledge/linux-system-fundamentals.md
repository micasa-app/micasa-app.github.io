---
title: Linux System Fundamentals
date: 2026-03-22
tags: [linux, systems, ipc, processes]
author: Sumanta
---

# Linux System Fundamentals

A collection of core concepts regarding Linux/Unix systems, processes, and directory structures.

## Inter Process Communication (IPC)
Inter process communication (IPC) is a mechanism which allows processes to communicate each other and synchronize their actions.

Processes can communicate with each other using these two ways:
- **Shared Memory**
- **Message passing**

---

## chroot
The term **chroot** refers to a process of creating a virtualized environment in a Unix operating system, separating it from the main operating system and directory structure. 

This process essentially generates a confined space, with its own root directory, to run software programs. This virtual environment runs separately from the main operating system's root directory. Any software program run in this environment can only access files within its own directory tree. It cannot access files outside of that directory tree. This confined virtual environment is often called a **"chroot jail"**.

---

## exec() call
*(Documentation pending)*

---

## fork() call
The **fork** system call is used to create a new process, called a **child process**, which runs concurrently with the process that called it (the **parent process**). 

After a new child process is created, both processes will execute the next instruction following the `fork()` system call. A child process uses the same program counter (PC), same CPU registers, and same open files as the parent process.

### Characteristics
- Takes no parameters.
- Returns an integer value:
    - **Negative**: Fork failed (child process creation failed).
    - **Zero**: Returned to the newly created child process.
    - **Positive**: Returned to the parent process (this is the PID of the child).

### Example Code
```c
#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main() {
    int cPid = 0;
    if(cPid = fork()) {
        // If fork returned non-zero, this is the parent process
        printf("Parent process, child pid = %d\n", cPid);
    } else {
        // If fork returned zero, this is the child process
        printf("Child Process\n");
    }
    return 0;
}
```

**Note:** Parent and child processes run the same program, but they are not identical. The OS allocates different data and states for these two processes.

---

## Init Daemon
In Unix-based operating systems, **init** (short for initialization) is the first process started during booting. 

- It is a daemon process that continues running until the system is shut down. 
- It is the direct or indirect ancestor of all other processes.
- It automatically adopts all orphaned processes. 
- Typically assigned **PID 1**.

---

## Daemon
A **daemon** is a computer program that runs as a background process, rather than being under the direct control of an interactive user. 

Traditionally, daemon names end with the letter `d` (e.g., `syslogd`, `sshd`) to differentiate them from normal programs.

---

## Linux Directory Structure

| Path | Description | Examples |
| :--- | :--- | :--- |
| `/bin` | **User Binaries** | `ps`, `ls`, `ping`, `grep`, `cp` |
| `/sbin` | **System Binaries** | `iptables`, `reboot`, `fdisk` |
| `/etc` | **Configuration Files** | `/etc/resolv.conf` |
| `/dev` | **Device Files** | `/dev/tty1`, `/dev/usbmon0` |
| `/proc` | **Process Information** | Virtual filesystem for kernel/process info |
| `/var` | **Variable Files** | Logs (`/var/log`), Mail (`/var/mail`) |
| `/tmp` | **Temporary Files** | Deleted on reboot |
| `/usr` | **User Programs** | Binaries, libs, docs for 2nd level programs |
| `/home` | **Home Directory** | `/home/john`, `/home/nikita` |
| `/boot` | **Boot loader Files** | Kernel, vmlinux, grub files |
| `/lib` | **System Libraries** | Libraries for `/bin` and `/sbin` |
| `/opt` | **Optional Apps** | Add-on apps from vendors |
| `/root` | **Root Home** | Personal data for the root user |

**Note:** `/` is the main folder where your filesystem resides, whereas `/root` is the root user's home directory.

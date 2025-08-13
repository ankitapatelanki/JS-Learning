### What is git?
Ans: Git is a tool that helps you track changes in your code, work with others, and manage different versions of your project easily.

Hinglish: Git ek tool hai jo aapke code ke changes ko track karta hai, team ke saath kaam karne mein help karta hai, aur project ke alag-alag versions ko manage karne mein easy banata hai.


### what is git?
// Git is a version control system that allows multiple people to work on a project simultaneously without interfering with each other's changes. It keeps track of changes made to files and allows users to revert to previous versions if needed. Git is widely used in software development for managing source code and collaborating with others.

### github all cmd with explanation
  // 1. git clone <repository-url>: This command is used to create a local copy of a remote repository on your machine.
// 2. git add <file>: This command stages changes in the specified file for the next commit.
// 3. git commit -m "commit message": This command commits the staged changes with a descriptive message.
// 4. git push: This command uploads your local commits to the remote repository on GitHub.
// 5. git pull: This command fetches and merges changes from the remote repository to   your local repository.
// 6. git branch: This command lists all branches in the repository.
// 7. git checkout <branch-name>: This command switches to the specified branch.
// 8. git merge <branch-name>: This command merges the specified branch into the current branch.
// 9. git status: This command shows the current status of your repository, including staged and unstaged changes.
// 10. git log: This command displays the commit history of the repository.
// 11. git remote add origin <repository-url>: This command adds a remote repository to
// your local repository, allowing you to push and pull changes.
// 12. git fetch: This command retrieves changes from the remote repository without merging them into your local branch.
// 13. git reset --hard: This command resets your local branch to the last commit, discarding any uncommitted changes.
// 14. git stash: This command temporarily saves your uncommitted changes, allowing you to switch branches or perform other actions without losing your work.



### 🔥 What is the need to clone repo 📁 from github?
Ans: If you want to access of any project which is on github or if you want to get a github repository(folder) to on your local machine(your personal computer) then we need to clone the repository. or if you want to collobrate any project then you need to clone the repository.

### 🔥 How to clone Repository 📁 from Github to Local Machine :
Command: git clone <git repository url>

### how to get git repository url:
👉 First of all goto your github account then click on repository. 
👉 here you can see all of your repository. 
👉 you can click on any one of them which you want to clone.
👉 then go to code button and copy the repo url.

### What is the need of Branch ?
if you want to implement a feature or develop a feature  or if you want to change in existing feature then you have create you own branch.


### How to create a branch on github or using local machine?
using github you can simply go to branch and type you branch name and click to create branch;

using vs code or terminal -> git checkout -b <branch_name>


### How to staged your all files or indivisual file:
For All Files: git add .
For Indivisual File: git add <file_name> like index.js

### How to commit:
cmd: git commit -m "Any message related to your work"

### How to push your code on github:
cmd: git push / git push <your_branch_name>

### How to pull code from one branch to another branch or merge your one branch to another branch:
cmd: git pull origin <your_branch_name>

### How to checkout or switch branch :
cmd: git checkout <branch_name>









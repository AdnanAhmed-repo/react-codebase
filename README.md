This is the repository for the front end application living on https://www.networkzen.co

🚀 Getting Started
This is an overview of setting up your environment from scratch. If something is missing or unclear in this document please fix it and submit a pull request. TODO: add link

1. Install prerequisites

Node.js: >= 10.18.0
Yarn: >= 1.17.0
Fetch source code

Feel free to clone or fork this repository. master is the default branch and should be used to branch off of.

2. Install dependencies

Note: we use npm for dependency management.

npm install

3. Run application

 npm run dev

Contributing
We follow a modified version of GitLab flow. Our branches map directly to environments and when a pull request is merged a build is kicked off automatically (but GitHub Actions):

To work on a feature or bug, create a branch off master. Once you're ready for your work to be reviewed, create a pull request from your branch into master branch. Once approved, merge your branch into master.

1. When you are ready to start coding the ticket from JIRA

1. git status
2. git diff
3. git checkout .
4. git pull origin master (to pull any updates for other contributions)
5. git checkout -b (ticket-code_ticket-name) --for example: git checkout -b NC-3_login-and-register

Now you can start coding!


2. When you are ready to commit code or changes:

1. git status
2. git diff
3. git add .
4. git commit -m(message of what you have changed)
5. git push --set-upstream origin {branch-name}, --example  git push --set-upstream origin NC-3_login-and-register
6. go to github and create pull request to merge your branch into master, I will aprove it and then it will merge
7. git chekcout master in terminal
7. restart the proccess from section titled " When you are ready to start coding the ticket from JIRA"  once you want to start coding or fixing a new component




# GitHub Actions CI/CD Setup

## Description

This project is meant to demonstrate a full-stack CI/CD workflow with GitHub Actions, Cypress component testing and deployment integration.


## Features

-  Automated CI/CD pipeline using GitHub Actions
-  Cypress component testing triggered on pull requests to develop
-  Node.js backend and React frontend built with Vite


## Tech Stack

-  Frontend: React + Vite
-  Backend: Node.js, Express
-  Testing: Cypress
-  CI/CD: GitHub Actions


## Installation

1. Clone the repository:
```bash
    git clone https://github.com/Falmanza94/GitHubActions-CI-CD-Setup-Ku-Coding-Bootcamp-2025
```
2. Install dependencies:
```bash
    cd client
    npm install
```
3. Run Cypress tests locally:
```bash
    npx cypress run --component
```
4. Push a feature branch and create PR into develop to trigger the GitHub Action.


## Common Issues

-  Make sure cypress.config.js uses import/export IF "type": "module" is set in package.json
-  Ensure the file path in cypress.config.js are correct relative to the client directory.


## Collaborators

This project was completed individually as part of the KU Coding Bootcamp. I used ChatGPT as a helping hand.


## Questions

If you have questions, reach out to me at [fischer.almanza@gmail.com](mailto:fischer.almanza@gmail.com). You can find more of my work at [Falmanza94](https://github.com/Falmanza94).
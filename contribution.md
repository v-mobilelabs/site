# Contributing to the Marketing Website Project

First off, thank you for considering contributing! We welcome contributions from everyone. This document provides guidelines for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
- [Development Workflow (Gitflow)](#development-workflow-gitflow)
  - [Branching Strategy](#branching-strategy)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Style Guides](#style-guides)
  - [Git Commit Messages (Conventional Commits)](#git-commit-messages-conventional-commits)
  - [Code Style](#code-style)
- [Development Setup](#development-setup)
- [Testing](#testing)

## Code of Conduct

This project and everyone participating in it is governed by the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [project-maintainer-email@example.com](mailto:project-maintainer-email@example.com).

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please ensure the bug was not already reported by searching on GitHub under Issues.

If you're unable to find an open issue addressing the problem, open a new one. Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample or an executable test case** demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues.

Before creating enhancement suggestions, please check the issues list as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please include as many details as possible, including the steps that you imagine you would take if the feature you're requesting existed.

## Development Workflow (Gitflow)

This project uses the Gitflow workflow. Understanding the basic flow is important for contributing.

### Branching Strategy

- **`main`**: This branch contains production-ready code. Direct commits are forbidden. Merges only happen from `release` branches or `hotfix` branches.
- **`develop`**: This is the main development branch where features are integrated. All feature branches are branched off `develop` and merged back into `develop`.
- **`feature/<feature-name>`**: For new features or improvements. Branched off `develop`. Example: `feature/add-author-bio`.
- **`release/<version>`**: For preparing a new production release. Branched off `develop`. Allows for last-minute fixes. Example: `release/v1.2.0`.
- **`bugfix/<issue-number>` or `bugfix/<short-description>`**: For non-urgent bug fixes needed in `develop`. Branched off `develop`. Example: `bugfix/fix-contact-form-validation`.
- **`hotfix/<version>` or `hotfix/<issue-number>`**: For critical bugs found in production (`main`). Branched off `main`. Example: `hotfix/v1.1.1` or `hotfix/critical-login-bug`.

### Submitting Pull Requests

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** locally: `git clone <your-fork-url>`.
3.  **Checkout the `develop` branch**: `git checkout develop`.
4.  **Pull the latest changes** from the upstream `develop` branch: `git pull upstream develop` (assuming you've set up the original repo as `upstream`).
5.  **Create your feature branch** off `develop`: `git checkout -b feature/your-feature-name develop`. (Use `bugfix/` prefix for bug fixes).
6.  **Set up the development environment** by following the instructions in the README.md.
7.  **Make your changes.** Ensure code follows the project's style guides.
8.  **Add tests** for your changes.
9.  **Ensure all tests pass** (`pnpm test`).
10. **Ensure your code lints** (`pnpm lint` - if you have a lint script).
11. **Commit your changes** using the Conventional Commits format (see below). Stage your changes (`git add .`) then commit (`git commit -m "type(scope): description"`).
12. **Push your branch** to your fork: `git push origin feature/your-feature-name`.
13. **Open a Pull Request (PR)** from your feature branch (`your-fork/feature/your-feature-name`) to the original repository's `develop` branch.
14. **Clearly describe** the problem and solution in the PR description. Include the relevant issue number (e.g., `Closes #123`).
15. **Request review** from maintainers. Address any feedback by pushing additional commits to your feature branch (the PR will update automatically).

## Style Guides

### Git Commit Messages (Conventional Commits)

We follow the Conventional Commits specification. This leads to more readable messages that are easy to follow when looking through the project history.

**Format:**

**Types:**

- `feat`: A new feature
- `fix`: A bug fix
- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `docs`: Documentation only changes
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test`: Adding missing tests or correcting existing tests
- `chore`: Other changes that don't modify `src` or `test` files (e.g., updating dependencies, project config)

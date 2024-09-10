# **Post List and Detail Viewer**

This project displays a list of posts with their titles and shows the details of a selected post including the ID and title. The data is fetched from a GraphQL API and managed via Redux.

---

## **Project Overview**

The application allows users to:
1. View a list of posts with a limit of 30 items.
2. Click on a post to view its details (ID and title).
3. Use Redux for state management to pass parameters between the list and the detail screen.

---

## **API Details**

- **Base URL**: [https://graphqlzero.almansi.me/](https://graphqlzero.almansi.me/)
- **Query**: Get All Posts

---

## **Table of Contents** 📚

- [Quick Start](#quick-start)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Running the Project](#running-the-project)
- [Screenshots](#screenshots)

---

## **Quick Start** 🤸

To get started with this project, follow the instructions below:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/your-repository.git
    cd your-repository
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Project**:
    ```bash
    npm start
    ```

---

## **Features** ✨

- **Display Post Titles**: Lists up to 30 posts.
- **Post Details View**: Shows details (ID and title) of a selected post.
- **State Management**: Uses Redux to manage and pass data between screens.
- **GraphQL Integration**: Fetches data using GraphQL queries.

---

## **Tech Stack** 🛠️

- **Frontend**: React Native
- **State Management**: Redux
- **API**: GraphQL
- **Styling**: Custom styles with React Native

---

## **Setup** 🛠️

1. **Ensure you have Node.js installed**. Download it from [nodejs.org](https://nodejs.org/).

2. **Install Expo CLI** (if not already installed):
    ```bash
    npm install -g expo-cli
    ```

3. **Create a new Expo project** (if starting from scratch):
    ```bash
    expo init post-list-app
    cd post-list-app
    ```

4. **Install Dependencies**:
    ```bash
    npm install @reduxjs/toolkit react-redux @apollo/client graphql
    ```

5. **Configure Redux and Apollo Client**:
   - Set up Redux slices for posts and selected post.
   - Configure Apollo Client with the GraphQL API endpoint.

---

## **Running the Project** 🚀

1. **Start the Expo development server**:
    ```bash
    npm start
    ```

2. **Open the Expo app** on your mobile device or emulator and scan the QR code provided by the development server.

3. **Navigate through the app** to view the post list and details.

---

## **Screenshots**

Here are some screenshots of the application:

<img src="https://github.com/yourusername/your-repository/assets/screenshot1.png" alt="Screenshot 1" width="200" style="display:inline-block; margin-right: 20px;">
<img src="https://github.com/yourusername/your-repository/assets/screenshot2.png" alt="Screenshot 2" width="200" style="display:inline-block; margin-right: 20px;">

---

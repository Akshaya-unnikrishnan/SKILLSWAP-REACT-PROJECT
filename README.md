here created a folder then create react project skillswap
then in that folder installed:toastify,material ui,react router dom,react boostrap and copy n paste normal bootstrap link in index.css
cleared all unnecessary contents from the files
then created ss-server folder in that open cmd prompt then npm init -y to initiate npm then install npm json serv er 0.17.4 stable version in it


# SkillSwap

* Built a skill exchange platform using **Vite + React**

  ```bash
  npm create vite@latest skillswap -- --template react
  ```

  (then `cd skillswap` → `code .`)

* Removed the default Vite files and unnecessary elements from the project

* Installed packages required for UI and functionality

  * React Bootstrap and Bootstrap for responsive styling
  * Material UI for UI components
  * React Icons for icons
  * React Router DOM for routing
  * React Toastify for toast notifications
  * Axios for API communication

---

## Project Structuring

* Created separate components and pages for different functionalities

* Main pages created:

  * Home
  * Register
  * Login
  * Dashboard
  * Profile
  * Discover
  * User Profile
  * Requests
  * Connections
  * Chat
  * Admin Dashboard

* Created a separate `services` folder for handling API-related functions

* Created a separate `ss-server` folder for the JSON Server backend

---

## Routing

* Installed **React Router DOM**

* Wrapped `App.jsx` with `BrowserRouter` inside `main.jsx`

* Created routes using `Routes` and `Route` in `App.jsx`

* Used `useNavigate()` for navigation between pages

* Used `useParams()` for dynamic routes such as:

  ```text
  /user-profile/:id
  /chat/:id
  ```

---

## User Registration & Login

* Created a registration form to collect:

  * Name
  * Email
  * Password
  * Location
  * Bio
  * Role

* Used `useState` to manage form values

* Stored registered users in JSON Server

* Implemented login by checking the entered email and password against registered users

* Stored the logged-in user's details in `localStorage`

* Used the stored user information throughout the application to identify the current user

---

## Profile Management

* Created a profile page to display user information

* Users can:

  * Edit name, location and bio
  * Add teaching skills
  * Add learning skills
  * Remove skills

* Used a Bootstrap modal for editing profile details

* Used controlled form inputs with `useState`

* Updated profile and skill information using API calls

* Prevented users from adding the same skill multiple times

---

## Discover Users

* Created a Discover page to find other SkillSwap users

* Displayed users using cards

* Added search functionality based on:

  * Name
  * Location
  * Skills

* Excluded the currently logged-in user and admin accounts from normal user discovery

* Added a **View Profile** option to view individual user details

---

## Skill Exchange Requests

* Users can send skill exchange requests to other users

* Request data contains:

  ```text
  senderId
  receiverId
  status
  ```

* Request status can be:

  ```text
  pending
  accepted
  rejected
  ```

* Prevented duplicate requests

* Checked whether users are already connected before sending a request

* Users can accept or reject received requests

---

## Connections

* When a skill request is accepted, a connection is created between the two users

* Connection data contains:

  ```text
  user1Id
  user2Id
  ```

* Connected users are displayed on the Connections page

* Connected users can start chatting with each other

---

## Chat

* Created a basic user-to-user chat system

* Used dynamic routing with the receiver's user ID

* Stored messages in JSON Server

* Message data contains:

  ```text
  senderId
  receiverId
  message
  timestamp
  ```

* Filtered messages using sender and receiver IDs to display only the current conversation

* Updated the message state immediately after sending so messages appear without refreshing the page

---

## JSON Server

* Created a separate backend using **JSON Server**

* Main database file:

  ```text
  db.json
  ```

* Created collections for:

  ```text
  users
  skills
  requests
  connections
  messages
  ```

* Used JSON Server REST APIs for storing and retrieving application data

---

## Axios API Integration

* Created reusable API functions using Axios

* Used HTTP methods:

  ```text
  GET
  POST
  PUT
  DELETE
  ```

* Created API functions for users, skills, requests, connections and messages

* Used an Axios instance to maintain the common backend base URL

* Separated API logic from the React components using the `services` folder

---

## React Concepts Implemented

* Functional Components
* JSX
* `useState`
* `useEffect`
* `useNavigate`
* `useParams`
* Props
* State lifting
* Controlled forms
* Conditional rendering
* Local Storage
* React Router
* API integration
* CRUD operations
* Search and filtering

---

## UI & Styling

* Used Bootstrap and React Bootstrap for responsive layouts

* Used Material UI for selected cards, buttons and typography

* Used React Icons for action and navigation icons

* Used React Toastify for success, warning and error messages

* Created a responsive interface using Bootstrap grid classes

---

## Deployment

* Deployed the **React frontend using Vercel**

* Deployed the **JSON Server backend using Render**

* Updated the API base URL in the React application with the deployed backend URL

* Connected the deployed React frontend with the deployed JSON Server backend

---

## Application Workflow

Register
   ↓
Login
   ↓
Create / Edit Profile
   ↓
Add Teaching & Learning Skills
   ↓
Discover Users
   ↓
Search / Filter
   ↓
View User Profile
   ↓
Send Skill Request
   ↓
Accept / Reject
   ↓
Connection
   ↓
Chat
   ↓
Exchange Skills
```

---

## Technologies Used

* **React.js**
* **Vite**
* **JavaScript**
* **React Router DOM**
* **JSON Server**
* **Axios**
* **Bootstrap / React Bootstrap**
* **Material UI**
* **React Icons**
* **React Toastify**
* **Git & GitHub**
* **Vercel**
* **Render**

---

## Project Purpose

SkillSwap is designed to provide a simple platform where users can **share the skills they know and find people who can teach them new skills**.

The project was developed to gain practical experience in **React development, REST API integration, CRUD operations, state management, routing, and frontend-backend communication**.



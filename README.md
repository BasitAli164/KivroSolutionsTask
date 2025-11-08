# KivroSolutionsTask


# Task 1 –  Basic Frontend + Backend Setup 
Goal: Understand how frontend and backend connect. 
Description: 
Requirements: 
Create a simple HTML form (name, email, message) and send the data to a Node.js Express server 
using a POST request. 
● Frontend: HTML form with input fields 
● Backend: Express.js server with a POST route (/contact) 
● Console log submitted data on the server 

# What I Did:

Frontend:
Created a simple HTML contact form with three fields: Name, Email, and Message.
Added a script.js file that listens for the form submission event.
Used the fetch() API to send form data as JSON to the backend at http://localhost:3000/contact.
Reset the form after successful submission and handled any errors.

Styling:
Designed a clean and responsive interface using style.css.
Added gradient background, shadows, and focus effects for better user experience.

Backend (Node.js + Express):
Set up an Express server and used CORS and express.json() middleware.
Created a GET route (/) to test server response.
Created a POST route (/contact) to receive form data from the frontend.
Logged the submitted data (name, email, message) in the server console.
Configured the server to run on port 4000 or the port from .env.

Output:
When the user fills the form and clicks “Send Message,” the server logs the following data:
Received contact form data:
Name: John Doe
Email: johndoe@example.com
Message: Hello, this is a test message!


Tools & Technologies Used:
HTML, CSS, JavaScript (Frontend)
Node.js, Express.js (Backend)
CORS for frontend-backend communication
dotenv for environment configuration


# Task 2 – REST API with Database 
Goal: Learn how to build and connect APIs to a database. 
Description: 
Build a Book Management API using Express.js and MongoDB. 
Requirements: 
● Routes: /books (GET), /books/:id (GET), /books (POST), /books/:id (DELETE) 
● Use Mongoose for schema 
● Return JSON data
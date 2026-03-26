# Post-Lab Exercise 1: Form Handling with Middleware (Express)

## Overview
This project serves a simple HTML form and uses Express middleware (`express.urlencoded`) to parse submitted form data from `req.body`, then displays the values on a results page.

## Files
- `public/form.html` - the HTML form (Student Name, Branch, Year)
- `server.js` - Express server with:
  - `app.use(express.urlencoded({ extended: false }))`
  - `POST /submit` handler that reads `req.body` and renders the submitted data
- `views/` - EJS templates for dynamic rendering
  - `views/postlab1.ejs`
  - `views/Post-Lab2.ejs`

## Setup & Run
From the project folder:
```bash
npm install
npm start
```

Open in your browser:
`http://localhost:3000`

## How to Test
1. Fill the form and click **Submit**
2. You should see the submitted info displayed like:
   - Student Name: Rahul
   - Branch: CE
   - Year: Second Year

The `Branch` dropdown uses the codes: `CE`, `CSE`, `MECH`, `ECS`.

### EJS Pages
- Visit `http://localhost:3000/postlab1`
- Visit `http://localhost:3000/postlab2`


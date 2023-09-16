const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'docs' directory
app.use(express.static(path.join(__dirname, 'docs')));

// Redirect root to /index.html
app.get('/', (req, res) => {
    res.redirect('/index.html');
});

// Handle form submission
app.get('/generate-url', (req, res) => {
    const { baseURL, context, customText } = req.query;
    const generatedURL = `${baseURL}${context}${customText}`;
    res.send(`Generated URL: <a href="${generatedURL}">${generatedURL}</a>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

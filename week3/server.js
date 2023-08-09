const express = require('express');
const path = require('path');
const app = express();

const users = [
    { email: "email1@com.au", password: "123" },
    { email: "email2@com.au", password: "456" },
    { email: "email3@com.au", password: "789" }
];

// Homepage route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'form.html'));
});

// Account page route
app.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'account.html'));
});

// Login endpoint
app.post('/login', express.json(), (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

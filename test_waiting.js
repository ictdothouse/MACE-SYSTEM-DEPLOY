const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/test-waiting-room', (req, res) => {
    const lang = req.query.lang || 'ms';
    res.render('waiting-room', {
        lang,
        queuePosition: 5,
        estimatedWaitSeconds: 120,
        activeCount: 201,
        maxCount: 200,
        formData: {}
    });
});

app.get('/', (req, res) => {
    res.redirect('/test-waiting-room');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`\n🚀 Waiting Room simulation server running on http://localhost:${PORT}`);
    console.log(`👉 Preview BM: http://localhost:${PORT}/test-waiting-room?lang=ms`);
    console.log(`👉 Preview EN: http://localhost:${PORT}/test-waiting-room?lang=en\n`);
});

const express = require('express');

const app = express();

/// Serving static files
// app.use(express.static(path.join(__dirname, '/build')));

// /// Catch all for routing
// app.get('/*', (req, res) => {
//     res.sendFile('index.html', {
//         root:path.join(__dirname, "/build")
//     })
// });

const port = process.env.PORT || 8090;
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})


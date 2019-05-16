const express = require('express');
const massive = require('massive');
require('dotenv').config();

const app = express();

/// Serving static files
// app.use(express.static(path.join(__dirname, '/build')));

// /// Catch all for routing
// app.get('/*', (req, res) => {
//     res.sendFile('index.html', {
//         root:path.join(__dirname, "/build")
//     })
// });

massive(process.env.CONNECTION_STRING);
    // .then((dbInstance)=>{
    //     console.log('Database connected')
    //     app.set('db', dbInstance)
    // })
    // .catch((err)=>{
    //     console.log('Error Database Error ${err}')
    // })

const port = process.env.PORT || 8090;

app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
})


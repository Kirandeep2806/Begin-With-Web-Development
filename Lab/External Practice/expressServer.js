const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname)) // adding this line will make the server look for static files in the current directory like linking local files to the server

app.get('/', (req, res) => { // try writing /hell
    // res.send('Hello World!')
    res.sendFile(__dirname + '/jquery.html'); // it is same as res.sendFile(path.join(__dirname, 'jquery.html'))
}
)

app.listen(8090, () => {
        console.log('I am listening @8090');
    }
)

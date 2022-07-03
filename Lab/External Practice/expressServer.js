let express = require('express')
const app = express()

app.get('/', (req, res) => { // try writing /hell
    res.send('Hello World!')
}
)

app.listen(8090, () => {
        console.log('I am listening @8090');
    }
)

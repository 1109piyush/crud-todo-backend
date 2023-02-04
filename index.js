const app = require('./app')
const {PORT} = process.env
var cors = require('cors') 
app.use(cors())


app.listen(PORT, () => {
    console.log(`PORT is listening at ${PORT}`);
})
const express = require('express')
const connectDB = require('./db')
const app = express()
const port = 3000
const cors = require('cors')


app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use('/api/courses',require('./routes/courseRoute'))


app.get('/', (req, res) => {
    res.send('Hello World!')
})
connectDB()
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
}) 
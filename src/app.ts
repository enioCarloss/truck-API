import express, { json } from "express"

const app = express()
const port = 3000
app.use(json())
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})

// Route to get all items
import express, { json } from "express"
import { routerTruck } from "./router/router.truck"
import helmet from "helmet"

const app = express()
const port = 3000
app.use(helmet())
app.use(json())
app.use("/truck", routerTruck)
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

// Route to get all items
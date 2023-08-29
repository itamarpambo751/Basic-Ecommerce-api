import Routes from "./routes"

const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(([], [], next) => {
	app.use(cors({
		origin: '*',
		methods: "POST, GET, PATCH, DELETE",
		optionsSuccessStatus: 200
	}))

	next()
})
app.use(Routes)

export default app
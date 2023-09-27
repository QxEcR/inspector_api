const express = require("express")
const app = express()
const PORT = 3000
var db = require("./database.js")

app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.get("/api/lookups", (req, res, next) => {
	var sql = "select * from Lookups"
	var params = []
	db.all(sql, params, (err, rows) => {
		if (err) {
			res.status(400).json({ error: err.message })
			return
		}
		res.json({
			message: "success",
			data: rows,
		})
	})
})

app.get("/api/tasks", (req, res, next) => {
	var sql = "select * from Task"
	var params = []
	db.all(sql, params, (err, rows) => {
		if (err) {
			res.status(400).json({ error: err.message })
			return
		}
		res.json({
			message: "success",
			data: rows,
		})
	})
})

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`)
})

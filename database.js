var sqlite3 = require("sqlite3").verbose()

const databaseCommands = require("./db_commands.js")

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
	if (err) {
		// Cannot open database
		console.error(err.message)
		throw err
	} else {
		console.log("Connected to the SQLite database.")
		db.run(databaseCommands.createTaskTable, (err) => {
			if (err) {
				// Table already created
				console.log("table already created")
			} else {
				// Table just created, creating some rows
				var insert =
					"INSERT INTO Task (title, description, due_date) VALUES (?,?,?)"
				db.run(insert, [
					"Check boarding passes",
					"Check boarding passes",
					"2023-09-29",
				])
				db.run(insert, ["Screen passengers", "Screen passengers", "2023-09-29"])
				db.run(insert, ["Inspect luggage", "Inspect luggage", "2023-09-29"])
				db.run(insert, [
					"Patrol the airport",
					"Patrol the airport",
					"2023-09-29",
				])
				db.run(insert, [
					"Respond to incidents",
					"Respond to incidents",
					"2023-09-29",
				])
				db.run(insert, [
					"Provide customer service",
					"Provide customer service",
					"2023-09-29",
				])
				db.run(insert, [
					"Maintain security records",
					"Maintain security records",
					"2023-09-29",
				])
				db.run(insert, [
					"Train new inspectors",
					"Train new inspectors",
					"2023-09-29",
				])
				db.run(insert, [
					"Participate in drills and exercises",
					"Participate in drills and exercises",
					"2023-09-29",
				])
				db.run(insert, [
					"Keep up with current security procedures",
					"Keep up with current security procedures",
					"2023-09-29",
				])
				db.run(insert, [
					"Report any suspicious activity",
					"Report any suspicious activity",
					"2023-09-29",
				])
			}
		})
		db.run(databaseCommands.createLookupsTable, (err) => {
			if (err) {
				// Table already created
				console.log("table already created")
			} else {
				// Table just created, creating some rows
				var insert =
					"INSERT INTO Lookups (name, code, description) VALUES (?,?,?)"
				db.run(insert, ["Inspector role", 1, "Inspector role"])
				db.run(insert, [
					"Inspector certification",
					2,
					"Inspector certification",
				])
				db.run(insert, ["Airport procedures", 3, "Airport procedures"])
				db.run(insert, ["Airport equipment", 4, "Airport equipment"])
				db.run(insert, ["Airport incidents", 5, "Airport incidents"])
				db.run(insert, ["Airport threats", 6, "Airport threats"])
				db.run(insert, ["Airport training", 7, "Airport training"])
				db.run(insert, ["Airport best", 8, "Airport best"])
				db.run(insert, ["Airport regulations", 9, "Airport regulations"])
				db.run(insert, ["Airport audits", 10, "Airport audits"])
			}
		})
	}
})

module.exports = db

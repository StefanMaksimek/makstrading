const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
const dbConfig = require("./config/db.config"); // Achten Sie darauf, diese Datei zu erstellen.

const app = express();
const port = 3000;

const userRoutes = require("./routes/user.routes");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Datenbankverbindung herstellen
const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// Verbindung testen
const testDatabaseConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Successfully connected to the MariaDB/MySQL database.");
    connection.release(); // Verbindung freigeben
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testDatabaseConnection();

// Eine einfache Route
app.get("/", (req, res) => {
  res.json({ message: "Willkommen bei Maks-Trading Backend!" });
});

// Starten des Express-Servers
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}.`);
});

app.use("/api/users", userRoutes);

const jwt = require("jsonwebtoken");

// Importieren des User-Modells, wenn bereits definiert
const User = require("../models/user.model");

// Geheimer Schlüssel, der für die Signierung des JWT verwendet wird. Dies sollte in Ihrer Produktionsumgebung geheim und sicher gespeichert werden.
const SECRET_KEY = "TortenToni";

// Hier kommen die Controller-Methoden

// Registrierung eines neuen Benutzers
exports.register = async (req, res) => {
  try {
    let newUser = new User(req.body);
    newUser = await newUser.save();

    res
      .status(201)
      .send({ message: "Benutzer erfolgreich registriert!", newUser });
  } catch (error) {
    res.status(500).send({
      message: "Fehler bei der Registrierung des Benutzers.",
      error: error.message,
    });
  }
};

// Anmeldung eines Benutzers
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user && (await user.comparePassword(req.body.password))) {
      // Generieren eines JWT für den angemeldeten Benutzer
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        SECRET_KEY,
        { expiresIn: "24h" } // Token läuft in 24 Stunden ab
      );

      res.send({ message: "Anmeldung erfolgreich!", token });
    } else {
      res.status(401).send({ message: "Anmeldeinformationen sind ungültig." });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Fehler beim Anmelden.", error: error.message });
  }
};

// Alle Nutzer abrufen
exports.findAll = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ein Fehler ist aufgetreten beim Abrufen der Nutzer.",
      });
    });
};

// Einen Nutzer mit einer bestimmten ID abrufen
exports.findOne = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "Nutzer nicht gefunden mit id " + req.params.userId,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Nutzer nicht gefunden mit id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Fehler beim Abrufen des Nutzers mit id " + req.params.userId,
      });
    });
};

// Hier könnten weitere Methoden folgen, wie zum Erstellen, Aktualisieren und Löschen von Nutzern

// Vergessen Sie nicht, Ihre Methoden entsprechend zu exportieren und Ihre Modelle richtig zu importieren.

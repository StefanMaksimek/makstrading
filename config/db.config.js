module.exports = {
  HOST: "localhost", // Ersetzen Sie mit Ihrer Datenbank-Hostadresse
  USER: "d03e93b4", // Ersetzen Sie mit Ihrem Datenbankbenutzernamen
  PASSWORD: "ykffDpV7FfsPQHuGhVT4", // Ersetzen Sie mit Ihrem Datenbankpasswort
  DB: "d03e93b4", // Ersetzen Sie mit Ihrem Datenbanknamen
  dialect: "mariadb", // oder 'mysql' falls MariaDB nicht funktioniert
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

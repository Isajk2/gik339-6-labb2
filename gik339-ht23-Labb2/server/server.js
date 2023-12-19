const express = require('express');
const server = express();
const sqlite3 = require('sqlite3').verbose(); // Import sqlite3 package
const port = 3000;

server
.use(express.json())
.use(express.urlencoded({ extended: false }))
.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', '*');
res.header('Access-Control-Allow-Methods', '*');
next();
});

// Skapa en route för /users endpoint
server.get('/users', (req, res) => {
    // Callback function logic för att hantera GET request
  
    // 1. Skapa en variabel vid namn db och tilldela den värdet new sqlite3.Database("./gik339-labb2.db");
    const db = new sqlite3.Database('./gik339-labb2.db');
  
    // 2. Använd databasobjektets (db) funktion all() för att ställa en fråga mot databasen.
    // 3. Funktionen db.all() tar en SQL-fråga som första argument och en callbackfunktion som andra argument.
    db.all('SELECT * FROM USERS', (err, rows) => {
      // a. Callbackfunktionen ska ta parametrarna err och rows.
      if (err) {
        // b. Välj själva hur ni vill hantera eventuella fel.
        res.status(500).send(err);
      } else {
        // 4. Skicka svaret tillbaka till klienten som gjorde förfrågan via res.send(rows);
        res.send(rows);
      }
    });
  
    // Stäng databaskopplingen efter att förfrågan är klar.
    db.close();
  });
  
  // Starta servern
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
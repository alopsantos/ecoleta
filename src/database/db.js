const sqlite3 = require("sqlite3").verbose()

//criar objeto que ira fazer operaçoes no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar objeto de banco de dados, para nossas operacoes

db.serialize(() => {
  // Com comandos sql
  // 1 criar uma tabela
  db.run(`
      CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
      );
  `)
  // 2 Inserir dados na tabela 
  const query = `
  INSERT INTO places (
    image,
    name,
    address,
    address2,
    state,
    city,
    items
  ) VALUES (?, ?, ?, ?, ?, ?, ?);
`
  const values = [
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    "Organicos",
    "Rua Primeiro de Maio",
    "N 166",
    "Parana",
    "Santa Terezinha de Itaipu",
    "5,6"
  ]

  function afterInsertData(err){
    if(err){
      return console.log(err)
    }
    console.log("Cadastrado com sucesso")
    console.log(this)
  }

  // db.run(query, values, afterInsertData)

  // 3 Consultar dados na tabela
  // db.all(`SELECT * FROM places`, function(err, rows){
  //   if(err){
  //     return console.log(err)
  //   }
  //   console.log("Aqui estão seus registros")
  //   console.log(rows)
  // })

  // 4 Deletar um dado na tabela
  // db.run(`DELETE FROM places WHERE id = ?`, [?], function(err){
  //   if(err){
  //     return console.log(err)
  //   }
  //   console.log("Registro deleteado com sucesso")
  // })

})
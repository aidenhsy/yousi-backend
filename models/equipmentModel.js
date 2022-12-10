const db = require("../config/db");

class Equipment {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  async save() {
    let sql = `INSERT INTO testtable(name, address) VALUES('${this.name}', '${this.address}')`;
    const [newUser, _] = await db.execute(sql);
    return newUser;
  }

  static findAll() {
    let sql = "SELECT * FROM testtable";

    return db.execute(sql);
  }
}

module.exports = User;

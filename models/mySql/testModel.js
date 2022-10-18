const { connectMySql } = require("../config/db");

class User {
  constructor(name, address) {
    this.name;
    this.address;
  }

  async save() {
    let sql = `INSERT INTO testtable(name, address) VALUES('john', '123 Street St')`;
  }

  static findAll() {}
}

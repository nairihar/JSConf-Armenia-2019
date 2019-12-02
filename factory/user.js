class User {
  constructor(name) {
    this.name = name
  }
}

function createUser(name) {
  return new User(name)
}


const aBuetifulUser = new User('Anna')
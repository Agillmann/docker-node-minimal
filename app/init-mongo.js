db.createUser({
  user: "bomzie",
  pwd: "gigi",
  roles: [
    {
      role: "readWrite",
      db: "mongo-test"
    }
  ]
})
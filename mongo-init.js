db = db.getSiblingDB("iot_db");
db.createUser({
    user: "dbuser",
    pwd: "senha123",
    roles: [
        {role: "readWrite", db:"iot_db"}
    ]
})
module.exports = function* query(db, param) {
    var conn = yield db.connection();

    return conn.get(param);
};

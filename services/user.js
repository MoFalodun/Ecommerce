const db = require('../db/setup');
const { generateUUID } = require('../utils');
const { insertUser, fetchUserByUserName, fetchUserByEmail, fetchUserById, updateUserById} = require('../db/queries/user')

const addUser = async (data) => {
    const id = generateUUID;
    const { email, firstName, lastName, password, userName } = data;
    return db.one(insertUser, [id, email, firstName, lastName, password, userName ])
}

const getUserByUsername = async (userName) => db.oneOrNone(fetchUserByUserName, [userName])
const getUserByEmail = async (email) => db.oneOrNone(fetchUserByEmail, [email])
const getUserById = async (id) => db.oneOrNone(fetchUserById, [id])
const updateUserDetails = async (data, userId) => {
    const {email, firstName, lastName, userName } = data;
    return db.one(updateUserById, [email, firstName, lastName, userName, userId])
}
module.exports = { addUser, getUserByUsername, getUserById, updateUserDetails, getUserByEmail }
const users = []

const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if (!username || !room) {
        return {
            error: 'Username and Room are required'
        }
    }

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    if (existingUser) {
        return {
            error: 'Username is in use'
        }
    }

    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

// const addedUser = addUser({
//     id: 1,
//     username: 'liam',
//     room: 'room1'
// })

// const userList = getUsersInRoom('room1')
// console.log(userList)

// const user = getUser(1)
// console.log(user)

// console.log(addedUser)
// console.log(users)

// const removedUser = removeUser(1)

// console.log(removedUser)
// console.log(users)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
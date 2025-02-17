// services/userService.js

let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" }
];

const getAllUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === parseInt(id));

const createUser = (data) => {
    const newUser = {
        id: users.length + 1,
        name: data.name,
        email: data.email,
    };
    users.push(newUser);
    return newUser;
};

const updateUser = (id, data) => {
    const user = users.find((u) => u.id === parseInt(id));
    if (!user) return null;

    user.name = data.name || user.name;
    user.email = data.email || user.email;
    return user;
};


const deleteUser = (id) => {
    const initialLength = users.length;
    users = users.filter((u) => u.id !== parseInt(id));
    return users.length < initialLength;
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };

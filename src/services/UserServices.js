import axios from "./customixe_axios";
const isAdmin = (token) => {
    return axios.get(`/api/admin`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

const fetchAllUser = (token, pageNumber, pageSize) => {
    return axios.get(`/api/admin/users`, {
        params: {
            pageNumber: pageNumber,
            pageSize: pageSize,
            sortBy: 'userId',
            sortOrder: 'asc'
        },
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}
const postCreateUser = (name, job) => {
    return axios.post("/api/users", { name, job });
}
const getUserById = (id) => {
    return axios.get(`/api/public/users/${id}`);
}
const updateUserById = (name, job) => {
    return axios.put("/api/users/2", { name, job });
}
const deleteUser = (id) => {
    return axios.delete(`/api/users/${id}`);
}
const loginApi = (email, password) => {
    return axios.post('/api/login', {
        "email": email,
        "password": password
    });
}

const isUser = (token) => {
    return axios.get(`/api/public`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}
const books = (token, pageNumber, pageSize) => {
    return axios.get(`/api/books`, {
        params: {
            pageNumber: pageNumber,
            pageSize: pageSize,
            sortBy: 'name',
            sortOrder: 'asc'
        },
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}
const bookById = (id) => {
    return axios.get(`/api/books/${id}`);
}

export { fetchAllUser, postCreateUser, getUserById, updateUserById, deleteUser, loginApi, isAdmin, isUser, books, bookById };

import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const createUser = async (userData) => {
    await axios.post(`${API_BASE_URL}/user`, userData)
}

const searchUser = async (email) => {
    await axios.get(`${API_BASE_URL}/search-user?email=${email}`)
}

export const httpManager  = {
    createUser,
    searchUser
};



export default httpManager;
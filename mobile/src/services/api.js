import axios from 'axios';
import { IP_HOST } from 'react-native-dotenv'
const api = axios.create({
    baseURL: `http://${IP_HOST}:3333`,
})

export default api;
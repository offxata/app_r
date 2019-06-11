import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-bur-92a32.firebaseio.com/'
})

export default instance;
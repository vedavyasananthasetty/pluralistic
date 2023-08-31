import axios from 'axios';

export default axios.create({
baseURL: 'https:someaddress//',
headers: {"ngrok-something":"true"}

});
import axios from 'axios'
import { BASEURL } from './Constants/Constants';

const instance = axios.create({
    baseURL: BASEURL
  });

  export default instance
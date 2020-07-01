import axios from "axios";

export default axios.create({
  baseURL: 'https://react-quiz-920d7.firebaseio.com'
})
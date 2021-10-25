import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3001"
})

export default api

/*
export const multipleFilesUpload = async () =>{
  try {
    await axios.post(baseURL + 'gerenciador-img/upload')
  } catch (error) {
    throw error
  }
}
*/

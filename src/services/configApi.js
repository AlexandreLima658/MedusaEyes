import axios from 'axios'

const apiBase = 'http://localhost:3003'


const multFilesUpload = async (data) => {
  try {
    await axios.post(apiBase + '/gerenciador-registro/upload',data)
  } catch (error) {
    console.log(error)
  }
}

export default multFilesUpload
import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/routes/etudiant`);
    return res.data || [];
  }
}
import axios from "axios";
async function Get(url) {
  try {
    const response = await axios.get(`/api/${url}`);
    return response;
  } catch (err) {
    throw new Error("this is a get error!" + err);
  }
}

async function Post(url, params = {}) {
  try {
    const response = await axios.post(`/api/${url}`, params);
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

export default {
  getSheetData: tab => {
    return Get(`sheets/tab/${tab}`);
  },
  getSessionData: () => {
    return Get(`sheets/sessions`);
  },
  update: (updates, tableName) => {
    return Post(`sheets/update`, { updates, tableName });
  }
};
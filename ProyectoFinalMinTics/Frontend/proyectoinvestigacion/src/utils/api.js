import axios from 'axios';

const baseURL = "http://localhost:3000"

export const obtenerUsuarios = async (successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      headers :{ "Content-Type": "application/json" },
      url: `${baseURL}/user/`,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  export const crearUsuarios = async (data, successCallback, errorCallback) => {
    const options = {
      method: 'POST',
      headers :{ "Content-Type": "application/json" },
      url: `${baseURL}/user/`,
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
  
  export const editarUsuarios = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      headers :{ "Content-Type": "application/json" },
      url: `${baseURL}/user/${id}/`,
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
  
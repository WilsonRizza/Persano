import axios from 'axios';

const API_URL = 'http://127.0.0.1:5001'



// Cadastrar usuario
export const cadastrarUsuario = async (parametros) => {
    try {
      const resultado = await axios.post(`${API_URL}/inserirusuario`, parametros);
      return resultado.data
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };
  

  
// listar usuarios
export const getUsuario = async (parametros) => {
    try {
      const resultado = await axios.post(`${API_URL}/`, parametros);
      return resultado;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  // validaUsuário
  export const validarusuario = async (parametros) => {
    try {
      const resultado = await axios.post(`${API_URL}/validarusuario`, parametros);
      return resultado.data
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };
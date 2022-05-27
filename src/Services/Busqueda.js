import { useState } from "react";
import Axios from "axios";


export const fetchData_Busca = async (termino,setallNotas) => {
    await Axios.get(`${process.env.REACT_APP_CREDENTIAL_DATA}/busqueda?termino=${termino.termino}`,{
        termino
    })
    .then(function (response) {
      setallNotas(response.data);
      return true;
    })
    .catch(function (error) {
      console.log(error)
      return false;
    });
  }
  
  export default fetchData_Busca;
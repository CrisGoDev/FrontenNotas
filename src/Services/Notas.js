import { useState } from "react";
import Axios from "axios";




export const PutData = async (nota) => {
  await Axios.put(`${process.env.REACT_APP_CREDENTIAL_DATA}/${nota.id}`, {
    id:nota.id,
    titulo: nota.titulo,
    cuerpo: nota.cuerpo
  })
  .then(function (response) {
    console.log(response);
    return true;
  })
  .catch(function (error) {
    console.log(error)
    return false;
  });
}



export const PostData = async (nota) => {
  await Axios.post(`${process.env.REACT_APP_CREDENTIAL_DATA}`, {
    titulo: nota.titulo,
    cuerpo: nota.cuerpo
  })
  .then(function (response) {
    console.log(response);
    return true;
  })
  .catch(function (error) {
    console.log(error)
    return false;
  });
}


export const fetchLastData = async (setnotas) => {

  await Axios.get(`${process.env.REACT_APP_CREDENTIAL_DATA}/last`)
  .then(function (response) {
    // console.log(response);
    setnotas(response.data);
  })
  .catch(function (error) {
    console.log(error)
    return false;
  });
}

export default fetchLastData;
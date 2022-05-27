import { useState } from "react";
import Axios from "axios";




export const PutData = async (nota) => {
  await Axios.put(`https://localhost:44328/api/nota/${nota.id}`, {
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
  await Axios.post('https://localhost:44328/api/nota', {
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

  await Axios.get('https://localhost:44328/api/nota/last')
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
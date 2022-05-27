import { useState } from "react";
import Axios from "axios";

export const fetchData = async (setnotas) => {
    try {
      const response = await Axios({
        method:"get",
        url: `${process.env.REACT_APP_CREDENTIAL_DATA}`,
      });
      if(setnotas!==undefined){
        setnotas(response.data);
      }
    } catch (error) {
      console.log(error);
    }
}



export default fetchData;
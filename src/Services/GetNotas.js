import { useState } from "react";
import Axios from "axios";

export const fetchData = async (setnotas) => {
    try {
      const response = await Axios({
        method:"get",
        url: "https://localhost:44328/api/nota",
      });
      if(setnotas!=undefined){
        setnotas(response.data);
      }
    } catch (error) {
      console.log(error);
    }
}



export default fetchData;
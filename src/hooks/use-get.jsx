import { useState, useCallback } from "react";
import axios from "axios";

const useGet = () => {
  const [isError, setIsError] = useState({
    error: false,
    errorMessage: "",
  });

  const requestHttp = useCallback(async (requestConf, requestFunc) => {
    try {
      const response = await axios({
        method: requestConf.method ? requestConf.method : "get",
        url: requestConf.url,
      });

      if (response.status !== 200) {
        throw new Error("Request data failed!");
      }

      const data = await response.data;

      requestFunc(data);
    } catch (error) {
      setIsError({
        error: true,
        errorMessage: error.message,
      });
    }
  }, []);

  return { isError, requestHttp };
};

export default useGet;

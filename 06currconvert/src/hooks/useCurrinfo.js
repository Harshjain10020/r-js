import { useEffect, useState } from "react";
//hooks are like function
function useCurrInfo(currency) {
   const [data, setData] = useState({})
  //useEffect is a hook that allows you to perform side effects in function components
  useEffect(() => {
    // Your side effect logic here
   
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    //console.table(data);
  }, [currency]);
  console.log(data);
  return data;
  
}

export default useCurrInfo;

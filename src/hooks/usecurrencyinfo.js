import { useState, useEffect } from "react";

function usecurrencyinfo(){
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>(res.json()))
        .then((res)=>(setdata[currency]))
        
    },[currency])
    console.log(data);
    return data;
}
export default usecurrencyinfo;
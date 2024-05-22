import {useState,useEffect} from 'react'
const UseFetch = (url) => {
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    useEffect(() =>{
        const fetchData = async (e) =>{
            


            preventDefault(e)
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error("error fetchig")
                }
                else{
                    const dataResponse = await response.json()
                    setData(dataResponse);

                }
            
            } catch (error) {
                console.log(error)
                setError(error.message)
            }
        }
        fetchData();
    },[])
  return {data,error,url};
    
  
}

export default UseFetch

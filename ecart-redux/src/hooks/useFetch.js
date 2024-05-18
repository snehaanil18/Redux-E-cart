// user defined hooks
import { useEffect, useState } from "react"

const useFetch = (url) => { //useFetch() - to fetch data from url

    const [data,setData] = useState("")

    useEffect(() => {
        fetch(url).then((res) => {
            res.json().then((arrayData) => setData(arrayData.products))
        }) 
    },[url])

    return data

}

export default useFetch
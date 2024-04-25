import { React, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function GitHub() {
    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/IamRahulThakur')
    //         .then(Response => Response.json())
    //         .then(data => {
    //             setData(data);
    //         })
    // }, [])



    return (
        <h1 className="bg-gray-600 text-center text-white py-8">
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="Git-picture" /> </h1>
    )
}
export default GitHub


export const gitHubInfoLoader = async () => {
    
    const response = await fetch('https://api.github.com/users/IamRahulThakur')
    return response.json()
}
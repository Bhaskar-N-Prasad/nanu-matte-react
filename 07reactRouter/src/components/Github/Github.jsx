import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/Bhaskar-N-Prasad')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        setData(data)
    }).catch((e)=>{
        console.log("Error: ", e)
    })

    }, [])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt='Github Image' width={300}/></div>
  )
}

export default Github
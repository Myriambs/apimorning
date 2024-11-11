import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
const Profil = () => {

  const [user,setUser]=useState([])
  const [loading,setLoading]=useState(true)    //etate changement 
  
  useEffect(()=>{
  setLoading(true)
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res=>{
    console.log(res)
    setUser(res.data)
    setLoading(false)
  })
  .catch(err=>{
    console.log(err)
    setLoading(false)
  })

return()=>{
  alert('Le composant Profile est masqué')
}

  },[])
  


  return (



    <div>

        {
          user.map((el)=><UserCard  el={el}  />)
        }

    </div>
  )
}

export default Profil
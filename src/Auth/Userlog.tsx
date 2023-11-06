import { useState } from 'react'

type AuthUser = {
    name: string,
    email: string
}
const UserLog = () => {
    const [user, setUser] = useState <AuthUser | null>(null)
    const handleLogin = () =>{
        setUser({
            name: "Olami",
            email: "polalekan526@gmail.com"
        })

    }
    const handleLogOut = () =>{
        setUser(null)
    }
    return ( <>
        <button className="border-2 p-2 border-blue-300 mr-4" onClick={handleLogin}>Log in</button>
        <button  className="border-2 p-2 border-blue-300 mr-4" onClick={handleLogOut}>Log Out</button>      
        <p>Your name is {user?.name}</p>
        <p>Your Email is {user?.email}</p>
      </>

     );
}
 
export default UserLog;
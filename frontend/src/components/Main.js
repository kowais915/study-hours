import { useEffect, useState } from "react";



const Main = () => {
    const [sessions, setSessions ] = useState(null)




    useEffect(()=>{
        const sessions = async()=>{
            const res = await fetch('/api/sessions/')
            const json = await res.json()
            if (res.ok){
                setSessions(json)
            }
        }

        sessions()
    }, [])




    return (  
        <div className="main">
            <div className="sessions">
                {sessions && sessions.map((s)=>(
                    <p key={s._id}>{s.subject}</p>
                ))}
            </div>

        </div>


    );
}
 
export default Main;
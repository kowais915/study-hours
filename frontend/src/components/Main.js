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
                <div>
                     <h1 key={s._id}>{s.subject}</h1>
                     <p>{s.topic}</p>
                     <p>{s.hours}</p>


                </div>
                ))}
            </div>

        </div>


    );
}
 
export default Main;
import { useState } from 'react'


const Form = () => {
    const [subject, setSubject ]= useState('')
    const [topic, setTopic] = useState('')
    const [description, setDescription] = useState('')
    const [hours, setHours ] = useState('')

    const [error, setError ] = useState(null)


    const submitter = async(event)=>{
        event.preventDefault()

        const session = {subject, topic, description, hours}

        const res = fetch('/api/sessions', {
            method: 'POST', 
            body: JSON.stringify(session), 
            headers:{
                'Content-Type': 'application/json'
            }
        })


        const json = await res.json()

        // checing the response
        if(!res.ok){
            setError(json.error)

        }

        if(res.ok){
            setSubject('')
            setTopic('')
            setDescription('')
            setHours('')
            setError(null)
            console.log('New session has been added. ')
        }

    }



    return (  


        <form action="" className="sessionsForm" onSubmit={submitter}>
            <h2>Create  a Session</h2>

            {/* form inputs here */}

            <label htmlFor="">Subject</label>
            <input type="text"
                onChange={(e)=>{
                    setSubject(e.target.value)
                    
                }}
                value = {subject}
            
            />

           <label htmlFor="">Topic</label>
            <input 
            
                type="text" 

                onChange={
                    (e)=>{
                        setTopic(e.target.value)
                    }

                }
                value = {topic}

                
            />

            <label htmlFor="">Description</label>
            <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                onChange = {(e)=>{ setDescription(e.target.value)}}
                value = {description}
            >

            </textarea>


            <label htmlFor="">Hours</label>
            <input 
                type="number"
                onChange={(e)=>{
                    setHours(e.target.value)
                }} 

                value = {hours}
            />

            <button>Submit</button>

        </form>



    
    );
}
 
export default Form;
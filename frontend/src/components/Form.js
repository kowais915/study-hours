const Form = () => {
    return (  

        <form action="" className="sessionsForm">
            <h2>Create  a Session</h2>

            {/* form inputs here */}

            <label htmlFor="">Subject</label>
            <input type="text" />

           <label htmlFor="">Topic</label>
            <input type="text" />

            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>


            <label htmlFor="">Hours</label>
            <input type="text" />

            <button>Submit</button>

        </form>



    
    );
}
 
export default Form;
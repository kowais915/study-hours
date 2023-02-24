
// component for the navbar of the app

const Nav = () => {
    return (  
        <div className="nav">

            <div>
                <h1>Study Hours</h1>
            </div>
            
            <div>
                <ul className = "links">
                    <a href="http://localhost:3000/"><li>Home</li></a>
                    <a href="http://localhost:3000/create"><li>Create</li></a>
                    <a href="#"><li>About</li></a>
                </ul>
            </div>

            

        </div>


    );
}
 
export default Nav;
import { useState } from "react";

const LoginTemplate = () => {
    const [selects,setSelects] = useState();
    return ( 
        <div className="body">
        <div className="container">
            <div className="heading">
                 <p> Log in or sign up </p>
            </div>
            <div className="middle">
                <p className="welcome">
                    Welcome to Airbnb
                </p>
             <div className="dropdown1">
                <p className="cnr"> Country/Region </p>
                <select class="select" value={selects} onChange={e=>setSelects(e.target.value)}>
                    <option></option>
                    <option value="(+91)">India (+91)</option>
                    <option value="(+1)">USA (+1)</option>
                    <option value="(+44)">UK (+44)</option>
                    <option value="(+49)">Germany (+49)</option>
                
                </select>
                
            
             </div>
                <form>
                    <input class="pn" type="number" placeholder="Phone number" />  
                    <span class="unit">{selects}</span>    
                </form>
            </div>
            <div class="inf">
                <p>We'll call or text you to confirm your number. Standard message and data rates apply 
                    <br></br>
                    <a href=""> Privacy Policy</a>
                </p>
            </div>
            <div class="ccc">
            <button class="continue">
                Continue
            </button>
            </div>

            <div class="loginoptions">
                <button class="boob"> Continue with Facebook </button>
                <button class="boob"> Continue with Google </button>
                <button class="boob"> Continue with Email</button>
                <button class="boob"> Continue with Apple </button>
                </div> 
        </div>
        </div>
     );
}
 
export default LoginTemplate;
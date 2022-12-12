import React from 'react'

export default function Logindetails() {
  return (
    <div class="k">
    <div class="y">
<button type="button" class="l">
    1
</button>
<button type="button" class="p">
    2
</button>
<button type="button" class="n">
    3
</button>
<div class="b">
    FILL YOUR DETAILS
</div>
<p class="m">
    SELECT 
    TITLES
</p>
<p class="o">
    REVIEW AND SUBMIT
</p>
</div>
<div1>
    <img src="WhatsApp Image 2022-11-26 at 14.12.029.jpg"/>
    
        </div1>
        <div2 >
            <p>
              FILL YOUR DETAILS
            </p>
            
        </div2>
        <div3>
            <center>

                <form class="xx">  
                    <label for="name" id ="fon">First Name:</label>
                    <input type="text" name="name" id="name" required/>
                    <br/><br/><br/><br/>
                    <label for="name" id="fon" >Last Name:  </label>
                    <input type="text" name="name" id="name" required/>
                    <br/> <br/><br/><br/>
                    <label for="name" id="fon2" >Email Id: </label>
                    <input type="text" name="name"pattern="[@]{1}[.]{1}" id="name" required/>
                    <br/><br/><br/><br/>
                    <label for="name" id="fon">Designation:  </label>
                    <input type="text" name="name" id="name" required/>
                    <br/><br/><br/><br/>
                    <label for="name" id="fon3" >Institute Name:  </label>
                    <input type="text" name="name" id="name1" required/>
                    <br/><br/><br/><br/>
                    <label for="name" id="fon4">Zip Code:  </label>
                    <input type="text" name="name" id="name" pattern="[0-9]{6}" required/>
                    <br/><br/><br/><br/>
                    <label for="name" id="fon5">Mobile Number:  </label>
                    <input type="text" name="name" id="name2" pattern="[6-9]{1}[0-9]{9}" required/>
                    <input id="button" type="submit" />
              </form>
            </center>
        </div3>
    </div>
  )
}

import React from 'react';
//import ReactDOM from 'react-dom';
import Header from'../components/Header'





function Form() {
  return (
   
    
    <div>
      <Header/>
      
    <div class="Form">
      <form>
     
<label for="User Name"><b>User Name</b></label><br></br>
<input type=" Name" name=" Name" required placeholder="Enter a valid User Name "></input><br></br>
    <label for="Phone Number"><b>Phone Number</b></label><br></br>
    <input type=" Number" name="Number" required placeholder="Enter a valid Number "></input><br></br>

    <label for="Company Profile"><b>Company Profile</b></label><br></br>
    <input type="Company Profile" name="Profile" required placeholder="Enter a valid Profile "></input><br></br>
    <label for="email"><b>Email</b></label><br></br>
    <input type="email" name="email" required placeholder="Enter a valid email address"></input><br></br>
    <label for="Address"><b>Address</b></label><br></br>
    <input type="Address" name="Address" required placeholder="Enter a valid  address"></input><br></br><br></br>
    <button type="Add" class="Addbtn">Add</button>
    <button type="Edite" class="editebtn">edite</button>
    <button type="Delete" class="deletebtn">Delete</button>
    </form> 
    </div>   
    
    <div class="footer">

  

<address>
  <a href="edgeIntel.com">edgeIntel.com</a><br></br>
  <a href="tel:+13115552368">(311) 555-2368</a>
  <a href="city:Bangalore">bangalore</a>
</address> 

</div>

        </div>
  );
}
export default Form;
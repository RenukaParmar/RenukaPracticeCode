import React from 'react'
import { useState } from 'react'

const Form = () => {
    const[formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        comments:"",
        isFriendly:false,
        employment:"",
        favoriteFruit:""
    })
    console.log(formData)
    function handleChange(event){
        const {name,value,type,checked}=event.target
        setFormData(prevValue=>{
            return{
                ...prevValue, 
                [name]:type==="checkBox" ? checked:value
            }
        })
    }
    function handleSubmit(e){
      e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <label htmlFor='firstname'>Firstname:</label>
      <input id="firstname"
       type='text'
        name='firstName'
        value={formData.firstName}  
         onChange={handleChange}/>
         <br/> 
      <label htmlFor='lastname'>Lastname:</label>
      <input  id='lastname'
       type='text'
        name='lastName' 
        value={formData.lastName}
        onChange={handleChange}/>
        <br/>
        <textarea 
        value={formData.comments} 
        name='comments' 
        onChange={handleChange}/>
        <br/>
       <input type='checkbox' 
      id='isFriendly'
      name='isFriendly'
      defaultChecked={formData.isFriendly}
      onChange={handleChange}
      /> 
      <label htmlFor='isFriendly'>are u friendly?</label>
      <br/>
      
      <fieldset>
        <legend>Current employment Status</legend>
        <input
        type='radio'
        id='unemployed'
        name='employment'
        value="unemployed"
        defaultChecked={formData.employment}
        onChange={handleChange}
        />
        <label htmlFor='unemployed'>unemployment</label>
        <br/>
        <input
        type='radio'
        id='partTime'
        name='employment'
        value="partTime"
 checked={formData.employment}     
   onChange={handleChange}
        />
        <label htmlFor='partTime'>part-time</label>
        <br/>
        <input
        type='radio'
        id='fullTime'
        name='employment'
        value="fullTime"
 checked={formData.employment} 
       onChange={handleChange}
        />
        <label htmlFor='fullTime'>full-time</label>
        <br/>
      </fieldset>
       <label htmlFor='favFruit'>what is your fav fruit?</label>
           <br/>
           <select
            id='favFruit' 
           defaultValue={formData.favoriteFruit}
           name='favoriteFruit' 
           onChange={handleChange}
           >
             <option>--choose--</option>
             <option defaultValue="lime">Lime</option>
             <option defaultValue="coconut">Coconut</option>
             <option defaultValue="mango">Mango</option>
           </select>
         <button>Submit</button> 
         </form>
    </div>
  )
}

export default Form

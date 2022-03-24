import React, { useState,useEffect } from 'react'
import "../index.css"
import axios from 'axios'
import { useForm } from 'react-hook-form'
import ShowTodo from './ShowTodo'

export default function Todo() {
      const [status,setStatus]=useState()
      const{register,handleSubmit,formState:{errors}}=useForm()
     
  
  useEffect(()=>{
    <Todo/>
  })
  async function submit (submission){
            try {
              let add={...submission,TnC:false}
              console.log(add,"mri jan hai tu")
                  await axios.post('https://6214b78289fad53b1f1c7b08.mockapi.io/DATA',add);
             
                  setStatus(true)

                } catch (error) {
                  console.error(error);
                }
    
      
        console.log(submission)
      }
      if(status){
            return <Todo/>
      }
  return (<div>
    <div className='todobox' >
    <h1>my Todo</h1>
    <div>
    <form onSubmit={handleSubmit(submit)} className="form">
    <label htmlFor="todo"><b>Todo name</b> </label>
         <div className='flex'> 
         <input type="text" rows='4' cols="20" {...register("title",{required:true})} placeholder='Todo Name Enter..'  />
       
         {errors?.description?.type === "required" && <span className="red"> &Delta; This field is required</span>}
         </div>
    <label htmlFor="todo"><b>Add todo</b> </label>
         <div className='flex'> 
         <textarea type="text" rows='4' cols="20" {...register("description",{required:true})} placeholder='enter your Todo...'  />
       
         {errors?.description?.type === "required" && <span className="red"> &Delta; This field is required</span>}
         </div>
         
          <input type="date" placeholder="date" {...register("date",{required:true})} />
          {errors?.date?.type === "required" && <span className="red"> &Delta; date is require</span>}
          <input type="submit" value='submit' />
          </form>
    </div>
    </div>
    <h1>todo list</h1>
    <ShowTodo submit={submit}/>
    </div>
  )
}

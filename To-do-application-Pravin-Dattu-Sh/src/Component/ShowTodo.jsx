import React, { useState, useEffect } from 'react'
import axios from 'axios';
import 'animate.css';
function ShowTodo() {
      const [userinfo, setUserinfo] = useState([]);
   
  useEffect(() => {
              getdata()
},[])
    
      async function getdata() {
            try {
                  const response = await axios.get('https://6214b78289fad53b1f1c7b08.mockapi.io/DATA');
                 console.log(response.data,"ddd");
                  setUserinfo(response.data);
                
            } catch (error) {
                  console.log(error);
            }
      }
    
      async function delettodo(id){
            await axios.delete(`https://6214b78289fad53b1f1c7b08.mockapi.io/DATA/${id}`);
      var newtodo=userinfo.filter((item)=>{
         console.log(item)
        return item.id!==id;
       
      })
      setUserinfo(newtodo)
      
      }


function handleCHECK(id){
        setUserinfo(
            userinfo.map((data)=>{
                
                  if(data.id==id){
                        if(data.TnC==true){
                              data.TnC=false;
                           }else{
                                 data.TnC=true
                           }
      
                  }
                  return data
            })
        )
           
     
      }
  
var latestdate = new Date();
   
return (
            <div>
                 
                 {
                       userinfo.map((data)=>{
                          return  <div className='float'>
                               <div key={data.id} className={latestdate>=new Date(data.date) ? (data.TnC===false)?"list-box":"list-box2" :data.TnC===false?"list-box":"list-box2"} >
                               <h4>Todo Name :<span className='list-title'>{data.title.toUpperCase()}</span> </h4>
                                 <h4>Todo: </h4>
                                 <p>{data.description} </p>
                               
                               <div className='List-card'>
                                <h5 className='blue'>due date <span className="mx" >{data.date}</span></h5>
                              
                               <div className='chekdiv'>
                               <input className='chekbox'  type="checkbox" onChange={(e)=>{handleCHECK(data.id)}} />
                               
                               </div> 
                                <i class="fa fa-trash"  onClick={()=>{delettodo(data.id)}}></i>
                                </div>
                              <div>
                                  
                                  { 
                                      data.TnC===false? latestdate>=new Date(data.date) ?<span className=' red'>due date passed</span> : <span className='green'>todo pending</span>:<i class="fa fa-check animate__animated animate__zoomIn" aria-hidden="true"> </i>}     
                                 
                              
                              </div> 
                            </div>
                                  
                            </div> 
                       })
                 }
  
            </div>
      )
}

export default ShowTodo;
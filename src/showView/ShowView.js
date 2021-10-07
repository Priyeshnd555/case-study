import React from 'react'

function ShowView() {
    
        
              const response = {


error: false,

message : 'Fetch Successfull',

data: [
    {
      question: 'a',
      answer: 'c'
    },
    {
      question: 'b',
      answer: 'b'
    },
    {
      question: 'c',
      answer: 'a'
    }
  ]
}

return (
<div className="App">
     <ul>
       {
         response.data.map(( obj, index)=>{

           return (<li>
             <div>
               <h4>{index} : {obj.question}  ...?</h4>
               <p>Ans : &nbsp;&nbsp;{obj.answer}</p>
             </div>
           </li>)
         })
       }
     </ul>
</div>
);
     
    
}

export default ShowView



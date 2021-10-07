 import {Card} from 'react-bootstrap'
 import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';


function SearchView() {
    const data = [{
        title : 'Question 1',
        question : 'What is ur name',
        answer : ' My name is Kavitha',
        diffcultLevel : ' easy'
    },
    {
        title : 'Question 2',
        question : ' ',
        answer : ' ',
        diffcultLevel : ' '
    },
    {
       title : 'Question 3',
       question : ' ',
        answer : ' ',
        diffcultLevel : ' '
    }]  
    return (
        <div>
            <div className="container">
      <ul className="showList">
        {
          data.map((obj)=>{
            return(
              //always enclose the list within div tag 
              
              
                    <div>
                      
                       <Card>
                        <Card.Body>
                           <li>{obj.title}</li>
                           <div className="container">
                              <li>{obj.question}</li>
                              <li>{obj.answer}</li>
                              <li>{obj.diffcultLevel}</li>
                           </div>

                          </Card.Body>
                     </Card> 
                     
                    </div> 
                  )
          })
        }
      </ul>  
    </div>

     
        </div>
    )
}

export default SearchView






































// import React, { useState, useEffect } from "react";

// import { DropdownButton, Dropdown } from "react-bootstrap";

// function UploadQuestions() {
  

//   // const [data, setdata] = useState([{}])
//   // const data = [3,3,5,2,2]

//   const [uploadData, setuploadData] = useState({
//     candidateName: "",
//     department: "",
//     clientName: "",
//     questions: [{
//       question: "",
//       answer: "",
//       difficultyLevel: "",
//     }],
//   });


//   const addrow=()=>{
//     const DataCopy = [...uploadData]
//     DataCopy.questions.push({});
//     setuploadData(DataCopy)
//   };

//   const deleterow=(index)=>{
//     const uploadDataCopy = [...uploadData]
//     uploadDataCopy.questions.splice(index,1)
//     setuploadData(uploadDataCopy)
//   };

//   const inpData = (event, name) => {
//     const uploadDataCopy = { ...uploadData };
//     uploadDataCopy[name ? name : event.target.name] = event.target.value;

//     setuploadData(uploadDataCopy);
//   };

//   const updateData = (event, name) => {
//     const uploadDataCopy = { ...uploadData };
//     uploadDataCopy.questions[name ? name : event.target.name] =
//       event.target.value;

//     setuploadData(uploadDataCopy);
//   };

//   useEffect(() => {
//     console.log("upload data", uploadData);
//   }, [uploadData]);

//   return (
//     <div>
//       <h1>upload your Questions</h1>

//       {/* input fields for uploading questions */}

//       <div id="candidateDetails" style={{ display: "flex" }}>
//         candiate name :{" "}
//         <input type="text" name="candidateName" onChange={(e) => inpData(e)} />
//         <br></br>
//         <br></br>
//         <DropdownButton
//           id="dropdown-item-button"
//           title="Department"
//           name="department"
//           onClick={(e) => inpData(e, "department")}
//         >
//           {/* <Dropdown.ItemText>Department</Dropdown.ItemText> */}
//           <Dropdown.Item as="button" value="hr">
//             HR
//           </Dropdown.Item>
//           <Dropdown.Item as="button" value="Technology">
//             Technology
//           </Dropdown.Item>
//           <Dropdown.Item as="button" value="It">
//             It
//           </Dropdown.Item>
//         </DropdownButton>
//         <br></br>
//         <br></br>
//         Client name :{" "}
//         <input type="text" name="clientName" onChange={(e) => inpData(e)} />
//         <br></br>
//         <br></br>
//         <br></br>
//         <DropdownButton
//           id="dropdown-item-button"
//           title="technology"
//           name="technology"
//           onClick={(e) => inpData(e, "technology")}
//         >
//           {/* <Dropdown.ItemText>TECHNOLOGY</Dropdown.ItemText> */}
//           <Dropdown.Item as="button" value="React js">
//             React js
//           </Dropdown.Item>
//           <Dropdown.Item as="button" value="Vue js">
//             Vue js
//           </Dropdown.Item>
//           <Dropdown.Item as="button" value="Angular">
//             Angular
//           </Dropdown.Item>
//         </DropdownButton>
//       </div>

//       {/* question and answer field */}

//       {/* i have to generate one row at start if user 
// clicks on add add one more question and answer field 

// and change the button in first input field to delete


//  */}
//       <div name="questions">
//         <br></br>
//         <br></br>

//         <table>
//           <thead></thead>
//           <tbody>
//             {data.map((obj, index) => {
              
//               return (
//                 <>
//                   <tr>
//                     <td>
//                       question :
//                       <input
//                         onChange={(e) => updateData(e)}
//                         type="text"
//                         name="question"
//                       />
//                     </td>
//                     <td>
//                       <DropdownButton
//                         id="dropdown-item-button"
//                         title="Difficulty Level"
//                         name="difficultyLevel"
//                         onClick={(e) => updateData(e, "difficultyLevel")}
//                       >
//                         {/* <Dropdown.ItemText>Difficulty Level</Dropdown.ItemText> */}
//                         <Dropdown.Item as="button" value="Easy">
//                           Easy
//                         </Dropdown.Item>
//                         <Dropdown.Item as="button" value="Intermediate">
//                           Intermediate
//                         </Dropdown.Item>
//                         <Dropdown.Item as="button" value="Difficult">
//                           Difficult
//                         </Dropdown.Item>
//                       </DropdownButton>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>
//                       Ans
//                       <textarea
//                         onChange={(e) => updateData(e)}
//                         type="text"
//                         name="answer"
//                       />
//                     </td>
//                     {index ===data.length-1 ? <button onClick={()=>addrow()}>add</button> : <button onClick={()=>deleterow(index)}>delete</button>}
//                     <td></td>
//                   </tr>
//                 </>
//               );
//             })}
//           </tbody>
//         </table>
//         <button type="button" onClick={() => resetPage}>
//           submit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UploadQuestions;

import React,{useState} from 'react'
// import AppBar from './siddanth/AppBar';
import UploadQuestion from '../srikanth/UploadQuestion';
function Home() {

    
    const [state, setstate] = useState({});
    

    const updateState = (data) =>{

            const stateCopy = {...state}

            stateCopy.push(data)

            setstate(stateCopy)

    }


    return (
        <div>
            <UploadQuestion  updateState={updateState}/>
        </div>
    )
}

export default Home

import React from 'react'

function AppBars() {
  
  return (
    <div>

        <Link to="/showview" className="aboutLink" onClick={()=>{props.renderdata}}>search</Link>
      
        <Link to="/" className="homeLink" >{/* <img src={logo} alt="img" /> */}Home</Link>

    </div>
  )
}

export default AppBars

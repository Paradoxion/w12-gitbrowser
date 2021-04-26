import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (    
    <div className="flex flex-col items-center justify-center bg-indigo-800 text-white font-bold border shadow-lg p-2 w-screen">
      <div id="repository-name">
         {props.user}
      </div>
      <div className="flex justify-between w-full">
        <div id="go-back" className="border rounded py-1 px-2">
          <Link to='/'>Back</Link>
        </div>
        <div id="go-repository-list" className="border rounded py-1 px-2">
          <Link to={`/${props.user}`}>To Repository list</Link>
        </div>
      </div>      
    </div>    
  )
}

Header.propTypes = {}

export default React.memo(Header)

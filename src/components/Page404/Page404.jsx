import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Page404.scss"

export const Page404 = () => {
    const navigate=useNavigate();
  return (
    <>
        <div className="container404">
            <div className="page404" onClick={()=>{navigate('/')}}>
                <div className="b1">404 <sup>ERROR</sup> </div>
                <div className="b2">This page doesn't exist.</div>
                <div className="b3">Go To Homepage</div>
            </div>
        </div>
    </>
  )
}

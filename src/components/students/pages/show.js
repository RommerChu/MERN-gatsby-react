import React from 'react'
import {useParams} from 'react-router-dom'

const Show=()=>{

  let {id} = useParams();

  return (
    <div className="row">
      <div className="col-lg-12 text-center">
        <h1>This page will show details of {id}</h1>
      </div>
    </div>
  )
}

export default Show
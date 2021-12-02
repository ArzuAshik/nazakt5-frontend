import React, { useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'


const ResourcePage = () => {
     // eslint-disable-next-line
     const [res, setRes] = useState([
          {id: 1, name: 'Resource 1',},
          {id: 2, name: 'Resource 2',},
          {id: 3, name: 'Resource 3',},
          {id: 4, name: 'Resource 4',},
     ])

     return (
          <>
          <Header/>
          <NavBar/>
          <div className="resource-page flex aic jc">
               <div className="res-block flex col">
                    <div className="head flex">
                         <div className="row flex font b6">Resource Catalog</div>
                         <div className="row flex font b6">Action</div>
                    </div>
                    <div className="tlb-head flex aic jc">
                         <div className="row flex b6">Resource ID</div>
                         <div className="row flex b6">Resource Name</div>
                         <div className="row flex">
                              <button className="btn-add cleanbtn b6 button">Add</button>
                         </div>
                    </div>
                    {
                         res.map((item, i) =>(
                              <div className="tlb-head tbl-list flex aic jc">
                                   <div className="row flex">{item.id}</div>
                                   <div className="row flex">{item.name}</div>
                                   <div className="row flex col">
                                        <button className="btn-add cleanbtn button">Update</button>
                                        <button className="btn-add cleanbtn button">Delete</button>
                                   </div>
                              </div>
                         ))
                    }
                    
               </div>
          </div>
          </>
     )
}

export default ResourcePage
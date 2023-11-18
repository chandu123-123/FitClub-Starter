import React from 'react'
import './programs.css'
import right from '../../assets/rightArrow.png'
import {programsData} from '../../data/programsData'
export default function programs() {
  return (
    <div className="Programs" id="programs-1">
        <div className="program-header">
            <span className='stroke'>Explore</span><span>
                our Programs</span><span className='stroke'>
                    To shape you
                </span>
        </div>
        <div className='programs-categories'>
            
            {programsData.map((program)=>(
                <div className="program-category">
                    <span className='svg'><span className='svg'>
  {React.cloneElement(program.image, { width: '50px' })}
</span>
</span>
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                   <div><img src={right} alt="" /></div>
                </div>
            ))}
        </div>
    </div>
  )
}

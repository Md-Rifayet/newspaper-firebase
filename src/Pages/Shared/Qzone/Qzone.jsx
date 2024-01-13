import React from 'react'
import qzone1 from  '../../../assets/qzone1.png'
import qzone2 from  '../../../assets/qzone2.png'
import qzone3 from  '../../../assets/qzone3.png'

const Qzone = () => {
  return (
    <div className='bg-light text-center py-4 px-2 my-4'>
        <h4>Q-Zone</h4>
        <div>
            <img className='mb-3' src={qzone1} alt="" srcset="" />
            <img className='mb-3' src={qzone2} alt="" srcset="" />
            <img className='mb-1' src={qzone3} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Qzone
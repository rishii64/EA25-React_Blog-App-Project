import React, { useContext } from 'react'
import { bucket } from '../Store/StoreCompo';
import { Link } from 'react-router-dom';

export default function Food() {
  const [data] = useContext(bucket)
  let dataFun1 = (item, index) => {
    if (index < 6) {
      return (
          <div  key={index} className='left'>
              <img src={item.img} alt='not found' />
              <div className='info'>
                <h3><Link to={`/Blog/${item.id}`}>{item.title}</Link></h3>
                <p className='des'>{item.desc.slice(0,300)}....</p>
                <p className='ref'>Food : 17-10-23</p>
              </div>
          </div>
      )
    }
  }
  let dataFun2 = (item, index) => {
    if (index === 6) {
      return (
          <div key={index} className='topPost'>
              <img id='topPost' src={item.img} alt='not found' />
              <div className='info'>
                <h3><Link to={`/Blog/${item.id}`}>{item.title}</Link></h3>
                <p className='ref'>Food : 17-10-23</p>
              </div>
          </div>
      )
    }
  }
  let dataFun3 = (item, index) => {
    if (index > 6) {
      return (
          <div  key={index} className='right'>
                <img id='rightImg' src={item.img} alt='not found' />
                <div className='info'>
                  <h3 className='r8Head'><Link to={`/Blog/${item.id}`}>{item.title}</Link></h3>
                  <p className='ref'>Food : 17-10-23</p>
                </div>
          </div>
      )
    }
  }
  return (
      <div className='main'>
        <div className='leftCont'>
          <h2 id='bolly'>Food</h2>
          {data.filter((data) => data.cat === 'food')
            .map(dataFun1)
          }
        </div>

        <div className='rightCont'>
          <h2>Top Posts</h2>
          {data.filter((data) => data.cat === 'food')
            .map(dataFun2)}
          {data.filter((data) => data.cat === 'food')
            .map(dataFun3)
          }
          <div className='addvert'>
            {/* <h1>Advertisement</h1> */}
            <img className='foodAdd' src='https://images.unsplash.com/photo-1583407723467-9b2d22504831?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFkdmVydGlzZW1lbnR8ZW58MHx8MHx8fDA%3D' alt='not found'></img>
          </div>
        </div>
      </div>
  )
}

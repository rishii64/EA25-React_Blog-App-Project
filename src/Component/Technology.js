import React, { useContext } from 'react'
import { bucket } from '../Store/StoreCompo';
import { Link } from 'react-router-dom';

export default function Technology() {
  const [data] = useContext(bucket)
  let dataFun1 = (item, index) => {
    if (index < 6) {
      return (
          <div  key={index} className='left'>
              <img src={item.img} alt='not found' />
              <div className='info'>
                <h3><Link to={`/Blog/${item.id}`}>{item.title.slice(0,80)}....</Link></h3>
                <p className='des'>{item.desc.slice(0,250)}....</p>
                <p className='ref'>Technology: 17-10-23</p>
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
                <p className='ref'>Technology: 17-10-23</p>
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
                  <p className='ref'>Technology: 17-10-23</p>
                </div>
          </div>
      )
    }
  }
  return (
      <div className='main'>
        <div className='leftCont'>
          <h2 id='bolly'>Technology</h2>
          {data.filter((data) => data.cat === 'technology')
            .map(dataFun1)
          }
        </div>

        <div className='rightCont'>
          <h2>Top Posts</h2>
          {data.filter((data) => data.cat === 'technology')
            .map(dataFun2)}
          {data.filter((data) => data.cat === 'technology')
            .map(dataFun3)
          }
          <div className='addvert'>
            <h1>Advertisement</h1>
          </div>
        </div>
      </div>
  )
}

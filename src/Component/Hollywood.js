import React, { useContext } from 'react'
import { bucket } from '../Store/StoreCompo';
import { Link } from 'react-router-dom';

export default function Hollywood() {
  const [data] = useContext(bucket)
  let dataFun1 = (item, index) => {
    if (index < 6) {
      return (
          <div key={index} className='left'>
              <img className='homeArticles' src={item.img} alt='not found' />
              <div className='info'>
                <h3 className='lHead'><Link to={`/Blog/${item.id}`}>{item.title.slice(0,80)}....</Link></h3>
                <p className='des'>{item.desc.slice(0,185)}....</p>
                <p className='ref'>Hollywood : 17-10-23</p>
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
                <h3 className='lHead'><Link to={`/Blog/${item.id}`}>{item.title.slice(0,100)}...</Link></h3>
                <p className='ref'>Hollywood : 17-10-23</p>
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
                  <p className='ref'>Hollywood : 17-10-23</p>
                </div>
          </div>
      )
    }
  }
  return (
      <div className='main'>
        <div className='leftCont'>
          <h2 id='bolly'>Hollywood</h2>
          {data.filter((data) => data.cat === 'hollywood')
            .map(dataFun1)
          }
        </div>

        <div className='rightCont'>
          <h2>Top Posts</h2>
          {data.filter((data) => data.cat === 'hollywood')
            .map(dataFun2)}
          {data.filter((data) => data.cat === 'hollywood')
            .map(dataFun3)
          }
          <div className='addvert'>
            {/* <h1>Advertisement</h1> */}
            <img className='hollyAdd' src='https://images.unsplash.com/photo-1570745859748-6ba2014423eb?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFkdmVydGlzZW1lbnR8ZW58MHx8MHx8fDA%3D' alt='not found'></img>
          </div>
        </div>
      </div>
  )
}

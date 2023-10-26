import React, { useContext } from 'react'
import tech from './tech.jpg'
// import food from './food.jpg'
import fit from './fit.jpg'
import jujutsu from './jujutsu.webp'
import add from './add.png'
import { bucket } from '../Store/StoreCompo';
import { Link } from 'react-router-dom';


export default function Home() {

  let blogData = useContext(bucket)
  return (
    <>
      <div className='images'>
        <img className='img1' src={jujutsu} alt='not found' />
          <img className='img2' src={tech} alt='not found'/>
          <img className='img3' src={fit} alt='not found' />
      </div>

      <h2 className='latestHead'>The Latest</h2>
      <div className='theLatest'>
          <div className='left section1'>
              <img className='homeLatest' src={blogData[0][2].img} alt='not found' />
              <div className='info home'>
                <h3 className='titleLink'><Link to={`/Blog/${blogData[0][2].id}`}>{blogData[0][2].title}</Link></h3>
                <p className='des'>{blogData[0][2].desc.slice(0,100)}....</p>
                <p className='ref'>Bollywood : 17-10-23</p>
              </div>
          </div>
          <div className='left section1'>
              <img className='homeLatest' src={blogData[0][22].img} alt='not found' />
              <div className='info home'>
                <h3><Link to={`/Blog/${blogData[0][22].id}`}>{blogData[0][22].title}</Link></h3>
                <p className='des'>{blogData[0][22].desc.slice(0,150)}....</p>
                <p className='ref'>Bollywood : 17-10-23</p>
              </div>
          </div>
          <div className='left section1'>
              <img className='homeLatest' src={blogData[0][44].img} alt='not found' />
              <div className='info home'>
                <h3><Link to={`/Blog/${blogData[0][44].id}`}>{blogData[0][44].title}</Link></h3>
                <p className='des'>{blogData[0][44].desc.slice(0,150)}....</p>
                <p className='ref'>Technology : 17-10-23</p>
              </div>
          </div>
      </div>

      {/* <div className='homeTopPost'></div> */}
      <div className='latestArticles'>
        <div className='homePageLeft'>
        <h2 className='latestHead mainTopPost'>The Latest Articles</h2>
          <div className='left section2'>
              <img className='homeArticles' src={blogData[0][5].img} alt='not found' />
              <div className='info articles'>
                <h3><Link to={`/Blog/${blogData[0][5].id}`}>{blogData[0][5].title}</Link></h3>
                <p className='des'>{blogData[0][5].desc.slice(0,150)}....</p>
                <p className='ref'>Bollywood : 17-10-23</p>
              </div>
          </div>
          <div className='left section2'>
              <img className='homeArticles' src={blogData[0][16].img} alt='not found' />
              <div className='info articles'>
                <h3><Link to={`/Blog/${blogData[0][16].id}`}>{blogData[0][16].title}</Link></h3>
                <p className='des'>{blogData[0][16].desc.slice(0,150)}....</p>
                <p className='ref'>Fitness : 17-10-23</p>
              </div>
          </div>
          <div className='left section2'>
              <img className='homeArticles' src={blogData[0][22].img} alt='not found' />
              <div className='info articles'>
                <h3><Link to={`/Blog/${blogData[0][22].id}`}>{blogData[0][22].title}</Link></h3>
                <p className='des'>{blogData[0][22].desc.slice(0,200)}....</p>
                <p className='ref'>Food : 17-10-23</p>
              </div>
          </div>
          <div className='left section2'>
              <img className='homeArticles' src={blogData[0][33].img} alt='not found' />
              <div className='info articles'>
                <h3><Link to={`/Blog/${blogData[0][33].id}`}>{blogData[0][33].title}</Link></h3>
                <p className='des'>{blogData[0][33].desc.slice(0,170)}....</p>
                <p className='ref'>Hollywood : 17-10-23</p>
              </div>
          </div>
        </div>

        <div className='homePageRight'>
            <div className='homeRight'>
                  <img className='add' src={add} alt='not found'></img>
                <h2 className='latestHead mainTopPost'>Top Post</h2>
                <div className='homePost left section1'>
                    <img className='homeLatest topImg' src={blogData[0][12].img} alt='not found' />
                    <div className='info home'>
                      <h3><Link to={`/Blog/${blogData[0][12].id}`}>{blogData[0][12].title}</Link></h3>
                      {/* <p className='des'>{blogData[0][22].desc.slice(0,150)}....</p> */}
                      <p className='ref'>Bollywood : 17-10-23</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <h2 className='latestHead'>Latest Stories</h2>
      <div className='theLatest'>
          <div className='left section1'>
              <img className='homeLatest' src={blogData[0][12].img} alt='not found' />
              <div className='info home'>
                <h3><Link to={`/Blog/${blogData[0][12].id}`}>{blogData[0][12].title}</Link></h3>
                <p className='des'>{blogData[0][12].desc.slice(0,120)}....</p>
                <p className='ref'>Bollywood : 17-10-23</p>
              </div>
          </div>
          <div className='left section1'>
              <img className='homeLatest' src={blogData[0][24].img} alt='not found' />
              <div className='info home'>
                <h3><Link to={`/Blog/${blogData[0][24].id}`}>{blogData[0][24].title}</Link></h3>
                <p className='des'>{blogData[0][24].desc.slice(0,180)}....</p>
                <p className='ref'>Bollywood : 17-10-23</p>
              </div>
          </div>
          <div className='left section1'>
              <img className='homeLatest' src={blogData[0][36].img} alt='not found' />
              <div className='info home'>
                <h3><Link to={`/Blog/${blogData[0][36].id}`}>{blogData[0][36].title}</Link></h3>
                <p className='des'>{blogData[0][36].desc.slice(0,120)}....</p>
                <p className='ref'>Technology : 17-10-23</p>
              </div>
          </div>
      </div>
    </>
  )
}

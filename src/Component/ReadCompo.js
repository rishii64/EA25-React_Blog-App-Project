import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { bucket } from "../Store/StoreCompo";
import { Link } from "react-router-dom";

export default function ReadCompo() {
    const nav = useNavigate()
    const readData = useParams();
    const data = useContext(bucket)
    const count = 5
    // console.log(data);

    let filterData = data[0].filter((e, index) => {
        return e.id === Number(readData.id)
    })
    // console.log(filterData);
    return (
        <>
            <div className="readBlog">
                <h1 className="readTitle">{filterData[0].title}</h1>

                <div className="readReporter">
                    <hr className="readLine"></hr>
                    <div className="readBlogUserdata">
                        <div className="readBlogUser">
                            <i className="fa-solid fa-user"></i> Saptarsi {filterData[0].date}
                        </div>
                        <div className="readBlogLogo">
                            <i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                    <hr className="readLine"></hr>
                </div>

                <img className="readImg" src={filterData[0].img} alt='not found' />
                <p className="readDesc">{filterData[0].desc}</p>

                <div className="readReporter">
                    <hr className="readLine"></hr>
                    <div className="readBlogUserdata">
                        <div className="readBlogUser">
                            <i className="fa-solid fa-user"></i> Saptarsi {filterData[0].date}
                        </div>
                        <div className="readBlogLogo">
                            <i className="fa-solid fa-hands-clapping"></i> {filterData[0].clap}
                        </div>
                    </div>
                    <hr className="readLine"></hr>
                </div>

            </div>

            <div className="share">
                <div>
                    <i className="fa-solid fa-hands-clapping"></i> {filterData[0].clap}
                </div>
                <div>
                    <i className="fa-solid fa-share-nodes"></i> Share
                </div>
            </div>
            <button className="readBtn" onClick={() => nav(-1)}>Back</button>

            <h2 className='latestHead'>More from Siren</h2>
            <div className="readMore">
                {
                    data[0].map((item, index)=>{
                        if(item.cat === filterData[0].cat && item.id!== filterData[0].id && item.id<count){
                            return <div key={index} className='left'>
                            <img className='homeArticles' src={item.img} alt='not found' />
                            <div className='info'>
                              <h3><Link to={`/Blog/${item.id}`}>{item.title.slice(0,80)}....</Link></h3>
                              <p className='des'>{item.desc.slice(0,250)}....</p>
                              <p className='ref'>Bollywood : 17-10-23</p>
                            </div>
                            </div>
                        }
                        else{
                            return null
                        }
                    })
                }
            </div>
        </>
    )
}


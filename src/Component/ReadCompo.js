import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { bucket } from "../Store/StoreCompo";


export default function ReadCompo(){
    const nav = useNavigate()
    const readData = useParams();
    const data = useContext(bucket)

    let filterData = data[0].filter((e, index)=>{
       return  e.id === Number(readData.id)
    })
    console.log(filterData);
    return(
        <>
        <div className="readBlog">
            <h1 className="readTitle">{filterData[0].title}</h1>
            <hr className="readLine"></hr>
            <div className="readBlogUserdata">
                <div className="readBlogUser">
                    <i class="fa-solid fa-user"></i> Saptarsi {filterData[0].date}
                </div>
                <div className="readBlogLogo">
                    <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
            <hr className="readLine"></hr>
            <img className="readImg" src={filterData[0].img} alt='not found' />
            <p className="readDesc">{filterData[0].desc}</p>
            {/* <hr></hr>
            <div className="readDataFooter">
                <div><i class="fa-solid fa-user"></i>{filterData[0].date}</div>
                <div><i class="fa-solid fa-hands-clapping"></i>{filterData[0].clap}</div>
            </div> */}
        </div>
        <div className="share">
            <div>
                <i class="fa-solid fa-hands-clapping"></i> {filterData[0].clap}
            </div>
            <div>
            <i class="fa-solid fa-share-nodes"></i> Share
            </div>
        </div>
            <button className="readBtn" onClick={()=>nav(-1)}>Back</button>
        </>
    )
}


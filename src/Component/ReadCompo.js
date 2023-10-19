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
            <img className="readImg" src={filterData[0].img} alt='not found' />
            <p className="readDesc">{filterData[0].desc}</p>
                <div className="readDataFooter">
                    <div>{filterData[0].date}</div>
                    <div>{filterData[0].clap}</div>
                </div>
        </div>
            <button className="readBtn" onClick={()=>nav(-1)}>Back</button>
        </>
    )
}
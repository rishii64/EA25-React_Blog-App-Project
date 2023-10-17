import { useContext } from "react";
import { useParams } from "react-router-dom"
import { bucket } from "../Store/StoreCompo";


export default function ReadCompo(){
    const readData = useParams();
    const data = useContext(bucket)

    let filterData = data[0].filter((e, index)=>{
       return  e.id === Number(readData.id)
    })
    console.log(filterData);
    return(
        <div className="readData">
            <img src={filterData[0].img} />
            <h1>{filterData[0].title}</h1>
            <p>{filterData[0].desc}</p>
            {filterData[0].id}
            {filterData[0].cat}
            <p>
                {filterData[0].clap}
                {filterData[0].date}
            </p>
        </div>
    )
}
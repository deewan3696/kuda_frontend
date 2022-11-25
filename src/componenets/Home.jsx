import Img from "./Img";
import Download1 from "../images/download1.jpg"
import Download2 from "../images/download2.jpg"
import Download from "../images/download.jpg"




function Home (){

    return(
        <>
        <Img Url={Download1} alt=""/>

        <Img Url={Download2} alt=""/>

        <Img Url={Download} alt=""/>
        
        </>
    )
}

export default Home
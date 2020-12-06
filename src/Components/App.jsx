import React, {useState} from "react";

import location from "../data";


const App = () =>{

    const ButtonStyle={
        "backgroundColor":"grey",
        "color":"white",
        "minWidth":"100px",
        "fontSize":"20px",
    }

    const [path,setPath] = useState("")   //full path
    
    const [locationStack,setLocationStack] = useState([]);

    const [locationNavigation,setLocationNavigation] = useState([]);


    function makeLocationNavigation(path){

        let locArray = path.split("_");
        console.log(locArray);
        let currentLoc = locArray[locArray.length-1]
        console.log(currentLoc);
        let new_location = {
            [currentLoc]:path
        }
        console.log(new_location);
        setLocationNavigation(prev=>[...prev,new_location])
    }

    console.log(locationNavigation);

    function handleClick(event){
        let loca = event.target.name;
        console.log(loca);

        
        if(path===""){
            
            setLocationStack(prevValue=>[...prevValue,loca])
            setPath(loca);
            console.log("path=>"+path);
            
        }else if(locationStack[locationStack.length-1]===loca){
            let poppedLoc = locationStack.pop();
            console.log("poppedLoc->"+poppedLoc);
            if(locationStack.length===0){
                setPath("");
            }else{
                setPath(locationStack[locationStack.length-1])
            }
        }
        else{
            
            setLocationStack(prevValue=>[...prevValue,path+"_"+loca])
            setPath(prevValue=>prevValue+"_"+loca)
            
        }

        if(locationStack.length!==0){
            console.log("path =>"+path);
            console.log(locationStack[locationStack.length-1]);
            makeLocationNavigation(locationStack[locationStack.length-1]);
        }
        
            
        
    }
    // console.log(path);
    console.log(locationStack);

    
    // console.log("path->"+path);
    


    /*****NewLocationArray**************/
    let newLocArray = location[path];
    /*****NewLocationArray**************/

    // console.log(newLocArray);
    

    return(
        <div>
            {/* {path.split("_").map((uniPath,index)=> <button >{uniPath}</button>)} */}
            {/* {locationNavigation.map((unipath)=><button style={ButtonStyle} onClick={handleClick} name={unipath.value}>{unipath.key}</button> )} */}
            {locationNavigation.map(unipath=>{
                
                for(var key in unipath){
                    return(
                        <button style={ButtonStyle} onClick={handleClick} name={unipath[key]}>{key}</button>
                        )
                }
                return 0;
            })}
            <br />
            <br />
            <button onClick={handleClick} style={ButtonStyle} name={path===""?"Kolkata":path}>{path===""?"Kolkata":path}</button>
            <br />
            <br />
            {newLocArray?
            <div className="fruitsList">
            {newLocArray.map((loc,index)=> <div><button style={ButtonStyle} onClick={handleClick} name={loc}>{loc}</button><br></br></div>)}
                
            </div>:
            <div>Toggle/Empty</div>}
            
        </div>
    );
}

export default App;
import React, {useState} from "react";

import location from "../data";


const App = () =>{

    // const [showValues,setShowValues] = useState(false);
    // const showValues = true;
    

    const ButtonStyle={
        "backgroundColor":"grey",
        "color":"white",
        "minWidth":"100px",
        "fontSize":"20px",
    }

    const [path,setPath] = useState("")   //full path
    // let locationStack = [];
    const [locationStack,setLocationStack] = useState([]);

    function handleClick(event){
        let loca = event.target.name;
        console.log(loca);

        // setShowValues(true);
        if(path===""){
            
            setLocationStack(prevValue=>[...prevValue,loca])
            setPath(loca)
            // console.log("if->locationStack->"+locationStack);
        }else if(locationStack[locationStack.length-1]===loca){
            let poppedLoc = locationStack.pop();
            console.log("poppedLoc->"+poppedLoc);
            if(locationStack.length===0){
                setPath("");
            }else{
                setPath(locationStack[locationStack.length-1])
            }
            

            console.log("elseif->locationStack->"+locationStack);
        }
        else{
            
            setLocationStack(prevValue=>[...prevValue,path+"_"+loca])
            setPath(prevValue=>prevValue+"_"+loca)
            
            // console.log("else->locationStack->"+locationStack);
        }

        console.log("locationStack->"+locationStack);
        console.log(typeof locationStack);
        
    }

    
    console.log("path->"+path);
    let newLocArray = location[path];
    console.log(newLocArray);
    

    return(
        <div>
            <h1>{path}</h1>
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
import React from "react";

const Responsive = () => {

    //this if set the sie if program can't get window size
    const isSSR = typeof window !== "undefined";

    const [windowSize, setWindowSize] = React.useState({
        width :isSSR ? 1200 : window.innerWidth,
        height : isSSR ? 800 : window.innerHeight
    });

    function changeWindowSize(){
        setWindowSize({width:window.innerWidth,heght:window.innerHeight});
    }

    //used react useEffect to do ComponentDidMount and willUnmount options
    React.useEffect(()=>{
        window.addEventListener("resize",changeWindowSize);

        //it will remove event listner when component unmount
        return ()=>{
            window.removeEventListener("resize",changeWindowSize);
        };
        
    },[]);
    return windowSize;
    
}

export default Responsive
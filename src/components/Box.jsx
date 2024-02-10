import { useState } from "react";



const box = {
    height: '100px',
    width: '100px',
    display:'inline-block',
    margin:'1rem'
    
}
const sizebox={
    height: '100px',
    width: '100px',
}
const Box = (props) => {
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([]);
    const[width,setWidth]=useState("");
    const[height,setheight]=useState("")
    const[size,setsize]=useState([]);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setBoxes([...boxes, color]);
        setColor('');
        setsize([...size,{width,height}])
        setWidth("")
        setheight("")
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="Enter color"
                />
                    <input type="text"
                    value={width}
                    onChange={(e)=>setWidth(e.target.value)}
                    placeholder="enter width"
                    />
                      <input type="text"
                    value={height}
                    onChange={(e)=>setheight(e.target.value)}
                    placeholder="enter height"
                    />
                <button type="submit">Add</button>
         </form>
            <div className="box">
                {boxes.map((boxColor, index) =>
                    <div
                        key={index}
                        className="box" // Changed className to match CSS class name
                        style={{...box, backgroundColor: boxColor }} // Spread box styles and set backgroundColor
                    ></div>
                )}
            </div>
            
                {size.map((size1, index) =>
                    <div
                        key={index}
                        style={{...box, width:size1.width, height:size1.height, background:boxes[index]}} 
                        className="size-box"
                        // Spread box styles and set backgroundColor
                    ></div>
                )}
                 
           
        </>
    )
}

export default Box;

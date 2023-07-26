const Instructions = (props) => {
    console.log(props)
    return <div className="centered absolute instruction-screen">
        <ol>
            <li><strong>Important!</strong> Press ESC(escape) to release the cursor.</li>
            <li>Use 'W', 'A', 'S', 'D' and 'spacebar' for player movement</li>
            <li>Press '1', '2', '3', '4', '5' keys to change the block texture.</li>
            <li>To place the block, right click.</li>  
            <li>To destroy the block, Hold Ctrl(Control), click the block.</li>    
            <li>Using trackpad(laptops) may cause trouble in movement and FPV. <strong>Use mouse.</strong></li>   
            <li>Place the cursor in center screen after using top-left toggles.</li> 
            <li>Usings Aurora Shaders might cause a lag depending on the device.</li>
            <li>The world data is saved locally on your device.</li>
            <li> <button onClick={()=>props.instructionsToggle(false)}>Close Instructions</button> </li>             
        </ol>   
    </div>
}

export default Instructions
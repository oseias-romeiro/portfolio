const { useState } = React

let spaceLeft = 550;
if(screen.width < 900 ){
    spaceLeft = 0;
}

const Arrow = ()=>{
    const [pos, setPos] = useState(200);
    setTimeout(()=>{
        if(pos <= 0){
            setPos(() => 200);
        }else {
            setPos(() => pos-10);
        }
    }, 100)

    return (
        <div className="row" style={{marginLeft: spaceLeft, textAlign: "center"}}>
            <div className="col">
                <img src="images/arrow-up.png" height="50" alt="arrow-up" style={{marginTop: pos+100}}/>
                <img src="images/arrow-up.png" height="50" alt="arrow-up" style={{marginTop: pos}}/>
            </div>
            <div className="col">
                <img src="images/arrow-up.png" height="50" alt="arrow-up" style={{marginTop: pos}}/>
                <img src="images/arrow-up.png" height="50" alt="arrow-up" style={{marginTop: pos+50}}/>
            </div>
            <div className="col">
                <img src="images/arrow-up.png" height="50" alt="arrow-up" style={{marginTop: pos}}/>
                <img src="images/arrow-up.png" height="50" alt="arrow-up" style={{marginTop: pos+100}}/>
            </div>
        </div>
    )
}
const arrows = ReactDOM.createRoot(document.getElementById("arrows"));
arrows.render(<Arrow />);
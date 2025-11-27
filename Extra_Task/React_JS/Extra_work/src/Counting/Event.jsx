import React from 'react'

const Event = () => {

    const pageScroling = (elem) => {
        if(elem>0){
            console.log('sedha scrolling');  
        }
        else{
            console.log('ulta scrolling');  
        }
     
    }   
    return (
        <div className='parent'>
            <button onClick={() => {
                console.log('btn Clicked...');
            }}>Click Here</button>

            <br />
            <br />
 
            <input placeholder='Enter name
            ' onChange={function change(elem) {
                    console.log(elem.target.value);
                }} />

            <br />
            <br />
            
            <div onWheel={(elem) =>{
              pageScroling(elem.deltaY)
            }}>

            <div className="page1" ></div>
            <div className="page2"></div>
            <div className="page3"></div>
            </div>
        </div>
    )
}

export default Event

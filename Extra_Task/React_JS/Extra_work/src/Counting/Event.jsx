import React from 'react'

const Event = () => {

    const pageScroling = () => {
        console.log('page is Scrolling');

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
            
            <div className="page1" onWheel={pageScroling}></div>
            <div className="page2"></div>
            <div className="page3"></div>
        </div>
    )
}

export default Event

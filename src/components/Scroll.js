import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border:'1 px solid black', height:'600px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;
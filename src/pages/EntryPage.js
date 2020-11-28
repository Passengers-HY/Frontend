import React from 'react';
import entry from '../images/entry_page.svg'
const EntryPage = () => {
    function push(){
        window.location.href = "/login";
    }
    setTimeout(push, 1000);

    return (
        <div className="Body" style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh', backgroundColor:'#28293c'
        }}>
            <img src={entry} style={{width:'100%'}}/>
            
        </div>


    );
};

export default EntryPage;
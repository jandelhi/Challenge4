import React from 'react';

function PartyTheme(props){
    const { name, partyInfo} = props.data;
    return(
    <div>
        <h1>{name}</h1>
        <div id="partyInfo">{partyInfo}</div>
    </div>
    );
}
export default PartyTheme;
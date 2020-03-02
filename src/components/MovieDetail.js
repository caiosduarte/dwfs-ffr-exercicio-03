import React from 'react';

export const MovieDetail = (props) => 
{
    return <h1>{props.match.params.id}</h1>
}
    

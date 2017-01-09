import React from 'react';
import ReactDOM from 'react-dom';

import Card from './card';

export default function Cardlist(props){
    return (
         <div className="list">
        <div className="listTitle">
        {props.title}
        </div>
<div className="card-list">
    <Card text="abc-listjs"/>
    <Card text="def-listjs"/>
    <Card text="ghi-listjs"/>
</div>
</div>
    );
}
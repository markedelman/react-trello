import React from 'react';
import ReactDOM from 'react-dom';

import Cardlist from './list';

export default function Board(){
    return (
<div className="board">
    <Cardlist  />
    <Cardlist  />
    <Cardlist  />
</div>
    );
}
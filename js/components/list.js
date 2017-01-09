import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
export default function List (props) {
    var cards = props.cards.map(function(text, index) { 
    return <Card key={index} text={text} /> 
});
    return (
        <div className="list">
            <div className="list-title">
                {props.listTitle}
            </div>
            <div className="list-items">
                {cards}       
            </div>
        </div>
    )
}

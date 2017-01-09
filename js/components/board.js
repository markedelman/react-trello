import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
export default function Board (props) {
    return (
        <div className="board">
        <div className="board-title">
        {props.boardTitle}
        </div>
        <div className="board-lists">
            <List listTitle="Monday" cards={props.cards} />
        </div>
        </div>
    )
}
Board.defaultProps = {
    boardTitle: "My To Do List",
    cards: ["Card 1", "Card 2", "Card 3"]
    
}
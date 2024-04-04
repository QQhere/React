import React, { useReducer, useState } from 'react';
import Board from './Board';
import "./GameStyles.css"
import { calculateWinner } from '../../helper';

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
}

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK': {
            const { board, xIsNext } = state;
            const {index, winner } = action.payload;
            if (winner || board[index]) return state;
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.board[index] = xIsNext ? 'X' : 'O';
            nextState.xIsNext = !xIsNext;
            return nextState;
        }
        case 'RESET': {
            return initialState;
        }
        default:
            console.log('ERROR');
            break;
    }
    return state;
}
// deep copy JSON.parse(JSON.stringify(obj);

const Game = () => {
    // const [board, setBoard] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);

    // useReducer
    // const [state, dispatch] = useReducer(reducer, initialState);
    // const action = {type: 'CLICK', payload: {}}
    const [state, dispatch] = useReducer(gameReducer, initialState);

    // const [state, setState] = useState({
    //     board: Array(9).fill(null),
    //     xIsNext: true,
    // })
    
    const winner = calculateWinner(state.board);
    const handleClick = (index) => {
        // const boardCopy = [...state.board];
        // if  (winner || boardCopy[index]) return;
        dispatch({
            type: 'CLICK',
            payload: {
                index,
                winner,
            }
        })
        // boardCopy[index] = state.xIsNext ? 'X' : 'O';
        // setState({
        //     ...state, //nhận các giá trị cũ, chỉ cập nhật các giá trị mới
        //     board: boardCopy,
        //     xIsNext: !state.xIsNext,
        // })
        // setBoard(boardCopy);
        // setXIsNext(state.xIsNext => !state.xIsNext);
    };
    const handleResetGame = () => {
        // setBoard(Array(9).fill(null));
        // setXIsNext(true);
        // setState({
        //     ...state,
        //     board: Array(9).fill(null),
        //     xIsNext: true,
        // })
        dispatch({
            type: 'RESET',
        })
    }
    return (
        <div>
            <Board cells={state.board} onClick={handleClick}></Board>
            {winner ? <div className='game-winner'>Winner is {winner}</div> : ""}
            <button className='game-reset' onClick={handleResetGame}>Reset Game</button>
        </div>
    );
};

export default Game;
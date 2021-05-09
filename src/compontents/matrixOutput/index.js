import React from 'react';
import './index.scss';

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
function randMatrixCreator(row, column) {
    const randMatrix = [];
    const min = Math.ceil(1);
    const max = Math.ceil(100);
    for ( let i = 0; i < column; i += 1) {
        const randRow = [];
        for ( let i = 0; i < row; i += 1) {
            const val = Math.floor(Math.random() * (max - min)) + min;
            randRow.push(val);
        }
        shuffle(randRow);
        randMatrix.push(randRow);
    }
    return randMatrix;
}
const sumCount = (row) => {
    const result = row.reduce((acc, rowElem) => acc + parseInt(rowElem), 0);
    return (<div className="rowSum">
        <h1>Сумма элементов строки:</h1>{result}
    </div>)
};
function matrixRender(array) {
    return (<div className="matrixContent">
        {array.map( (row) => {
            return(
                <div className='row'>
                    {row.map((elem) => {
                        return(<div className="matrixElem">{elem}</div>)
                    })}
                    {sumCount(row)}
                </div>
            )
        })}
    </div>)
}


export default function MatrixOutput ({...props}) {
    const { rows, columns, matrix, isRandomFilling } = props;

    const manualFilling = (array) => {
        console.log('array', array);
        return (
            <div className="matrixContent">
                {array.map( (row) => {
                    return(
                        <div className='row'>
                            {row.map((elem) => {
                                return(<div className="matrixElem">{elem}</div>)
                            })}
                            {sumCount(row)}
                        </div>
                    )
                })}
            </div>);
    }
    const randomFilling = (row, column) => {
        const randomMatrix = randMatrixCreator(row, column);
        return(matrixRender(randomMatrix));
    };


    return (
        <div>
            {!isRandomFilling &&
                manualFilling(matrix)
            }

            {isRandomFilling &&
                randomFilling(rows, columns)
            }
        </div>

    )
};
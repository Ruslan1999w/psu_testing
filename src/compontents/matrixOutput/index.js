import React from 'react';
import Button from "@material-ui/core/Button";
import axios from "axios";
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
    const result = row.reduce((acc, rowElem) => acc + (rowElem * 1), 0);
    return (<div className="rowSum">
        <h1>Сумма элементов строки:</h1>{result}
    </div>)
};
const loadOutputFile = (array) => {
    const rowSum = array.map(row => row.reduce((acc, rowElem) => acc + (rowElem * 1), 0))
    axios.post('/', {
        matrix: JSON.stringify(array),
        rowSum: JSON.stringify(rowSum),
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
export function matrixRender(array) {
    return (
        <>
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
            </div>
            <div className="loadFile">
                <a
                    href="http://localhost:3000/get-file"
                    download=""
                >
                <Button
                    variant="contained"
                    // onClick={() => loadOutputFile(array)}
                >
                    Скачать файл с результатами
                </Button>
                </a>
            </div>
        </>
    )
}


export default function MatrixOutput ({...props}) {
    const { rows, columns, matrix, isRandomFilling } = props;

    const manualFilling = (array) => {
        loadOutputFile(array);
        return matrixRender(array);
    }
    const randomFilling = (row, column) => {
        const randomMatrix = randMatrixCreator(row, column);
        loadOutputFile(randomMatrix);
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
// return (
//             <div className="matrixContent">
//                 {array.map( (row) => {
//                     return(
//                         <div className='row'>
//                             {row.map((elem) => {
//                                 return(<div className="matrixElem">{elem}</div>)
//                             })}
//                             {sumCount(row)}
//                         </div>
//                     )
//                 })}
//
//             </div>
//         );
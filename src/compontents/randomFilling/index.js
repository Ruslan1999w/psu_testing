import React, {useState} from 'react';
import Input from "../../table/Input";
import {actionChangeButtonVisibility} from "../../actions";
import MatrixOutput from "../matrixOutput";
import {useDispatch, useSelector} from "react-redux";

export default function RandomFilling ({...props}) {
    const dispatch = useDispatch();
    const [matrixVisible, handleMatrixVisible] = useState(false);
    const buttonHidden = useSelector(state => state.buttonHidden);
    const {rows, columns} = useSelector(state => state);
    const { modalWindow } = props;
    console.log('random Filling');


    return (
        <>
            {!buttonHidden &&
            <div className="inputHeader">
                <h1>Введите количество строк и столбцов для формирования матрицы</h1>
                <div className='buttons'>
                    <Input onSubmit={() => {
                        handleMatrixVisible(true);
                        dispatch(actionChangeButtonVisibility(true));
                    }}
                           changeMode={() => modalWindow(true)}
                    />
                </div>
            </div>
            }
            {matrixVisible &&
            <MatrixOutput
                rows={rows}
                columns={columns}
                isRandomFilling
            />
            }
        </>
    )
}
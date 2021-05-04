import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import Input from './table/Input';
import ModalDialog from './modals/ModalDialog';
import MatrixCreator from "./compontents/matrixCreator";
import { actionChangeButtonVisibility } from './actions'
import MatrixOutput from "./compontents/matrixOutput";
import './index.scss';


export default function Main() {
    const dispatch = useDispatch();
    const [open, toggleDialog] = useState(true);
    const [inputType, toggleInputType] = useState('manual');
    const [matrixVisible, handleMatrixVisible] = useState(false);
    const buttonHidden = useSelector(state => state.buttonHidden);
    const {rows, columns} = useSelector(state => state);

    const manualFilling = (event) => {
        event.stopPropagation();
        event.preventDefault();
        toggleDialog(false);
        toggleInputType('manual');
    };

    const randomFilling = (event) => {
        console.log('rand')
        event.stopPropagation();
        event.preventDefault();
        toggleDialog(false);
        toggleInputType('random');
    };

    const handleClick = () => {
        handleMatrixVisible(true);
    };
    return (
        <div>
            <ModalDialog open={open}
                         handleIn={(event) => manualFilling(event)}
                         handleRand={(event) => randomFilling(event)}
            />
            {!open &&
                <>
                {inputType === 'manual' &&
                    <>
                        {!buttonHidden &&
                        <div className="inputHeader">
                            <h1>Введите количество строк и столбцов для формирования матрицы</h1>
                            <div className='buttons'>
                                <Input onSubmit={() => {
                                    handleMatrixVisible(true);
                                    dispatch(actionChangeButtonVisibility(true));
                                    }}
                                       changeMode={() => toggleDialog(true)}
                                />
                            </div>
                            </div>
                        }

                        {matrixVisible &&
                        <div className="matrix">
                            <MatrixCreator />
                        </div>
                        }
                    </>

                }
                {inputType === 'random' &&
                    <>
                    {!buttonHidden &&
                    <div className="inputHeader">
                        <h1>Введите количество строк и столбцов для формирования матрицы</h1>
                        <div className='buttons'>
                            <Input onSubmit={() => {
                                handleMatrixVisible(true);
                                dispatch(actionChangeButtonVisibility(true));
                                }}
                                   changeMode={() => toggleDialog(true)}
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
                }
                </>
            }
            <Button
                variant="contained"
                onClick={(event) => {
                    randomFilling(event);
                }}
            >Сменить тип ввода</Button>
        </div>
    );
}
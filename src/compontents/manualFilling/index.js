import React, {useState, useRef } from 'react';
import Input from "../../table/Input";
import {actionChangeButtonVisibility} from "../../actions";
import MatrixCreator from "../matrixCreator";
import {useDispatch, useSelector} from "react-redux";
import FileInput from "../inputFile/index";
import {matrixRender} from '../matrixOutput/index';

export default function ManualFilling ({...props}) {
    const dispatch = useDispatch();
    const fileInputField = useRef(null);
    const [outputVisible, handleMatrixOutputVisible] = useState(false);
    const [matrixVisible, handleMatrixVisible] = useState(false);
    const [selectedFile, setSelectedFile] = useState('');
    const buttonHidden = useSelector(state => state.buttonHidden);
    // const {rows, columns} = useSelector(state => state);
    const { modalWindow } = props;
    console.log('res', selectedFile);

    return  (
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
                        <FileInput
                            setFile={setSelectedFile}
                            matrixVisibility={handleMatrixOutputVisible}
                        />

                    </div>
                </div>
            }

            {matrixVisible &&
                <div className="matrix">
                    <MatrixCreator />
                </div>
            }
            {outputVisible &&
                <div className="matrix">
                    {matrixRender(selectedFile)}
                </div>
            }
        </>
    );
};
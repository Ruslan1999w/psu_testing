import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import Input from './table/Input';
import ModalDialog from './modals/ModalDialog';
import MatrixCreator from "./compontents/matrixCreator";
import { actionChangeButtonVisibility } from './actions'
import MatrixOutput from "./compontents/matrixOutput";
import RandomFilling from "./compontents/randomFilling";
import ManualFilling from "./compontents/manualFilling";
import './index.scss';


export default function Main() {
    const dispatch = useDispatch();
    const [open, toggleDialog] = useState(false);
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

    return (
        <div>
            {/*<ModalDialog open={open}*/}
            {/*             handleIn={(event) => manualFilling(event)}*/}
            {/*             handleRand={(event) => randomFilling(event)}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    className="tryAgainButton"*/}
            {/*    variant="contained"*/}
            {/*    onClick={() => {*/}
            {/*        document.location.reload();*/}
            {/*        toggleDialog(true)*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Попробовать снова*/}
            {/*</Button>*/}
            {!open &&
                <>
                {inputType === 'manual' &&
                    <ManualFilling modalWindow={toggleDialog}/>
                }
                {inputType === 'random' &&
                    <RandomFilling modalWindow={toggleDialog}/>
                }
                </>
            }
        </div>
    );
}
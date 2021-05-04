import React, { useState } from 'react';
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MatrixOutput from "../matrixOutput";
import './index.scss';

export default function MatrixCreator () {
    const [currentValue, changeCurrentValue] = useState('');
    const [itemList, changeItemList] = useState({
        item_list: [],
        row: [],
    });
    const [counter, changeCounter] = useState(1);
    const data = useSelector(state => state);
    const [buttonDisable, changeButtonDisable] = useState(0);

    const matrixAddValueHandler = () => {
        changeButtonDisable(buttonDisable + 1);
        if (counter === parseInt(data.columns)) {
            const tempStore = {...itemList}
            tempStore.row.push(currentValue);
            tempStore.item_list.push(tempStore.row);
            tempStore.row = [];
            changeItemList(tempStore);
            changeCounter(1);
            changeCurrentValue('');
        } else {
            const tempStore = {...itemList}
            tempStore.row.push(currentValue);
            changeItemList(tempStore);
            changeCounter(counter + 1);
            changeCurrentValue('');
        }
    }

    return(
        <div className="matrix">
            <h1>Введите {counter} элемент из {data.columns}</h1>
            <TextField required
                       id="column"
                       label="Введите значения"
                       variant="outlined"
                       className="input"
                       value={currentValue}
                       onChange={(event) => {
                           changeCurrentValue(event.target.value);
                       }}
                       autoFocus
            />
            <Button
                variant="contained"
                onClick={matrixAddValueHandler}
                disabled={buttonDisable >= data.rows * data.columns}
            >
                Ввести
            </Button>

            <MatrixOutput
                rows={data.rows}
                columns={data.columns}
                matrix={itemList.item_list}
                isRandomFilling={false}
            />
        </div>
    )
}
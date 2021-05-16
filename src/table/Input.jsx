import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from "react-redux";
import {actionChangeRow, actionChangeColumn} from '../actions';
import Button from "@material-ui/core/Button";
import './styles/index.scss';

export default function Input({ onSubmit, changeMode }) {
    const data = useSelector(state => state);
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [rowQuantity, setRowQuantity] = useState('');
    const [columnQuantity, setColumnQuantity] = useState();
    const [dataFilled, setDataFilled] = useState(
        {
        row: false,
        column: false
    })

    const rowQuantityHandler = (event) => {
        if ( event.target.value > 0 && event.target.value < 100) {
            const integerVal = Math.round(parseInt(event.target.value));
            setRowQuantity(integerVal);
            dispatch(actionChangeRow(integerVal));
            setDataFilled({
                row: true,
                column: dataFilled.column
            })
            if (dataFilled.row && dataFilled.column) {
                setButtonDisabled(false);
            }
            setError(false);
        } else {
            setDataFilled({
                row: false,
                column: dataFilled.column
            })
            setButtonDisabled(true);
            setError(true);
        }

    }
    const columnQuantityHandler = (event) => {
        if (event.target.value > 0 && event.target.value < 100 ) {
            const integerVal = Math.round(parseInt(event.target.value));
            console.log('integerVal', integerVal);
            setColumnQuantity(integerVal);
            dispatch(actionChangeColumn(integerVal));
            setDataFilled({
                row: dataFilled.row,
                column: true
            });
            if (dataFilled.row && dataFilled.column) {
                setButtonDisabled(false);
            }
            setError(false);
        } else {
            setDataFilled({
                row: dataFilled.row,
                column: false
            });
            setError(true);
            setButtonDisabled(true);
        }

    }

  return (
    <form noValidate autoComplete="off">
      <TextField required
                 autoFocus
                 error={error}
                 id="row"
                 label="Кол-во строк"
                 variant="outlined"
                 className="input"
                 value={rowQuantity}
                 onChange={rowQuantityHandler}
                 helperText="Введите значение от 0 до 100"
      />
      <TextField required
                 error={error}
                 id="column"
                 label="Кол-во столбцов"
                 variant="outlined"
                 className="input"
                 value={columnQuantity}
                 onChange={columnQuantityHandler}
                 helperText="Введите значение от 0 до 100"
      />
        <Button variant="contained" onClick={onSubmit} disabled={buttonDisabled}>Ввести</Button>

    </form>
  );
}

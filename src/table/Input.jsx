// eslint-disable-next-line react/jsx-filename-extension
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './styles/index.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Input() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="row" label="Кол-во строк" variant="outlined" className="input" />
      <TextField id="column" label="Кол-во столбцов" variant="outlined" className="input" />
      <TextField id="numberOfColumn" label="Номер столбца К" variant="outlined" className="input" />
    </form>
  );
}

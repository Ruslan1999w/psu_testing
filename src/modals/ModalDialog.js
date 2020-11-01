/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function ModalDialog({open, handleIn, handleRand}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">{"Как вы хотите заполнить таблицу?"}</DialogTitle>
              <DialogActions>
                <Button autoFocus onClick={handleIn} color="primary">
                    Вручную
                </Button>
                <Button onClick={handleRand} color="primary" autoFocus>
                    Случайно
                </Button>
        </DialogActions>
            </Dialog>
        </div>
    );
}

ModalDialog.propTypes = {
    open: PropTypes.bool,
    handleIn: PropTypes.func,
    handleRand: PropTypes.func
};
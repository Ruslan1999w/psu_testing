/* eslint-disable react/react-in-jsx-scope */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
export default class DeleteModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
//    componentDidMount() {
//     this.setState({ open: this.props.flag });
//    }
componentWillUpdate(){
    console.log('udpated');
    if (this.state.open === false)
        this.setState({ open: true });
   }
    handleOpen = () => {
    this.setState({ open: true })
    }

    handleClose = () => {
        this.setState({open:false});
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">{"Вы уверены, что хотите удалить запись?"}</DialogTitle>
                  <DialogActions>
                    <Button autoFocus onClick={this.handleClose} color="primary">
                        Нет
                    </Button>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                        Да
                    </Button>
            </DialogActions>
                </Dialog>
            </div>
        );
    }
}
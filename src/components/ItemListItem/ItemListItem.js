import React, {Component} from 'react';
import {connect} from 'react-redux';

//material-ui
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    input: {
        margin: theme.spacing.unit
    },
    modal: {
        // margin: theme.spacing.unit
    }
})

class ItemListItem extends Component {
    state = {
        open: false,
        editItem: {
            id: this.props.item.id,
            description: this.props.item.description,
            image_url: this.props.item.image_url
        }
    }

    handleDelete = () => {
        console.log('delete');
        this.props.dispatch({type: 'DELETE_ITEM', payload: this.props.item.id})
    }

    handleChange = (event, propToChange) => {
        this.setState({editItem: {...this.state.editItem, [propToChange]: event.target.value}})
    }

    handleClickOpen = ()=> {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    handleEdit = () => {
        this.props.dispatch({type: 'EDIT_ITEM', payload: this.state.editItem})
        this.setState({ open: false })
    }
    
    render(){
        const {classes} = this.props;
        console.log(this.props.reduxStore.user);
        if(this.props.item.user_id === this.props.reduxStore.user.id){
        return(
            <>
                <li>{
                    this.props.item.description}
                    <br />
                    <img src={this.props.item.image_url} alt="image" />
                    <br />
                    <Button variant="contained" color="secondary" onClick={() => this.handleDelete()}>Delete Item</Button>
                    <Button variant="contained" onClick={() => this.handleClickOpen()}>Edit Item</Button>
                </li>
                <Dialog className={classes.modal} open={this.state.open}
                onClose={this.handleClose}
                >
                    <DialogTitle id="form-dialog-title">Edit Item</DialogTitle>
                    <DialogContent>
                        <TextField onChange={event => this.handleChange(event, 'description')}className={classes.input} value={this.state.editItem.description} variant="outlined" label="Description"></TextField>
                        <br />
                        <TextField onChange={(event) => this.handleChange(event, 'image_url')} className={classes.input} value={this.state.editItem.image_url} variant="outlined" label="Image_URL"></TextField>
                        <br />
                        <img src={this.state.editItem.image_url} />
                    </DialogContent>
                    <br />
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleEdit}>Submit Edit</Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    } else{
        return(
            <li>
                {this.props.item.description}
                <br />
                <img src={this.props.item.image_url} alt="image" />
                <br />
            </li>
        )
    }
}
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore
})

export default withStyles(styles)(connect(mapReduxStoreToProps)(ItemListItem));
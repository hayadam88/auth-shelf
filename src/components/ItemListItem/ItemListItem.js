import React, {Component} from 'react';
import {connect} from 'react-redux';

class ItemListItem extends Component {
    

    handleDelete = () => {
        console.log('delete');
        this.props.dispatch({type: 'DELETE_ITEM', payload: this.props.item.id})
    }
    
    render(){
        console.log(this.props.item);
        return(
            <>
                <li>{
                    this.props.item.description}
                    <br />
                    <img src={this.props.item.image_url} alt="image" />
                    <br />
                    <button onClick={() => this.handleDelete()}>Delete Item</button>
                </li>
            </>
        )
    }
}

export default connect()(ItemListItem);
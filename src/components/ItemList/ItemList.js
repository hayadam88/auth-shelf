import React, {Component} from 'react';
import {connect} from 'react-redux';
import ItemListItem from '../ItemListItem/ItemListItem';

class ItemList extends Component {
    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_ITEMS'})
    }
    
    render(){
        return(
            <>
            <ul>
                {this.props.reduxStore.itemReducer.map((item, i) => <ItemListItem key={i} item={item} />)}
            </ul>
            </>
        )
    }
}

const mapReduxStoreToProps = reduxStore ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(ItemList);
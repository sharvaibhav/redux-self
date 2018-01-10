import React,{ Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {elementLicked} from '../actions/list_actions';

import './list.css';

class List extends Component{

    render(){
        return <ul>
                    {this.props.list && 
                        this.props.list.map(entry =>{
                            return <li key={entry.book} onClick={()=>{ this.props.elementLicked(entry.book)}} className='entry list'> {entry.book} </li> 
                        })
                    }
                </ul>
    }
}

var mapStateToProps = function(state){
    return {
        list:state.list
    }
}

var mapDispatchToProps = function(dispatch){
    return bindActionCreators({
        elementLicked:elementLicked
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(List);
import React from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider} from "react-redux";
import { createStore } from 'redux'
import Routes from './Routes';
import {rootReducer} from "./reducers/rootReducer";
import { BrowserRouter } from "react-router-dom";
import './table/styles/index.scss';


let store = createStore(rootReducer);

const mapStateToProps = (state) => {
    return {
        rows: state.rows,
        columns: state.columns,
        numberOfColumn: state.numberOfColumn,
    };
};

const WrappedAppComponent = connect(mapStateToProps)(Routes);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)


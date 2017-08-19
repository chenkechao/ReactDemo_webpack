/**
 * Created by 14566 on 2016/10/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Component1 from './components/Component1.jsx';
import TopAppBar from './components/TopAppBar.jsx';
import BasicTable from './components/Tables.jsx';

var Content = React.createClass({
    render:function render() {
        return <div><TopAppBar/><BasicTable/></div>;
    }
});

ReactDom.render(
    <Content />,
    document.getElementById('content')
);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TopAppBar from './TopAppBar.jsx';
import BasicTable from './Tables.jsx';
import LeftMenu from './LeftMenu.jsx';

const styles = theme => ({
    root: {
        //flexGrow: 1,
        //marginTop: 30,
    },
    paper: {
        //padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function CenteredGrid(props) {
    const classes = props.classes;

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TopAppBar />
                </Grid>
                <Grid item xs={2}>
                    <LeftMenu />
                </Grid>
                <Grid item xs={10}>
                    <BasicTable />
                </Grid>
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);

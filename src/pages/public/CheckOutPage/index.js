import React from 'react';
import './main.css';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)

    }
}));

const Homepage = () => {
    const classes = useStyles();


    return (

        <div className={classes.root}>
            <Grid
                container
                // spacing={4}
            >


                <Grid
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    xs={12}
                >
                </Grid>
            </Grid>
        </div>

    );
}


const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
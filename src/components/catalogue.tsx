import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {catalogue_page} from '../actions/actions';


const mapStateToProps = (state: any) => {
    return {
        data:state.loginReducer.check_catdata,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        catalogue_page: (link:any) =>
      dispatch(catalogue_page(link)),
    }
}   
const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(1),
      },
      title: {
        flexGrow: 1,
        fontWeight: "bold",
        color: "black",
      },
      spansubtitle: {
            '&:hover': {
                cursor: "pointer"
            },
            cursor: "context-menu",
      },
      subtitle: {
          padding:"8%",
          display:"inline",
      },
      toolbarprops: {
          backgroundColor: "#717276",
          maxHeight:"64px",
          
      },
      containerprops: {
          padding:"0px",
      }
});

class Catalogue extends Component<any, any> {
    state = {
        pitem: "Women",
    };   

    render() {
        const { classes } = this.props as any;        
        return (
            <Container maxWidth="lg" className={classes.containerprops}>
                <main>
                    <div style={{ }}>
                        <Box display="flex" flexDirection="row">              
                            <div className={classes.root}>
                                <AppBar position="static">
                                    <Toolbar className={classes.toolbarprops}>
                                        <Typography variant="h6" className={classes.title}>
                                            THE ICONIC {this.state.pitem}
                                        </Typography>
                                        <Typography variant="body1" className={classes.subtitle}>
                                            <span className={classes.spansubtitle}>CLOTHING</span>
                                        </Typography>
                                        <Typography variant="body1" className={classes.subtitle}>
                                            <span className={classes.spansubtitle}>SHOES</span>
                                        </Typography>
                                        <Typography variant="body1" className={classes.subtitle}>
                                            <span className={classes.spansubtitle}>ACCESSORIES</span>
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                            </div>
                        </Box>
                    </div>
                </main>
            </Container>
        )
    }    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles as any)(Catalogue));
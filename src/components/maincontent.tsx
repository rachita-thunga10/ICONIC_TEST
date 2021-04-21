import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {catalogue_page} from '../actions/actions';
import Box from "@material-ui/core/Box";
import { Button, Typography } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';


let link = "https://eve.theiconic.com.au/catalog/products?gender=female&page=1&page_size=10&sort=popularity";
let griditems = [{id: 0,name:"", price:"", brand:"",gender:"",image:"",color: ""}];
const Usestyles = (theme:any) => ({
  root: {
    flexGrow: 1,
    display: "inline",  
    marginTop: "20px",
    border: "1px solid black"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridimage: {
    height:"202px",
    width:"inherit"
  }
});

const mapStateToProps = (state: any) => ({
  data:state
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    catalogue_page: (link:any) =>
    dispatch(catalogue_page(link)),
  }
}   

class Maincontent extends Component<any, any> {
  state = {
    page:1,
    firstpage_link: "",
    lastpage_link:"",
    selfpage_link:"",
    nextpage_link:"",
    pagecount: 0,
    totalitems:0,
    itemsdata: {data:[]},
    checkedA:false,
    filter: "",
  }
  
  async handleChange (event:any) {  
    if (event.target.checked === true) {
      this.setState({filter: event.target.value});
    } else {
      this.setState({filter: ""});
    }
    this.setState({[event.target.name]: event.target.checked });
  };

  async catalogue_update() {
    const { catalogue_page } = this.props;
    catalogue_page(link);
  }
  async updatestatecomponents(data:any) {
     console.log("updatestate", data);
     if (data?.check_catdata?.page !== null || typeof data?.check_catdata?.page !== 'undefined') {
      const catalogue =  data?.check_catdata;
      this.setState({page:data?.check_catdata?.page});
      console.log("catalogue",catalogue);
        this.setState({
          pagecount: catalogue?.page_count,
          page:catalogue?.page,
          totalitems: catalogue?.total_items,
          itemsdata:catalogue?._embedded?.product,
        })

        griditems = [
          {id: 0,name:catalogue?._embedded?.product[0].name, price:catalogue?._embedded?.product[0].final_price, brand:catalogue?._embedded?.product[0]._embedded.brand.name,gender:catalogue?._embedded?.product[0]._embedded.gender.name,image:catalogue?._embedded?.product[0]._embedded.images[0].thumbnail,color: catalogue?._embedded?.product[0].color_name},
          {id:1,name:catalogue?._embedded?.product[1].name, price:catalogue?._embedded?.product[1].final_price, brand:catalogue?._embedded?.product[1]._embedded.brand.name,gender:catalogue?._embedded?.product[1]._embedded.gender.name,image:catalogue?._embedded?.product[1]._embedded.images[0].thumbnail,color: catalogue?._embedded?.product[1].color_name},
          {id:2,name:catalogue?._embedded?.product[2].name, price:catalogue?._embedded?.product[2].final_price, brand:catalogue?._embedded?.product[2]._embedded.brand.name,gender:catalogue?._embedded?.product[2]._embedded.gender.name,image:catalogue?._embedded?.product[2]._embedded.images[0].thumbnail,color: catalogue?._embedded?.product[2].color_name},
          {id:3,name:catalogue?._embedded?.product[3].name, price:catalogue?._embedded?.product[3].final_price, brand:catalogue?._embedded?.product[3]._embedded.brand.name,gender:catalogue?._embedded?.product[3]._embedded.gender.name,image:catalogue?._embedded?.product[3]._embedded.images[0].thumbnail,color: catalogue?._embedded?.product[3].color_name},
          {id:4,name:catalogue?._embedded?.product[4].name, price:catalogue?._embedded?.product[4].final_price, brand:catalogue?._embedded?.product[4]._embedded.brand.name,gender:catalogue?._embedded?.product[4]._embedded.gender.name,image:catalogue?._embedded?.product[4]._embedded.images[0].thumbnail,color: catalogue?._embedded?.product[4].color_name},
          {id:5,name:catalogue?._embedded?.product[5].name, price:catalogue?._embedded?.product[5].final_price, brand:catalogue?._embedded?.product[5]._embedded.brand.name,gender:catalogue?._embedded?.product[5]._embedded.gender.name,image:catalogue?._embedded?.product[5]._embedded.images[0].thumbnail,color: catalogue?._embedded?.product[5].color_name},
          {id:6,name:catalogue?._embedded?.product[6].name, price:catalogue?._embedded?.product[6].final_price, brand:catalogue?._embedded?.product[6]._embedded.brand.name,gender:catalogue?._embedded?.product[6]._embedded.gender.name,image:catalogue?._embedded?.product[6]._embedded.images[0].thumbnail,color: catalogue?._embedded?.product[6].color_name},
          {id:7,name:catalogue?._embedded?.product[7].name, price:catalogue?._embedded?.product[7].final_price, brand:catalogue?._embedded?.product[7]._embedded.brand.name,gender:catalogue?._embedded?.product[7]._embedded.gender.name,image:catalogue?._embedded?.product[7]._embedded.images[0].thumbnail,color: catalogue?._embedded?.product[7].color_name},
          {id:8,name:catalogue?._embedded?.product[8].name, price:catalogue?._embedded?.product[8].final_price, brand:catalogue?._embedded?.product[8]._embedded.brand.name,gender:catalogue?._embedded?.product[8]._embedded.gender.name,image:catalogue?._embedded?.product[8]._embedded.images[0].thumbnail,color: catalogue?._embedded?.product[8].color_name},
          
        ];
     }
  }
  
  async handleselfpage(data:any) {
    link = this.props?.data?.loginReducer?.check_catdata?._links?.self?.href;
    const { catalogue_page } = this.props;
    catalogue_page(link);
    this.updatestatecomponents(this.props?.data?.loginReducer);
  }
  
  async handlenextpage(data:any) {
    link = this.props?.data?.loginReducer?.check_catdata?._links?.next?.href;
    const { catalogue_page } = this.props;
    catalogue_page(link);
    this.updatestatecomponents(this.props?.data?.loginReducer);
  }

  async handlefirstpage(data:any) {
    link = this.props?.data?.loginReducer?.check_catdata?._links?.first?.href;
    const { catalogue_page } = this.props;
    catalogue_page(link);
    this.updatestatecomponents(this.props?.data?.loginReducer);
  }

  async handlelastpage(data:any) {
    link = this.props?.data?.loginReducer?.check_catdata?._links?.last?.href;
    const { catalogue_page } = this.props;
    catalogue_page(link);
    this.updatestatecomponents(this.props?.data?.loginReducer);
  }
  componentDidMount() {
    const { catalogue_page } = this.props;
    catalogue_page(link);
    this.updatestatecomponents(this.props?.data?.loginReducer);
  }
  componentDidUpdate(nextProps:any) {
    console.log(nextProps);
    if (this.props !== nextProps) {
      this.updatestatecomponents(this.props?.data?.loginReducer);
    }
  }
 
  
render () {
    const { classes } = this.props as any;
    return (
      <div className={classes.root}>
        <Box display="flex" flexDirection="row">              
          <div>
            {this.state.totalitems !== 0 ? (
              <span>
                <Typography>
                  <span>Total items found: <b>{this.state.totalitems}</b></span>
                  <span style={{paddingLeft: "40px"}}>Total Pages: <b>{this.state.pagecount}</b></span>
                </Typography>
                <Typography>
                  <Switch
                    checked={this.state.checkedA}
                    onChange={this.handleChange.bind(this)}
                    name="checkedA"
                    value="Black"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  /> 
                  <span>Filter by color black</span>
                  <span style={{paddingLeft:"20px"}}>
                    Pages:
                    <Button size="small" variant="outlined" onClick = {this.handlefirstpage.bind(this)}>
                      first
                    </Button>
                  </span>
                  <span style={{paddingLeft: "10px"}}>
                    <Button size="small" variant="outlined" onClick = {this.handleselfpage.bind(this)}>
                      {this.state.page}
                    </Button>
                  </span>
                  <span style={{paddingLeft: "10px"}} onClick = {this.handlenextpage.bind(this)}>
                    <Button size="small" variant="outlined">
                      next
                    </Button>
                  </span>
                  <span style={{paddingLeft: "10px"}} onClick = {this.handlelastpage.bind(this)}>
                  <Button size="small" variant="outlined">
                    last
                  </Button>
                </span>
              </Typography>
            </span>
            ) : (
              <Typography>
                No items found
              </Typography>
            )}
          </div>
        </Box>
        <Grid container spacing={1} >
          <Grid container item xs={12} spacing={3}>
            <React.Fragment>
              {griditems.map((item:any) => (
                <Grid item xs={4}  key={item.id} >
                  {this.state.filter === "" ?  (
                    <Paper className={classes.paper}>
                      <Typography>
                        {item.name}
                      </Typography>
                      <Typography>
                        Color:{item.color}
                      </Typography>
                      <Typography>
                        Brand:{item.brand}
                      </Typography>
                      <Typography>
                        <img className={classes.gridimage} src={item.image} alt=''></img>
                      </Typography>
                      <Typography>
                        Price:{item.price}
                      </Typography>
                    </Paper>
                  ) : (
                    <span>
                      {this.state.filter === item.color ? (
                        <Paper className={classes.paper}>
                          <Typography>
                            {item.name}
                          </Typography>
                          <Typography>
                            Color:{item.color}
                          </Typography>
                          <Typography>
                            Brand:{item.brand}
                          </Typography>
                          <Typography>
                            <img className={classes.gridimage} src={item.image} alt=''></img>
                          </Typography>
                          <Typography>
                            Price:{item.price}
                          </Typography>
                        </Paper>
                      ) : (
                        <span><Paper></Paper></span>
                      )}
                    </span>
                  )}
                </Grid>
              ))} 
            </React.Fragment>
          </Grid>
        </Grid>
     </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(Usestyles as any)(Maincontent));


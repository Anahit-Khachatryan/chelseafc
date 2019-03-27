import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import axios from "axios";
import Container from './Container';
import './css/general.css'


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    maxWidth: 600,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  avatar: {
    margin: 5,
    width: 40,
    height: 40,
  },
});
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.paper,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class TabandTable extends React.Component {
  constructor(props){
    super(props);
    // state = {
    //   value: 0,
    // };
    this.state = {
      allData1: [],
      allData2: [],
    }
  }
  async componentDidMount() {
    let res1 = await axios.get("http://localhost:8010/getData2");
    let res2 = await axios.get("http://localhost:8010/getData3");
    this.setState({
      allData1: res1.data,
      allData2: res2.data,
    });
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  
  render() {
    let { allData1 } = this.state;
    let { allData2 } = this.state;
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Top Scorers" />
            <Tab label="Top Assistants" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell align="center" width="190px">Rank</CustomTableCell>
            <CustomTableCell colspan="3" align="center">Player Information</CustomTableCell>
            <CustomTableCell align="center" width="190px">Apps</CustomTableCell>
            <CustomTableCell align="center" width="190px">Goals</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allData1.map((item, key) => (
            <TableRow className={classes.row} item={item} key={key}>
                          <CustomTableCell align="center">{this.props.item.rank}</CustomTableCell>
              <CustomTableCell align="left"><Avatar alt="Remy Sharp" src= {this.props.item.photo} className={classes.avatar} /></CustomTableCell>
              <CustomTableCell component="th" scope="row">
                {this.props.item.name} <br/> {this.props.item.club}
              </CustomTableCell>
              <CustomTableCell align="center"> <img src= {this.props.item.nation} width="40" height="30"/></CustomTableCell>
              <CustomTableCell align="center">{this.props.item.apps}</CustomTableCell>
              <CustomTableCell align="center">{this.props.item.goals}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </TabContainer>
        <TabContainer dir={theme.direction}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell align="center" width="190px">Rank</CustomTableCell>
            <CustomTableCell colspan="3" align="center">Player Information</CustomTableCell>
            <CustomTableCell align="center" width="194px">Apps</CustomTableCell>
            <CustomTableCell align="center" width="194px">Assists</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {allData2.map((item, key) => (
            <TableRow className={classes.row} item={item} key={key}>
                          <CustomTableCell align="center">{this.props.item.rank}</CustomTableCell>
              <CustomTableCell align="left"><Avatar alt="Remy Sharp" src= {this.props.item.photo} className={classes.avatar} /></CustomTableCell>
              <CustomTableCell component="th" scope="row">
                {this.props.item.name} <br/> {this.props.item.club}
              </CustomTableCell>
              <CustomTableCell align="center"> <img src= {this.props.item.nation} width="40" height="30"/></CustomTableCell>
              <CustomTableCell align="center">{this.props.item.apps}</CustomTableCell>
              <CustomTableCell align="center">{this.props.item.assists}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

TabandTable.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(TabandTable);

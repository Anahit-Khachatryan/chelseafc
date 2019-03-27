import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableData from './TableData';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '67%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 1;
function createData(teamName, P, W, D, L, F, A, GD, Pts) {
  id += 1;
  return {id, teamName, P, W, D, L, F, A, GD, Pts };
}
 
function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <CustomTableCell>#</CustomTableCell>
            <CustomTableCell>Team Name</CustomTableCell>
            <CustomTableCell>P</CustomTableCell>
            <CustomTableCell>W</CustomTableCell>
            <CustomTableCell>D</CustomTableCell>
            <CustomTableCell>L</CustomTableCell>
            <CustomTableCell>F</CustomTableCell>
            <CustomTableCell>A</CustomTableCell>
            <CustomTableCell>GD</CustomTableCell>
            <CustomTableCell>Pts</CustomTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell>{row.id - 1}</CustomTableCell>
              <CustomTableCell>{row.this.props.teamName}</CustomTableCell>
              <CustomTableCell>{row.this.props.P}</CustomTableCell>
              <CustomTableCell>{row.this.props.W}</CustomTableCell>
              <CustomTableCell>{row.this.props.D}</CustomTableCell>
              <CustomTableCell>{row.this.props.L}</CustomTableCell>
              <CustomTableCell>{row.this.props.F}</CustomTableCell>
              <CustomTableCell>{row.this.props.A}</CustomTableCell>
              <CustomTableCell>{row.this.props.GD}</CustomTableCell>
              <CustomTableCell>{row.this.props.Pts}</CustomTableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
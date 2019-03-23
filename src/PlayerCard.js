import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: '15vw',
    width: 'auto',
  },
  actions: {
    height: '1vw',
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
});
class PlayerCard extends React.Component {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="number" className={classes.avatar}>
              {this.props.item.number}
            </Avatar>
          }
          action={
            <img src= {this.props.item.nation} width="45" height="35"/>
          }
          title={this.props.item.name}
          subheader={this.props.item.position}
        />
        <CardMedia
          className={classes.media}
          image={this.props.item.photo}
        />
        <CardContent>
          <Typography component="p" className="cContent">
          {this.props.item.ahw}
          </Typography>
          <br/>
          <Typography component="p" className="cContent">
          Appearances: {this.props.item.apps}
          </Typography>
          <Typography component="p" className="cContent">
          {this.props.item.goals} {this.props.item.cleansheets}
          </Typography>          
          <Typography component="p" className="cContent">
          {this.props.item.assists} {this.props.item.saves}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"      >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <h6 paragraph className="biography">Biography</h6>
            <Typography paragraph>
            {this.props.item.info}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}
PlayerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(PlayerCard);

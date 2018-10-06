import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};


class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/article')
            .then(res => {
                this.setState({ articles: res.data });
                console.log(this.state.articles);
            });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div style={{ padding: 35, paddingBottom: 10, spacing: 24, display: 'flex', flexWrap: 'wrap'}}>
                    <Grid container spacing={40} style={{marginRight: '10px'}} >
                        {this.state.articles.map(article =>
                        
                                <Card>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary">
                                            {article.publisher_date}
                                        </Typography>
                                        <Typography variant="headline" component="h2">
                                            {article.title}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            {article.author}
                                        </Typography>
                                        <Typography component="p">
                                            <td> {article.body}</td>
                                            <br />
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {/* <Button size="small"><Link to={`/show/${article._id}`}>{article.title}</Link></Button> */}
                                    </CardActions>
                                </Card>

                           
                        )}
                    </Grid>
                </div>
            </div>
        );
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Image from '../img/mars.png'; // Import using relative path
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { relative } from 'path';



const styles = {

    hello: {
        margin: 0,
        top: 535,
        left: 'auto',
        bottom: 'auto',
        right: 20,
        position: 'absolute',
    }
};

const sectionStyle = {
    width: "100%",
    height: "500px",
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
};

export default class Home extends Component {

    render() {
        return (
            <section style={sectionStyle}>
                <Button variant="fab" style={styles.hello} color="primary" aria-label="Add"><AddIcon />
      </Button>
            </section>
        )
    }
}
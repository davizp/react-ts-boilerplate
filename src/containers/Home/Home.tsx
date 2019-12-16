import React from 'react';
import classes from './Home.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Home: React.FC = () => {
  return (
    <Grid className={classes.home} fluid>
      <Row>
        <Col xs={6} md={12}>
          <h2>Home Page!</h2>
        </Col>

        <Col xs={12} md={4}>
          Column 1!
        </Col>

        <Col xs={12} md={4}>
          Column 2!
        </Col>

        <Col xs={12} md={4}>
          Column 3!
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;

/**
 * Created by leon_ on 4/17/2017.
 */

import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';

class Stats extends React.Component {
  render(){
    return(
      <Col xs={6} md={6}>
        <Row>
          <Col xs={6} md={6}>
            <Row>
              <Col xs={6}>{this.props.stats[5].stat.name}</Col>
              <Col xs={6}><ProgressBar now={this.props.stats[5].base_stat} label={this.props.stats[5].base_stat} /></Col>
            </Row>
          </Col>
          <Col xs={6} md={6}>
            <Row>
              <Col xs={6}>{this.props.stats[0].stat.name}</Col>
              <Col xs={6}><ProgressBar now={this.props.stats[0].base_stat} label={this.props.stats[0].base_stat} /></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <Row>
              <Col xs={6}>{this.props.stats[4].stat.name}</Col>
              <Col xs={6}><ProgressBar now={this.props.stats[4].base_stat} label={this.props.stats[4].base_stat} /></Col>
            </Row>
          </Col>
          <Col xs={6} md={6}>
            <Row>
              <Col xs={6}>{this.props.stats[2].stat.name}</Col>
              <Col xs={6}><ProgressBar now={this.props.stats[2].base_stat} label={this.props.stats[2].base_stat} /></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <Row>
              <Col xs={6}>{this.props.stats[3].stat.name}</Col>
              <Col xs={6}><ProgressBar now={this.props.stats[3].base_stat} label={this.props.stats[3].base_stat} /></Col>
            </Row>
          </Col>
          <Col xs={6} md={6}>
            <Row>
              <Col xs={6}>{this.props.stats[1].stat.name}</Col>
              <Col xs={6}><ProgressBar now={this.props.stats[1].base_stat} label={this.props.stats[1].base_stat} /></Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

Stats.propTypes = {

};

export default Stats;

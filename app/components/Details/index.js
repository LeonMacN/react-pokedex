/**
*
* Details
*
*/

import React from 'react';
import _ from 'lodash';
import { Row, Col, Image, Media, Label, Panel, ListGroup, ListGroupItem, Accordion, ProgressBar, Alert} from 'react-bootstrap';
import Stats from './components/Stats';
import MoveModal from './components/MoveModal';

class Details extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);
    this.state = {
      move      : {},
      pokemon   : {},
      notFound  : true,
      moveModal : false,
      searching : this.props.searching
    };
    console.log(this.state);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.pokemon === 'Not Found'){
      this.setState({pokemon:{}});
      this.setState({notFound: true});
    } else {
      this.setState({pokemon: nextProps.pokemon});
      this.setState({notFound: false});
      //console.log(this.state.pokemon);
    }
    this.setState({searching: nextProps.searching});
  }

  moveDetails(moveObject){
    this.setState({move: moveObject});
    this.setState({moveModal: true});
  }

  closeModal(){
    this.setState({moveModal: false});
  }

  render() {
    if (!this.state.searching && !this.state.notFound){
      var types = this.state.pokemon.types.map((type)=>{
        return (<Label key={type.slot} style={{ margin:5 }}>{type.type.name}</Label>)
      });
      var abilities = this.state.pokemon.abilities.map((ability)=>{
        return (<ListGroupItem key={ability.slot}>{ability.ability.name}</ListGroupItem>)
      });
      var moves = this.state.pokemon.moves.map((move, key)=>{
        return (<ListGroupItem onClick={()=>this.moveDetails(move)} key={key}>{move.move.name}</ListGroupItem>)
      });
      return (
        <Row>
          <Col xs={12} md={12}>
            <Row>
              <Media>
                <Media.Left align="top">
                  <Image src={this.state.pokemon.sprites.front_default} circle />
                </Media.Left>
                <Media.Body>
                  <Col xs={6} md={6}>
                    <Media.Heading>#{this.state.pokemon.id} {this.state.pokemon.name}</Media.Heading>
                    <h5>{types}</h5>
                  </Col>
                  <Stats stats={this.state.pokemon.stats} />
                </Media.Body>
              </Media>
            </Row>
            <Row>
              <Accordion>
                <Panel header="Abilities" eventKey="1" bsStyle="primary">
                  <ListGroup>
                    {abilities}
                  </ListGroup>
                </Panel>
                <Panel header="Moves" eventKey="2" bsStyle="primary">
                  <ListGroup>
                    {moves}
                  </ListGroup>
                </Panel>
              </Accordion>
            </Row>
          </Col>
          <MoveModal moveModal={this.state.moveModal} move={this.state.move} closeAction={this.closeModal} />
        </Row>
      );
    } else {
      if(this.state.notFound && !this.state.searching){
        return (
          <Row>
            <Col xs={12} md={12}>
              <Alert bsStyle="warning">
                <strong>Nothing found!</strong> Try another one!
              </Alert>
            </Col>
          </Row>
        )
      } else {
        return (
          <Row>
            <Col xsOffset={4} xs={4} md={4}>
              <ProgressBar active now={100}></ProgressBar>
            </Col>
          </Row>
        );
      }
    }
  }
}

Details.propTypes = {

};

export default Details;

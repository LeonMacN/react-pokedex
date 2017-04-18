/**
*
* Search
*
*/

import React from 'react';
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, Button, InputGroup, Glyphicon} from 'react-bootstrap';
// import styled from 'styled-components';


class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: ''
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  onClick(e){
    this.props.findPokemon(this.state.name);
  }

  onChange(e){
    this.setState({ name: e.target.value });
  }

  handleKeyPress(e){
    if (e.key === 'Enter') {
      this.onClick(e);
    }
  }

  render() {
    return (
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <Form>
            <FormGroup controlId="searchForm">
              <ControlLabel>Pokemon name:</ControlLabel>
              <InputGroup>
                <FormControl type="text" value={this.state.name} onKeyPress={this.handleKeyPress}  placeholder="Name" onChange={this.onChange}></FormControl>
                <InputGroup.Button>
                  <Button type="button" bsStyle="primary" onClick={this.onClick}>
                    <Glyphicon glyph="search" />
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

Search.propTypes = {

};

export default Search;

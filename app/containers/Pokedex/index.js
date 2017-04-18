/*
 *
 * Pokedex
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectPokedex from './selectors';

import axios  from 'axios';

import { Grid, Panel } from 'react-bootstrap';
import Search from '../../components/Search/index';
import Details from '../../components/Details/index';

export class Pokedex extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);
    this.state = {
      results: {},
      searching: false
    };

    this.findPokemon = this.findPokemon.bind(this);
  }

  findPokemon(name){
    this.setState({searching: true});
    axios.get('http://localhost:4000/pokemon/'+name).then((response)=>{
      this.setState({results:response.data.result});
      this.setState({searching:false});
    });
  }

  render() {
    return (
      <div>
        <Helmet
          title="Pokedex"
          meta={[
            { name: 'description', content: 'Description of Pokedex' },
          ]}
        />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
        <div style={{padding:10}}>
          <Panel header="Pokedex" bsStyle="primary">
            <Grid>
              <Search findPokemon={this.findPokemon} />
              <Details pokemon={this.state.results} searching={this.state.searching} style={{ padding:10 }} />
            </Grid>
          </Panel>
        </div>
      </div>
    );
  }
}

Pokedex.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pokedex: makeSelectPokedex(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);

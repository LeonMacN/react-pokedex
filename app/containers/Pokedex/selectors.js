import { createSelector } from 'reselect';

/**
 * Direct selector to the pokedex state domain
 */
const selectPokedexDomain = () => (state) => state.get('pokedex');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Pokedex
 */

const makeSelectPokedex = () => createSelector(
  selectPokedexDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPokedex;
export {
  selectPokedexDomain,
};

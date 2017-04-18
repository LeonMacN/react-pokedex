
import { fromJS } from 'immutable';
import pokedexReducer from '../reducer';

describe('pokedexReducer', () => {
  it('returns the initial state', () => {
    expect(pokedexReducer(undefined, {})).toEqual(fromJS({}));
  });
});

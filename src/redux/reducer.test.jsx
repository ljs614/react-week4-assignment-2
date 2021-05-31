import reducer, { initialState } from './reducer';
import { addNewRestaurant, updateRestaurantField } from './actions';

describe('reducer', () => {
  context('with invaild action', () => {
    it('returns same state', () => {
      const oldState = {
        newRestaurant: {
          id: 1,
          name: '',
          category: '',
          address: '',
        },
        restaurants: [],
      };

      const newState = reducer(oldState, { type: 'invaild' });

      expect(newState).toEqual(oldState);
    });
  });

  context('with vaild action', () => {
    it('adds new restaurant and updates id', () => {
      const oldState = {
        newRestaurant: {
          id: 1,
        },
        restaurants: [],
      };

      const newRestaurant = {
        id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
      };

      const newState = reducer(oldState, addNewRestaurant(newRestaurant));

      const { newRestaurant: { id }, restaurants } = newState;

      expect(id).toBe(2);
      expect(restaurants).toEqual([newRestaurant]);
    });

    it('updates field with input value', () => {
      const oldState = {
        newRestaurant: {
          name: '',
        },
      };

      const newState = reducer(oldState, updateRestaurantField(
        { field: 'name', value: '마녀 주방' },
      ));

      expect(newState.newRestaurant.name).toBe('마녀 주방');
    });
  });

  it('uses initialState when nothing is given', () => {
    const newState = reducer(undefined, { type: 'invaild' });

    expect(newState).toEqual(initialState);
  });
});
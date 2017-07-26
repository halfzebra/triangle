import { triangleType } from '../triangle-type'

it('Should detect an equilateral triangle', () => {
  expect(triangleType(1, 1, 1)).toEqual('equilateral');
});

it('Should detect an equilateral triangle', () => {
  expect(triangleType(2, 2, 3)).toEqual('isosceles');
});

it('Should detect a scalene triangle', () => {
  expect(triangleType(3, 4, 5)).toEqual('scalene');
});

it('Shouldn\'t return a type of an invalid triangle', () => {
  expect(triangleType(1, 2, 3)).toEqual(null);
});
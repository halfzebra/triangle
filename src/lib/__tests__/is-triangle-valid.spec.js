import { isTriangleValid } from '../triangle-type'

it('Should detect a valid triangle', () => {
  expect(isTriangleValid(1, 1, 1)).toEqual(true);
});

it('Should detect an invalid triangle', () => {
  expect(isTriangleValid(1, 2, 3)).toEqual(false);
});
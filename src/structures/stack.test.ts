import {faker} from '@faker-js/faker';
import {Stack} from './stack';

interface MockValue {
  readonly name: string;
  readonly age: number;
}

function getMockValue() {
  return {
    name: faker.person.fullName(),
    age: faker.number.int({min: 0, max: 100}),
  };
}

const mockValue: MockValue = getMockValue();
const mockValues: MockValue[] = new Array(10)
  .fill(null)
  .map(() => getMockValue());

test('Adding an item to the stack', () => {
  const stack = new Stack(...mockValues);
  expect(stack.length).toBe(mockValues.length);

  stack.push(mockValue)
  expect(stack.length).toBe(mockValues.length + 1);
});

test('Deleting an item from the stack', () => {
  const stack = new Stack(...mockValues);
  expect(stack.length).toBe(mockValues.length);

  expect(stack.pop()).toEqual(mockValues.at(-1));
  expect(stack.length).toBe(mockValues.length - 1);
});

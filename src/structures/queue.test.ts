import {faker} from '@faker-js/faker';

import {Queue} from './queue';

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

test('Adding an item to the queue', () => {
  const queue = new Queue(...mockValues);
  expect(queue.length).toBe(mockValues.length);

  queue.push(mockValue);

  expect(queue.length).toBe(mockValues.length + 1);
});

test('Deleting an item from the queue', () => {
  const queue = new Queue(...mockValues);
  expect(queue.length).toBe(mockValues.length);

  expect(queue.pop()).toEqual(mockValues.at(-1));
  expect(queue.length).toBe(mockValues.length - 1);
});

import {faker} from '@faker-js/faker';

import {List} from './list';

const mockValues = new Array(10).fill(null).map(() => faker.number.int());

test('Transforming a list into an array', () => {
  const list = new List(...mockValues);

  expect(list.toArray()).toEqual(mockValues);
});

test('Spread operator', () => {
  const list = new List(...mockValues);

  expect([...list]).toEqual(mockValues);
});

test('First and last elements', () => {
  const list = new List(...mockValues);
  expect(list.getFirstItem()).toBe(mockValues.at(0));
  expect(list.getLastItem()).toBe(mockValues.at(-1));
});

test('Adding an item to the beginning', () => {
  const list = new List(...mockValues);
  const expectedValue = faker.number.int();

  list.unshift(expectedValue);
  expect(list.getFirstItem()).toBe(expectedValue);
});

test('Removing an item from the beginning', () => {
  const list = new List(...mockValues);

  list.shift();
  expect(list.getFirstItem()).toBe(mockValues.at(1));
});

test('Adding an item to the end', () => {
  const list = new List(...mockValues);
  const expectedValue = faker.number.int();

  list.push(expectedValue);
  expect(list.getLastItem()).toBe(expectedValue);
});

test('Removing an item from the end', () => {
  const list = new List(...mockValues);

  list.pop();
  expect(list.getLastItem()).toBe(mockValues.at(-2));
});

test('Getting element by value', () => {
  const list = new List(...mockValues);

  expect(list.get(v => v === mockValues.at(0))).toBe(mockValues.at(0));
});

test('Mapping list', () => {
  const list = new List(...mockValues);

  expect(list.map(v => v + 1).toArray()).toEqual(mockValues.map(v => v + 1));
});

test('List override', () => {
  const list = new List(...mockValues);
  let numberItems = 0;
  list.forEach(() => (numberItems = numberItems + 1));
  expect(numberItems).toEqual(mockValues.length);
});

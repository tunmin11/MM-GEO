import { initialize } from '../src/hook';
import { getStates } from '../src/index';

test('Get all states in English by default', () => {
  const states = getStates();
  expect(states[0].getName()).toBe('Magway Region');
});

test('Set language to Myanmar and get states', () => {
  initialize({ language: 'mm' });
  const states = getStates();
  expect(states[0].getName()).toBe('မကွေးတိုင်းဒေသကြီး');
});

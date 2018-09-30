import Import from './import';

const Index = Import(modules)

test('adds 1 + 2 to equal 3', () => {
  expect(new Index().test()).toBe(4);
});
import { shallow } from 'enzyme'

it('creates a mock function', () => {
  const mockFunc = jest.fn().mockReturnValue(10)
  expect(mockFunc()).toBe(10)
})
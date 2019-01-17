import { Operation, Button } from "./levels"
import { processAction, createButtonAction, triggerActions, updateValue } from './gameHelpers'

describe('triggerActions', () => {
  it('returns the updated button values based on the actions it receives', () => {
    const values = Object.freeze([2, 2, 2, 2])
    const buttonActions = [
      createButtonAction(Button.TopLeft, Button.TopLeft, Operation.Add, 8),
      createButtonAction(Button.TopRight, Button.TopRight, Operation.Multiply, 3),
    ]
    expect(triggerActions(Button.TopLeft, buttonActions, values)).toEqual([10, 2, 2, 2])
    expect(triggerActions(Button.TopRight, buttonActions, values)).toEqual([2, 6, 2, 2])
  })
})

describe('processAction', () => {
  it('correctly processes an action returning the correct values', () => {
    const action = createButtonAction(Button.TopLeft, Button.TopRight, Operation.Subtract, 8)
    const values = [10, 10, 10, 10]
    const expectedValues = [10, 2, 10, 10]
    expect(processAction(action, values)).toEqual(expectedValues)
  })
})

describe('updateValue', () => {
  it('updates a given value based on the add operation', () => {
    expect(updateValue(5, Operation.Add, 2)).toBe(7)
    expect(updateValue(5, Operation.Add, 10)).toBe(15)
  })

  it('updates a given value based on the subtract operation', () => {
    expect(updateValue(10, Operation.Subtract, 2)).toBe(8)
    expect(updateValue(7, Operation.Subtract, 5)).toBe(2)
  })

  it('updates a given value based on the multiply operation', () => {
    expect(updateValue(10, Operation.Multiply, 2)).toBe(20)
    expect(updateValue(7, Operation.Multiply, 5)).toBe(35)
  })

  it('updates a given value based on the divide operation', () => {
    expect(updateValue(10, Operation.Divide, 2)).toBe(5)
    expect(updateValue(40, Operation.Divide, 5)).toBe(8)
    expect(updateValue(9, Operation.Divide, 2)).toBe(4)
  })
})

describe('createButtonAction', () => {
  it('creates a button action object', () => {
    expect(createButtonAction(Button.TopLeft, Button.TopLeft, Operation.Add, 5))
      .toEqual({
        triggerButton: Button.TopLeft,
        affectedButton: Button.TopLeft,
        operation: Operation.Add,
        value: 5,
      })
  })
})

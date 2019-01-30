import { createButtonAction } from './gameHelpers'

export const Button = Object.freeze({
  TopLeft: 0,
  TopRight: 1,
  BottomLeft: 2,
  BottomRight: 3,
})

export const Operation = Object.freeze({
  Add: 'add',
  Subtract: 'subtract',
  Multiply: 'multiply',
  Divide: 'divide'
})

export const createLevel = (targetNumber, initialValues, buttonActions) => {
  return {
    targetNumber,
    initialValues: Object.freeze(initialValues),
    buttonActions,
  }
}

export const levels = [
  {
    targetNumber: 10,
    initialValues: [5, 4, 5, 40],
    buttonActions: [
      createButtonAction(Button.TopLeft, Button.TopLeft, Operation.Add, 5),
      createButtonAction(Button.TopRight, Button.TopRight, Operation.Add, 6),
      createButtonAction(Button.BottomLeft, Button.BottomLeft, Operation.Multiply, 2),
      createButtonAction(Button.BottomRight, Button.BottomRight, Operation.Divide, 2),
    ]
  },
  {
    targetNumber: 20,
    initialValues: [10, 8, 5, 180],
    buttonActions: [
      createButtonAction(Button.TopLeft, Button.TopLeft, Operation.Add, 10),
      createButtonAction(Button.TopRight, Button.TopRight, Operation.Add, 6),
      createButtonAction(Button.BottomLeft, Button.BottomLeft, Operation.Multiply, 2),
      createButtonAction(Button.BottomRight, Button.BottomRight, Operation.Divide, 3),
    ]
  },
  {
    targetNumber: 25,
    initialValues: [10, 9, 5, 20],
    buttonActions: [
      createButtonAction(Button.TopLeft, Button.TopLeft, Operation.Add, 7),
      createButtonAction(Button.TopRight, Button.TopRight, Operation.Add, 4),
      createButtonAction(Button.TopRight, Button.TopLeft, Operation.Add, 2),
      createButtonAction(Button.BottomLeft, Button.BottomLeft, Operation.Divide, 2),
      createButtonAction(Button.BottomRight, Button.BottomRight, Operation.Add, 5),
      createButtonAction(Button.BottomRight, Button.BottomLeft, Operation.Multiply, 10),
    ]
  },
  {
    targetNumber: 2,
    initialValues: [20, 8, 6, 0],
    buttonActions: [
      createButtonAction(Button.TopLeft, Button.TopLeft, Operation.Subtract, 4),
      createButtonAction(Button.TopLeft, Button.BottomRight, Operation.Add, 4),
      createButtonAction(Button.TopRight, Button.TopLeft, Operation.Add, 3),
      createButtonAction(Button.BottomLeft, Button.TopRight, Operation.Divide, 2),
      createButtonAction(Button.BottomLeft, Button.BottomLeft, Operation.Subtract, 3),
      createButtonAction(Button.BottomRight, Button.BottomRight, Operation.Subtract, 34),
      createButtonAction(Button.BottomRight, Button.BottomLeft, Operation.Add, 2),
    ]
  },
  {
    targetNumber: 48,
    initialValues: [10, 27, 6, 96],
    buttonActions: [
      createButtonAction(Button.TopLeft, Button.TopLeft, Operation.Add, 8),
      createButtonAction(Button.TopRight, Button.TopLeft, Operation.Add, 2),
      createButtonAction(Button.TopRight, Button.TopRight, Operation.Add, 7),
      createButtonAction(Button.BottomLeft, Button.BottomLeft, Operation.Multiply, 4),
      createButtonAction(Button.BottomRight, Button.BottomLeft, Operation.Subtract, 3),
      createButtonAction(Button.BottomRight, Button.BottomRight, Operation.Divide, 2),
    ]
  }
]


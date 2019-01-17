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

const level1 = {
  targetNumber: 10,
  startValues: [5, 4, 5, 40],
  buttonActions: [
    createButtonAction(Button.TopLeft, Button.TopLeft, Operation.Add, 5),
    createButtonAction(Button.TopRight, Button.TopRight, Operation.Add, 6),
    createButtonAction(Button.BottomLeft, Button.BottomLeft, Operation.Multiply, 2),
    createButtonAction(Button.BottomRight, Button.BottomRight, Operation.Divide, 2),
  ]
}

// const createLevel = (targetNumber, startValues, buttonActions) => {

// }

export const levels = [
  level1
]


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
  startValues: [5, 6, 7, 4],
  buttonActions: [
    {
      triggerButton: Button.TopLeft,
      button: Button.TopLeft,
      operation: Operation.Add,
      value: 5
    }
  ]
}

// const createLevel = (targetNumber, startValues, buttonActions) => {

// }

export const levels = [
  level1
]


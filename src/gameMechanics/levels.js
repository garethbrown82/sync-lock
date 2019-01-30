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

export const getLevels = () => {
  const { TopLeft, TopRight, BottomLeft, BottomRight } = Button
  const { Add, Subtract, Multiply, Divide } = Operation

  const levels = Object.freeze([
    createLevel(10, [5, 4, 5, 40], [
      createButtonAction(TopLeft, TopLeft, Add, 5),
      createButtonAction(TopRight, TopRight, Add, 6),
      createButtonAction(BottomLeft, BottomLeft, Multiply, 2),
      createButtonAction(BottomRight, BottomRight, Divide, 2),
    ]),
    createLevel(20, [10, 8, 5, 180], [
      createButtonAction(TopLeft, TopLeft, Add, 10),
      createButtonAction(TopRight, TopRight, Add, 6),
      createButtonAction(BottomLeft, BottomLeft, Multiply, 2),
      createButtonAction(BottomRight, BottomRight, Divide, 3),
    ]),
    createLevel(37, [7, 9, 41, 15], [
      createButtonAction(TopLeft, TopLeft, Add, 9),
      createButtonAction(TopRight, TopRight, Add, 10),
      createButtonAction(BottomLeft, BottomLeft, Subtract, 2),
      createButtonAction(BottomLeft, TopRight, Subtract, 1),
      createButtonAction(BottomRight, TopLeft, Subtract, 3),
      createButtonAction(BottomRight, BottomRight, Add, 11),
    ]),
    createLevel(25, [10, 9, 5, 20], [
      createButtonAction(TopLeft, TopLeft, Add, 7),
      createButtonAction(TopRight, TopRight, Add, 4),
      createButtonAction(TopRight, TopLeft, Add, 2),
      createButtonAction(BottomLeft, BottomLeft, Divide, 2),
      createButtonAction(BottomRight, BottomRight, Add, 5),
      createButtonAction(BottomRight, BottomLeft, Multiply, 10),
    ]),
    createLevel(2, [20, 8, 6, 0], [
      createButtonAction(TopLeft, TopLeft, Subtract, 4),
      createButtonAction(TopLeft, BottomRight, Add, 4),
      createButtonAction(TopRight, TopLeft, Add, 3),
      createButtonAction(BottomLeft, TopRight, Divide, 2),
      createButtonAction(BottomLeft, BottomLeft, Subtract, 3),
      createButtonAction(BottomRight, BottomRight, Subtract, 34),
      createButtonAction(BottomRight, BottomLeft, Add, 2),
    ]),
    createLevel(48, [10, 27, 6, 96], [
      createButtonAction(TopLeft, TopLeft, Add, 8),
      createButtonAction(TopRight, TopLeft, Add, 2),
      createButtonAction(TopRight, TopRight, Add, 7),
      createButtonAction(BottomLeft, BottomLeft, Multiply, 4),
      createButtonAction(BottomRight, BottomLeft, Subtract, 3),
      createButtonAction(BottomRight, BottomRight, Divide, 2),
    ])
  ])
  return levels
}


import { Operation } from './levels'

export const triggerActions = (clickedButton, buttonActions, values) => {
  let updatedValues = cloneArray(values)
  const actionsForButton = buttonActions.filter((action) => action.triggerButton === clickedButton)
  actionsForButton.forEach((action) => {
    updatedValues = processAction(action, cloneArray(updatedValues))
  })

  return updatedValues
}

export const processAction = (action, values) => {
  const updateValues = cloneArray(values)
  const initialValue = values[action.affectedButton]
  updateValues[action.affectedButton] = updateValue(initialValue, action.operation, action.value)
  return updateValues
}

export const updateValue = (initialValue, operation, operatedValue) => {
  if (operation === Operation.Add) return initialValue + operatedValue
  if (operation === Operation.Subtract) return initialValue - operatedValue
  if (operation === Operation.Multiply) return initialValue * operatedValue
  if (operation === Operation.Divide) return Math.floor(initialValue / operatedValue)
}

export const createButtonAction = (triggerButton, affectedButton, operation, value) => {
  return {
    triggerButton,
    affectedButton,
    operation,
    value,
  }
}

export const isLevelSolved = (values, targetNumber) => {
  if (values.length !== 4) return false
  return values.every((value) => value === targetNumber)
}

const cloneArray = (array) => array.slice(0)

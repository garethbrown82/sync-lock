import { Button, Operation } from './levels'

export const triggerActions = (clickedButton, buttonActions, values) => {
  const updatedValues = values
  const actionsForButton = buttonActions.filter((action) => action.triggerButton === clickedButton)
  actionsForButton.forEach((action) => {

  })

  return [0, 0, 0, 0]
}

export const processAction = (action, values) => {
  const updateValues = values
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

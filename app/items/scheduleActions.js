const { map } = require('lodash')
const {
  scheduleEvery,
  cancelScheduled
} = require('../lib/wallpaperScheduler')

const generateActions = () => {
  return generateSchedulableActions()
    .concat(generateDisableAction())
}

const generateSchedulableActions = () => {
  return map([1, 3, 6, 12, 24], (time) => {
    return {
      label: getHours(time),
      type: 'radio',
      every: time,
      click (item) {
        scheduleEvery(item.every)
          .then(response => console.log(response))
      }
    }
  })
}

const getHours = (time) => {
  const hour = time == 1 ? 'hour' : 'hours'
  return `every ${time} ${hour}`
}

const generateDisableAction = () => {
  return [{
    label: 'Disable',
    type: 'radio',
    checked: true,
    click (item) {
      cancelScheduled()
        .then((response) => console.log(response))
    }
  }]
}

module.exports = generateActions

const { forIn, keys } = require('lodash')
const changeWallpaper = require('./changeWallpaper')

const scheduleEvery = (time) => {
  return new Promise((resolve, reject) => {
    const rule = new scheduler.RecurrenceRule();
    const jobs = scheduler.scheduledJobs

    try {
      forIn(jobs, (job) => {
        job.cancel()
        console.log(`${job.name} : canceled`)
      })
    } catch (e) {
      console.log(e)
      return reject(e)
    }

    try {
      rule.hour = time
      scheduler.scheduleJob(rule, () => changeWallpaper())
    } catch (e) {
      console.log(e)
      return reject(e)
    }

    return resolve(`Scheduled every ${time} hour`)
  })
}

const cancelScheduled = () => {
  return new Promise((resolve, reject) => {
    forIn(scheduler.scheduledJobs, (job) => {
      job.cancel()
      console.log(`${job.name} : canceled`)
    })

    return resolve('All scheduled jobs are canceled')
  })
}

module.exports = { scheduleEvery, cancelScheduled }

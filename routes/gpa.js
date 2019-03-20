const moment = require('moment');

const CompletedTask = require('../models/CompletedTask');

module.exports = id => {

  return new Promise(async function(resolve, reject) {

    const tasks = await CompletedTask.find({ user: id });

    if (tasks.length === 0) {

      resolve({
        daily: 0,
        weekly: 0,
        monthly: 0,
        allTime: 0
      });
      return;

    }

    let daily = 0, dailyCount = 0, weekly = 0, weeklyCount = 0, monthly = 0, monthlyCount = 0, allTime = 0, count = 0;

    for (let task of tasks) {

      const days = moment().diff(task.date, 'days');

      if (days === 0) {

        dailyCount++;
        task.completed && daily++;

      }

      if (days <= 7) {

        weeklyCount++;
        task.completed && weekly++;

      }

      if (days <= 30) {

        monthlyCount++;
        task.completed && monthly++;

      }

      task.completed && count++;

    }

    daily = Math.round(100 * daily / dailyCount);
    weekly = Math.round(100 * weekly / weeklyCount);
    monthly = Math.round(100 * monthly / monthlyCount);
    allTime = Math.round(100 * count / tasks.length);

    resolve({

      daily,
      weekly,
      monthly,
      allTime

    });

  });

}

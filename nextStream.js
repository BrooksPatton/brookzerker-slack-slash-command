const moment = require('moment')

function get() {
  const now = moment().day()
  let day

  switch (now) {
    case 0:
      day = 'Monday'
      break;
    case 1:
      day = 'Monday'
      break;
    case 2:
      day = 'Wednesday'
      break;
    case 3:
      day = 'Wednesday'
      break;
    case 4:
      day = 'Friday'
      break;
    case 5:
      day = 'Friday'
      break;
    case 6:
      day = 'Monday'
      break;
    default:
      day = 'Monday'
  }

  return day
}

module.exports = {get}

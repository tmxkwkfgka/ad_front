'use strict'

const Model = use('Model')

class Title extends Model {
  static get incrementing () {
    return false
  }

  static formatDates(field, value){
    if(field=="startDate" || field=="endDate"){
      return value.format('YYYY-MM-DD')
    }
    return super.formatDates(field, value)
  }




}

module.exports = Title

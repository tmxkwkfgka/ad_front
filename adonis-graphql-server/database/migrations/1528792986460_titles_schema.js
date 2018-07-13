'use strict'

const Schema = use('Schema')

class TitlesSchema extends Schema {
  up () {
    this.table('titles', (table) => {
      // alter table
    })
  }

  down () {
    this.table('titles', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TitlesSchema

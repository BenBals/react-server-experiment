import { createStore } from 'redux'
import counter from './counter'

const store = createStore(counter)

module.exports = store

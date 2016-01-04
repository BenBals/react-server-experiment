import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './Counter'

export default (counterValue) => ReactDOM.render(<Counter value={counterValue}/>, document.getElementById('content'))

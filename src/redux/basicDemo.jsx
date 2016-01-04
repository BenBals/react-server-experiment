import store from './store'
import renderReact from '../react/ReactBase.jsx'

export default () => {
  store.subscribe(() => renderReact(store.getState()))
  renderReact(store.getState())

  document.addEventListener('click', event => {
    store.dispatch({type: 'INCREMENT'})
  })
}

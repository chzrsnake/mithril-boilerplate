import m from 'mithril'
import './index.css'
import Home from './routes/home'

m.route(document.body, '/home', {
  '/home': Home
})

import './App.css'
import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ToggleTheme from './context/ToggleTheme'

import LoginForm from './components/LoginForm'

class App extends Component {
  state = {isDarkTheme: false}

  render() {
    const {isDarkTheme} = this.state
    return (
      <ToggleTheme.Provider
        value={{
          isDarkTheme,
          SavedVideoList: [],
          onAddVideo: () => {},
          onRemoveVideo: () => {},
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
        </Switch>
      </ToggleTheme.Provider>
    )
  }
}
export default App

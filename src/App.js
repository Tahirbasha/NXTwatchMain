import './App.css'
import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ToggleTheme from './context/ToggleTheme'

import LoginForm from './components/LoginForm'
import Home from './components/Home'

class App extends Component {
  state = {isDarkTheme: false}

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ToggleTheme.Provider
        value={{
          isDarkTheme,
          ChangeTheme: this.onChangeTheme,
          SavedVideoList: [],
          onAddVideo: () => {},
          onRemoveVideo: () => {},
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ToggleTheme.Provider>
    )
  }
}
export default App

import './App.css'
import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ToggleTheme from './context/ToggleTheme'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoDetails from './components/VideoDetails'

class App extends Component {
  state = {isDarkTheme: false, saved: []}

  addingVideos = Data => {
    const {saved} = this.state
    this.setState({saved: [...saved, Data]})
  }

  removeVideos = Data => {
    const {saved} = this.state
    const FilteredData = saved.filter(each => each.id !== Data.id)
    this.setState({saved: FilteredData})
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme, saved} = this.state
    return (
      <ToggleTheme.Provider
        value={{
          isDarkTheme,
          ChangeTheme: this.onChangeTheme,
          SavedVideoList: saved,
          onAddVideo: this.addingVideos,
          onRemoveVideo: this.removeVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/videos/:id" component={VideoDetails} />
          <Route component={NotFound} />
        </Switch>
      </ToggleTheme.Provider>
    )
  }
}
export default App

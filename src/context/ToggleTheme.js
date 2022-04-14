import React from 'react'

const ToggleTheme = React.createContext({
  isDarkTheme: false,
  SavedVideoList: [],
  onAddVideo: () => {},
  onRemoveVideo: () => {},
})

export default ToggleTheme

import React from 'react'
import { createContext, useContext } from 'react'

const ThemeContext = createContext('light')

const TodoLink = () => {
  const theme = useContext(ThemeContext)
  console.log('theme',theme)
  return (
    <div>
      <h3>TodoLink theme: </h3>{theme}
    </div>
  )
}

class TodoButton extends React.Component {
  render() {
    return (
      <div>
        <TodoLink></TodoLink>
      </div>
    )
  }
}

class ContextDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light',
    }
  }

  changeTheme = () => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light'
    })
  }

  render() {
    return (
      <div>
        <p>TodoApp theme: {this.state.theme}</p>
        <button onClick={this.changeTheme}>changeTheme</button>
        <ThemeContext.Provider value={this.state.theme}>
          <TodoButton></TodoButton>
        </ThemeContext.Provider>
      </div>
    )
  }
}
export default ContextDemo

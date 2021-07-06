import React from 'react'


class TodoLink extends React.Component {
  render() {
      return <div>
      <TodoLink></TodoLink>
    </div>
  }
}

class TodoButton extends React.Component{
    render () {
        return <div>
            <TodoLink></TodoLink>
        </div>
    }
}

class ContextDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light',
    }
  }

  render() {
    return (
      <div>
        <p>TodoApp theme: {this.state.theme}</p>
        <TodoButton></TodoButton>
      </div>
    )
  }
}
export default ContextDemo
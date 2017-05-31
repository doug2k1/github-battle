import React from 'react'
import PropTypes from 'prop-types'

class PlayerInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="username">{this.props.label}</label>
        <input type="text" id="username" placeholder="github username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button className="button" type="submit" disabled={!this.state.username}>Submit</button>
      </form>
    )
  }

  handleChange (event) {
    const username = event.target.value
    this.setState({
      username
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.props.id, this.state.username)
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    const { playerOneName, playerTwoName } = this.state

    return (
      <div>
        <div className="row">
          {!playerOneName &&
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
            />}

          {!playerTwoName &&
          <PlayerInput
            id="playerTwo"
            label="Player Two"
            onSubmit={this.handleSubmit}
          />}
        </div>
      </div>
    )
  }

  handleSubmit (id, username) {
    const newState = {}
    newState[`${id}Name`] = username
    newState[`${id}Image`] = `https://github.com/${username}.png?size=200`

    this.setState(newState)
  }
}

export default Battle

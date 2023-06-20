import {Component} from 'react'

import './index.css'

class LoginItem extends Component {
  state = {username: '', password: '', msg: ''}

  onSubmitFailure = message => {
    console.log(message)
    const {history} = this.props
    console.log(history)
    history.replace('/login')

    this.setState({msg: message})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    console.log(history)
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const url = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess()

      /* const {history} = this.props
      history.replace('/') */
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="input"
          type="password"
          value={password}
          id="password"
          placeholder="password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderInput = () => {
    const {username} = this.state

    return (
      <>
        <label className="label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="input"
          type="text"
          value={username}
          id="username"
          placeholder="username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {msg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="input-card" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="input-img"
          />
          <div className="container">{this.renderInput()}</div>
          <div className="container">{this.renderPassword()}</div>
          <button type="submit" className="button">
            Login
          </button>
          <p className="message">{msg}</p>
        </form>
      </div>
    )
  }
}

export default LoginItem

import React from 'react'

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  render () {
    const langs = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
      <div>
        <p>Selected: {this.state.selectedLanguage}</p>
        <ul className="languages">
          {langs.map(lang => {
            return (
              <li
                style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null}
                key={lang}
                onClick={this.updateLanguage.bind(null, lang)}>
                {lang}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  updateLanguage (lang) {
    this.setState({
      selectedLanguage: lang
    })
  }
}

export default Popular

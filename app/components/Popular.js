import React from 'react'
import PropTypes from 'prop-types'

const SelectLanguage = (props) => {
  const langs = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className="languages">
      {langs.map(lang => {
        return (
          <li
            style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
            key={lang}
            onClick={props.onSelect.bind(null, lang)}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  render () {
    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>
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

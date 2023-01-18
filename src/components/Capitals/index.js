import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {active: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({active: event.target.value})
  }

  getCountry = () => {
    const {active} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      each => each.id === active,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {active} = this.state
    const country = this.getCountry(active)
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              className="select"
              onChange={this.onChangeCapital}
              value={active}
            >
              {countryAndCapitalsList.map(each => (
                <option className="option" key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

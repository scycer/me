// ****************************
// *  Model
// ****************************
// Static Data
var data = {
  name: 'Daniel Hoek',
  dateOfBirth: '09/02/1991',
  location: 'Canberra, Australia',
  email: 'scycer1@hotmail.com'
}

// State of the UI
var state = {}

const updateState = newState => {
  // Update State
  state = newState
  // Call re-render
  main()
}

// ****************************
// *  View
// ****************************
import Inferno from 'inferno'
import Main from './view/main'
const main = () =>
  Inferno.render(
    <Main data={data} state={state} />,
    document.getElementById('index')
  )

// ****************************
// *  Intent
// ****************************
const handleInput = event => {
  updateState({ name: event.target.value })
}

// ****************************
// *  Run
// ****************************
main()

import Inferno from 'inferno'
import * as s from './main.style.js'

const Details = ({ data }) => {
  const ds = [
    {
      label: 'Age',
      value: data.dateOfBirth
    },
    {
      label: 'Location',
      value: data.location
    },
    {
      label: 'Email',
      value: data.email
    }
  ]

  return (
    <table>
      {ds.map(d => (
        <tr>
          <td style={s.label}>{d.label}</td>
          <td>{d.value}</td>
        </tr>
      ))}
    </table>
  )
}

const Main = ({ data, state }) => {
  return (
    <div id='body' style={s.body}>
      <div style={s.mainCard}>
        <img src='profilePic.jpg' style={s.profilePic} />
        <div style={s.info}>
          <h1>Hi, I'm Daniel Hoek</h1>
          <h2>Front-End Web Developer</h2>
          <Details data={data} />
        </div>
      </div>

      {/* <input onInput={x => handleInput(x)} value={state.name} /> */}
    </div>
  )
}

export default Main

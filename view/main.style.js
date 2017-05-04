import c from './colorPalette'

const body = {
  backgroundColor: c.mainbg,
  position: 'fixed',
  display: '-webkit-flex',
  display: 'flex',
  justifyContent: 'space-around'
}

const profilePic = {
  width: '240px',
  height: '240px',
  borderRadius: '2px'
}

const mainCard = {
  backgroundColor: c.textbg,
  width: '600px',
  //   height: '240px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  padding: '32px',
  margin: '64px',

  display: '-webkit-flex',
  display: 'flex',
  justifyContent: 'space-between'
}

const info = {
  padding: '0px 32px 0px 32px'
}

const label = {
  fontWeight: '600',
  width: '80px'
}

export { body, profilePic, mainCard, info, label }

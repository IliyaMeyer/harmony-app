import STAVE_SIZES from '../../../utility/constants/stave-sizes'
import './NotationLines.scss'

const NotationLines = () => {

  const {LINE_THICKNESS, SPACE_THICKNESS, STAVE_HEIGHT, STAVE_WIDTH, BLANK_SPACE_THICKNESS} = STAVE_SIZES

  const notationMap = []
  for (let i = 0; i < 4; i++)
    notationMap.push(0)

  const getHorizontalLineStyle = (isBottom = false) => {
    return {
      height: LINE_THICKNESS,
      width: STAVE_WIDTH - 2 * LINE_THICKNESS,
      marginBottom: isBottom ? 0 : SPACE_THICKNESS,
      backgroundColor: 'black'
    }
  }

  const getBlankSpaceStyle = () => {
    return {
      height: BLANK_SPACE_THICKNESS
    }
  }

  const getVerticalLineStyle = () => {
    return {
      height: STAVE_HEIGHT,
      width: LINE_THICKNESS,
      backgroundColor: 'black'
    }
  }

  const buildMainInputArea = () => {
    return (
      <div>
        {notationMap.map(() => (
          <div style={getHorizontalLineStyle()} />
          ))
        }
        <div style={getHorizontalLineStyle(true)} />
        <div style={getBlankSpaceStyle()} />
        {notationMap.map(() => (
          <div style={getHorizontalLineStyle()} />
        ))
        }
        <div style={getHorizontalLineStyle(true)} />
      </div>
    )
  }

  return (
    <div className={'notation-lines-container'}>
      <div style={getVerticalLineStyle()} />
      {buildMainInputArea()}
      <div style={getVerticalLineStyle()} />
    </div>
  )

}

export default NotationLines

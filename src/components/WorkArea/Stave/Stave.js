import './Stave.scss'
import STAVE_SIZES from '../../../utility/constants/stave-sizes'
import BlankSpace from './BlankSpace'
import BarLine from './BarLine'

const Stave = (keySignature, timeSignature) => {

  const getStaveStyle = () => {
    const {LINE_THICKNESS, STAVE_HEIGHT, STAVE_WIDTH} = STAVE_SIZES
    return {
      height: STAVE_HEIGHT,
      width: STAVE_WIDTH,
      borderWidth: LINE_THICKNESS
    }
  }

  return (
    <div className={'stave-container'} style={getStaveStyle()}>

    </div>
  )

}

Stave.defaultProps = {
  timeSignature: <div />,
  keySignature: <div />
}

export default Stave

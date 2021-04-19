import './Stave.scss'
import STAVE_SIZES from '../../../utility/constants/stave-sizes'
import NotationLines from '../NotationLines'
import BarLine from './BarLine'
import Clefs from './Clefs'

const Stave = ({ keySignature, timeSignature }) => {

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
      <div className={'notation-lines'}>
        <NotationLines />
      </div>
      <Clefs />
      {timeSignature}
      {keySignature}
    </div>
  )

}

Stave.defaultProps = {
  timeSignature: <div />,
  keySignature: <div />
}

export default Stave

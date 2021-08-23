import './Stave.scss'
import STAVE_SIZES from '../../../utility/constants/stave-sizes'
import NotationLines from '../NotationLines'
import BarLine from './BarLine'
import Clefs from './Clefs'
import NotePit from './NotePit/NotePit'

const Stave = ({ keySignature, timeSignature, bars, pitLength }) => {

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
      <BarLine />
      {bars.map((bar, index) => {
        return <NotePit pitLength={pitLength} bar={bar} key={index} />
      })}
      <BarLine />
    </div>
  )

}

Stave.defaultProps = {
  timeSignature: <div />,
  keySignature: <div />,
}

export default Stave

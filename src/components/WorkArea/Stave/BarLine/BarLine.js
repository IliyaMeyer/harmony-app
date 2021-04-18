import './BarLine.scss'
import STAVE_SIZES from '../../../../utility/constants/stave-sizes'

const BarLine = () => {

  const getBarLineStyle = () => {
    const {STAVE_HEIGHT, LINE_THICKNESS} = STAVE_SIZES
    return {
      height: STAVE_HEIGHT,
      width: LINE_THICKNESS
    }
  }

  return (
    <div className={'bar-line-container'} style={getBarLineStyle()} />
  )

}

export default BarLine

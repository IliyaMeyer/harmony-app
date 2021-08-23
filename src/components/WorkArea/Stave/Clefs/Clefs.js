import STAVE_SIZES from '../../../../utility/constants/stave-sizes'
import IMAGE_PATHS from '../../../../utility/constants/image-paths'

const Clefs = () => {

  const getClefContainerStyle = () => {
    const {SPACE_THICKNESS} = STAVE_SIZES
    return {
      marginLeft: SPACE_THICKNESS,
      marginRight: SPACE_THICKNESS / 2,
      marginTop: -SPACE_THICKNESS
    }
  }

  const getClefImage = (clef) => {
    const {TREBLE_CLEF, BASS_CLEF} = IMAGE_PATHS.CLEFS
    return clef === 'treble' ? TREBLE_CLEF : BASS_CLEF
  }

  const getClefStyle = (clef) => {
    const {MAIN_INPUT_SPACE_HEIGHT, BLANK_SPACE_THICKNESS, SPACE_THICKNESS} = STAVE_SIZES
    return {
      height: clef === 'treble' ? MAIN_INPUT_SPACE_HEIGHT * 1.5 : MAIN_INPUT_SPACE_HEIGHT * 0.9,
      marginBottom: clef === 'treble' ? (BLANK_SPACE_THICKNESS + SPACE_THICKNESS) / 1.525 : 0
    }
  }

  return (
    <div className={'clef-container'} style={getClefContainerStyle()}>
      <div className={'treble-clef'}>
        <img src={getClefImage('treble')} style={getClefStyle('treble')} alt={'treble clef'} />
      </div>
      <div className={'bass-clef'}>
        <img src={getClefImage('bass')} style={getClefStyle('bass')} alt={'bass clef'} />
      </div>
    </div>
  )

}

export default Clefs

import STAVE_SIZES from '../../../../utility/constants/stave-sizes'

const BlankSpace = () => {

  const getBlankSpaceStyle = () => {
    const {BLANK_SPACE_THICKNESS} = STAVE_SIZES
    return {
      height: BLANK_SPACE_THICKNESS,
      backgroundColor : 'lime'
    }
  }

  return (
    <div style={getBlankSpaceStyle()} />
  )

}

export default BlankSpace

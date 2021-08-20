import IMAGE_PATHS from '../../../../../utility/constants/image-paths'
import STAVE_SIZES from '../../../../../utility/constants/stave-sizes'

const ContentPiece = () => {

  const { CONTENT_PIECES } = IMAGE_PATHS
  const { SPACE_THICKNESS } = STAVE_SIZES

  const getContentStyle = () => {
    return {
      height: SPACE_THICKNESS,
      position: 'absolute'
    }
  }

  return (
    <div >
      <img src={CONTENT_PIECES.SEMIBREVE} style={getContentStyle()} />
    </div>
  )

}

export default ContentPiece

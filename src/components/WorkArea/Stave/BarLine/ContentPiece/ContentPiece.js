import IMAGE_PATHS from '../../../../../utility/constants/image-paths'
import STAVE_SIZES from '../../../../../utility/constants/stave-sizes'

const ContentPiece = ({ contentLength, contentType }) => {

  const { CONTENT_PIECES } = IMAGE_PATHS
  const { SPACE_THICKNESS } = STAVE_SIZES

  const getContentStyle = () => {
    console.log(contentLength)
    const height = () => {
      switch (contentLength) {
        case 4:
          return SPACE_THICKNESS
        case 2:
          return SPACE_THICKNESS
        case 1:
          return SPACE_THICKNESS
        case 0.5:
          return SPACE_THICKNESS
        default:
          return
      }
    }
    return {
      height: height(),
      position: 'absolute'
    }
  }

  const getContentImage = () => {
    switch (contentLength) {
      case 4:
        return CONTENT_PIECES.SEMIBREVE
      case 2:
        return CONTENT_PIECES.MINIM_STEMLESS
      case 1:
        return CONTENT_PIECES.FILLED_STEMLESS
      case 0.5:
        return CONTENT_PIECES.FILLED_STEMLESS
      default:
        return
    }
  }

  return (
    <div >
      <img src={getContentImage()} style={getContentStyle()} alt={'content'} />
    </div>
  )

}

export default ContentPiece

import './TimeSignature.scss'
import IMAGE_PATHS from '../../../utility/constants/image-paths'
import STAVE_SIZES from '../../../utility/constants/stave-sizes'

const TimeSignature = ({ timeSignatureCode }) => {

  const getTimeSignatureImage = () => {
    const { TIME_SIGNATURES } = IMAGE_PATHS
    return TIME_SIGNATURES[timeSignatureCode]
  }

  const getImageStyle = () => {
    const { MAIN_INPUT_SPACE_HEIGHT, BLANK_SPACE_THICKNESS, SPACE_THICKNESS } = STAVE_SIZES
    return {
      height: MAIN_INPUT_SPACE_HEIGHT,
      marginBottom: BLANK_SPACE_THICKNESS,
      marginRight: SPACE_THICKNESS
    }
  }

  return (
    <div className={'time-signature-container'}>
      <img src={getTimeSignatureImage()} style={getImageStyle()} alt={'time signature'} />
      <img src={getTimeSignatureImage()} style={getImageStyle()} alt={'time signature'} />
    </div>
  )

}

export default TimeSignature

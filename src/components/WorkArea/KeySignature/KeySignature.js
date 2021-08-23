import './KeySignature.scss'
import STAVE_SIZES from '../../../utility/constants/stave-sizes'
import KeySignatureCluster from './KeySignatureCluster'

const KeySignature = ({ keySigInfo }) => {

  const {SPACE_THICKNESS, BLANK_SPACE_THICKNESS, MAIN_INPUT_SPACE_HEIGHT, LINE_THICKNESS} = STAVE_SIZES

  const getContainerStyle = () => {
    return {
      marginRight: SPACE_THICKNESS,
      width: (SPACE_THICKNESS + LINE_THICKNESS) * keySigInfo.accidentals
    }
  }

  const getBassKeySignatureStyle = () => {
    return {
      marginTop: BLANK_SPACE_THICKNESS + MAIN_INPUT_SPACE_HEIGHT + SPACE_THICKNESS + LINE_THICKNESS
    }
  }

  return (
    <div className={'key-signature-container'} style={getContainerStyle()}>
      <div className={'treble-key-signature'}>
        <KeySignatureCluster sign={keySigInfo.sign} accidentals={keySigInfo.accidentals} />
      </div>
      <div className={'bass-key-signature'} style={getBassKeySignatureStyle()}>
        <KeySignatureCluster sign={keySigInfo.sign} accidentals={keySigInfo.accidentals} />
      </div>
    </div>
  )

}

KeySignature.defaultProps = {
  keySigInfo: {
    accidentals: 0,
    sign: 'sharp'
  }
}

export default KeySignature

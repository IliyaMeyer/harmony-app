import KEY_SIG_STYLES from '../../../../utility/constants/key-signature-styles'
import IMAGE_PATHS from '../../../../utility/constants/image-paths'
import './KeySignatureCluster.scss'

const KeySignatureCluster = ({ sign, accidentals }) => {

  const {SHARP, FLAT} = IMAGE_PATHS.ACCIDENTALS

  const styles = sign === 'sharp' ? KEY_SIG_STYLES.SHARP : KEY_SIG_STYLES.FLAT
  const accidentalImage = sign === 'sharp' ? SHARP : FLAT

  return (
    <div className={'key-sig-cluster-container'}>
      {styles.slice(0,accidentals).map((style, index) => {
        return <img src={accidentalImage} className={'accidental-image'} style={style} alt={'note'} key={index} />
      })}
    </div>
  )

}

export default KeySignatureCluster

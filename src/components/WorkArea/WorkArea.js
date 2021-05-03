import './WorkArea.scss'
import Stave from './Stave'
import TimeSignature from './TimeSignature'
import KeySignature from './KeySignature'
import STAVE_SIZES from '../../utility/constants/stave-sizes'

const WorkArea = ({ settings, barNotes }) => {

  const timeSignature = <TimeSignature timeSignatureCode={settings.timeSignatureCode} />
  const keySignature = <KeySignature keySigInfo={settings.keySigInfo} />

  const getPitLength = () => {
    const {SPACE_THICKNESS} = STAVE_SIZES
    switch(settings.timeSignatureCode) {
      case 0:
        return 0
      case 1:
        return 16 * SPACE_THICKNESS
      case 2:
        return 8 * SPACE_THICKNESS
      case 3:
        return 12 * SPACE_THICKNESS
      case 4:
        return 6 * SPACE_THICKNESS
      case 5:
        return 16 * SPACE_THICKNESS
      case 6:
        return 12 * SPACE_THICKNESS
      case 7:
        return 18 * SPACE_THICKNESS
      case 8:
        return 24 * SPACE_THICKNESS
      default:
        break
    }
  }


  return (
    <div className={'work-area-container'}>
      {barNotes.map((bars) => {
        return <Stave timeSignature={timeSignature} keySignature={keySignature} bars={bars} pitLength={getPitLength()} />
      })}
    </div>
  )

}

WorkArea.defaultProps = {
  settings: {
    timeSignatureCode: 0,
    keySigInfo: {
      accidentals: 0,
      sign: ''
    }
  }
}

export default WorkArea

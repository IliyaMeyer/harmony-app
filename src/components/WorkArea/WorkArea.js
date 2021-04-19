import './WorkArea.scss'
import Stave from './Stave'
import TimeSignature from './TimeSignature'

const WorkArea = ({ settings }) => {

  const timeSignature = <TimeSignature timeSignatureCode={settings.timeSignatureCode} />

  return (
    <div className={'work-area-container'}>
      <Stave timeSignature={timeSignature} />
    </div>
  )

}

WorkArea.defaultProps = {
  settings: {
    timeSignatureCode: 0
  }
}

export default WorkArea

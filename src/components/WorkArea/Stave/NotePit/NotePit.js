import './NotePit.scss'
import STAVE_SIZES from '../../../../utility/constants/stave-sizes'
import ContentPiece from '../BarLine/ContentPiece'

const NotePit = ({ pitLength, bar }) => {

  const getContainerStyle = () => {
    const {USER_WORK_AREA, SPACE_THICKNESS, LINE_THICKNESS} = STAVE_SIZES
    return {
      width: pitLength,
      height: USER_WORK_AREA,
      paddingLeft: SPACE_THICKNESS,
      paddingRight: SPACE_THICKNESS,
      marginTop: -2.5 * (SPACE_THICKNESS + LINE_THICKNESS)
    }
  }

  const getNoteStyle = (note) => {
    const {SPACE_THICKNESS, LINE_THICKNESS, USER_WORK_AREA} = STAVE_SIZES
    return {
      position: 'relative',
      top: USER_WORK_AREA - (SPACE_THICKNESS + LINE_THICKNESS) / 2 * note.value
    }
  }

  return (
    <div className={'note-pit-container'} style={getContainerStyle()} >
      <div className={'notes'} >
        {bar.Soprano.map((note) => {
          return <div className={'note'} style={getNoteStyle(note)}>
            <ContentPiece />
          </div>
        })}
      </div>
      <div className={'notes'} >
      </div>
      <div className={'notes'} >
      </div>
      <div className={'notes'} >
      </div>
    </div>
  )

}

export default NotePit

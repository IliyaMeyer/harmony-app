import './NotePit.scss'
import STAVE_SIZES from '../../../../utility/constants/stave-sizes'

const NotePit = ({ pitLength, bar }) => {

  const getContainerStyle = () => {
    const {SPACE_THICKNESS} = STAVE_SIZES
    return {
      width: pitLength,
      paddingLeft: SPACE_THICKNESS,
      paddingRight: SPACE_THICKNESS
    }
  }

  return (
    <div className={'note-pit-container'} style={getContainerStyle()}>
      <div className={'notes__soprano'} >
        {bar.Soprano.map((note) => {
          return <div>

          </div>
        })}
      </div>
      <div className={'notes__alto'} >
        alto
      </div>
      <div className={'notes__tenor'} >
        tenor
      </div>
      <div className={'notes__bass'} >
        bass
      </div>
    </div>
  )

}

export default NotePit

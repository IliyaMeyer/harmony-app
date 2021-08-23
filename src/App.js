import './App.scss'
import WorkArea from './components/WorkArea'
import { barNotes } from './utility/bar-notes-interface'

// temporary for debugging
const settings = {
  timeSignatureCode: 5,
  keySigInfo: {
    accidentals: 3,
    sign: 'flat'
  }
}
const okay = [[[[[28, 1, 'note'],[4, 4, 'note']],
  [[4, 4, 'note'],[4, 4, 'note']],
  [[4, 4, 'note'],[4, 4, 'note']],
  [[4, 4, 'note'],[4, 4, 'note']]],
  [[[4, 4, 'note'],[4, 4, 'note']],
    [[4, 4, 'note'],[4, 4, 'note']],
    [[4, 4, 'note'],[4, 4, 'note']],
    [[4, 4, 'note'],[4, 4, 'note']]],
  [[[4, 4, 'note'],[4, 4, 'note']],
    [[4, 4, 'note'],[4, 4, 'note']],
    [[4, 4, 'note'],[4, 4, 'note']],
    [[4, 4, 'note'],[4, 4, 'note']]]]]

const App = () => {
  return (
    <div className={'app-container'}>
      <WorkArea settings={settings} barNotes={barNotes(okay)} />
    </div>
    )
}

export default App;

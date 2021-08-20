import './App.scss'
import WorkArea from './components/WorkArea'

// temporary for debugging
const settings = {
  timeSignatureCode: 5,
  keySigInfo: {
    accidentals: 7,
    sign: 'flat'
  }
}
const barNotes = [
  [
    {
      Soprano: [
        {
          value: 30,
          length: 1
        }
      ],
      Alto: [
        {
          value: 1,
          length: 1
        }
      ],
      Tenor: [
        {
          value: 1,
          length: 1
        }
      ],
      Bass: [
        {
          value: 1,
          length: 1
        }
      ]
    },
    {
      Soprano: [
        {
          value: 8,
          length: 1
        }
      ],
      Alto: [
        {
          value: 1,
          length: 1
        }
      ],
      Tenor: [
        {
          value: 1,
          length: 1
        }
      ],
      Bass: [
        {
          value: 1,
          length: 1
        }
      ]
    }
  ]
]

const App = () => {
  return (
    <div className={'app-container'}>
      <WorkArea settings={settings} barNotes={barNotes} />
    </div>
    )
}

export default App;

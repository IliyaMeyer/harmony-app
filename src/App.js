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
          value: 27,
          length: 1
        }
      ],
      Alto: [
        {
          value: 30,
          length: 4
        }
      ],
      Tenor: [
        {
          value: 12,
          length: 2
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
          value: 34,
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

import './App.scss'
import WorkArea from './components/WorkArea'

// temporary for debugging
const settings = {
  timeSignatureCode: 5
}

const App = () => {
  return (
    <div className={'app-container'}>
      <WorkArea settings={settings} />
    </div>
    )
}

export default App;

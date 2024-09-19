
import './App.css'
import A from './components/A'
// import D from './components/D'
// import {ProviderName} from './context/UserContex'
import {GameProvider} from './context/GameContext'

function App() {

  return (
    // <ProviderName>
    //   <D/>
    // </ProviderName>
    <GameProvider>
      <A/>

    </GameProvider>
  )
}

export default App

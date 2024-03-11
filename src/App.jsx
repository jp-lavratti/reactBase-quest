import './App.css'
import Text from './components/text/text'
import Button from './components/button/button'

function App() {
  return (
    <>
      <Text textColor='red'>
        <p>teste um</p>
      </Text>
      <Text textColor='lime'>
        <p>teste dois</p>
      </Text>
      <Button label='Teste 1'>
        Button
      </Button>
      <Button label='Teste 2'>
        Button
      </Button>
    </>
  )
}

export default App

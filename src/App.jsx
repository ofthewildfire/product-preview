// Supports weights 100-900
import '@fontsource-variable/montserrat';
// Supports weights 100-900
import '@fontsource-variable/fraunces';
import './App.css'

// Import components
import Card from './components/Card';
import CardContent from './components/CardContent';
import Picture from './components/Picture';



function App() {
  return (
    <Card>
      <Picture/>
      <CardContent/>
    </Card>
  )
}

export default App

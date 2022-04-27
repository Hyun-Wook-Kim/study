import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SetColors';

function App() {
  return (
    <ColorProvider>
    <div>
      <SelectColors>
        
      </SelectColors>

      <ColorBox>
      </ColorBox>
    </div>
    </ColorProvider>

  );
}

export default App;


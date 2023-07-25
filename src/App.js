import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { FPV } from './components/FPV';
import { Cubes } from './components/Cubes';
import { TextureSelector } from './components/TextureSelector';
import MySky from './components/Sky';
import { MobileScreen } from './components/MobileScreen';
import { Menu } from './components/Menu';
import { SkyToggle } from './components/SkyToggle';
import { useState } from 'react';
import Instructions from './components/Instructions';

function App() {

  const [aurora, setAurora] = useState(false)
  const [instructions, setInstructions] = useState(true)

  if(window.screen.width < 850) {
    return <>
      <MobileScreen />
    </>
  } else
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 100]}/>
        <ambientLight intensity={0.5} />
        <FPV />
        {aurora ? <MySky /> : null}
        
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <TextureSelector />
      <Menu /> 
      <SkyToggle />

      {instructions ? <Instructions /> : null}

      <div className='absolute instruction-toggle-div'>
        <input onClick={()=>setInstructions(!instructions)} type='checkbox' name='instruction'/>
        <label for='instruction' className='instruction-label'>Instructions</label>
      </div>

      <div className="absolute sky-toggle-div">
        <input onClick={()=>setAurora(!aurora)} type="checkbox" id="aurora" name="aurora" defaultChecked/>
        <label className="aurora-label" for="aurora">Aurora</label>
    </div>
    </>
  );
}

export default App;

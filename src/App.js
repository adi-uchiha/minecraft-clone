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

function App() {

  const [aurora, setAurora] = useState(true)

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

      <div className="absolute sky-toggle-div">
        <input onClick={()=>setAurora(!aurora)} type="checkbox" id="aurora" name="aurora" defaultChecked/>
        <label className="aurora-label" for="aurora">Aurora</label>
    </div>
    </>
  );
}

export default App;

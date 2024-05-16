import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loading from '@/components/Loading'
import Island from '@/models/Island'
const Home = () => {
  const adjustIsland = () =>{



    let screenScale,screenPosition

    if(window.innerWidth < 768) {
      screenScale = [0.9,0.9,0.9];
      screenPosition = [0,-6.5,-43];

    }
  }
  return (
    <div className=''>
      <section className='w-full h-screen relative'>




      


      
        <Canvas
        
        className='w-full h-screen bg-transparent' camera={{near:0.1,far:1000}}>
        <Suspense fallback={<Loading />}>
          <directionalLight   />
          <ambientLight />  
          <pointLight />
          <spotLight />
          <hemisphereLight />
              <Island />
        </Suspense>
        </Canvas>
  
      </section>
    </div>
  )
}

export default Home

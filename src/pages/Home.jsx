import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Loading from '@/components/Loading';
import Island from '@/models/Island';

const Home = () => {
  const islandRef = useRef();

  const [islandTransform, setIslandTransform] = useState({
    scale: [1, 1, 1],
    position: [0, -6, -20], // Adjusted for better initial visibility
  });

  const adjustIsland = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [0, -6, -20]; // Adjusted for better visibility

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenPosition = [0, -6, -20]; // Centering the island for larger screens
    }

    console.log('Adjusting island:', { screenScale, screenPosition }); // Debugging log

    return { scale: screenScale, position: screenPosition };
  };

  useEffect(() => {
    const handleResize = () => {
      const newTransform = adjustIsland();
      console.log('New Transform:', newTransform); // Debugging log
      setIslandTransform(newTransform);
    };

    window.addEventListener('resize', handleResize);
    // Initial call to set the correct transform based on the initial window size
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useFrame(() => {
    if (islandRef.current) {
      islandRef.current.rotation.y += 0.01; // Rotate the island around the Y-axis
    }
  });

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className='w-full h-screen bg-transparent' 
        camera={{ position: [0, 0, 50], fov: 60, near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loading />}>
          <directionalLight position={[1, 1, 1]} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island
            ref={islandRef}
            position={islandTransform.position}
            scale={islandTransform.scale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

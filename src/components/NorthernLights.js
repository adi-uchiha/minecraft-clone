import { extend, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

extend({ ShaderMaterial: THREE.ShaderMaterial });

const NorthernLights = () => {
  const ref = useRef();
  const { size } = useThree();
  const aspect = size.width / size.height;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const material = ref.current.material;

    // Modify the colors and behavior of the Northern Lights effect here
    const frequency = 0.2;
    const amplitude = 5.0;
    const intensity = 0.8;

    // Update the material's uniforms with the updated values
    material.uniforms.uTime.value = time;
    material.uniforms.uFrequency.value = frequency;
    material.uniforms.uAmplitude.value = amplitude;
    material.uniforms.uIntensity.value = intensity;
  });

  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[2 * aspect, 2]} />
      <shaderMaterial
        vertexShader={`
          varying vec2 vUv;

          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
  uniform float uTime;
  uniform float uFrequency;
  uniform float uAmplitude;
  uniform float uIntensity;
  varying vec2 vUv;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float amplitude = uAmplitude * 0.5;
    float intensity = uIntensity * 0.5;

    // Generate a pattern using noise and modulate with sine wave
    float noise = random(p) * 2.0 - 1.0;
    float pattern = sin((p.y + noise) * uFrequency + uTime) * amplitude;
    float brightness = max(0.0, pattern + intensity);

    vec3 color = vec3(brightness);

    gl_FragColor = vec4(color, 1.0);
  }
`}

        uniforms={{
          uTime: { value: 0 },
          uFrequency: { value: 0.2 },
          uAmplitude: { value: 5.0 },
          uIntensity: { value: 0.8 },
        }}
        transparent
      />
    </mesh>
  );
};

export default NorthernLights;

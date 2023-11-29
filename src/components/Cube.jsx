import React, { useRef } from 'react';
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import { Properties } from '@/tools/properties';
import { ShaderMaterial } from 'three';
import { useFrame } from '@react-three/fiber';
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { Text, useTexture, MeshWobbleMaterial } from '@react-three/drei';
import TextureMetal from '../../public/metal.jpg'

export default function Cube ({ name, temperature }) {

  const metalFusionTemperature = Properties[name].foundry

  const temperatureRatio = temperature / metalFusionTemperature

  const clampedRatio = Math.min(Math.max(temperatureRatio, 0), 1);

  const metalProperties = {
    color: `rgb(${Math.round(clampedRatio * 128 + 128)}, ${Math.round((1 - clampedRatio) * 255)}, ${Math.round((1 - clampedRatio) * 255)})`,
    opacity: clampedRatio,
  };

  const sketch = p5 => {
    p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

    p5.draw = () => {
        p5.background(250);
        p5.normalMaterial();
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.plane(100);
        p5.pop();
    };
  };

  const texture = useTexture('/metal.jpg');

  return (
    // <ReactP5Wrapper sketch={sketch} />
    <mesh
      position={[0, 0, 2]}
      scale={1.2}
    >
      <directionalLight intensity={1} position={[5, 5, 5]} />
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color={metalProperties.color} opacity={metalProperties.opacity} />
      {/* <MeshWobbleMaterial map={texture} /> */}
      {
        temperature > metalFusionTemperature && (
          <Text
          position={[0, 0, 2]}
          fontSize={0.1}
          color="white"
        >
          Fundido
        </Text>
        )
      }
    </mesh>
  )

}
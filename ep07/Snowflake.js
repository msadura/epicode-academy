import React, {useRef, useEffect, useState} from 'react';
import {Animated} from 'react-native';

const START_Y_POSITION = -50;

export default function Snowflake({scene}) {
  const animatedY = useRef(new Animated.Value(START_Y_POSITION)).current;
  const config

  const [config, setConfig] = useState(() => getConfig(scene));
  return null;
}

const snowlakeTypes = ['❄', '❅', '❆'];

function getConfig(scene) {
  const {width, height} = scene;

  const size = randomInt(5, 16);
  const opacity = randomInt(4, 10) / 10;
  const type = snowlakeTypes[randomInt(0, 2)];

  const xPosition = randomInt(0, width);
  const fallDuration = randomInt(10000, 20000);
  const fallDelay = randomInt(1, 5000);

  return {
    size,
    opacity,
    type,
    xPosition,
    fallDuration,
    fallDelay,
  };
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

import { TypeAnimation } from 'react-type-animation';
import React from 'react';

export default function Animation() {
  return (<div>
  <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      "Hi! I'm Noah, a sophomore at Brown University studying Math-CS and Physics.",
      2000,
      "Hi! I'm Noah, I chase challenges and enjoy having genuine honest conversations" ,
      2000,
      "Hi! I'm Noah, I enjoy taking cracks at interesting puzzles and competiting in imperfect information strategy games",
      2000, 
      "Hi! I'm Noah, I love engaging with different perspectives from around the world.",
      2000,
      "Hi! I'm Noah, a sophomore at Brown University studying Math-CS and Physics.",
          ]}
    speed={{type: "keyStrokeDelayInMs", value: 30}}
    deletionSpeed={{type: "keyStrokeDelayInMs", value: 15}}
    style={{ fontSize: "4vw", lineHeight: "4vw" }}
    repeat={0}
  />
</div>)
  }


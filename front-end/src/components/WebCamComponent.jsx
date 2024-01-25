import React from 'react'
import Webcam from 'react-webcam'
import { useRef } from 'react';

// a react component uset to instantiate a web camera
const WebCamComponent = () => {
    const webcamRef = useRef(null);
    const videoConstraints  = {width: 1280,
        height: 720,
        facingMode: "user"
      };

    return (
        <div>
            <Webcam audio={false} 
                    height={360}
                    ref={webcamRef} 
                    screenshotFormat="image/jpeg" 
                    width={640}
                    videoConstraints={videoConstraints}/>
        </div>
    )
}

export default WebCamComponent;
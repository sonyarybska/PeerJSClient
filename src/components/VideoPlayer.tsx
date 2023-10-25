import { useEffect, useRef } from "react";



export const VideoPlayer: React.FC<{ stream?: MediaStream; muted?: boolean }> = ({ stream, muted }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current && stream) videoRef.current.srcObject = stream;
    }, [stream]);
    return (
        <video
            data-testid="peer-video"
            style={{ width: "100%" }}
            ref={videoRef}
            autoPlay
            muted={muted}
        />
    );
};

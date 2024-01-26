import {useState, useEffect, useRef} from 'react';

type VideoPlayerProps = {
  autoPlay: boolean;
  poster: string;
  src: string;
}

function VideoPlayer({autoPlay, poster, src}: VideoPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <div className="small-film-card__image"
      onMouseOver={() => setIsPlaying(!isPlaying)}
      onMouseOut={() => setIsPlaying(false)}
    >
      <video muted poster={poster} ref={videoRef} width="280" >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;

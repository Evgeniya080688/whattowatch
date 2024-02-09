import {useState, useEffect, useRef} from 'react';
import {useElementListener} from '../../hooks/use-element-listener';

type VideoPlayerProps = {
  isPlaying: boolean;
  poster: string;
  src: string;
  onFocusPlayer: () => void;
  onUnFocusPlayer: () => void;
}

function VideoPlayer({poster, src, isPlaying, onFocusPlayer, onUnFocusPlayer}: VideoPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDataLoaded = () => {
    setIsLoading(false);
  };

  useElementListener('loadeddata', videoRef, handleDataLoaded);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying && !(isLoading)){
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.load();
  }, [isPlaying]);

  return (
    <div className="small-film-card__image"
      onMouseOver={onFocusPlayer}
      onMouseOut={onUnFocusPlayer}
    >
      <video muted poster={poster} ref={videoRef} width="280" >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;

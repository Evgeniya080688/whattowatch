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
    // <Fragment>
    //   <button
    //     className={`track__button track__button--${isPlaying ? 'pause' : 'play'}`}
    //     type="button"
    //     disabled={isLoading}
    //     onClick={() => setIsPlaying(!isPlaying)}
    //   />
    //   <div className="track__status">
    //     <audio src={src} ref={audioRef} />
    //   </div>
    // </Fragment>
    <div className="small-film-card__image" onMouseOver={() => setIsPlaying(!isPlaying)}>
      <video poster={poster} ref={videoRef} width="280" onMouseOver={() => setIsPlaying(!isPlaying)}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;

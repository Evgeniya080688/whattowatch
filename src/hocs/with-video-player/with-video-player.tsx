import {ComponentType} from 'react';
import {useState} from 'react';
import VideoPlayer from '../../components/video-player/video-player';

type HOCProps = {
  renderPlayer: (poster: string, src: string, id: number) => void;
};

function withVideoPlayer<T>(Component: ComponentType<T>)
  : ComponentType<Omit<T, keyof HOCProps>> {

  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithVideoPlayer(props: ComponentProps): JSX.Element {
    const [activePlayerId, setActivePlayerId] = useState(-1);
    return (
      <Component
        {...props as T}
        renderPlayer={(poster: string, src: string, id: number) => (
          <VideoPlayer
            poster={poster}
            src={src}
            isPlaying={id === activePlayerId}
            onFocusPlayer={()=>setActivePlayerId(activePlayerId === id ? -1 : id)}
            onUnFocusPlayer={()=>setActivePlayerId(-1)}
          />
        )}
      />
    );
  }

  return WithVideoPlayer;
}

export default withVideoPlayer;

import useFetchData from '../Hooks/useFetchData';
import './Styles/Footer.css';
import { useRef, useState } from 'react';

const AUDIO_URL = 'https://api.audioboom.com/audio_clips/urls/high_mp3';

function PlaybackBar() {
  //const {isLoading, error} = useFetchData(AUDIO_URL);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

 

  function handleClick() {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  }
  function handleReset() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }

  

  return (
    <>
      <button onClick={handleReset}>resetear</button>
      <button onClick={handleClick}>{isPlaying ? '⏸️' : '▶️'}</button>
      <audio ref={audioRef} src={AUDIO_URL} />
    </>
  );
};

export default PlaybackBar


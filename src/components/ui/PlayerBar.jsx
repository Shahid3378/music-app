import { SkipBack, SkipForward, Pause, Play } from "lucide-react";
// import { useState, useRef, useEffect } from "react";
import VolumeControl from "./VolumeControl";
import ProgressBar from "./ProgressBar";
import { useMusicPlayer } from "../../context/MusicContext";

export default function PlayerBar() {
  const {
    currentSong,
    isPlaying,
    volume,
    progress,
    duration,
    togglePlayPause,
    seekTo,
    changeVolume,
    skipNext,
    skipPrevious,
    audioRef,
  } = useMusicPlayer();

  const extractImageUrl = (song) => {
    if (!song || !song.image) return null;

    if (Array.isArray(song.image)) {
      // If image is an array, try to get the highest quality
      return (
        song.image[song.image.length - 1]?.link ||
        song.image[song.image.length - 1]?.url ||
        song.image[2]?.link ||
        song.image[1]?.link ||
        song.image[0]?.link ||
        song.image[2]?.url ||
        song.image[1]?.url ||
        song.image[0]?.url
      );
    } else if (typeof song.image === "string") {
      // If image is a direct string URL
      return song.image;
    } else if (song.image.link || song.image.url) {
      // If image is an object with link or url property
      return song.image.link || song.image.url;
    }

    return null;
  };

  if (!currentSong) return null;

  const imageUrl = extractImageUrl(currentSong);

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background lg:ml-64 lg:mb-0 mb-15 text-white z-50">
      <div className="px-6 pt-2">
        <ProgressBar
          progress={progress}
          setProgress={seekTo}
          duration={duration}
          isPlaying={isPlaying}
          audioRef={audioRef}
        />
      </div>

      <div className="h-20 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 w-1/3">
          <div className="relative w-12 h-12 shrink-0">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={currentSong.name || currentSong.title}
                className="w-12 h-12 rounded object-cover"
                onError={(e) => {
                  // console.error("PlayerBar image failed to load:", imageUrl);
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}
            <div
              className={`absolute inset-0 w-12 h-12 rounded bg-muted flex items-center justify-center ${imageUrl ? "hidden" : ""}`}
            >
              <Play className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium truncate text-foreground">
              {currentSong.name || currentSong.title}
            </p>
            <p className="text-xs  truncate text-muted-foreground">
              {currentSong.primaryArtists ||
                currentSong.artist ||
                currentSong.artists?.primary?.[0]?.name ||
                "Unknown Artist"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 lg:w-1/3 justify-center">
          <button
            onClick={skipPrevious}
            className=" hidden md:block text-muted-foreground hover:text-foreground transition-colors hover:bg-gray-200 hover:rounded-lg p-2 dark:hover:bg-green-600 dark:hover:text-black"
          >
            <SkipBack className="w-5 h-5" />
          </button>

          <button
            onClick={togglePlayPause}
            className="w-10 h-10 rounded-full bg-neon-green hover:bg-neon-green-hover flex items-center justify-center text-black cursor-pointer transition-colors"
          >
            {isPlaying ? (
              <Pause size={24} />
            ) : (
              <Play size={24} />
            )}
          </button>

          <button
            onClick={skipNext}
            className="hidden md:block text-muted-foreground hover:text-foreground transition-colors hover:bg-gray-200 hover:rounded-lg p-2 dark:hover:bg-green-600 dark:hover:text-black"
          >
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        <div className="hidden w-1/3 md:flex justify-end text-muted-foreground">
          <VolumeControl
            volume={volume}
            setVolume={changeVolume}
            audioRef={audioRef}
          />
        </div>
      </div>
    </div>
  );
}

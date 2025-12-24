import { useAuth } from "../context/FirebaseContext";
import { Button } from "@/components/shad/button";
import { LogOut, Music } from "lucide-react";
import { Sidebar } from "../components/sidebar";
import PlayerBar from "../components/ui/PlayerBar";
import Playlist from "../components/playlist";

function Home({ playlists, setPlaylists, showPlaylist, setShowPlaylist }) {
  const { user, logout } = useAuth();

  return (
    <div className="relative flex items-center justify-center ">
      <Sidebar playlists={playlists} onAddPlaylist={() => setShowPlaylist(true)} />

          {showPlaylist && (
          <Playlist
            onClose={() => setShowPlaylist(false)}
            onCreate={(name) =>
              setPlaylists((prev) => [...prev, name])
            }
          />
        )}


      <div className="min-h-screen bg-background text-foreground p-8 lg:ml-64">

        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Music className="text-neon-green h-8 w-8" />
            <h1 className="text-2xl font-bold">MusicFlow</h1>
          </div>
        </header>

        <main>
          <div className="bg-card border border-border rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-neon-green">
              Welcome Back!
            </h2>
            <p className="text-muted-foreground">
              You are successfully logged in. Start exploring your favorite
              tracks.
            </p>
          </div>
        </main>
      </div>
      <PlayerBar />
    </div>
  );
}

export default Home;

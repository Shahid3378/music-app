import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";
import { ThemeProvider } from "./context/themeContext";
import { AuthProvider } from "./context/FirebaseContext";
import { MusicProvider } from "./context/MusicContext";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/Home.jsx";
import SearchPage from "./pages/SearchPage";
import LibraryPage from "./pages/LibraryPage";
import LikedSongs from "./pages/LikedSongs";
import GenrePage from "./pages/GenrePage";
import ArtistPage from "./pages/ArtistPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastProvider } from "./context/toastContext";
import { Profile } from "./pages/profile";
import PlayerBar from "./components/ui/PlayerBar";

function App() {

  const [playlists, setPlaylists] = useState([
    "Chill Vibes",
    "Workout Energy",
    "Focus Flow",
  ]);
  const [showPlaylist, setShowPlaylist] = useState(false);

  return (
    <ToastProvider>
      <ThemeProvider>
        <AuthProvider>
          <MusicProvider>
            <Router>
              <div className="min-h-screen">
                <Routes>
                  <Route path="/" element={<Navigate to="/login" />} />

                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />

                  <Route
                    path="/home"
                    element={
                      <ProtectedRoute>
                        <Home
                          playlists={playlists}
                          setPlaylists={setPlaylists}
                          showPlaylist={showPlaylist}
                          setShowPlaylist={setShowPlaylist}
                        />
                        <ArtistPage />
                        <GenrePage />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/search"
                    element={
                      <ProtectedRoute>
                        <SearchPage />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <Profile
                          playlists={playlists}
                          setPlaylists={setPlaylists}
                          showPlaylist={showPlaylist}
                          setShowPlaylist={setShowPlaylist}
                        />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/library"
                    element={
                      <ProtectedRoute>
                        <LibraryPage 
                          playlists={playlists}
                          setPlaylists={setPlaylists}
                          showPlaylist={showPlaylist}
                          setShowPlaylist={setShowPlaylist}/>
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/favorites"
                    element={
                      <ProtectedRoute>
                        <LikedSongs 
                          playlists={playlists}
                          setPlaylists={setPlaylists}
                          showPlaylist={showPlaylist}
                          setShowPlaylist={setShowPlaylist} 
                        />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/genres"
                    element={
                      <ProtectedRoute>
                        <GenrePage />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/artists"
                    element={
                      <ProtectedRoute>
                        <ArtistPage />
                      </ProtectedRoute>
                    }
                  />

                  <Route path="*" element={<Navigate to="/login" />} />
                </Routes>

                {/* Global Player */}
                <PlayerBar />
              </div>
            </Router>
          </MusicProvider>
        </AuthProvider>
      </ThemeProvider>
    </ToastProvider>
  );
}

export default App;

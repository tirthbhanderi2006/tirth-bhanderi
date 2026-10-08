import { create } from 'zustand';

interface GameState {
  gameState: 'TITLE' | 'PLAYING' | 'RECRUITER';
  setGameState: (state: 'TITLE' | 'PLAYING' | 'RECRUITER') => void;
}

export const useGameStore = create<GameState>((set) => ({
  gameState: 'TITLE',
  setGameState: (state) => set({ gameState: state }),
}));

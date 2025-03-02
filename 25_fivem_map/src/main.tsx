import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GTA5Map from './App.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GTA5Map />
  </StrictMode>
);

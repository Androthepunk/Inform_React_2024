import Search from "./Search";
import  "./Styles/Header.css"

export function Header () {
    return (
      <header>
        <h1 className="header">🎙️ Lip Sync Player Music 🎙️</h1>
        <Search/>
      </header>
    )
  }
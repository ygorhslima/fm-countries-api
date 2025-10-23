import { useEffect, useState } from "react";
function Header() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const body = document.body;

    if (darkMode) {
      body.classList.add("dark-mode");
      body.classList.remove("white-mode");
    } else {
      body.classList.add("white-mode");
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <button onClick={() => setDarkMode(!darkMode)} className="button-header">
        {darkMode ? (
          <>
            <i className="fa-solid fa-sun"></i> Light Mode
          </>
        ) : (
          <>
            <i className="fa-solid fa-moon"></i> Dark Mode
          </>
        )}
      </button>
    </header>
  );
}

export default Header;

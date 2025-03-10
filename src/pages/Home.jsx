
import './Home.css'

function Home() {

  function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  return (
    <>
      <nav className="navigation">
        <ul>
          <li><a href="/">Homepage</a></li>
          <li><a href="Projects">Projetos</a></li>
          <li><a href="Contact">Contato</a></li>
        </ul>
      </nav>
      <div className="portfolio-container">
        <div className="profile-picture">

        </div>
        <h1 className="title">Olá!, sou Pedro Henrique</h1>
        <p className="description">
          Olá! Meu nome é Pedro Henrique, sou um desenvolvedor web full stack que busca evoluir cada dia mais e expandir meus horizontes.
        </p>
      </div>

      <button id='darkmode-button'
        onClick={darkmode}>
        Dark Mode
      </button>
    </>

  )

}

export default Home

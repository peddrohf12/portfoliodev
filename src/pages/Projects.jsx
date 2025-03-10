
import './Projects.css'

function Projects() {

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
    
      <div className="projects-container">
        <h1 className="projects-title">Projetos desenvolvidos por mim: </h1>
        
        <div className="projects-grid-container">
       
          <div className="project-card">
            <div className="cardapio">
              
              
            </div>
            <div className="project-content">
              <h3>Cardápio responsivo</h3>
              <p>Um cardápio simples que atende a responsividade de todos os dispositivos.</p>
              <div className="project-links">
              </div>
            </div>
          </div>

         
          <div className="project-card">
            <div className="portfolio-1">
              
            </div>
            <div className="project-content">
              <h3>Portfólio 1</h3>
              <p>A primeira versão do meu portfólio, com menos funcionalidades e design mais simplório.</p>
              <div className="project-links">
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="landing-page">
              
            </div>
            <div className="project-content">
              <h3>Landing Page</h3>
              <p>Uma landing simples que contém redirecionadores para contato e para divulgação.</p>
              <div className="project-links">
              </div>
            </div>
          </div>

        </div>
      </div>

      <button id='darkmode-button'
        onClick={darkmode}>
        Dark Mode
      </button>
    </>
  )
}

export default Projects


import './Contact.css'

function Contact() {

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

      <div className="contact-form-container">

        <h2>Me contate!</h2>
        <form onSubmit={(e) => {
          e.preventDefault();


          const name = e.target.name.value;
          const email = e.target.email.value;
          const message = e.target.message.value;




          if (!name) {
            alert("Você precisa preencher o campo nome");
            return;
          }
          if (!email) {
            alert("Você precisa preencher o campo email");
            return;
          }
          if (!message) {
            alert("Você precisa preencher o campo mensagem");
            return;
          }

          alert("Enviado com sucesso! :)");
          e.target.reset();
        }}>



          <input
            type="text"
            name="name"
            placeholder="Nome"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>

      <button id='darkmode-button'
        onClick={darkmode}>
        Dark Mode
      </button>
    </>
  )
}

export default Contact

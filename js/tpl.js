/* top banner */
class TPLTopBanner extends HTMLElement 
{
  connectedCallback()
  {
    this.innerHTML = 
    `
    <article>
      <ul class="links-fast">
        <li><a href="https://www.sistemafaep.org.br/agrinho/" target="_blank">Agrinho 2022</a></li>
        <li><a href="https://cursos.alura.com.br/edutech" target="_blank">Alura</a></li>
        <li><a href="./aluno.html">Aluno</a></li>
      </ul>
    </article>
    <article>
      <ul class="links-socials">
        <li><a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook-square"></i></a></li>
        <li><a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram-square"></i></a></li>
      </ul>
    </article>
    `
  }
}

customElements.define('tpl-top-banner', TPLTopBanner);
/* /top banner */

/* header */
class TPLHeader extends HTMLElement 
{
  connectedCallback()
  {
    this.innerHTML = 
    `
    <section id="logotype">
      <a href="./index.html">
        <img src="./img/logo/logo.svg" alt="Colégio Estadual do Campo do Rio do Meio - EFM" title="Colégio Estadual do Campo do Rio do Meio - EFM" />
      </a>
    </section>

    <nav id="main-menu"></nav>

    <section id="action">
      <a href="./contato.html" target="_self">Fale conosco</a>
    </section>
    `
  }
}

customElements.define('tpl-header', TPLHeader);
/* /header */


/* Aside */
class TPLAside extends HTMLElement 
{
  connectedCallback()
  {
    this.innerHTML = 
    `
    <section class="welcome">
      <h1>Faça a matrícula do seu filho no Colégio Estadual do Campo do Rio do Meio</h1>
      <p>Descubra nossos principais benefícios para crianças em idade escolar</p>
      <hr />
      <a href="./contato.html">Fale conosco</a>
    </section>
    `
  }
}

customElements.define('tpl-aside', TPLAside);
/* /Aside */


/* Footer */
class TPLFooter extends HTMLElement 
{
  connectedCallback()
  {
    this.innerHTML = 
    `
    <section>
      <img src="./img/logo/logo.svg" alt="Colégio Estadual do Campo do Rio do Meio - EFM" title="Colégio Estadual do Campo do Rio do Meio - EFM" />
      <h1>Redes Sociais</h1>
      <ul id="footer-social-icons">
        <li><a href="https://facebook.com" target="_blank"><i class="fa-brands fa-instagram-square"></i></a></li>
        <li><a href="https://instagram.com" target="_blank"><i class="fa-brands fa-facebook-square"></i></a></li>
      </ul>
    </section>

    <section>
      <h1>Navegação</h1>
      <nav id="footer-menu"></nav>
    </section>

    <section>
      <h1>Formas de contato</h1>
      <ul id="footer-contact">
        <li><i class="fa-brands fa-whatsapp"></i> (429) 9982 0124</li>
        <li><a href="mailto:pigriodomeio@seed.pr.gov.br"><i class="fa-solid fa-envelope"></i> pigriodomeio@seed.pr.gov.br</a></li>
        <li></li>
      </ul>
      <h1>Horário de atendimento</h1>
      <ul>
        <li><i class="fa-solid fa-clock"></i> Seg. Sex. 7hr – 17hs</li>
        <li></li>
      </ul>
    </section>

    <section>
      <h1>Localização</h1>
      <article id="footer-address">
        <a href="https://www.google.com/maps?ll=-24.764304,-51.684813&z=14&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=17594566484117351017">
          <span><i class="fa-solid fa-location-dot"></i></span>
          <span>Rua Principal, Rio do Meio, Pitanga/Pr</span>
        </a>
      </article>
      <article class="footer-gmap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.909274870033!2d-51.68700218438479!3d-24.764299612996307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ee95f5dfcbd941%3A0xf42c74ff4eceea69!2sRio%20Do%20Meio!5e0!3m2!1spt-BR!2sbr!4v1657895485705!5m2!1spt-BR!2sbr" width="100%" height="100px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </article>
    </section>
    `
  }
}

customElements.define('tpl-footer', TPLFooter);
/* /Footer */
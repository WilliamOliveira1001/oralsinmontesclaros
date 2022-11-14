import "./style.css";
import { BsInstagram } from "react-icons/Bs";
import { ImFacebook2 } from "react-icons/im";
import { BsWhatsapp } from "react-icons/Bs";
import img from "../../assets/dra.png";
import img1 from "../../assets/draOralSin.jpg";
import wpp from "../../assets/wpp.png";

function Main() {
  return (
    <>
      <div className="container">
        <div className="backimg">
          <header className="container-header">
            <figure>
              <img
                className="img-header"
                src="https://lp.oralsinsaopaulovm.com.br/static/media/oralsin_logo.187874e8.webp"
                alt="logoOralSin"
              />
            </figure>
            <nav className="nav-header">
              <ul className="ul-header">
                <li className="li-header">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/oralsinmontesclaros/"
                  >
                    <BsInstagram className="icons" />
                  </a>
                </li>
                <li className="li-header">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/oralsinmontesclaros/"
                  >
                    <ImFacebook2 className="icons" />
                  </a>
                </li>
                <li className="li-header">
                  <a
                    href="https://api.whatsapp.com/send?phone=5538999102100&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20OralSin."
                    target="_blank"
                  >
                    <BsWhatsapp className="icons" />
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <section className="presentation">
            <div className="divPresentaionMain">
              <div className="div-text-presentation">
                <div className="div-style-text">
                  <div className="div-style"></div>
                  <h2 className="h2-text-presetation">
                    BEM VINDO A ORAL SIN IMPLANTES
                  </h2>
                </div>
                <h1 className="text-main">
                  Implante Dentário aqui em Montes Claros
                </h1>
              </div>

              <form className="form-presetation" action="https://api.sheetmonkey.io/form/96wVUjkWpMNtNatFjPVPm5" method="post">
                <input type="text" placeholder="Nome" name="Nomes" required />
                <input type="text" placeholder="Insira seu Whatsapp" name="Telefones" required />
                <button type="submit">Converse com um especialista</button>
              </form>
            </div>
            <div className="divImgPresentation">
              <figure>
                <img src={img} alt="logo" />
              </figure>
            </div>
          </section>
        </div>
        <div className="divBorder"></div>

        <div className="container-main">
          <section className="container-main-information">
            <div className="divAuxiliar">
              <div className="div-main-information">
                <div className="card">
                  <figure className="img-card">
                    <img
                      src="https://lp.oralsinsaopaulovm.com.br/static/media/ico_carga.b2516ec0.webp"
                      alt="protese"
                    />
                  </figure>
                  <p>
                    A Oral Sin tem a missão de construir o seu sorriso, com mais
                    conforto e segurança!
                  </p>
                </div>
                <div className="div-style-2"></div>
                <div className="card">
                  <figure className="img-card">
                    <img
                      src="https://lp.oralsinsaopaulovm.com.br/static/media/ico_carga.b2516ec0.webp"
                      alt="protese"
                    />
                  </figure>
                  <p>
                    A nossa família deseja transformar o seu sorriso,
                    recuperando a sua autoestima e o seu bem-estar!
                  </p>
                </div>
                <div className="div-style-2"></div>
                <div className="card">
                  <figure className="img-card">
                    <img
                      src="https://lp.oralsinsaopaulovm.com.br/static/media/ico_carga.b2516ec0.webp"
                      alt="protese"
                    />
                  </figure>
                  <p>
                    Com a Oral Sin, você irá conquistar os seus dentes fixos e
                    viver com mais liberdade e segurança!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="containerInformation2">
            <div className="divInformation2 primary">
              <h2>
                SE O SEU SONHO É TER SEUS DENTES FIXOS, AQUI NA ORAL SIN VOCÊ
                CONQUISTA!
              </h2>
              <p>
                Dê adeus aos incômodos da dentadura, ponte móvel ou ausência de
                dentes. Com os implantes dentários você conquista a sua
                LIBERDADE e 100% da sua função MASTIGATÓRIA. Deixe que a gente
                cuida do seu sorriso!
              </p>
            </div>
            <div className="divStyle2"></div>
            <div className="divInformation2 secundDiv">
              <p>
                Drª. Marliery Perpétua Veloso é reconhecida como uma referência
                na especialidade de Implantes Dentários. Como cirurgiãm-dentista
                da Oral Sin Montes Claros, já transformou milhares de vidas,
                através de sorrisos, dos mais simples aos mais complexos casos,
                com técnicas modernas e seguras.
              </p>
              <strong id="HastTag">#Marliery Perpétua</strong>
            </div>
            <div className="div-Perfil">
              <figure className="figurePerfil">
                <img src={img1} alt="doutora Marliery Veloso " />
              </figure>
              <div className="divStyledPerfil">
                <div className="divStyled3"></div>
                <a
                  target="_blanck"
                  href="https://www.instagram.com/oralsinmontesclaros/"
                >
                  <BsInstagram />
                </a>
                <a
                  target="_blanck"
                  href="https://www.facebook.com/oralsinmontesclaros/"
                >
                  <ImFacebook2 />
                </a>
                <a
                  target="_blanck"
                  href="https://l.instagram.com/?u=https%3A%2F%2Fwww.oralsin.online%2Fwhatsapp&e=ATMSjAEoG-pWgiKx1UrR7aImdFSGDMqt4jdsuXVjzjbNciFIj7gJx1aeAO2iroIqVqGQVjK312bemzGLSoxNzmQ&s=1"
                >
                  <BsWhatsapp />
                </a>
              </div>
            </div>
          </section>
          <section className="containeStyled4">
            <img
              src="https://lp.oralsinsaopaulovm.com.br/static/media/implantes.f467026b.png"
              alt="alternativo"
            />
            <div className="div-styled4"></div>
          </section>

          <footer className="footer">
            <div className="divSmartix">
              <h3>
                Copyright © 2022 Oral Sin Montes Claros Todos os direitos
                reservados.
              </h3>
              <a target="_blanck" href="https://smartixdigital.com.br/#">
                <img
                  src="https://smartixdigital.com.br/wp-content/uploads/2022/01/Logo-Smartix-sem-fundo-white-150x150.png"
                  alt="Smartix"
                />
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div className="whats">
        <a
          target="_blanck"
          href="https://api.whatsapp.com/send?phone=5538999102100&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20OralSin."
        >
          <img src={wpp} alt="whatsapp" />
        </a>
      </div>
    </>
  );
}
export default Main;

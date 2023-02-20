import DisplayOnResize from "./components/Display.js";
import Heading from "./components/Headings.js";
import Para from "./components/Para.js";
import Image from "./components/Image.js";
import Anchor from "./components/Anchor.js";
import Attribution from "./components/Attribution.js";
import HeaderNavModal from "./components/HeaderNavModal.js";
import Form from "./components/Form.js";
import FooterNav from "./components/FooterNav.js";

(function () {

  const Header = () => (
    <header className='header'>
      <Image className='logo left' src='./src/images/logo.svg' alt='logo' />
      <HeaderNavModal />
    </header>
  );

  const Main = () => (
    <main className='main grid container'>
      <Image className='grid two' src='./src/images/illustration-1.svg' alt='illustration one' />
      <section className='grid one'>
        <Heading className='primary title' content='All your files in one secure location, accessible anywhere.' />
        <Para className='primary para' content='Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.' />
        <Form form='form-one' className='form-action flex rel' placeholder='Enter your email' button='Get Started' />
      </section>
      <Image className='grid four' src='./src/images/illustration-2.svg' alt='illustration two' />
      <section className='grid three'>
        <Heading className='secondary title' content='Stay productive, wherever you are' />
        <Para className='secondary para' content='Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.' />
        <Para className='secondary para' content='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!' />
        <Anchor className='link inline' href='#' target='_blank' content='See how Fylo works' />
        <Image className='icon inline selectable' src='./src/images/icon-arrow.svg' alt='icon arrow' />
        <div className='flex-col card'>
          <Para className='sub para' content='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.' />
          <div className='flex-row'>
            <Image className='avatar' src='./src/images/avatar-testimonial.jpg' alt='avatar' />
            <span className='name'>
              <strong>Kyle Burton</strong>
              <br />
              Founder & CEO, Huddle
            </span>
          </div>
        </div>
      </section>
    </main>
  );

  const Aside = () => (
    <aside className='aside flex'>
      <div className='flex-col'>
        <Heading className='secondary title' content='Get early access today' />
        <Para className='secondary para' content='It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.' />
      </div>
      <Form form='form-two' className='form-action flex-col rel' placeholder='email@example.com' button='Get Started For Free' />
    </aside>
  );

  const Footer = () => (
    <footer className='footer'>
      <Image className='logo left' src='./src/images/footer-logo.svg' alt='logo' />
      <FooterNav />
    </footer>
  );

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(DisplayOnResize(), 500);
  });

  const App = () => {
    React.useEffect(() => {
      DisplayOnResize()
    }, []);
    return (
      <>
        <Header />
        <Main />
        <Aside />
        <Footer />
        <Attribution />
      </>
    )
  }

  document.querySelector('body').insertAdjacentHTML('afterbegin', `<div id='root' />`);
  ReactDOM.createRoot(document.getElementById('root')).render(<App tab='home' />);
})();
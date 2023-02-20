import Image from "./Image.js";

const FooterNav = () => {
  const links1 = [
    { id: 1, text: 'About Us', },
    { id: 2, text: 'Jobs', },
    { id: 3, text: 'Press', },
    { id: 4, text: 'Blog', },
  ];

  const links2 = [
    { id: 5, text: 'Contact Us', },
    { id: 6, text: 'Terms', },
    { id: 7, text: 'Privacy', },
  ];

  const social = [
    { id: 8, icon: 'fa fa-facebook-official' },
    { id: 9, icon: 'fa fa-twitter' },
    { id: 10, icon: 'fa fa-instagram' },
  ];
  
  const LinksList = ({props}) => {
    return props.map(item => <li key={item.id}>{item.text}</li>)
  }

  const SocialList = ({props}) => {
    return props.map(item => <li key={item.id}><i className={item.icon}></i></li>)
  }

  return (
    <nav className='nav flex'>
      <ul className='contact flex-col'>
        <div className='flex-row'>
          <li key='1'><Image className='icon' src='./src/images/icon-phone.svg' alt='icon phone' /></li>
          <li key='2'>Phone: +1-543-123-4567</li>
        </div>
        <div className='flex-row'>
          <li key='3'><Image className='icon' src='./src/images/icon-email.svg' alt='icon email' /></li>
          <li key='4'>example@fylo.com</li>
        </div>
      </ul>
      <ul className='links flex selectable'>
        <div className='flex-col'>
          <LinksList props={links1} />
        </div>
        <div className='flex-col'>
          <LinksList props={links2} />
        </div>
      </ul>
      <ul className='social flex-row selectable'>
        <SocialList props={social} />
      </ul>
    </nav>
  )
}

export default FooterNav;
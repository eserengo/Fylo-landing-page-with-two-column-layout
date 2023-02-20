import DisplayOnResize from "./Display.js";

const HeaderNavModal = () => {
  const [state, setState] = React.useState('off');
  const data = [
    { id: 1, text: 'Features', },
    { id: 2, text: 'Team', },
    { id: 3, text: 'Sign In', },
  ];
  
  const List = ({props}) => {
    return props.map(item => <li key={item.id}>{item.text}</li>)
  }

  React.useEffect(() => {
    DisplayOnResize()
  }, []);

  return (
    <nav className='nav selectable right'>
      {state == 'off' && <i className='fa fa-bars mobile' onClick={() => setState('on')}></i>}
      {state == 'on' && <i className='fa fa-times mobile' onClick={() => setState('off')}></i>}
      {state == 'on' && 
        <div className='modal mobile'>
          <ul className='flex-col'>
            <List props={data} />
          </ul>
        </div>
      }
      <ul className='flex-row center desktop'>
        <List props={data} />
      </ul>
    </nav>
  )
}

export default HeaderNavModal;
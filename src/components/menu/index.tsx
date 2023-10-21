import {bubble as Menu} from 'react-burger-menu';

const style = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#f4f5fa'
  },
  bmBurgerBarsHover: {
    background: '#cbf20b'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#e26d0e'
  },
  bmMenuWrap: {
    position: 'fixed',
    left: '0px',
    height: '100%'
  },
  bmMenu: {

    background: '#ebedf3',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',        
  },
  bmMorphShape: {
    fill: '#f1eded'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'flex',   
  },
  bmOverlay: {
    background: 'rgba(1, 2, 31, 0.3)'
  }
}


export const MenuBurguer = () => {
    return (
      <Menu styles={style}>
        <a style={{textDecoration:'none'}} id="home" className="menu-item" href="/">Home</a>
        <a style={{textDecoration:'none'}} id="about" className="menu-item" href="/about">About</a>
        <a style={{textDecoration:'none'}} id="contact" className="menu-item" href="/contact">Contact</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  }
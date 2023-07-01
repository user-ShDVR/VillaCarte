import React from 'react';
import cn from 'classnames';

interface IProps {
  menu: boolean;
  toShowMenu: () => void;
  scrolled: boolean;
}

const BurgerButton = ( { menu, toShowMenu, scrolled }: IProps ) => {
  return (
    <button className={ cn( menu ? 'menuBtn--active' : 'menuBtn' ) } onClick={ toShowMenu }>
      <div className="menuBtn-line" style={ scrolled ? { background: 'white' } : {} }/>
      <div className="menuBtn-line" style={ scrolled ? { background: 'white' } : {} }/>
    </button>
  );
};

export default BurgerButton;

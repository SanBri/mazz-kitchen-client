import { useDispatch } from "react-redux";
import { toggleMenu } from "../../actions/menu";

const Burger = () => {
  const dispatch = useDispatch();

  return (
    <button
      className='btn-menu'
      type='button'
      onClick={(e) => dispatch(toggleMenu())}
    >
      <i className='btn-menu__bars' aria-hidden='true'></i>
    </button>
  );
};

export default Burger;

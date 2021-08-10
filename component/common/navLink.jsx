import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useDispatch } from "react-redux";

import { toggleMenu } from "../../actions/menu";

const navLink = ({ text, link, icn, onClick }) => {
  const dispatch = useDispatch();
  const [smartPhone, setsmartPhone] = useState(false);

  useEffect(() => {
    if (screen.width < 768) {
      setsmartPhone(true);
    }
  }, []);

  return (
    <>
      <Head>
        <script
          src='https://kit.fontawesome.com/556a7dddee.js'
          crossOrigin='anonymous'
        />
      </Head>
      <div className='navigation-bar__link'>
        <Link href={link}>
          <a
            onClick={
              smartPhone === true ? (e) => dispatch(toggleMenu()) : onClick
            }
          >
            <p>
              {icn && <i className={icn}></i>} {text}
            </p>
          </a>
        </Link>
        <div className='navigation-bar__line'></div>
      </div>
    </>
  );
};

export default navLink;

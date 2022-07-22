import React from 'react';
import styles from "../Footer/footer.module.scss";
import logo from "../../public/images/logo192.png";
import tele from "../../public/images/tele.png";
import twitter from "../../public/images/twitter.png";
import github from "../../public/images/github.png";

function Footer(props) {
    return (
        <div className={`${styles.background}`}>
            <div className='container'>
                <div className='row d-flex justify-content-between'>
                    <div className='col-8 pb-3'>
                        <a className="text-center mx-5" href="#">
                            <img alt="logo" className="img-fluid pb-4" src={logo} width={205} height={71} />
                        </a>
                         <p className='text-white fs-10'>Copyright © 2022 bet2earn.io All Rights Reserved.</p>
                    </div>
                    <div className='col-4 d-flex flex-row mt-4'>
                        <div className='flex-column text-center'>
                            <img alt="tele" className='img-fluid' src={tele} width={48} height={48} />
                            <p className='text-white fw-bold pt-3'>Terms Condition</p>
                        </div>
                         <div className='flex-column text-center ms-5'>
                            <img alt="github" className='img-fluid' src={github} width={48} height={48} />
                        </div>
                        <div className='flex-column ms-5 text-center'>
                            <img alt="twitter" className='img-fluid' src={twitter} width={48} height={48} />
                             <p className='text-white fw-bold pt-3'>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;



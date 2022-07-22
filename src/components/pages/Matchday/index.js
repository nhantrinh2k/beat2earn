import React from 'react';
import styles from "../Matchday/matchday.module.scss";
import ellip from "../../../public/images/Ellipse 86.png";
import wc from "../../../public/images/wc.png";
import senegal from "../../../public/images/senegal.png";
import netherlands from "../../../public/images/netherlands.png";
import Vector from "../../../public/images/Vector.png";
import Vector2 from "../../../public/images/Vector@2x.png";

function MatchDay(props) {
    return (
        <div className="container my-5">
            <div className={`${styles.background} live p-5`}>
                <div className='text-left d-flex'>
                    <img alt="ellip" className='img-fluid me-2' src={ellip} width={18} height={18} />
                    <h1 className='text-white'>LIVE</h1>
                </div>
                <div className='vs mx-5'>
                    <div className='text-center position-relative'>
                        <img alt="wc" className='img-fluid' src={wc} width={154} height={333} />
                        <div className={`${styles.score}`}>
                            <div className='row d-flex align-items-center h-100'>
                                <div className='col-2'>
                                    <img alt="senegal" className='img-fluid' src={senegal} width={96} height={95} />
                                </div>
                                <div className='col-3'>
                                    <img alt="vector" className='img-fluid' src={Vector} width={311} height={118} />
                                </div>
                                <div className='col-2'>
                                    <span className={`${styles.custom_score}`}>0 - 0</span>
                                </div>
                                <div className='col-3'>
                                    <img alt="vector" className='img-fluid' src={Vector2} width={311} height={118} />
                                </div>
                                <div className='col-2'>
                                    <img alt="senegal" className='img-fluid' src={senegal} width={96} height={95} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center text-white my-5 pt-5'>
                    <h2>GROUP A | 17:00 | 11/21/2022</h2>
                    <h2 className='pt-2'>Al Thumama Stadium</h2>
                </div>
                <div className='text-center pb-3'>
                    <button className={`${styles.custom_button}`}>Bet Now</button>
                </div>
            </div>
            <div className='match py-3'>
                <div className="text-center my-5">
                    <h1 className={`${styles.border} text-white px-5`}>MATCH DAY</h1>
                </div>
                <div className='text-left ps-3 pb-3'>
                    <h2 className='text-white'>Monday, 11/21/2022</h2>
                </div>
                <div className='matchsDay'>
                    <div className={`${styles.matchDay} row px-5 py-3 mb-3 align-items-center`}>
                        <div className='col-2 text-white fw-bold pt-2'>
                            <p>23:00</p>
                            <p>GROUP A</p>
                        </div>
                        <div className='col-8 d-flex justify-content-center align-items-center'>
                            <span className='text-white fw-bold px-5'>QUATAR</span>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <span className='text-white fw-bold px-5'>VS</span>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <span className='text-white fw-bold px-5'>ECUADOR</span>
                        </div>
                        <div className='col-2'>
                            <button className={`${styles.custom_button__match}`}>Bet Now</button>
                        </div>
                    </div>
                </div>

                <div className='matchsDay'>
                    <div className={`${styles.matchDay} row px-5 py-3 mb-3 align-items-center`}>
                        <div className='col-2 text-white fw-bold'>
                            <p>23:00</p>
                            <p>GROUP A</p>
                        </div>
                        <div className='col-8 d-flex justify-content-center align-items-center'>
                            <span className='text-white fw-bold px-5'>QUATAR</span>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <span className='text-white fw-bold px-5'>VS</span>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <span className='text-white fw-bold px-5'>ECUADOR</span>
                        </div>
                        <div className='col-2'>
                            <button className={`${styles.custom_button__match}`}>Bet Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='match py-3'>
                <div className='text-left ps-3 pb-3'>
                    <h2 className='text-white'>Monday, 11/21/2022</h2>
                </div>
                <div className='matchsDay'>
                    <div className={`${styles.matchDay} row px-5 py-3 mb-3 align-items-center`}>
                        <div className='col-2 text-white fw-bold'>
                            <p>23:00</p>
                            <p>GROUP A</p>
                        </div>
                        <div className='col-8 d-flex justify-content-center align-items-center'>
                            <span className='text-white fw-bold px-5'>QUATAR</span>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <span className='text-white fw-bold px-5'>VS</span>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <span className='text-white fw-bold px-5'>ECUADOR</span>
                        </div>
                        <div className='col-2'>
                            <button className={`${styles.custom_button__match}`}>Bet Now</button>
                        </div>
                    </div>
                </div>

                <div className='matchsDay'>
                    <div className={`${styles.matchDay} row px-5 py-3 my-4 align-items-center`}>
                        <div className='col-2 text-white fw-bold'>
                            <p>23:00</p>
                            <p>GROUP A</p>
                        </div>
                        <div className='col-8 d-flex justify-content-center align-items-center'>
                            <span className='text-white fw-bold px-5'>QUATAR</span>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <span className='text-white fw-bold px-5'>VS</span>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <span className='text-white fw-bold px-5'>ECUADOR</span>
                        </div>
                        <div className='col-2'>
                            <button className={`${styles.custom_button__match}`}>Bet Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchDay;
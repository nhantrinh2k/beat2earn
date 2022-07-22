import React from 'react';
import styles from "../MatchInfo/matchinfo.module.scss";
import ellip from "../../../public/images/Ellipse 86.png";
import wc from "../../../public/images/wc.png";
import senegal from "../../../public/images/senegal.png";
import netherlands from "../../../public/images/netherlands.png";
import Vector from "../../../public/images/Vector.png";
import Vector2 from "../../../public/images/Vector@2x.png";

function MatchInfo(props) {
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
                    <h2 className='pt-2'>AI Thumama Stadium</h2>
                </div>
                <div className='d-flex justify-content-around pb-3'>
                    <button className={`${styles.custom_button}`}>50.36</button>
                    <button className={`${styles.custom_button}`}>25.47</button>
                    <button className={`${styles.custom_button}`}>1.023</button>
                </div>
            </div>
            <div className='match py-3'>
                <div className="text-center my-5">
                    <h1 className={`${styles.border} text-white px-5`}>MATCH INFO</h1>
                </div>
                <div className='text-left ps-3 pb-3'>
                    <h2 className='text-white'>WIN RATE</h2>
                </div>
                <div className='row text-center py-5'>
                    <div className='col-4 flex-column text-center'>
                        <img alt="senegal" className='img-fluid' src={senegal} width={141} height={141} />
                        <p className='text-white fw-bold pt-3 fs-4'>WIN</p>
                        <p className='text-white fw-bold pt-2 fs-1'>10%</p>
                    </div>
                    <div className='col-4 flex-column text-center'>
                        <img alt="senegal" className='img-fluid' src={senegal} width={141} height={141} />
                        <p className='text-white fw-bold pt-3 fs-4'>DRAW</p>
                        <p className='text-white fw-bold pt-2 fs-1'>20%</p>
                    </div>
                    <div className='col-4 flex-column text-center'>
                        <img alt="senegal" className='img-fluid' src={senegal} width={141} height={141} />
                        <p className='text-white fw-bold pt-3 fs-4'>LOSE</p>
                        <p className='text-white fw-bold pt-2 fs-1'>70%</p>
                    </div>
                </div>
                <div className='text-left ps-3 pb-3'>
                    <h2 className='text-white'>MATCH HISTORY</h2>
                </div>
                <div className={`${styles.matchInfo} matchsInfo`}>
                    <div className="row px-5 py-3 mb-3 align-items-center">
                        <div className='col-4 text-white fw-bold pt-2 fs-4'>
                            <div className='time ms-5'>
                                <p>06/14/2010</p>
                            </div>
                        </div>
                        <div className='col-8 d-flex justify-content-center align-items-center'>
                            <span className='text-white fw-bold px-5 fs-4'>QUATAR</span>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <span className='text-white fw-bold px-5 fs-4'>0-2</span>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <span className='text-white fw-bold px-5 fs-4'>ECUADOR</span>
                        </div>
                    </div>
                    <div className="row px-5 py-3 mb-3 align-items-center">
                        <div className='col-4 text-white fw-bold pt-2 fs-4'>
                            <div className='time ms-5'>
                                <p>06/14/2010</p>
                            </div>
                        </div>
                        <div className='col-8 d-flex justify-content-center align-items-center'>
                            <span className='text-white fw-bold px-5 fs-4'>QUATAR</span>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <span className='text-white fw-bold px-5 fs-4'>0-2</span>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <span className='text-white fw-bold px-5 fs-4'>ECUADOR</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='match py-3'>
                <div className='text-left ps-3 pb-3'>
                    <h2 className='text-white'>LAST 5 MATCHES</h2>
                </div>
                <div className='matchsInfo'>
                    <div className={`${styles.matchInfo} row px-5 py-3 mb-3 align-items-center`}>
                        <div className='col-6 flex-column text-center pt-4'>
                            <p className='text-white fw-bold px-5 fs-4'>SÉNEGAL</p>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <div className='final_score pt-5 pb-4'>
                                <p className='text-white fw-bold fs-4'>06/04/2022: 2-0 JAPAN</p>
                                <p className='text-white fw-bold fs-4'>06/04/2022: 2-0 JAPAN</p>
                            </div>
                        </div>
                        <div className='col-6 flex-column text-center pt-4'>
                            <p className='text-white fw-bold px-5 fs-4'>SÉNEGAL</p>
                            <img alt="netherlands" className='img-fluid' src={netherlands} width={77} height={77} />
                            <div className='final_score pt-5 pb-4'>
                                <p className='text-white fw-bold fs-4'>06/04/2022: 2-0 JAPAN</p>
                                <p className='text-white fw-bold fs-4'>06/04/2022: 2-0 JAPAN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchInfo;
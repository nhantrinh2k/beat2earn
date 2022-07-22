import React from 'react';
import styles from "../Home/home.module.scss";
import rocket from "../../../src/public/images/Vector@3x.png";
import image from "../../../src/public/images/aaa 1.png";
import cup from "../../../src/public/images/layer1.png";


function Home(props) {
    return (
        <div>
            <div className='container position-relative my-5'>
                <div className='row align-items-center'>
                    <div className='col-6'>
                        <div className=''>
                            <p className='fs-5 py-4 w-100 text-justify'>
                                Actually, BTE is not providing a betting service. It is totally free to play 'prediction' game.
                                Plus, it is a passive income generator. All you have to do buying a NFT (Betting Slip) in return 10K $BTE token and keeping it on 
                                your wallet! Then, join our daily competitions in the game. Really unbelieveble, huh?
                            </p>
                            <div className='text-center pb-3'>
                                <button className={`${styles.custom_button}`}>
                                    <img alt="rocket" className='img-fluid pe-3' src={rocket}/>
                                    <span>Launch App</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                          <img alt="vector" className='img-fluid' src={image} width={637} height={792}/>
                    </div>
                </div>
                <div className={`${styles.position} position-absolute start-50 translate-middle`}>
                     <img alt="cup" className='img-fluid' src={cup} width={249} height={298}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
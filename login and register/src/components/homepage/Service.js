import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {
  return (
    <div className="video-background-holder">
            <div className="video-background-overlay"></div>
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="/videos/video2.mp4" type="video/mp4"/>
            </video>
            <div className="video-background-content container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                        <main className="px-3">
                            <h1 className="display-2">IoT Based Elderly Care</h1>
                            <p className="lead">Track your health record </p>
                            <p className="lead">
                                <Link to="/about" className="btn btn-lg btn-secondary text-black fw-bold border-white bg-white">Learn more</Link>
                            </p>
                        </main>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Service;
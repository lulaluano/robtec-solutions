import React from 'react';

export default function Banner() {
    return (
        <div className="container-fluid p-0 position-relative" id="home">
            <img src="/img/banner.png" className="banner-img" alt="banner" />
            <section className="container position-absolute d-flex align-items-center banner-section">
                <div className="banner-text">
                    <span className="bold">Fornecemos as <br /> Melhores Soluções <br /> </span>
                    <button className="btn rob-btn btn-primary border-radius-0" style={{marginRight: 20 + 'px'}}>Nossos Serviços</button>
                    <button className="btn rob-btn btn-outline-primary btn-contatos border-radius-0">Contatos</button>
                </div>
            </section>
        </div>
    )
}
import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import SobreNos from 'components/SobreNos';
import Proposito from 'components/Proposito';
import Form from 'components/Form';
import Mapa from 'components/Mapa';
import Footer from 'components/Footer';

function App() {
    React.useEffect(() => {
        const bootsJS = document.createElement('script');
        bootsJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js';
        document.body.appendChild(bootsJS);
    }, [])

    return (
        <div>
            <div className="container">
                <Header />
            </div>

            <div id="main">
                <div className="container-fluid">
                    <Banner />
                </div>

                <main className="container">
                    <SobreNos />
                    <Proposito />
                    <Form />
                </main>

                <div className="position-relative">
                    <Mapa />
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default App;

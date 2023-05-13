//Se importa libreria 
import React  from "react";
import Carousel from 'react-bootstrap/Carousel';
//=============IMPORTACIÓN DE IMAGNES===================
//Se importan imagenes utilizadas en el footer 
import Cerebro from './img/cerebro.jpg';
import Codigo from './img/code.jpeg';
import Server from './img/server.jpeg';

//Se genera componente

const foot = ({animal})=>{
    return(
        <div>
            <h1>
                Hola soy el footer de esta pagina
            </h1>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Cerebro}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>{animal.nameOne}</h3>
                    <p>{animal.sologanOne}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Codigo}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>{animal.nameTwo}</h3>
                    <p>{animal.sloganTwo}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Server}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>{animal.nameThree}</h3>
                    <p>
                        {animal.sloganThree}
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://2.bp.blogspot.com/-z_rmBZv88RE/VXbzhpVGI6I/AAAAAAAAAJo/ozLpwZpbo8I/s1600/nt_emocionesartificiales_02052013.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>{animal.nameFour}</h3>
                    <p>
                        {animal.sloganFour}
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default foot;
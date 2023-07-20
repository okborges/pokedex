import './Cards.css';
import image from '../../svg/1.svg';

export const Cards = () => {
    return (
        <>
            <div className="bg-card">
                <div className="card-header">
                    <p>#001</p>
                    <p className="gen">Generation I</p>
                </div>

                <div className="infos-card">
                    <img src={image} alt="" width={150} className="img-card" />
                    <h1 className="name">Bulbasaur</h1>
                    <h2 className="type">grass</h2>
                    <h3 className="default">shiny</h3>
                    <h4 className="habitat">
                        <span>Habitat:</span> grassland
                    </h4>
                    <p className="infos">Height 70cm / Weight 6.9kg</p>
                    <button className="power">Power 318</button>
                </div>
            </div>
        </>
    );
};

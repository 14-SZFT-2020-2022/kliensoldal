import { Link } from 'react-router-dom';

const Fololdal = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="keptarto">
                        <Link to='/makosteszta'>
                        <img 
                            src="kepek/teszta.jpg" 
                            alt="teszta" 
                            className="img-thumbnail" 
                            />
                        </Link>
                    </div>
                    <div className="szovegtarto">
                        <h4>Mákos tészta</h4>
                        <ul>
                            <li>Ár: 1200Ft</li>
                            <li>Ital: 1 pohár tej</li>
                            <li>Allergének: glutén</li>
                        </ul>
                        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque soluta enim quasi quibusdam blanditiis, officia sapiente cupiditate velit atque error quisquam, sequi odit itaque magnam! Ad quod sapiente non modi.s</div>
                    </div>
                </div>
                <div className="col-sm-6">
                <div className="keptarto">
                        <img src="kepek/teszta.jpg" alt="teszta" />
                    </div>
                    <div className="szovegtarto">
                        <h4>Mákos tészta</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fololdal;
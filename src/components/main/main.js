import './main.scss';
import main from '../../images/main_images.png';
import partners from '../../images/main_partners.png';

function Main () {
    return (
        <div id="main">
            <div id="main_wrapper">
                <div id="main_up">
                    <div id="main_up_text">
                        <span>Sustainability on Demand</span>
                        <h1>Helping the World Go Carbon Neutral</h1>
                        <p>Our Sustainability-as-a-Service platform calculates and purchases carbon offsets to neutralize the environmental impact of everyday activities like ecommerce deliveries, ridesharing, flights, and more.</p>
                        <div id="main_up_buttons">
                            <input type="button" id="start_btn" value="Get Started"/>
                            <input type="button" id="talk_btn" value="Let's Talk"/>
                        </div>
                    </div>
                    <div id="div_img">
                        <img src={main} />
                    </div>
                </div>
                <div id="main_down">
                    <div>
                        <img src={partners} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
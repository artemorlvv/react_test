import './footprint.scss';
import footprint from '../../images/footprint.png';

function Footprint () {
    return (
        <div id="footprint">
            <div id="footprint_wrap">
                <div id="footprint_text">
                    <span>Cloverly API</span>
                    <h2>Offset Your Carbon Footprint in Real Time</h2>
                    <p>Cloverly's powerful API calculates the impact of common carbon-intensive activities in real time and uses verified, quality carbon offset projects to neutralize them. Ready to get started? Create an account to integrate the Cloverly API for free, or contact us for custom solutions.</p>
                </div>
                <div id="footprint_buttons">
                    <input type="button" id="start_btn" value="Get Started for Free" />
                    <input type="button" id="talk_btn" value="Let's Talk" />
                </div>
                <img src={footprint} />
            </div>
        </div>
    );
}

export default Footprint;
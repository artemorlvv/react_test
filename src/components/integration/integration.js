import './integration.scss';
import integration from '../../images/int_img.png';

function Integration () {
    return (
        <div id="integration">
            <div id="integration_wrap">
                <div id="int_text">
                    <span>For Developers, By Developers</span>
                    <h2>Simple Integration.</h2>
                    <h2>RESTful API.</h2>
                    <p>The Cloverly API calculates and offsets carbon emissions on a per-transaction basis. We can determine the amount of carbon emitted and offset that quantity by purchasing carbon offsets in real time. Explore our developer docs to find the right endpoints for your application, and sign up for free to get the Cloverly sandbox keys.</p>
                    <div id="int_btns">
                        <input type="button" id="int_keys" value="Get API Keys" />
                        <input type="button" id="int_docs" value="Developer Docs" />
                    </div>
                </div>
                <img src={integration} />
            </div>
        </div>
    );
}

export default Integration;
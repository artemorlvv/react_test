import './how.scss';
import match from '../../images/how_match.png';
import tr from '../../images/how_tr.png';
import verif from '../../images/how_verif.png';

function How() {
    return (
        <div id="how">
            <div id="how_wrap">
                <div id="how_left">
                    <span>How It Works</span>
                    <h2>Connecting the Carbon Offset Infrastructure for a More Sustainable World</h2>
                    <p>Businesses and consumers count on Cloverly to offset their carbon footprint and create positive environmental change based on real-time business activities. Whether you implement our ready-to-use applications or install our API as part of a custom integration, Cloverly can help you go greener, faster.</p>
                    <input type="button" value="Learn More" />
                </div>
                <div id="how_right">
                    <div id="how_right_1">
                        <img src={match} />
                        <span>Matching the Offset</span>
                        <p>The Cloverly API can find and match the best offset per transaction. If your customer orders a product in California, for example, we might partner with an improved forest management project in California to keep the benefit local.</p>
                    </div>
                    <div id="how_right_2">
                        <img src={tr} />
                        <span>Transaction Transparency</span>
                        <p>We believe in transparency and fully validated transactions. That's why every time you (or your customers) choose to offset an emission-producing activity with Cloverly, we provide real-time transactional data to show the location, type, and amount of carbon offset.</p>
                    </div>
                    <div id="how_right_3">
                        <img src={verif} />
                        <span>Verified Sources</span>
                        <p>To effectively neutralize carbon emissions, we know that quality matters. That's why Cloverly works with reputable, internationally recognized suppliers who track and verify registered carbon offset projects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default How;
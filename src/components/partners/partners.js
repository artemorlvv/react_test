import './partners.scss';
import goo from '../../images/google_looker.png';

function Partners () {
    return (
        <div id="partners">
            <div id="partners_wrap">
                <span id="span_1">Partner Spotlight</span>
                <p id="p_1"><span id="inn_span">At the JOIN data conference,</span> the team from Looker (now part of Google) used data provided by attendees to determine the carbon footprint of their travel to the conference and offset it with Cloverly.</p>
                <span id="span_2">“ ”</span>
                <p id="p_2">We built a little Javascript application to let you select how much of your carbon footprint you wanted to offset and then got an estimated price via Cloverly, which provides a simple API for purchasing Renewable Energy Certificates (RECs). Once we had the estimate from Cloverly, which helpfully tells you not just cost, but also where the RECs you're purchasing will come from, we approved the purchase and executed it via the API.</p>
                <a href="#">Read Full Story</a>
                <div id="partners_inner">
                    <div id="inner_img">
                        <img src={goo} />
                    </div>
                    <div id="inner_text">
                        <span id="name">Daniel Mintz</span>
                        <p id="job">Chief Data Evangelist at Looker</p>
                    </div>
                </div>
                <input type="button" value="More Partners" />
            </div>
        </div>
    );
}

export default Partners;
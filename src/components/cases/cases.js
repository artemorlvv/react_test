import './cases.scss';
import ecommerce from '../../images/case_eco.png';
import rideshare from '../../images/case_rid.png';
import flights from '../../images/case_fly.png';
import enterprise from '../../images/case_enter.png';
import energy from '../../images/case_energy.png';
import supply from '../../images/case_supply.png';
import fintech from '../../images/case_fintech.png';
import fleet from '../../images/case_fleet.png';

function Cases () {
    return (
        <div id="cases">
            <div id="cases_wrap">
                <div id="cases_up">
                    <span>Use Cases</span>
                    <h2>Used in Every Environment, to Save the Environment</h2>
                    <p>There are many sources of carbon emissions, including some that we don't typically associate with environmental impacts. For example, even cloud computing requires physical servers powered by electricity. Below are a few common use cases for carbon offsetting.</p>
                </div>
                <div id="cases_mid">
                    <div id="mid_parent">
                        <div id="mid_child">
                            <img src={ecommerce} />
                            <div>
                                <span>Ecommerce</span>    
                                <p>See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations.</p>  
                                <a href="#">Learn more</a>
                            </div>  
                        </div>
                        <div id="mid_child">
                            <img src={rideshare} />
                            <div>
                                <span>Rideshare</span>    
                                <p>Miles traveled and carbon emitted can be easily calculated and offset in real time with Cloverly.</p>  
                                <a href="#">Learn more</a>
                            </div>  
                        </div>
                    </div>
                    <div id="mid_parent">
                        <div id="mid_child">
                            <img src={flights} />  
                            <div>
                                <span>Flights</span>    
                                <p>Take off the carbon impact of aviation. With the Cloverly API, calculate and offset miles flown and impact generated.</p>  
                                <a href="#">Learn more</a>
                            </div>  
                        </div>
                        <div id="mid_child">
                            <img src={enterprise} />
                            <div>
                                <span>Enterprise Resource Planning</span>    
                                <p>Learn how enterprise software companies are using the Cloverly integration to offset their environmental effects.</p>  
                                <a href="#">Learn more</a>
                            </div>  
                        </div>
                    </div>
                    <div id="mid_parent">
                        <div id="mid_child">
                            <img src={energy} />
                            <div>
                                <span>Energy</span>    
                                <p>Find out how the energy industry is using carbon offsets to make a difference and create a more sustainable world.</p>  
                                <a href="#">Learn more</a>
                            </div>  
                        </div>
                        <div id="mid_child">
                            <img src={supply} />
                            <div>
                                <span>Supply Chain</span>    
                                <p>Calculate offsets based on your supply chain, make a difference, and see how others are doing it, too.</p>  
                                <a href="#">Learn more</a>
                            </div>  
                        </div>
                    </div>
                    <div id="mid_parent">
                        <div id="mid_child">
                            <img src={fintech} />
                            <div>
                                <span>Fintech</span>    
                                <p>Cloverly can help identify carbon footprints based on financial transaction data and purchase the offsets needed to mitigate these effects.</p>  
                                <a href="#">Learn more</a>
                            </div>  
                        </div>
                        <div id="mid_child">
                            <img src={fleet} />
                            <div>
                                <span>Fleet</span>    
                                <p>You track mileage and fuel economy for your vehicle fleet. So you already have the data the Cloverly API needs to calculate and offset the carbon impact.</p>  
                                <a href="#">Learn more</a>
                            </div>  
                        </div>
                    </div>
                </div>
                <div id="cases_down">
                    <span>Don't See Your Industry?</span>
                    <p>Cloverly can accommodate a variety of use cases for many different carbon-producing activities. Even if you don't see your industry here or you're not sure what activities to offset, we can help. Reach out to Cloverly and let us get you on the path to net-zero carbon emissions.</p>
                    <input type="button" value="Contact Us" />
                </div>
            </div>
        </div>
    );
}

export default Cases;
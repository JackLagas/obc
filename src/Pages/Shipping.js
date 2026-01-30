import './Shipping.css';

function Shipping() {
    return (
        <div className="Shipping">
            <h1>Shipping</h1>
            <h2>Carrier Pickups</h2>
            <h3>Monday - Friday</h3>
            <div className="times">
                <ul className="CarrierName">
                    <li>USPS</li>
                    <br/>
                    <li>FedEx Air</li>
                    <li>FedEx Ground</li>
                    <br/>
                    <li>UPS Next Day Air</li>
                    <li>UPS</li>
                </ul>
                <ul className="CarrierTime">
                    <li>3:00pm</li>
                    <br/>
                    <li>3:00pm</li>
                    <li>5:00pm</li>
                    <br/>
                    <li>3:30pm</li>
                    <li>5:00pm</li>
                </ul>
            </div>
            <h3>Saturday</h3>
            <div className="times">
                <ul className="CarrierName">
                    <li>USPS</li>
                    <br/>
                    <li>FedEx Air</li>
                    <li>FedEx Ground</li>
                    <br/>
                    <li>UPS Next Day Air</li>
                    <li>UPS</li>
                </ul>
                <ul className="CarrierTime">
                    <li>3:00pm</li>
                    <br/>
                    <li>3:00pm</li>
                    <li>No Pickup</li>
                    <br/>
                    <li>3:30pm</li>
                    <li>No Pickup</li>
                </ul>
            </div>
        </div>
    );
}

export default Shipping;

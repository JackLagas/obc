import './Printing.css';

import PrintingCalculator from '../Components/PrintingCalculator.js';

function Printing() {
    return (
        <div className="Printing">
            <h1>Printing</h1>
            <PrintingCalculator/>
            <h2> Standard Printing </h2>
            <h3>Self-Serve (Black & White Only)</h3>
            <div className="pricing">
                <div className="pricing-inside">
                    <h4>Single-Sided</h4>
                    <table>
                        <tr>
                            <th># Pages</th>
                            <th>8.5x11</th>
                            <th>8.5x14</th>
                            <th>11x17</th>
                        </tr>
                        <tr>
                            <th>1-250</th>
                            <th>$0.14</th>
                            <th>$0.20</th>
                            <th>$0.27</th>
                        </tr>
                        <tr>
                            <th>251-500</th>
                            <th>$0.13</th>
                            <th>$0.16</th>
                            <th>$0.21</th>
                        </tr>
                        <tr>
                            <th>501-1000</th>
                            <th>$0.12</th>
                            <th>$0.14</th>
                            <th>$0.18</th>
                        </tr>
                        <tr>
                            <th>1001+</th>
                            <th>$0.11</th>
                            <th>$0.11</th>
                            <th>$0.15</th>
                        </tr>
                    </table>
                </div>
                <div className="pricing-inside">
                    <h4>Double-Sided</h4>
                    <table>
                        <tr>
                            <th># Pages</th>
                            <th>8.5x11</th>
                            <th>8.5x14</th>
                            <th>11x17</th>
                        </tr>
                        <tr>
                            <th>1-125</th>
                            <th>$0.25</th>
                            <th>$0.29</th>
                            <th>$0.44</th>
                        </tr>
                        <tr>
                            <th>126-250</th>
                            <th>$0.24</th>
                            <th>$0.25</th>
                            <th>$0.33</th>
                        </tr>
                        <tr>
                            <th>251-500</th>
                            <th>$0.19</th>
                            <th>$0.22</th>
                            <th>$0.30</th>
                        </tr>
                        <tr>
                            <th>501+</th>
                            <th>$0.16</th>
                            <th>$0.19</th>
                            <th>$0.29</th>
                        </tr>
                    </table>
                </div>
            </div>
            <h3>Black & White</h3>
            <div className="pricing">
                <div className="pricing-inside">
                    <h4>Single-Sided</h4>
                    <table>
                        <tr>
                            <th># Pages</th>
                            <th>8.5x11</th>
                            <th>8.5x14</th>
                            <th>11x17</th>
                        </tr>
                        <tr>
                            <th>1-250</th>
                            <th>$0.18</th>
                            <th>$0.25</th>
                            <th>$0.37</th>
                        </tr>
                        <tr>
                            <th>251-500</th>
                            <th>$0.16</th>
                            <th>$0.18</th>
                            <th>$0.29</th>
                        </tr>
                        <tr>
                            <th>501-1000</th>
                            <th>$0.13</th>
                            <th>$0.17</th>
                            <th>$0.27</th>
                        </tr>
                        <tr>
                            <th>1001+</th>
                            <th>$0.11</th>
                            <th>$0.15</th>
                            <th>$0.19</th>
                        </tr>
                    </table>
                </div>
                <div className="pricing-inside">
                    <h4>Double-Sided</h4>
                    <table>
                        <tr>
                            <th># Pages</th>
                            <th>8.5x11</th>
                            <th>8.5x14</th>
                            <th>11x17</th>
                        </tr>
                        <tr>
                            <th>1-125</th>
                            <th>$0.33</th>
                            <th>$0.34</th>
                            <th>$0.53</th>
                        </tr>
                        <tr>
                            <th>126-250</th>
                            <th>$0.29</th>
                            <th>$0.30</th>
                            <th>$0.41</th>
                        </tr>
                        <tr>
                            <th>251-500</th>
                            <th>$0.25</th>
                            <th>$0.27</th>
                            <th>$0.35</th>
                        </tr>
                        <tr>
                            <th>501+</th>
                            <th>$0.20</th>
                            <th>$0.22</th>
                            <th>$0.35</th>
                        </tr>
                    </table>
                </div>
            </div>
            <h3>Color</h3>
            <div className="pricing">
                <div className="pricing-inside">
                    <h4>Single-Sided</h4>
                    <table>
                        <tr>
                            <th># Pages</th>
                            <th>8.5x11</th>
                            <th>8.5x14</th>
                            <th>11x17</th>
                        </tr>
                        <tr>
                            <th>1-20</th>
                            <th>$0.98</th>
                            <th>$1.24</th>
                            <th>$1.99</th>
                        </tr>
                        <tr>
                            <th>21-50</th>
                            <th>$0.91</th>
                            <th>$1.07</th>
                            <th>$1.89</th>
                        </tr>
                        <tr>
                            <th>51-100</th>
                            <th>$0.76</th>
                            <th>$0.99</th>
                            <th>$1.73</th>
                        </tr>
                        <tr>
                            <th>101-250</th>
                            <th>$0.73</th>
                            <th>$0.89</th>
                            <th>$1.55</th>
                        </tr>
                        <tr>
                            <th>251+</th>
                            <th>$0.59</th>
                            <th>$0.79</th>
                            <th>$1.15</th>
                        </tr>
                    </table>
                </div>
                <div className="pricing-inside">
                    <h4>Double-Sided</h4>
                    <table>
                        <tr>
                            <th># Pages</th>
                            <th>8.5x11</th>
                            <th>8.5x14</th>
                            <th>11x17</th>
                        </tr>
                        <tr>
                            <th>1-20</th>
                            <th>$1.91</th>
                            <th>$2.29</th>
                            <th>$3.33</th>
                        </tr>
                        <tr>
                            <th>21-50</th>
                            <th>$1.71</th>
                            <th>$1.98</th>
                            <th>$3.24</th>
                        </tr>
                        <tr>
                            <th>51-100</th>
                            <th>$1.36</th>
                            <th>$1.64</th>
                            <th>$2.47</th>
                        </tr>
                        <tr>
                            <th>101-250</th>
                            <th>$1.31</th>
                            <th>$1.58</th>
                            <th>$2.41</th>
                        </tr>
                        <tr>
                            <th>251+</th>
                            <th>$1.02</th>
                            <th>$1.29</th>
                            <th>$1.97</th>
                        </tr>
                    </table>
                </div>
            </div>
            <h2> Wide Format Printing </h2>
            <h3>Standard Bond Paper</h3>
            <div className="pricing">
                <table>
                    <tr>
                        <th></th>
                        <th>Black & White</th>
                        <th>Color</th>
                    </tr>
                    <tr>
                        <th>Price per square foot</th>
                        <th>$0.78 $(3.00 minimum)</th>
                        <th>$1.67 $(3.00 minimum)</th>
                    </tr>
                    <tr>
                        <th>12x18</th>
                        <th>$1.17 $(3.00 minimum)</th>
                        <th>$2.51 $(3.00 minimum)</th>
                    </tr>
                    <tr>
                        <th>18x24</th>
                        <th>$2.34 $(3.00 minimum)</th>
                        <th>$5.02</th>
                    </tr>
                    <tr>
                        <th>24x36</th>
                        <th>$4.68</th>
                        <th>$10.02</th>
                    </tr>
                    <tr>
                        <th>30x42</th>
                        <th>$6.52</th>
                        <th>$13.35</th>
                    </tr>
                </table>
            </div> 
            <h3>Heavyweight Paper</h3>
            <div className="pricing">
                <table>
                    <tr>
                        <th></th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <th>Price per square foot</th>
                        <th>$6.20</th>
                    </tr>
                    <tr>
                        <th>12x18</th>
                        <th>$9.30</th>
                    </tr>
                    <tr>
                        <th>18x24</th>
                        <th>$18.60</th>
                    </tr>
                    <tr>
                        <th>24x36</th>
                        <th>$37.20</th>
                    </tr>
                    <tr>
                        <th>30x42</th>
                        <th>$54.25</th>
                    </tr>
                </table>
            </div> 
            <h2> Photo Printing </h2>
            <div className="pricing">
                <table>
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <th>3.5x5</th>
                        <th>$0.90</th>
                    </tr>
                    <tr>
                        <th>4x6</th>
                        <th>$0.90</th>
                    </tr>
                    <tr>
                        <th>5x7</th>
                        <th>$1.30</th>
                    </tr>
                    <tr>
                        <th>8x10</th>
                        <th>$2.72</th>
                    </tr>
                </table>
            </div> 
        </div>
    );
}

export default Printing;


function PrintingCalculator() {
    return (
        <div className="PrintingCalculator">
        <label for="printingType">Type of Print:</label>
        <select name="printingType" id="printingType">
            <option value="standard">Standard</option>
            <option value="wideFormat">Wide Format</option>
            <option value="photo">Photo</option>
        </select>

        </div>
    );
}

export default PrintingCalculator;

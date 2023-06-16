import { currencies } from "../../utils/constant";

function CurranciesSelector() {
    // const currancies = currencies.map((currancy: any) => {
    //     return currancy.currancy
    // })
    return (<>
        <select >
            {currencies.map((currancy: any) => {
                return <option>{currancy.currancy}</option>
            })}
        </select>
    </>);
}

export default CurranciesSelector;
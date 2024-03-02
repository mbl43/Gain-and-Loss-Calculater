function calc()
{
    
    let buy=parseFloat( document.querySelector('.buy-price').value)
    let quantity= parseFloat(document.querySelector('.quantity').value)
    let sell=parseFloat( document.querySelector('.sell-price').value );


    if (isNaN(buy) || isNaN(quantity) || isNaN(sell)) {
        document.getElementById('results').innerHTML = "Please enter valid numbers.";
        return;
    }

    if(sell>buy)
    {
        alert("you are calculating profit in percentage");
        let profit = ((sell * quantity) - (buy * quantity)) / (buy * quantity) * 100;

        document.getElementById("results").innerHTML = `You made profit on capital: <span class="text"> ${profit.toFixed(2)}</span>%`;
        return;

    }
    let capital=buy*quantity;
    let loss=capital-(sell*quantity)
    let capital_after_loss=capital-loss;
    let loss_per=capital*loss/100;
   
    let gain=loss*100/capital_after_loss
    console.log("buy:", buy,"quantity:",quantity,"sellprice:",sell,"capital:",capital,"capital after loss:",capital_after_loss,"loss in percentage:",  ` ${loss_per}%` );
    console.log("need gain on capital:",`${gain}%`);

    if(gain>100)
    {
    console.log("You need multibagger stock ");
    }
    document.getElementById("results").innerHTML = `Need a gain to recover your Loss On Remaining Capital: <span class="text"> ${gain.toFixed(2)}</span>%`;


}
function clearInputs() {
    document.querySelector('.buy-price').value = "";
    document.querySelector('.quantity').value = "";
    document.querySelector('.sell-price').value = "";
    document.getElementById('results').innerHTML = ""; // Clear results
}
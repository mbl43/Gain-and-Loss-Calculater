function calc()
{
    
    let buy=parseFloat( document.querySelector('.buy-price').value)
    let quantity= parseFloat(document.querySelector('.quantity').value)
    let sell=parseFloat( document.querySelector('.sell-price').value );


    if (isNaN(buy) || isNaN(quantity) || isNaN(sell)) {
        document.getElementById('results').innerHTML = "Please enter valid numbers.";
        return;
    }
    else if(buy === sell)
    {
         document.getElementById("results").innerHTML="NO Profit-No Loss"
    }
    else if(sell>buy)
        {
         alert("profit");
        let pro= (sell * quantity) - (buy * quantity)
        let profit = ( pro) / (buy * quantity) * 100;
        
        document.getElementById("results").innerHTML = `Profit In %: <span class="text">  ${profit.toFixed(2)}&#37;</span>`;
        document.getElementById("results2").innerHTML = `Profit In INR : <span class="text">  ${pro.toFixed(2)}₹</span>`;
        return;

    }
    else
    {
        let capital=buy*quantity;
        let loss=capital-(sell*quantity)
        let capital_after_loss=capital-loss;
        let loss_per=capital*loss/100;
    
        let gain=loss*100/capital_after_loss
        console.log("buy:", buy,"quantity:",quantity,"sellprice:",sell,"capital:",capital,"capital after loss:",capital_after_loss,"loss in percentage:",  ` ${loss_per}%` );
        console.log("need gain on capital:",`${gain}%`);
        
        if(gain>=100)
        {
            console.log("You need multibagger stock ");
        }
        document.getElementById("results").innerHTML =`Need a gain to recover your Loss On Remaining Capital:
        <span class="text">${gain.toFixed(2)}</span>&#37;`;
        document.getElementById("results2").innerHTML =`
        Loss In INR: <span class="text">${loss.toFixed(2)} </span>₹`;
        
    
}
}
function clearInputs() {
    document.querySelector('.buy-price').value = "";
    document.querySelector('.quantity').value = "";
    document.querySelector('.sell-price').value = "";
    document.getElementById('results').innerHTML = ""; // Clear results
    document.getElementById('results2').innerHTML = ""; // Clear results
}

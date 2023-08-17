document.getElementById('withdraw').addEventListener('click',function(){
    // console.log(88);
    const inputWithdraw = document.getElementById('inputWithdraw');
    const newInputWithdrawString =inputWithdraw.value;
    const newInputWithdraw=parseFloat(newInputWithdrawString);

    if(isNaN(newInputWithdraw)){
        alert('Provide Number Only');
        return;
     }


    // console.log(newInputWithdrawString);
    const withdrawTotal =document.getElementById('withdrawTotal');
    const previousWithdrawTotalString=withdrawTotal.innerText;
    

    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
    const currentWithdrawTotal =previousWithdrawTotal+newInputWithdraw;
    withdrawTotal.innerText =currentWithdrawTotal;

    const balanceTotal= document.getElementById('balanceTotal');
    const previousBalanceTotalString =balanceTotal.innerText;
    // console.log(previousBalanceTotalString)
    const previousBalanceTotal= parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal- newInputWithdraw;
    balanceTotal.innerText=newBalanceTotal;

    inputWithdraw.value='';
})
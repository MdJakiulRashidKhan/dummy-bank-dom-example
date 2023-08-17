document.getElementById('deposit').addEventListener("click",function(){
    const inputDeposit= document.getElementById('inputDeposit');
    const depositAmountString= inputDeposit.value;
     const depositAmount =parseFloat(depositAmountString);
    const depositTotalElement =document.getElementById('depositTotal');
    
    const previousDepositTotalString =depositTotalElement.innerText;
    const previousDepositTotal =parseFloat(previousDepositTotalString);
    const currentDepositTotal =previousDepositTotal+depositAmount;
    depositTotalElement.innerText = currentDepositTotal;


     const balanceTotal= document.getElementById('balanceTotal');
     const previousBalanceTotalString =balanceTotal.innerText;
     // console.log(previousBalanceTotalString)
     const previousBalanceTotal= parseFloat(previousBalanceTotalString);

     const newBalanceTotal = previousBalanceTotal+ depositAmount;
     balanceTotal.innerText=newBalanceTotal;

    inputDeposit.value='';
 })
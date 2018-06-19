//Listen for Submit
document.querySelector('#loan-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  //Hide Results
  document.querySelector('.results').style.display = 'none';
  
  //Show Loader
  document.querySelector('#loading').style.display = 'block';
  
  setTimeout(calculateResults, 1500); 
  
})


//Calculate Results
function calculateResults() {

  //Create UI Variables

  const loanAmount = document.querySelector('#amount');
  const interestRate = document.querySelector('#interest-rate');
  const totalYears = document.querySelector('#total-years');

  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interestRate.value) / 100 / 12;
  const calculatedPayments = parseFloat(totalYears.value) * 12

  //Compute Monthly Payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

    document.querySelector('.results').style.display = 'block';

    document.querySelector('#loading').style.display = 'none';
  } else {
    showError('Please ensure all fields are filled');
  }
}

function showError(error) {
  document.querySelector('#loading').style.display = 'none';
  const card = document.querySelector(".card");
  const heading = document.querySelector('.heading');
  console.log(card.firstChild)
  //if(card.firstChild.type != 'DIV'){
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error))
    // const card = document.querySelector(".card");
    // const heading = document.querySelector('.heading');
    card.insertBefore(errorDiv, heading)

    setTimeout(clearError, 3000)

  //}


}

function clearError() {
  document.querySelector('.alert').remove();
}

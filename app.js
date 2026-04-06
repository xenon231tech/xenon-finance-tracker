let transactions = [];

function addTransaction() {
  const desc = document.getElementById("desc").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (!desc || isNaN(amount)) return;

  const tx = { desc, amount };
  transactions.push(tx);

  updateUI();

  // clear input
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}

function updateUI() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  let balance = 0;

  transactions.forEach(tx => {
    const li = document.createElement("li");
    li.innerText = tx.desc + " : " + tx.amount;
    list.appendChild(li);

    balance += tx.amount;
  });

  document.getElementById("balance").innerText = balance;
}

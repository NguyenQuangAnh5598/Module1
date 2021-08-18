function Tiente() {
    let amount = document.getElementById("amount").value;
    amount = parseInt(amount);
    let from = document.getElementById("From").value;
    from = parseInt(from);
    let to = document.getElementById("To").value;
    to = parseInt(to);

    let result = amount*from/to;

    document.getElementById("a").innerText = result;
}
function solve(arr, order) {
class Ticket{
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}
const tickets = [];

arr.forEach(element => {
    const [destination, price, status] = element.split('|');
    const newPrice = Number(price)
    const ticket = new Ticket(destination, newPrice, status);
    console.log(ticket);
    tickets.push(ticket);
});

switch (order) {
    case "destination":
        tickets.sort((a, b) => a.destination.localeCompare(b.destination))  
        break;
    case "price":
        tickets.sort((a, b) => a.price - b.price); 
        break;
    case "status":
        tickets.sort((a, b) => a.status.localeCompare(b.status))  
        break;
    default:
        break;
}
return tickets;
}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
);
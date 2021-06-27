var pizzas =[{name: "Hawaiian",
              id: "hawaiian-btn",
              sizes:[{name:"small",price:400},{name:"medium",price:700},{name:"large",price:1200}],
              crusts:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mozzarella",price:100},{name:"fetta",price:150},{name:"onions",price:50}]},
              
              {name: "Pepperoni",
              id: "pepperoni-btn",
              sizes:[{name:"small",price:600},{name:"medium",price:1000},{name:"large",price:1500}],
              crusts:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mozzarella",price:100},{name:"fetta",price:150},{name:"onions",price:50}]},
              
              {name: "Bbq Beef",
              id: "bbq-beef-btn",
              sizes:[{name:"small",price:500},{name:"medium",price:800},{name:"large",price:1600}],
              crusts:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mozzarella",price:100},{name:"fetta",price:150},{name:"onions",price:50}]},
              
              {name: "Chicken Tikka",
              id: "tikka-btn",
              sizes:[{name:"small",price:600},{name:"medium",price:100},{name:"large",price:1700}],
              crusts:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mozzarella",price:100},{name:"fetta",price:150},{name:"onions",price:50}]},
              
              {name: "Bbq Chicken",
              id: "bbq-chicken-btn",
              sizes:[{name:"small",price:400},{name:"medium",price:1000},{name:"large",price:1500}],
              crusts:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mozzarella",price:100},{name:"fetta",price:150},{name:"onions",price:50}]},
              
              {name: "Veggie",
              id: "veggie-btn",
              sizes:[{name:"small",price:600},{name:"medium",price:1000},{name:"large",price:1600}],
              crusts:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mozzarella",price:100},{name:"fetta",price:150},{name:"onions",price:50}]}  
            ];
//loop through the array of objects
//check if the button selected is equal to the pizza id
//loop through each pizza size
//have a variable to store the price
// if the size is checked
// add the price to totals
// return the total

function Pizza(name,size,crust,toppings,total){
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}

Pizza.prototype.pizzaTopp = function(){
    let top = "";
    this.toppings.forEach(function(topping){
        top = topping.name;
    });
}

$(document).ready(function(){
    var total = 0;
    var sizeInput = 0;
    var toppingInput = 0;

    pizzas.forEach(function(pizza){
        $("button").click(function(){
            if(this.id === pizza.id){
                $("#orderName").text(pizza.name);

                var pizzaSize = "";
                var pizzaCrust = "";
                var pizzaToppings = [];
                $("#myOrders").click(function() {
                    pizza.sizes.forEach(function(size){
                        var isChecked = $("#"+size.name).is(':checked');
                        if(isChecked){
                            $("#"+size.name+"-"+"price").text(size.price);
                            sizeInput = size.price;
                            pizzaSize = size.name;
                        }
                    });
                    pizza.crusts.forEach(function(crust){
                        var isChecked = $("#"+crust.name).is(':checked');
                        if(isChecked){
                            pizzaCrust = crust.name;
                        }
                    });
                    pizza.toppings.forEach(function(topping){
                        var isChecked = $("#"+topping.name).is(':checked');
                        if(isChecked){
                            $("#"+topping.name+"-"+"price").text(topping.price);
                            toppingInput +=topping.price;
                            pizzaToppings.push(topping.name);
                        }
                    })
                    total = sizeInput + toppingInput;
                    $("#totalPrice").text( "Ksh."+ total); 
                });

                $("form#myOrders").submit(function(event){
                    event.preventDefault();
                    var pizzaChoice = new Pizza(pizza.name,pizzaSize,pizzaCrust,pizzaToppings,total);
                    $("#nameOrder").text( pizzaChoice.name); 
                    $("#priceOrder").text( "Ksh." + pizzaChoice.total); 
                }); 
            }
        })
    });
});


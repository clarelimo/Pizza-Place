//pizzas
var pizzas =[{name: "Hawaiian",
              id: "hawaiian-btn",
              sizes:[{name:"small",price:400},{name:"medium",price:700},{name:"large",price:1200}],
              crust:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mozzarella",price:100},{name:"fetta",price:150},{name:"onions",price:50}]},
              
              {name: "Pepperoni",
              id: "pepperoni-btn",
              sizes:[{name:"small",price:600},{name:"medium",price:1000},{name:"large",price:1500}],
              crust:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
              toppings:[{name:"mozzarella",price:100},{name:"fetta",price:150},{name:"onions",price:50}]},
              
              {name: "Bbq Beef",
              id: "bbq-beef-btn",
              sizes:[{name:"small",price:500},{name:"medium",price:800},{name:"large",price:1600}],
              crust:[{name:"crispy",price:50},{name:"stuffed",price:100},{name:"gluten",price:200}],
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


$(document).ready(function(){
    pizzas.forEach(function(pizza) {
        $("#"+pizza.id).click(function() {
            $("#orderName").text(pizza.name);
            pizza.sizes.forEach(function(size){
                $("#"+size.name+"-"+"price").text(size.price);
            });
            pizza.crusts.forEach(function(crust){
                $("#"+crust.name+"-"+"price").text(crust.price);
            });
            pizza.toppings.forEach(function(topping){
                $("#"+topping.name+"-"+"price").text(topping.price);
            });
        });
    });
});
    

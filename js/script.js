//pizzas
var pizzas =[{name: "Hawaiian",
              id: "hawaiian-btn",
              sizes:[{name:"small",price:400},{name:"medium",price:700},{name:"large",price:1200}],
              crust:[{name:"Crispy",price:50},{name:"Stuffed",price:100},{name:"Gluten-free",price:200}],
              toppings:[{name:"Mozzarella",price:100},{name:"Fetta Cheese",price:150},{name:"Caramelized Onions",price:50}]},
              
              {name: "Pepperoni",
              id: "pepperoni-btn",
              sizes:[{name:"small",price:600},{name:"medium",price:1000},{name:"large",price:1500}],
              crust:[{name:"Crispy",price:50},{name:"Stuffed",price:100},{name:"Gluten-free",price:200}],
              toppings:[{name:"Mozzarella",price:100},{name:"Fetta Cheese",price:150},{name:"Caramelized Onions",price:50}]},
              
              {name: "Bbq Beef",
              id: "bbq-beef-btn",
              sizes:[{name:"small",price:500},{name:"medium",price:800},{name:"large",price:1600}],
              crust:[{name:"Crispy",price:50},{name:"Stuffed",price:100},{name:"Gluten-free",price:200}],
              toppings:[{name:"Mozzarella",price:100},{name:"Fetta Cheese",price:150},{name:"Caramelized Onions",price:50}]},
              
              {name: "Chicken Tikka",
              id: "tikka-btn",
              sizes:[{name:"small",price:600},{name:"medium",price:100},{name:"large",price:1700}],
              crusts:[{name:"Crispy",price:50},{name:"Stuffed",price:100},{name:"Gluten-free",price:200}],
              toppings:[{name:"Mozzarella",price:100},{name:"Fetta Cheese",price:150},{name:"Caramelized Onions",price:50}]},
              
              {name: "Bbq Chicken",
              id: "bbq-chicken-btn",
              sizes:[{name:"small",price:400},{name:"medium",price:1000},{name:"large",price:1500}],
              crusts:[{name:"Crispy",price:50},{name:"Stuffed",price:100},{name:"Gluten-free",price:200}],
              toppings:[{name:"Mozzarella",price:100},{name:"Fetta Cheese",price:150},{name:"Caramelized Onions",price:50}]},
              
              {name: "Veggie",
              id: "veggie-btn",
              sizes:[{name:"small",price:600},{name:"medium",price:1000},{name:"large",price:1600}],
              crusts:[{name:"Crispy",price:50},{name:"Stuffed",price:100},{name:"Gluten-free",price:200}],
              toppings:[{name:"Mozzarella",price:100},{name:"Fetta Cheese",price:150},{name:"Caramelized Onions",price:50}]}  
            ];


$(document).ready(function(){
    pizzas.forEach(function(pizza) {
        $("#"+pizza.id).click(function() {
            pizza.sizes.forEach(function(size){
                $("#"+size.name+"-"+"price").text(size.price);
            });
            pizza.crusts.forEach(function(crust){
                $("#"+size.name+"-"+"price").text(size.price);
            });
        });
    });
});
    

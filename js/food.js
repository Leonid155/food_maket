

 document.addEventListener("DOMContentLoaded", function(){


// Конструктор обэктів та самі обєкти з інфою по товарних одиницях

function FoodObjectCreat(name,price){
  this.name = name;
  this.price = price;
  this.counter = 0;
  this.array = [];
}

var sprite_info = new FoodObjectCreat("Sprite", 33);
var cocaCola_info = new FoodObjectCreat("Coca-Cola", 25);
var iceCream_info = new FoodObjectCreat("Ice Cream", 13);
var cake_info = new FoodObjectCreat("Cake", 88);
var apple_info = new FoodObjectCreat("Apple", 7.5);
var humb_info = new FoodObjectCreat("Humburger", 14);
var chips_info = new FoodObjectCreat("Chips", 40);




//  getElementById


    var spriteBuy = document.getElementById("spriteBuy");
    var coca_colaBuy = document.getElementById("coca_colaBuy");
    var iceCreamBuy = document.getElementById("iceCreamBuy");
    var cakeBuy = document.getElementById("cakeBuy");
    var appleBuy = document.getElementById("appleBuy");
    var humbBuy = document.getElementById("humbBuy");
    var chipsBuy = document.getElementById("chipsBuy");

    var buttonBuy = document.getElementById("forBuy");
    var sectionPurchases = document.getElementById("myPurchases");
    var checkDiv = document.getElementById("check");
    var buyButtons = document.getElementsByClassName("buy");
    


// змінна для звпису та функція для   виведення поточної загальної вартості

    var totalPrice = 0;

    function findTotalPrise(){
        document.querySelector('#cart span').innerHTML = `[ ${totalPrice} ]`;
    }


// функція для клонування  блоку з товаром  та  створення на його основі нового блоку з вже
//купленим товаром, який буде вписаний в DOM

function newBlockMaker(obj,divId) {
    var p = document.createElement("P");
    var txt = document.createTextNode(` ${obj.counter}   -    ${obj.price} $ `);
    p.appendChild(txt);
        var cln = divId.cloneNode(true);
        cln.id = cln.id + "InBasket";
        cln.removeChild(cln.childNodes[7]);
        cln.removeChild(cln.childNodes[8]);
        cln.replaceChild(p, cln.childNodes[5]);
            myPurchases.insertBefore(cln, myPurchases.childNodes[0]);

}


//функція для вписування в DOM поточної кількості та загальної 
//вартості замовленнь для кожного товару окремо (після кожного кліку)

 function singleFoodPosition(obj,divId) {
    var p = document.createElement("P");
    var txt = document.createTextNode(`${obj.counter}  -  ${(obj.price * obj.counter)} $`);
    p.appendChild(txt);
    var parantDiv = document.getElementById(divId);
    parantDiv.replaceChild(p, parantDiv.childNodes[5]);
}  



//функція для створення чеку-вікна при натисканні кнопки

function showChackDiv(){
  if(totalPrice >= 1){
    buttonBuy.disabled = true;
    buyButtons.disabled = true;
    check.style.visibility = "visible";
  }
  else{
    alert("Buy something!")
  }
}


//функція для створення інформації про замовлений товар у вигляді тексту, та його вписання в вікні-чеку 

function checkInfo(obj){
  if(obj.counter >= 1){
    var first = document.createElement("P");
    var second = document.createElement("P");
    var txt1 = document.createTextNode(`${obj.name}  x   ${obj.counter}`);
    var txt2 = document.createTextNode(`${obj.price * obj.counter}`);
    first.appendChild(txt1);
    second.appendChild(txt2);
    var firstInfoPart = document.getElementById("firstInfoPart");
    var secondInfoPart = document.getElementById("secondInfoPart");
    firstInfoPart.appendChild(first);
    secondInfoPart.appendChild(second);
  }
}



//функція для вписування у вікно чеку загальної вартості товарів 

function fixTotalPrice(){
    if(totalPrice >= 1){
    var p = document.createElement("P");
    var txt = document.createTextNode(`Total:   ${totalPrice}$`);
    p.appendChild(txt);
    p.id = "checkPrice"
    var check = document.getElementById("check");
    check.appendChild(p);
  }
}




// EventListener для кнопок "+" 


spriteBuy.addEventListener("click", function(){
        totalPrice += sprite_info.price;
           if(sprite_info.array.length == 0){
               sprite_info.array.push("buy");
               sprite_info.counter++;
               newBlockMaker(sprite_info, sprite);
            }else{
              sprite_info.counter++;
              singleFoodPosition(sprite_info,"spriteInBasket");
              }
              findTotalPrise();
        });



coca_colaBuy.addEventListener("click", function(){
        totalPrice += cocaCola_info.price;
           if(cocaCola_info.array.length == 0){
               cocaCola_info.array.push("buy");
               cocaCola_info.counter++;
               newBlockMaker(cocaCola_info,coca_cola);
            }else{
              cocaCola_info.counter++;
              singleFoodPosition(cocaCola_info,"coca_colaInBasket");
              }
              findTotalPrise();
        });




iceCreamBuy.addEventListener("click", function(){
        totalPrice += iceCream_info.price;
           if(iceCream_info.array.length == 0){
               iceCream_info.array.push("buy");
               iceCream_info.counter++;
               newBlockMaker(iceCream_info,iceCream);
            }else{
              iceCream_info.counter++;
              singleFoodPosition(iceCream_info,"iceCreamInBasket");
              }
              findTotalPrise();
        });


cakeBuy.addEventListener("click", function(){
        totalPrice += cake_info.price;
           if(cake_info.array.length == 0){
               cake_info.array.push("buy");
               cake_info.counter++;
               newBlockMaker(cake_info,cake);
            }else{
              cake_info.counter++;
              singleFoodPosition(cake_info, "cakeInBasket");
              }
              findTotalPrise();
        });


appleBuy.addEventListener("click", function(){
        totalPrice += apple_info.price;
           if(apple_info.array.length == 0){
               apple_info.array.push("buy");
                 apple_info.counter++;
               newBlockMaker(apple_info,apple);
            }else{
              apple_info.counter++;
              singleFoodPosition(apple_info,"appleInBasket");
              }
              findTotalPrise();
        });



humbBuy.addEventListener("click", function(){
        totalPrice += humb_info.price;
           if(humb_info.array.length == 0){
               humb_info.array.push("buy");
                 humb_info.counter++;
               newBlockMaker(humb_info,hamburger);
            }else{
              humb_info.counter++;
              singleFoodPosition(humb_info,"hamburgerInBasket");
              }
              findTotalPrise();
        });

chipsBuy.addEventListener("click", function(){
        totalPrice += chips_info.price;
           if(chips_info.array.length == 0){
               chips_info.array.push("buy");
                 chips_info.counter++;
               newBlockMaker(chips_info,chips);
            }else{
              chips_info.counter++;
              singleFoodPosition(chips_info,"chipsInBasket");
              }
              findTotalPrise();
        });

// EventListener для кнопоки "BUY"  
 

buttonBuy.addEventListener("click", function(){
        showChackDiv();

            checkInfo(sprite_info);
            checkInfo(cocaCola_info);
            checkInfo(iceCream_info);
            checkInfo(cake_info);
            checkInfo(apple_info);
             checkInfo(humb_info);
            checkInfo(chips_info);

            fixTotalPrice();
    });


// EventListener для чек-блоку  


checkDiv.addEventListener("click", function(){
    location.reload();

});


});






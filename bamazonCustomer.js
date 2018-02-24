var mysql = require("mysql");
var prompt = require('prompt');
var colors = require("colors/safe");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  start();
});

 var userid;
 var useramount;
 var total;
 var gtotal = [];

  var one = {
    properties: {
      id: {
      	description: 'Please select product by ID to buy',
        pattern: /^[0-9]*$/,
        message: 'ID must be a number',
        required: true
      },
      amount: {
      	description: 'Please select desired amount',
        pattern: /^[0-9]*$/,
        message: 'Please make sure the amount is in numbers',
        required: true
      }
    }
  };

     
 var two = {
    properties: {
      ask: {
      	description: 'Add more to your order? (yes/no)',
        pattern: /(no|yes)/,
        message: 'Please type yes or no',
        required: true
      },
     
    }
  };



var start = function() {
var queryString = 'SELECT * FROM products';
connection.query(queryString, function(err, products, fields) {
    if (err) throw err;
 	console.log(" | ID | NAME   | DEP   | $ | STOCK |");
    for (var i in products) {
    
        console.log(" | ", colors.red(products[i].item_id) + " | " +  
        	               colors.green(products[i].product_name)  + " | " + 
        	               colors.yellow(products[i].department_name) + " | " + 
        	               colors.magenta(products[i].price) + " | " + 
        	               colors.cyan(products[i].stock_quantity) + " | "
        	);
    }
  

 prompt.start();


 
  prompt.get(one, function (err, result) {
  	 userid = parseInt(result.id);
     useramount = parseInt(result.amount);
    //console.log(colors.cyan(  result.id + " " + result.amount));
    inventory();
  });
});
};
var inventory = function( ) {
 connection.query('SELECT * FROM Products WHERE item_id =' + userid, function(err, result) {
                    if (err) throw err;
                    //console.log(result);

                    var stock = result[0].stock_quantity;
                    var singlePrice = result[0].price;
                    var totalStock = stock - useramount;
                    total= singlePrice * useramount;
                    gtotal.push(total);
                    var grandtotal = gtotal.reduce(function (a, b) {return a + b;} );

                        if ( useramount > stock || stock === 0){
                        console.log("Item Unavailable. Please try again.");
                        again();
                    } else {
                        console.log(useramount + " " + result[0].product_name +" at $"+ result[0].price +" per item.");
                        console.log("Total is $"+ total + " Grandtotal: $" + grandtotal);
                        connection.query('UPDATE Products SET stock_quantity = '+ totalStock +' WHERE item_id ='+ userid, function(err, result){
                        });
                        again();
                    }

  }); 
}

var stop = function(){
  	console.log("Program exited. Come back next time.")
    process.exit(1);
}

var again = function() {
 prompt.get(two, function (err, result) {
                            if (err){
                                console.log(err)
                            }
                            console.log(result);
                            if (result.ask === "no"){
                                stop();
                            }else{
                                start();
                            }   

});
};


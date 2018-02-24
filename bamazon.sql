DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30),
  price INTEGER(10) NOT NULL,
  stock_quantity INTEGER(20),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Crayons", "Stationary", 3.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pens", "Stationary", 1.00, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper", "Stationary", 5.00, 170);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ink", "Printing", 14.00, 270);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Post-It", "Stationary", 5.00, 370);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper-Clip", "Stationary", 1.00, 270);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ruler", "Crafts", 7.00, 570);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paints", "Crafts", 9.00, 270);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Stamps", "Crafts", 5.00, 290);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Binder", "Notebooks", 10.00, 267);





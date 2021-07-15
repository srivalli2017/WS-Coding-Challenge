
# WS-Coding-Challenge
Williams Sonoma Coding Challenge

Submitted by Srivalli Kompella

Given a JSON file of products, build a page that displays for each product:

product image
product name
product price
Display all products on a multi-column, responsive, accessible, and attractive page. Upon selection of a product image, display an overlay containing a carousel of product images.


The project is built entirely using vanilla javascript.

I used Micromodal and Splide javascript libraries (publicly available) to implement the carousal functionality.


TO RUN:
1) Download the code
```
git clone https://github.com/srivalli2017/WS-Coding-Challenge.git
cd wsi-coding-challenge
```
2) Just need to open the index.html file directly to view the application.


Presentation:
Lets walk through how a user would be presented the page:

As we open the page we see a list of all the prodcuts that we take from the JSON.
a. Each product tile lists the name and price and sale price below the hero image of the product.
b. When the user clicks anywhere on the tile, the carousal opens up with all the product's images. 
c. If the product doesn't have any images, the carousal doesn't open up.
d. If it has images, user can click on previous or next buttons to navigate across the images.




The Responsiveness works as the Desktop view has 3 columns of products and Mobile has 1 column of products. I have attached my final result of the responsiveness.

This is the Desktop View overlay with a carousal of all thumbnail images

![Desktop view](https://user-images.githubusercontent.com/87400434/125565615-d2f744da-2621-46d6-a52e-16e5ef969516.JPG)

This is the Mobile view with overlay with a carousal of all thumbnail images

![mobile view](https://user-images.githubusercontent.com/87400434/125567573-5f6e7e88-046e-42db-adba-f2f40292fc66.JPG)



## Testing


I've used Jest and `@testing-library/react`to write unit tests to test a UI that was created.

If you'd like to run this project locally, clone the repo and then:

1. `yarn install` (or `npm install`) to install dependencies
2. `yarn start` (or `npm start`) to preview the app locally
3. `yarn test` (or `npm test`) to run the tests



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


## TO RUN:

If you'd like to run this project locally, clone the repo and then:

1. `git clone https://github.com/srivalli2017/WS-Coding-Challenge.git` to download the code
2. `yarn install` (or `npm install`) to install dependencies
3. `yarn start` (or `npm start`) to preview the app locally
4. `yarn test` (or `npm test`) to run the tests


## Presentation:
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



## Unit Testing using Jest


've used Jest and `@testing-library/react`to write unit tests to test the basic functionality of the application. Since the application is all cleint side, there are not too many test cases that I could execute. But I picked the following testcases and successfully ran them.
![logs1](https://user-images.githubusercontent.com/87400434/125831230-f3ecead0-eb21-420a-8470-c8243e40e557.jpg)
![logs2](https://user-images.githubusercontent.com/87400434/125831351-6bed6839-96b8-42dd-bd62-9da58e4aea93.jpg)





## Data Fetch

A normal fetch function to get the JSON data gave me the error saying "No Access-Control-Allow-Origin header". This is because the server does not have CORS enabled.
So I used the following code to access the data through a proxy server:

`npm install -g local-cors-proxy`
`lcp --proxyUrl https://www.westelm.com` to start the proxy.
This is shown:
```
 Proxy Active 

 Proxy Url: http://www.yourdomain.com:28080
 Proxy Partial: proxy
 PORT: 8010
```

Then hit the following proxy API endpoint to get the data:
`http://localhost:8010/proxy/services/catalog/v4/category/shop/new/all-new/index.json`

instead of 
`https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json`


However, this connection was unstable and was ocasionally throwing an error on fetch.

So I decided to remove this and just hard code the data for this exercise.



# :iphone: Progressive web apps 

## Table of Contents 
* [Assesment](https://github.com/samclarkb/Barcode-app-PWA#books-assessment)
* [Concept](https://github.com/samclarkb/Barcode-app-PWA#bulb-concept)
* [Activity diagram](https://github.com/samclarkb/Barcode-app-PWA#chart_with_upwards_trend-Activity_diagram)
* [Process](https://github.com/samclarkb/Barcode-app-PWA#chart_with_upwards_trend-process)
* [optimization](https://github.com/samclarkb/Barcode-app-PWA#paperclip_optimisation)
* [Wishlist](https://github.com/samclarkb/Barcode-app-PWA#memo-wishlist)
* [Installation](https://github.com/samclarkb/Barcode-app-PWA#wrench-installation)
* [Recources](https://github.com/samclarkb/Barcode-app-PWA#mag_right-recources)
* [License](https://github.com/samclarkb/Barcode-app-PWA#bookmark-license)

## :books: Assesment 
In this course we convert the client side web application, made during the Web App From Scratch course, into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Finally we’ll implement a series of optimisations to improve the performance of the application.

**Rubric:** 

<img src="https://github.com/samclarkb/Barcode-app-PWA/blob/main/public/images/rubric.png" width="750">

## :bulb: Concept
This server side rendered application allows users to scan barcodes of products from the grocery store. The applictaion is based on the following user story: 'As a foodie, I want to be able to scan a product while shopping so that I can read more information about the product and make a good choice whether it fits my diet.'The user can choose if he wants to scan a barcode or search for a product. 

For the first time I implented a manifest.json file and a service worker. The service worker ensures that the app also can be used when the user is offline. Using the service worker I can store data in the cache. When data is stored in the cache the user can always retrieve data, whether he's online of offline.

Visual representation:

<img src="https://github.com/samclarkb/Barcode-app-PWA/blob/main/public/images/appFilm.gif" width="300">

## :bar_chart: Activity diagram
<img src="https://github.com/samclarkb/Barcode-app-PWA/blob/main/public/images/activityDiagram.png" width="1000">

## :chart_with_upwards_trend: Process

Interested in my process of making the application? Click [here](https://github.com/samclarkb/Barcode-app-PWA/wiki/Proces)!

## 📎 Optimization

There are a vew things that I've implemented to improve the performance of the application:
- Srcset
- minify
- compression
- cache header

Got to [process](https://github.com/samclarkb/Barcode-app-PWA/wiki/Proces) for a description about how I've implemented optimization.

## :memo: Wishlist
There are a few things I haven't done due lack of time:
* Getting a broader understanding of cache headers
* Implemented more optimization methods
* Getting a score of 100 (Lighthouse) on the results page
 
 
## :wrench: Installation

Clone this repository with the following command: 

``` git clone https://github.com/samclarkb/Barcode-app-PWA.git ```


## :mag_right: Recources 
- The Net Ninja. (2019, 3 juni). PWA tutorial for beginners [Video]. YouTube. https://www.youtube.com/playlist?list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7
- web.dev. (z.d.). Let’s build the future of the web, together. Geraadpleegd op 8 april 2022, van https://web.dev/
- Google Chrome Developers. (2020, 10 oktober). Reduce image size: use srcset to automatically choose the right image [Video]. YouTube. https://www.youtube.com/watch?v=SyVKRnusyqM

## :bookmark: License 
Copyright (c) 2021 Sam Clark Boot, [MIT](https://github.com/samclarkb/Barcode-app-PWA/blob/main/LICENSE)

# Hack Reactor FEC Project - Audible Item Page

Our page is a replica of Audible's product page. It:

* Has 100 books with information stored in different databases (Mysql and Mongo)

* Has book data that is always associated with a certain book id

* Plays audio of the book when you click on the book cover icon

* Is hosted on AWS EC2 instances and used S3 buckets

* React

* Node.js

* Express

* MongoDB

* axe DevTools for accessibility (aria roles, alt labels, focus states)

* WCAG - Contrast checker

* mobile and desktop views are styled

* Worked on a team of 4 people over the course of 7 weeks to build this product. Each person was responsible for one to two services. I was responsible for the reviews service. Our github respository is https://github.com/huang-pei-mei


## Product Page Live Demos and Screenshots Below

#### Title Bar
Phone View
<br />
<br />
<a href="url"><img src="Pictures_and_Gifs/phoneTitleBar.png" align="left" height="300px" width="150px">

<a href="url"><img src="Pictures_and_Gifs/DeskTopTitle.png" align="left" height="200px" width="250px">

<a href="url"><img src="Pictures_and_Gifs/TitleBarGif.gif" align="left" float="right" height="250px" width="300px">

<br /> <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /> <br /><br /><br /><br />

#### Aggregate Reviews
Phone View
<br />
<br />
<a href="url"><img src="Pictures_and_Gifs/aggregateReviewsPhoneView.png" align="left" height="300px" width="150px">

<a href="url"><img src="Pictures_and_Gifs/desktopAggregateReviewsAndSumary.png" align="left" height="200px" width="250px">

<a href="url"><img src="Pictures_and_Gifs/aggregateReviewsDesktop.gif" align="left" height="250px" width="300px">


<br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


#### Reviews
Phone View
<br />
<br />
<a href="url"><img src="Pictures_and_Gifs/reviewsWithHeader.png" align="left" height="300px" width="150px"></a>

<a href="url"><img src="Pictures_and_Gifs/ReviewsDesktop.png" align="left" height="200px" width="250px"></a>

<a href="url"><img src="Pictures_and_Gifs/mediaReviews.gif" align="left" height="250px" width="300px"></a>


<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


## Installation

* Code is available to view on github at https://github.com/huang-pei-mei/jm-proxy

```bash
fork 'https://github.com/huang-pei-mei/jm-proxy'
git clone /path/to/clone.git
cd jm-proxy
npm install
npm run server

```

## Usage

```javascript

'http://54.153.95.228/books/10/'  returns product page for 'The Fellowship of the Ring by  J. R. R. Tolkien'

'http://54.153.95.228/books/2/'  returns product page for 'My Own Words by Ruth Bader Ginsburg, Mary Hartnett, Wendy W. Williams'

```

## Contributing
This page is not currently open for contributions

## License
N/A
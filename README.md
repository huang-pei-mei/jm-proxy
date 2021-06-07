# Audible Product Page

Our page is a replica of Audible's product pages. It:

* Has 100 books with information stored in different databases (Mysql  and Mongo)

* Has book data that is always associated with a certain book id

* Plays audio of the book when you click on the book cover icon

* Is hosted on AWS EC2 instances and S3 buckets


## Product Page Live Demos and Screenshots Below

#### Title Bar
<br />
<a href="url"><img src="Pictures_and_Gifs/phoneTitleBar.png" align="left" height="300px" width="150px">

<a href="url"><img src="Pictures_and_Gifs/DeskTopTitle.png" align="left" height="200px" width="250px">

<a href="url"><img src="Pictures_and_Gifs/TitleBarGif.gif" align="left" float="right" height="250px" width="300px">

<br /> <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /> <br /><br /><br /><br />

#### Aggregate Reviews
<a href="url"><img src="Pictures_and_Gifs/aggregateReviewsPhoneView.png" align="left" height="300px" width="150px">

<a href="url"><img src="Pictures_and_Gifs/desktopAggregateReviewsAndSumary.png" align="left" height="200px" width="250px">

<a href="url"><img src="Pictures_and_Gifs/aggregateReviewsDesktop.gif" align="left" height="250px" width="300px">


<br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


#### Reviews

<a href="url"><img src="Pictures_and_Gifs/reviewsWithHeader.png" align="left" height="300px" width="150px"></a>

<a href="url"><img src="Pictures_and_Gifs/ReviewsDesktop.png" align="left" height="200px" width="250px"></a>

<a href="url"><img src="Pictures_and_Gifs/mediaReviews.gif" align="left" height="250px" width="300px"></a>


<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


## Installation

Clone the repository from github onto your local machine to make edits
//page will not run locally with data because the service routes are directed to an EC2 instance

Code is available to view on github at https://github.com/huang-pei-mei/jm-proxy

```bash
git clone 'https://github.com/huang-pei-mei/jm-proxy.git'
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
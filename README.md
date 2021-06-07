# Audible Product Page

Our page is a replica of Audible's product pages. It:

Has 100 books with information stored in different databases (Mysql and Mongo)

Has book data that is always associated with a certain book id

Plays audio of the book when you click on the book cover icon

Is hosted on AWS EC2 instances and S3 buckets


Produce Page Live Demos and Screenshots

#### Title Bar
<br />
<a href="url"><img src="Pictures_and_Gifs/phoneTitleBar.png" align="left" height="400px" width="200px">

<a href="url"><img src="Pictures_and_Gifs/TitleBarGif.gif" align="right" float="right" height="350px" width="400px">

<a href="url"><img src="Pictures_and_Gifs/DeskTopTitle.png" align="center" height="300px" width="350px">

<br /> <br /><br /><br /><br />

#### Aggregate Reviews
<a href="url"><img src="Pictures_and_Gifs/aggregateReviewsPhoneView.png" align="left" height="400px" width="200px">

<a href="url"><img src="Pictures_and_Gifs/desktopAggregateReviewsAndSumary.png" align="left" height="300px" width="350px">

<a href="url"><img src="Pictures_and_Gifs/aggregateReviewsDesktop.gif" align="right" height="350px" width="400px">


<br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


#### Reviews

<a href="url"><img src="Pictures_and_Gifs/reviewsWithHeader.png" align="left" height="400px" width="200px"></a>

<a href="url"><img src="Pictures_and_Gifs/ReviewsDesktop.png" align="left" height="300px" width="350px"></a>

<a href="url"><img src="Pictures_and_Gifs/mediaReviews.gif" align="left" height="350px" width="400px"></a>




<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


It routes calls from the services:
1. Title Service
1. Price Service
1. Summary Service
1. Aggregate Reviews Service
1. Reviews Service

* Requirements

This project require node_modules which can be installed by running *npm install*.

Dependencies
    "@readme/markdown": "^6.27.1",
    "axios": "^0.21.1",
    "default": "^0.1.1",
    "grunt": "^1.4.0",
    "nodemon": "^2.0.7",
    "path": "^0.12.7"

Dev Depenencies
    "grunt-aws": "^0.7.1",
    "grunt-contrib-jshint": "^3.0.0",
    "grunt-s3": "^0.2.0-alpha.3",
    "request": "^2.88.2"

Requires file 'grunt-aws.json' in root with format
{
  key: "<aws key>",
  secret: "<secret aws key>",
  bucket: "<name of s3 bucket>"
}

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## Usage

```javascript

'http://54.153.95.228/books/12/'  returns product page for ...
'http://54.153.95.228/books/10/'  returns product page for

```

## Contributing
This page is not currently open for contributions

## License
N/A
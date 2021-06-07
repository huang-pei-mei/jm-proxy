# Audible Product Page

[public ip](http://ec2-54-153-95-228.us-west-1.compute.amazonaws.com/books/2/)



#### Title Bar
<br />
<a href="url"><img src="Pictures_and_Gifs/phoneTitleBar.png" align="left" height="400px" width="200px">

<a href="url"><img src="Pictures_and_Gifs/TitleBarGif.gif" align="right" float="right" height="350px" width="400px">

<a href="url"><img src="Pictures_and_Gifs/DeskTopTitle.png" align="center" height="300px" width="350px">

<br /> <br /><br /><br /><br />

#### Aggregate Reviews
<a href="url"><img src="Pictures_and_Gifs/aggregateReviewsPhoneView.png" align="left" height="400px" width="200px">

<a href="url"><img src="Pictures_and_Gifs/desktopAggregateReviewsAndSumary.png" align="left" height="350px" width="400px">

<a href="url"><img src="Pictures_and_Gifs/aggregateReviewsDesktop.gif" align="right" height="350px" width="400px">


<br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


#### Reviews

<a href="url"><img src="Pictures_and_Gifs/reviewsWithHeader.png" align="left" height="400px" width="200px"></a>

<a href="url"><img src="Pictures_and_Gifs/ReviewsDesktop.png" align="left" height="300px" width="350px"></a>

<a href="url"><img src="Pictures_and_Gifs/mediaReviews.gif" align="left" height="350px" width="400px"></a>




<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


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


* Recommended modules
* Installation
* Configuration
* Troubleshooting
* FAQ
* Maintainers


# Audible Product Page

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
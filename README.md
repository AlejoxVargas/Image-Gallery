# Pixelejo

![Project Cover Image](https://github.com/BEPb/BEPb/blob/main/src/header_.png?raw=true)

[![GitHub stars](https://img.shields.io/github/stars/AlejoxVargas/Image-Gallery.svg)](https://github.com/AlejoxVargas/Image-Gallery/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/AlejoxVargas/Image-Gallery.svg)](https://github.com/AlejoxVargas/Image-Gallery/network)
[![GitHub license](https://img.shields.io/github/license/AlejoxVargas/Image-Gallery.svg)](https://github.com/AlejoxVargas/Image-Gallery/blob/main/LICENSE)
![GitHub last commit](https://img.shields.io/github/last-commit/AlejoxVargas/Image-Gallery.svg)
![GitHub issues](https://img.shields.io/github/issues/AlejoxVargas/Image-Gallery.svg)

## Index

- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [API](#usage)
- [Contribution](#contribution)
- [License](#license) 
![GIF](https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif)

- <!---skils for the project--->

| **Language / IDE**                               [![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![VS Code](https://img.shields.io/badge/VS_Code-blue)](https://code.visualstudio.com/)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
| **Domain Knownledge**                            [![Software Development Badge](https://img.shields.io/badge/-Software%20Development-FF6600?style=flat&logoColor=white)](https://github.com/search?q=user%3ABEPb&type=Repositories)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
| **OS**                                           <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/b44114213a5a462903bd69611bb6846f1dc41fe6f3230bd37c67c3d4eb65f08c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d57696e646f77732d626c61636b3f7374796c653d666c61742d737175617265266c6f676f3d77696e646f7773266c6f676f436f6c6f723d626c7565"><img src="https://camo.githubusercontent.com/b44114213a5a462903bd69611bb6846f1dc41fe6f3230bd37c67c3d4eb65f08c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d57696e646f77732d626c61636b3f7374796c653d666c61742d737175617265266c6f676f3d77696e646f7773266c6f676f436f6c6f723d626c7565" alt="Windows" data-canonical-src="https://img.shields.io/badge/-Windows-black?style=flat-square&amp;logo=windows&amp;logoColor=blue" style="max-width: 100%;"></a> <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/9c4bc049e33f41f122342a1714ccf872c34098a9f2c593c33c2322cf0129fa04/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d5562756e74752d626c61636b3f7374796c653d666c61742d737175617265266c6f676f3d7562756e7475"><img src="https://camo.githubusercontent.com/9c4bc049e33f41f122342a1714ccf872c34098a9f2c593c33c2322cf0129fa04/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d5562756e74752d626c61636b3f7374796c653d666c61742d737175617265266c6f676f3d7562756e7475" alt="Ubuntu" data-canonical-src="https://img.shields.io/badge/-Ubuntu-black?style=flat-square&amp;logo=ubuntu" style="max-width: 100%;"></a>                                                                                                                                                                                                                                                                           
| **Tools & Platform**                             ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

<!-- GitHub stats graph -->

## Description

Your Project Name is a web gallery application that uses the Pexels API to display a curated collection of high-quality images. This project is built with HTML, CSS, and JavaScript, providing a simple and elegant user interface to browse and explore beautiful images.


## Features

- Responsive design for various devices.
- Fetch and display images from the Pexels API.
- Lightbox for a detailed view of images.
- Download images directly from the gallery.

## Technologies

- HTML
- CSS
- JavaScript

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AlejoxVargas/Image-Gallery.git

![Image GitHub](https://media0.giphy.com/headers/GitHub/w8ZJLtJbmuph.gif)


## Getting Started 🚀
**🌟 API Readme 🌟**

To get started with PhotoEase API, follow these simple steps:

### 1. Obtain Pexels API Key 🔑

Sign up on the [Pexels website](https://www.pexels.com/api/) to obtain your API key. This key is required for authentication to access the PhotoEase API.

### 2. Include API Key in Requests 📡

In all your API requests, include your Pexels API key in the `Authorization` header.

## 3. Explore Curated Photos 📸
GET https://api.pexels.com/v1/curated?page=1&per_page=15
Authorization: YOUR_PEXELS_API_KEY

```http
GET https://api.pexels.com/v1/curated?page=1&per_page=15
Authorization: YOUR_PEXELS_API_KEY
{
  "page": 1,
  "per_page": 15,
  "photos": [
    {
      "id": 123,
      "src": {
        "large2x": "https://example.com/photo1_large.jpg",
        "original": "https://example.com/photo1_original.jpg"
      },
      "photographer": "John Doe"
    },
    // ... more photos
  ]
}
```
## API Endpoints 🚧
Get Curated Photos 🌐
Retrieve curated high-quality photos.

Endpoint: /curated
Method: GET
Parameters:
page (optional): The page number of the results (default is 1).
per_page (optional): Number of photos per page (default is 15, maximum is 80).
Response 🎉
The API response includes a paginated list of curated photos. Each photo object contains the following information:

id: Unique identifier for the photo.
src: Object containing URLs for different photo sizes.
Example Usage 🚀
Here's an example of how you can use the PhotoEase API in JavaScript:
```
const apiKey = 'YOUR_PEXELS_API_KEY';
const page = 1;
const perPage = 15;

fetch(`https://api.pexels.com/v1/curated?page=${page}&per_page=${perPage}`, {
  headers: {
    Authorization: apiKey
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data.photos);
    // Process the retrieved photos as needed
  })
  .catch(error => console.error('Error fetching curated photos:', error));
```
Contributing 🤝
We welcome contributions! If you have suggestions, find issues, or want to add features, please feel free to contribute.

License 📄
This project is licensed under the [Tsjy4snA43ztTFwJW2xAz7t6aJxTnS3L5rZUM72gJ2ZOIuUyNlJUMrXW] - see the LICENSE file for details.
Documentatio: [https://www.pexels.com/api/documentation/]

Enjoy using PhotoEase API for seamless access to a curated collection of captivating photos! 🌈✨


## License

This project is under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

![Image GitHub](https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif?w=430&h=230&crop=1)

# node-ifsc

Get your bank branch details just by providing IFSC.

## Getting Started

I'm using RazorPay API for this package.

### Prerequisites

To install node-ifsc , you need node.js and npm.

### Installing

After That run this command in terminal

```
npm install --save node-ifsc

```
in which project directory you're working on.


## Usage

```
var getIFSC = require('node-ifsc');

let ifsc = 'UTIB0000236'; // IFSC of your desired bank

(async() => {
    const data = await getIFSC(ifsc); // function calling.
    console.log(data);
})();

```

## Author

* **Abijit Biswas** - [abijitb](https://github.com/abijitb)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

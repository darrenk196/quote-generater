# Quote Generator

This is a web application that generates random quotes from an external API and allows users to share them on Twitter. It's a simple project designed to demonstrate the use of asynchronous JavaScript and the Fetch API.

## Features

- Generates a random quote each time the "New Quote" button is clicked
- Displays the author of the quote (if available)
- Adjusts the font size of long quotes to prevent overflow
- Allows users to share the quote on Twitter with the click of a button

## Usage

To use this application, simply open the `index.html` file in your web browser. Click the "New Quote" button to generate a new quote, or click the Twitter icon to share the current quote on Twitter.

## API

This application uses the [quotes-api](https://github.com/jacintodesign/quotes-api) created by Jacinto Design to generate the random quotes. The API returns an array of quote objects with the following properties:

- `text`: The text of the quote
- `author`: The author of the quote (if available)

## Credits

This application was created by Darren Kelly. The quote API was created by Jacinto Design.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

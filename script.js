// get quotes from API
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const loader = document.getElementById("loader");
const quoteContainer = document.getElementById("quote-container");
const quotes = (loader.hidden = true);
const showLoadingSpinner = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};
const removeLoadingSpinner = () => {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
};

const getQuotes = async () => {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);

    apiQuotes = await response.json();

    return apiQuotes;
  } catch (error) {
    // Catch Error Here
    console.error(error);
    quoteElement.innerHTML = "Whoops, no quotes! something went wrong!";
    authorElement.innerHTML = "A Very Sad Developer";
  }
};

const newQuote = async () => {
  showLoadingSpinner();
  const quotesArray = await getQuotes();
  // Pick a random quote from apiQuotes array
  const quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
  if (!quote.author) {
    authorElement.innerHTML = "Unknown";
  } else {
    authorElement.innerHTML = quote.author;
  }
  if (quote.text.length > 120) {
    quoteElement.classList.add("long-quote");
  } else {
    quoteElement.classList.remove("long-quote");
  }
  quoteElement.innerHTML = quote.text;
  removeLoadingSpinner();
};

// Tweet Quote
const tweetQuote = () => {
  // Create the tweet text
  const tweetText = `${quoteElement.textContent} - ${authorElement.textContent}`;

  // Encode the tweet text
  const encodedTweetText = encodeURIComponent(tweetText);

  // Open a new window with the pre-populated tweet
  window.open(
    `https://twitter.com/intent/tweet?text=${encodedTweetText}`,
    "_blank"
  );
};

document.getElementById("new-quote").addEventListener("click", newQuote);
document.getElementById("twitter").addEventListener("click", tweetQuote);
newQuote();

const quotes = [
    {
    quote: "We're all travelling through time together, every day of our lives. All we can do is so our best to relish this remarkerable ride.",
    movie: "About Time"
    },
    {
    quote: "That's what I love about music. All these banalities suddenly turn into beautiful pearls.",
    movie: "Begin Again"
    },
    {
    quote: "Things that makes me who I am make me special.",
    movie: "Winnie-the-Pooh"
    },
    {
    quote: "Do not live in the future, instead reside in the present.",
    movie: "Snoopy"
    },
    {
    quote: "Success is not given for free. You have to be able to do anything for your goals.",
    movie: "Coco"
    },
    {
    quote: "After a hot summer, that seen unforgetable there is definitely autumn.",
    movie: "500 Days of Summer"
    },
    {
    quote: "Life is simple , but we tend to complicate matters, just say what makes you happy, and you set!",
    movie: "The Notebook"
    },
    {
    quote: "Experience never gets old. Experience never goes out of fashion.",
    movie: "The Intern"
    },
    {
    quote: "This part of my life, this little part, is called happiness.",
    movie: "The Pursuit of Happyness"
    },
    {
    quote: "Who is it that I aspire to be? That is the question that we should be asking ourselves all the time.",
    movie: "Wonder"
    }
];

const quote = document.querySelector("#quote span:first-child");
const movie = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
movie.innerText = todaysQuote.movie;
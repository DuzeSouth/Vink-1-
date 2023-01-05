const QUOTEBANK = [
  {
    quote:"We change people through conversation, not through censorship.",
    author:"Jay-z"
  },
  {
    quote:"Jealousy’s a weak emotion.",
    author:"Jay-z"
  },
  {
    quote:"Rosa Parks sat so Martin Luther King could walk. Martin Luther King walked so Obama could run. Obama's running so we all can fly",
    author:"Jay-z"
  },
  {
    quote:"Identity is a prison you can never escape, but the way to redeem your past is not to run from it, but to try to understand it, and use it as a foundation to grow.",
    author:"Jay-z"
  },
  {
    quote:"If you don't know where you make your mistakes, that's your worst mistake: not knowing where your mistakes are at.",
    author:"Meek-Mill"
  },
  {
    quote:"I know all I really wanna do is get money and take care of my family.",
    author:"Meek-Mill"
  },
  {
    quote:"People say money ain't nothing; money is basically everything.",
    author:"Meek-Mill"
  }
]

window.onload = init;
function init(){
generateQuote()
}
function generateQuote(){
  let quoteSize = QUOTEBANK.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTEBANK[randomIndex];
  console.log("Quote Generated")
  document.getElementById("text").innerText =randomQuoteData.quote;
    document.getElementById("author").innerText =randomQuoteData.author;;
}

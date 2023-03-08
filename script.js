const quotes = [
    "Believe you can and you're halfway there.",
    "Do what you can, with what you have, where you are.",
    "Be yourself; everyone else is already taken.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "The only way to do great work is to love what you do.",
    "You miss 100% of the shots you don’t take.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "The best way to predict the future is to invent it.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The only thing necessary for the triumph of evil is for good men to do nothing.",
    "Be the change you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "Life is like a camera. Focus on the good times, develop from the negatives, and if things don't work out, take another shot.",
    "Happiness is not something ready made. It comes from your own actions.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Don't cry because it's over, smile because it happened.",
    "Success is stumbling from failure to failure with no loss of enthusiasm.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "I have learned over the years that when one's mind is made up, this diminishes fear.",
    "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    "What we think, we become.",
    "The mind is everything. What you think you become.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "If you don't stand for something you will fall for anything.",
    "Life is a journey, and if you fall in love with the journey, you will be in love forever.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "You can have everything in life you want, if you will just help other people get what they want.",
    "It does not matter how slowly you go as long as you do not stop.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "If opportunity doesn't knock, build a door.",
    "Life is like a coin. You can spend it any way you wish, but you only spend it."
      
  ];
  
  const quoteElement = document.getElementById("quote");
  const generateButton = document.getElementById("generate-btn");
  const container = document.querySelector(".container");
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
    const randomColorIndex = Math.floor(Math.random() * 5);
    const randomColorClass = `background-${["blue", "red", "green", "yellow", "purple"][randomColorIndex]}`;
    container.className = `container ${randomColorClass}`;
  }
  
  generateButton.addEventListener("click", generateQuote);
  
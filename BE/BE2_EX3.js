const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const inputs = [
    {
        question: 'What are you?',
        answer: 'Just a bot'
    },
    {
        question: 'is it working?',
        answer: 'The bot is working'
    },
    {
        question: 'who am I?',
        answer: 'You should know that'
    },
    {
        question: 'Am I alone?',
        answer: 'BOOOOO'
    },
];
function chatbot() {
    reader.question('User: ', userInput => {
        const exitCommand = ['exit', 'quit'];
        if (exitCommand.includes(userInput.toLowerCase())) {
            console.log('Chatbot: Goodbye!');
            reader.close();
            return;
        }
        const q = inputs.find(qaPair => qaPair.question.toLowerCase() === userInput.toLowerCase());
        if (q) {
            console.log('Chatbot:', q.answer);
        } else {
            console.log('Chatbot: Sorry, I don\'t understand. Can you please rephrase your question?');
        }
        chatbot();
    });
}
console.log('Chatbot: Hello! How can I Help you?');
chatbot();
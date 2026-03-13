import './App.css';
import { useState } from 'react';

function App() {
    const quotes = [
        'Сначала npm install, потом паника',
        'Каждый баг — это новая фича',
        'Если работает — не трогай',
        'Сегодня ты не баг, ты фича',
    ];

    const [quote, setQuotes] = useState(quotes[0]);

    setInterval(() => {
        let index = Math.floor(Math.random(0, 3) * quotes.length) / setQuotes(quotes[index]);
    }, 5000);

    return (
        <div className="App">
            <header className="App-header">
                <h2>Рандомные цитаты</h2>
                <h1>{quote}</h1>
                <p>Обновляются каждые 5 секунд</p>
            </header>
        </div>
    );
}

export default App;

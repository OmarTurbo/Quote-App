function randomQuotes() {
    var arrayofQuotes = [
        {Quotes:`"Be yourself; everyone else is already taken."`,
        auther: `-- Oscar Wilde`
        },
        {
            Quotes:`"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
                `,
        auther: `-- Marilyn Monroe`
        },
        {
            Quotes:`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
            
                `,
        auther: `-- Albert Einstein`
        },
        {
            Quotes:`“So many books, so little time.”
            `,
        auther: `--Frank Zappa`
        },
        {
            Quotes:`“A room without books is like a body without a soul.”
            `,
        auther: `-- Marcus Tullius Cicero`
        },
        {
            Quotes:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
            `,
        auther: `-- Bernard M. Baruch`
        },
        {
            Quotes:`“You've gotta dance like there's nobody watching,
            Love like you'll never be hurt,
            Sing like there's nobody listening,
            And live like it's heaven on earth.”`,
        auther: `-- William W. Purkey`
        },
        {
            Quotes:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
            `,
        auther: `-- Dr. Seuss`
        },
        {
            Quotes:`“You only live once, but if you do it right, once is enough.”
                `,
        auther: `-- Mae West`
        },  
    ]


    var Quotes = parseInt(arrayofQuotes.length * Math.random())
    document.getElementById("quote").innerHTML = arrayofQuotes[Quotes].Quotes;
    document.getElementById("auther").innerHTML = arrayofQuotes[Quotes].auther;
}
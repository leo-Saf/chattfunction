Det här är en chat-app som använder sig av React och Chat Engine för att möjliggöra realtidskommunikation mellan användare.

***Installation***

**Backend**

1- Navigera till projektets backend-mapp: cd chattfunction/backend

2- Installera beroenden: 'npm install'

3- Starta backend-servern: 'npm start'

**Frontend**

1- Klona projektet från Github: git clone https://github.com/leo-Saf/chattfunction.git

2- Navigera in i projektets frontend-mapp: cd chattfunction/frontend

3- Installera beroenden: 'npm install'

4- Starta frontend-applikationen: 'npm run dev'

***Användning***

1- Öppna webbläsaren och gå till http://localhost:3000.

2- På inloggningssidan, skriv in ditt användarnamn och klicka på "Enter".

3- Du kommer att dirigeras till en sida med en lista över alla tillgängliga chattgrupper.

4- Klicka på en chattgrupp för att gå med i den.

5- Skriv meddelanden i chattgruppen och se när andra användare skriver tillbaka.

***Tekniker***

**Frontend**

* React

* Axios

* react-chat-engine-pretty

* CSS

**Backend**

* Node.js

* Express

* Axios

* ChatEngine API

***Beskrivning av koden***

**'App.js'**

App.js är huvudkomponenten i appen som renderar antingen AuthPage-komponenten eller ChatsPage-komponenten
beroende på om användaren är inloggad eller inte.

**'AuthPage.js'**

AuthPage.js är komponenten där användaren kan logga in i appen genom att välja ett användarnamn.
När användaren skickar in användarnamnet görs en POST-förfrågan till servern på http://localhost:3001/authenticate 
och om allt går bra sparas användarens uppgifter i appens state.

**'ChatsPage.js'**

ChatsPage.js är komponenten där användaren kan se sina aktiva chattar.
Den använder sig av react-chat-engine-advanced-paketet för att visa upp användarens chattar och MultiChatWindow-komponenten
för att rendera själva chattfönstren.

**'PrettyChatWindow.js'**

PrettyChatWindow.js är en variant av MultiChatWindow-komponenten som är mer visuellt tilltalande.
Den använder sig av react-chat-engine-pretty-paketet för att styla chattfönstren.

**'server.js'**

server.js är serverkoden som hanterar autentiseringslogiken.
När en användare skickar in sitt användarnamn görs en PUT-förfrågan till Chat Engine API:et för att skapa en ny användare med det användarnamnet.
Om allt går bra returneras användarens uppgifter som en JSON-respons.

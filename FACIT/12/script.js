// A)   Skriv en funktion som tar in två texter som argument.
//      Funktionen ska sedan skapa och returnera en paragraf (p-tag) innehållande
//      dessa två texter, alltså text1 + text2.
//      Varje paragraf ska också få css-klassen "album".

function returnsAPtag(text1, text2) {
  let myP = document.createElement("p");
  myP.classList.add("album");
  myP.innerText = "Title:\n" + text1 + "\n\n" + "Body:\n" + text2;

  return myP;
}

// B)   Skriv en funktion som tar in en paragraf (p-tag) som argument
//      och lägger till den som barn till elementet med id: "albums".
function addAlbums(aPTag) {
  document.querySelector("#albums").appendChild(aPTag);
}

// C)   Hämta alla poster från https://jsonplaceholder.typicode.com/posts.
//      Använd sedan funktionerna du skapat i A och B för att skapa en
//      paragraf (p-tag) för varje post och lägg in i DOM:en.
//      De texter från varje post som ska vara med i paragraferna är title och body.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((allUsers) => {
    allUsers.forEach((user) => {
      addAlbums(returnsAPtag(user.title, user.body));
    });
  });

const projectsText = {
  githubProject: [
    `This React-based application strives to emulate GitHub's functionalities, leveraging the API provided by GitHub itself.`,
    `The main screen features a search bar where users can search for a GitHub user.`,
    `The dropdown displays the top 5 results that match the entered text. Upon selecting a user, the application navigates to a screen presenting detailed information about the user's GitHub profile.`,
    "Within the user profile screen, there is a dedicated section for repositories. Clicking on the repository category reveals a comprehensive list of all projects associated with that user.",
    "Selecting a specific project opens a detailed view, showcasing various aspects of the project. A notable feature is the ability to navigate through project folders and even open code files for detailed examination.",
  ],
  travelApp: [
    "This React Native application serves as a comprehensive travel companion with a primary focus on location exploration using an external API.",
    "The app dynamically generates fictional excursions based on identified locations. Upon launch, users are greeted with a welcoming splash screen, leading to the main screen.",
    `On the main screen, users can search for desired locations, with multiple matching results displayed in response to entered search terms. The autocomplete feature suggests location names as users type.`,
    `Once a specific location is selected from the search results, detailed excursion information is presented on a dedicated screen. Here, users can also save the chosen location to their favorites using the 'Add to Favorites' button.`,
    `The main screen additionally features category buttons for easy exploration of various travel options. Upon selecting a specific category, the app displays the top 10 results within that category. The 'Favorites' button on the main screen provides quick access to all saved favorite locations.`,
  ],
  pokemonGame: [
    "This React-based project introduces a mini-game centered around Pokémon, catering to enthusiasts familiar with the Pokémon series.",
    `The main screen features a menu button, allowing users to access the game rules or view the complete list of Pokémon. Additionally, the main screen includes a 'Start Game' button, which, when selected, transports the user to the game arena.`,
    `In the game arena, two cards with randomly generated Pokémon are presented, prompting players to choose which Pokémon would win the battle. After the first three battles, the 'End Game' button appears, providing players with the option to conclude the game.`,
    "Upon pressing this button, a screen emerges, offering players the chance to double their points by correctly guessing the name of the displayed Pokémon.",
  ],
  mathGame: [
    "This game is going to highlight the usage of timing events as well as procedurally generating random, correct and incorrect, math equations.",
    "You’re also able to navigate different views within this game container.",
    "You’re starting on a splash screen and you have some radio buttons. This allows you to select one type of round that you want to try. You can also see the best score for each category.",
    " After you highlighted a category and clicked the start button you will have a screen with a certain number of multiplication equations, depending on the category you have selected.",
    "For each math equation, you will need to choose whether it is correct or incorrect.",
  ],
};

const projectsContent: {
  [key: string]: { imagePath: string; scale: "landscape" | "portrait" }[];
} = {
  githubProject: [
    { imagePath: "./githubApp/landingPage.gif", scale: "landscape" },
    { imagePath: "./githubApp/projectMenu.gif", scale: "landscape" },
    { imagePath: "./githubApp/codeScreen.png", scale: "landscape" },
    { imagePath: "./githubApp/codeEditorScreen.png", scale: "landscape" },
    { imagePath: "./githubApp/commitsScreen.png", scale: "landscape" },
  ],
  travelApp: [
    { imagePath: "./travelApp/landingPage.png", scale: "portrait" },
    { imagePath: "./travelApp/loginPage.png", scale: "portrait" },
    { imagePath: "./travelApp/searchBar.png", scale: "portrait" },
    { imagePath: "./travelApp/homePage.png", scale: "portrait" },
    { imagePath: "./travelApp/locationCard.png", scale: "portrait" },
    { imagePath: "./travelApp/profilePage.png", scale: "portrait" },
  ],
  pokemonGame: [
    { imagePath: "./pokemonGame/landingPage.jpg", scale: "landscape" },
    { imagePath: "./pokemonGame/menuBar.jpg", scale: "portrait" },
    { imagePath: "./pokemonGame/rulesMenu.jpg", scale: "landscape" },
    { imagePath: "./pokemonGame/pokemonList.jpg", scale: "landscape" },
    { imagePath: "./pokemonGame/arenaBattle.jpg", scale: "landscape" },
    { imagePath: "./pokemonGame/endGame.jpg", scale: "landscape" },
  ],
  mathGame: [
    { imagePath: "./mathGame/landingPage.jpg", scale: "portrait" },
    { imagePath: "./mathgame/mathGenerator.gif", scale: "landscape" },
  ],
};

export const projects: {
  [key: string]: {
    text: string[];
    content: { imagePath: string; scale: "landscape" | "portrait" }[];
  };
} = {
  github_Project: {
    text: projectsText.githubProject,
    content: projectsContent.githubProject,
  },
  travel_App: {
    text: projectsText.travelApp,
    content: projectsContent.travelApp,
  },
  pokemon_Game: {
    text: projectsText.pokemonGame,
    content: projectsContent.pokemonGame,
  },
  math_Game: { text: projectsText.mathGame, content: projectsContent.mathGame },
};

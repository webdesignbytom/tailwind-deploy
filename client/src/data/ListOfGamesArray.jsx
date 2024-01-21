import MainGameImage from '../assets/images/general/games.jpg';

export const gamesForMainDisplayData = [
  {
    id: 0,
    gameName: 'Bio Clicker Idle Game',
    gameGenre: 'Idle Clicker',
    gameImageUrl: MainGameImage,
    gameDescription: 'A fun idle clicker game to help pass the time. Evolve colonies of algae to create bio fuel and build a empire using the power of bio fuel.',
    badgesAvailable: true,
    hasLeaderboard: true,
    gameEndpointUrl: '/games/bio-clicker/in-game'
  },
  {
    id: 1,
    gameName: 'Petigotchi',
    gameGenre: 'Pet',
    gameImageUrl: MainGameImage,
    gameDescription: `A fun pet game similar to a tamigotchi from the 90's! Take care of your animated pet and help him grow and learn. With many pet types to choose from.`,
    badgesAvailable: true,
    hasLeaderboard: true,
    gameEndpointUrl: '/games/petigotchi/in-game'
  },
  {
    id: 2,
    gameName: 'Word Games',
    gameGenre: 'Puzzle',
    gameImageUrl: MainGameImage,
    gameDescription: 'We have various word games from crosswords to anograms. All intresting little puzzles with daily scores and challenges to keep your mind sharp',
    badgesAvailable: true,
    hasLeaderboard: true,
    gameEndpointUrl: '/games/word-games/in-game'
  },
  {
    id: 3,
    gameName: 'Eco Town',
    gameGenre: 'Town Builder',
    gameImageUrl: MainGameImage,
    gameDescription: 'Welcome to EcoTown, soon to be run by you the new mayor who is going to rebuild from the ground up to create a paradise for people and animals.',
    badgesAvailable: true,
    hasLeaderboard: true,
    gameEndpointUrl: '/games/eco-town/in-game'
  },
  {
    id: 4,
    gameName: 'Quizzes',
    gameGenre: 'Puzzle',
    gameImageUrl: MainGameImage,
    gameDescription: 'Our online daily and weekly quiz events for all our members to take part in. Their is a leaderboard and a yearly winner with the most points will be rewarded.',
    badgesAvailable: true,
    hasLeaderboard: true,
    gameEndpointUrl: '/games/quizzes/in-game'
  },
];

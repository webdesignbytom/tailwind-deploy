import TempImage from '../assets/images/general/games.jpg'
import StarsImage from '../assets/images/myecohome/stars_above_me.png'
import SketchPad from '../assets/images/myecohome/sketch_pad.png'
import NewsUpdates from '../assets/images/myecohome/news_updates.png'
import MyeaLogo from '../assets/images/logos/my_eco_app_main_logo.svg'
import ClassicGames from '../assets/images/myecohome/classic_games.png'
import DailyStuff from '../assets/images/myecohome/daily_stuff.png'
import MirrorHome from '../assets/images/myecohome/mirror_home.png'
import SearchHome from '../assets/images/myecohome/search_home.png'

export const myecohomeOptionsArray = [
    {
      title: 'Search Home',
      content: 'A search bar of your choice which earns through use, and as many adverts as you select.',
      image: SearchHome,
      url: '/myecohome/search-home'
    },
    {
      title: 'Mirror Home',
      content: 'A home page that looks like a mirror, great for just before a zoom meeting.',
      image: MirrorHome,
      url: '/myecohome/mirror-home'
    },
    {
      title: 'Myecoapp Home',
      content: 'A version of our app main page',
      image: MyeaLogo,
      url: '/myecohome/myea-home'
    },
    {
      title: 'Classic Games',
      content: 'Open up and play a game',
      image: ClassicGames,
      url: '/myecohome/classic-games'
    },
    {
      title: 'Custom...',
      content: 'Create your own, drag and drop to design features for your own home page',
      image: TempImage,
      url: '/myecohome/custom'
    },
    {
      title: 'News Updates Home',
      content: 'A new page of people who pay us to list their news',
      image: NewsUpdates,
      url: '/myecohome/myea-news-home'
    },
    {
      title: 'Sketchpad Home',
      content: 'If you need to draw something really quick for fun or making a note, just click your home button',
      image: SketchPad,
      url: '/myecohome/sketch-home'
    },
    {
      title: 'Stars Above Me',
      content: 'See a enchanting view of the stars that are directly above you right now, day or night. See the constilations as they slowly drift across the screen. ',
      image: StarsImage,
      url: '/myecohome/sketch-home'
    },
    {
      title: 'Dailys Home',
      content: 'Enjoy your selection of daily facts, quotes, songs to try, places to see and much more. You can choose from a huge number of settings ',
      image: DailyStuff,
      url: '/myecohome/dailys-home'
    },
  ]
import MainController from './controllers/MainController.js'

const tag = '[app]'

document.addEventListener('DOMContentLoaded', () => {
   console.log(tag, 'DOMContentLoaded')
   MainController.init();
});
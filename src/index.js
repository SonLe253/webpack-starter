import { Header } from './app/header';
import { Footer } from './app/footer';
import '../src/style.css';
import '../src/app/styles/scss/main.scss';

let header = new Header();
let firstHeading = header.getFirstHeading();

let footer = new Footer();
let footerText= footer.getFooterText();

console.log(firstHeading);
console.log(footerText);
import { Header } from './app/header';
import { Footer } from './app/footer';

let header = new Header();
let firstHeading = header.getFirstHeading();

let footer = new Footer();
let footerText= footer.getFooterText();

console.log(firstHeading);
console.log(footerText);
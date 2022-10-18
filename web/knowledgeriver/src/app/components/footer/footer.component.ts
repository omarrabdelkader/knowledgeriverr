import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  facebookIcon = faFacebook;
  twitterIcon = faTwitter;
  pinterestIcon = faPinterest;
  instagramIcon = faInstagram;
  constructor() {}

  ngOnInit(): void {}
}

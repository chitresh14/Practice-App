import { Component } from '@angular/core';
import { faHome, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  homeIcon = faHome;
  emailIcon = faEnvelope;
   phoneIcon = faPhoneAlt;
}

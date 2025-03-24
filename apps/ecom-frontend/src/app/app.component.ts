import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';






@Component({
  imports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);
  ngOnInit(): void {
    this.initFontAwesome();  
  }
  private initFontAwesome(){
    this.faConfig.defaultPrefix = 'far';
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

}
  
  


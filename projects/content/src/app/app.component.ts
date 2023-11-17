import { Component, HostBinding, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonModule } from '@angular/common';
import { DesignService } from '@test-frontend/shared/data';
import { Theme } from './interfaces/theme.interface';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, CommonModule, RouterModule],
  selector: 'test-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {



  constructor(private DesignService: DesignService, private router: Router) { }

  isShowMenuMobile: boolean = true;
  isShowMenuTablet: boolean = true;
  isShowMenuGestion: boolean = false;
  stylesJson$ = this.DesignService.stylesJson$;
  suscriptionTheme!: Subscription;


  @HostBinding("style.--ngx-color-primary") primaryColor: string = '';
  @HostBinding("style.--ngx-color-secondary") secondaryColor: string = '';
  @HostBinding("style.--ngx-color-tertiary") tertiaryColor: string = '';

  ngOnInit(): void {
    this.getStylesJson();
    window.addEventListener('dataChanged', (event) => {
      const eventData = (event as CustomEvent).detail;
      this.DesignService.updateStylesJsonData(eventData);
    });
  }

  getStylesJson() {
    this.suscriptionTheme = this.DesignService.stylesJson$.subscribe({
      next: (res: Theme) => {
        if (res) {
          this.primaryColor = res.PrimaryColor;
          this.secondaryColor = res.SecondaryColor;
          this.tertiaryColor = res.TertiaryColor;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  setIsShow() {
    this.isShowMenuMobile = !this.isShowMenuMobile;
  }

  setIsShowTablet() {
    this.isShowMenuTablet = !this.isShowMenuTablet;
  }

  setIsShowGestion() {
    this.isShowMenuGestion = !this.isShowMenuGestion;
  }

  navigateTo(url: string) {
    this.isShowMenuMobile = false;
    this.router.navigate([url]);
  }

  ngOdestroy(): void {
    if (this.suscriptionTheme) {
      this.suscriptionTheme.unsubscribe();
    }
  }
}

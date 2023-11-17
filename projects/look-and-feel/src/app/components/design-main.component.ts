import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignService } from '@test-frontend/shared/data';
import { FormsModule } from '@angular/forms';
import { Theme } from '../interfaces/theme.interface';
import { Subscription } from 'rxjs';
import { ColorType } from '../types/Color-type';


@Component({
  selector: 'test-frontend-design-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './design-main.component.html',
  styleUrls: ['./design-main.component.css'],
})
export class DesignMainComponent {

  constructor(private DesignService: DesignService) { }

  stylesJson$ = this.DesignService.stylesJson$;
  stylesJsonData!: Theme;
  suscriptionThemeDesign!: Subscription;

  @HostBinding("style.--ngx-color-primary") primaryColor: string = '';
  @HostBinding("style.--ngx-color-secondary") secondaryColor: string = '';
  @HostBinding("style.--ngx-color-tertiary") tertiaryColor: string = '';

  ngOnInit(): void {
    this.getStylesJson();
  }

  getStylesJson() {
    this.suscriptionThemeDesign = this.DesignService.stylesJson$.subscribe({
      next: (res: Theme) => {
        if (res) {
          this.stylesJsonData = res;
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

  onColorChange(event: Event, colorType: ColorType): void {
    const inputElement = event.target as HTMLInputElement;
    const colorValue = inputElement.value;

    if (this.stylesJsonData.hasOwnProperty(colorType)) {
      this.stylesJsonData[colorType] = colorValue;
    }

    const customEvent = new CustomEvent('dataChanged', { detail: this.stylesJsonData });
    window.dispatchEvent(customEvent);
    this.DesignService.updateStylesJsonData(this.stylesJsonData);
  }


  saveTheme() {
    this.DesignService.saveTheme(this.stylesJsonData);
  }

  removeTheme() {
    this.DesignService.removeTheme();
  }

  ngOnDestroy(): void {
    if (this.suscriptionThemeDesign) {
      this.suscriptionThemeDesign.unsubscribe();
    }
  }


}

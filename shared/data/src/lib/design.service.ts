import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


interface Theme {
  ProgramId: number,
  ImageBackgroundLogin: string,
  Logo: string,
  PrimaryColor: string,
  SecondaryColor: string,
  TertiaryColor: string,
  FontName: string,
  BackgroundColor: string
}

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private http: HttpClient) {
    this.loadStylesJsonData('assets/lookandfeel.json');
  }

  private stylesJson = new BehaviorSubject<Theme>({
    ProgramId: 0,
    ImageBackgroundLogin: '',
    Logo: '',
    PrimaryColor: '',
    SecondaryColor: '',
    TertiaryColor: '',
    FontName: '',
    BackgroundColor: ''
  });
  stylesJson$: Observable<Theme> = this.stylesJson.asObservable();


  loadStylesJsonData(path: string): void {
    const theme = sessionStorage.getItem('theme');

    if (theme) {
      this.stylesJson.next(JSON.parse(theme));
      return;
    }

    this.http.get<Theme>(path).subscribe({
      next: (data: Theme) => {
        this.stylesJson.next(data);
      },
      error: (error) => {
        console.error('Error al cargar los datos del archivo JSON:', error);
      }
    }

    );
  }

  updateStylesJsonData(updatedData: Theme): void {
    this.stylesJson.next(updatedData);
  }

  saveTheme(theme: Theme): void {
    sessionStorage.setItem('theme', JSON.stringify(theme));
  }

  removeTheme(): void {
    sessionStorage.removeItem('theme');
    this.loadStylesJsonData('assets/lookandfeel.json');
  }


}

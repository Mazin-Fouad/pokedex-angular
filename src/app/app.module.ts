import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { MatInputModule } from '@angular/material/input';
import { CardsGalleryComponent } from './components/cards-gallery/cards-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BackgroundStyleDirective } from './directives/background-style.directive';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    MainSectionComponent,
    NavbarComponent,
    LandingSectionComponent,
    MainSectionComponent,
    SearchSectionComponent,
    CardsGalleryComponent,
    PokemonDetailsComponent,
    BackgroundStyleDirective,
    ProgressbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    FormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

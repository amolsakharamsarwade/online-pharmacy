import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import {RouterLink} from "@angular/router";
import { HomeRedirectPlaceholderComponent } from './components/home-redirect-placeholder/home-redirect-placeholder.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NotificationComponent,
    HighlightDirective,
    FilterPipe,
    PrivacyComponent,
    TermsComponent,
    HomeRedirectPlaceholderComponent
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedModule { }

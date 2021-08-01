import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './layout/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TextFieldModule } from '@angular/cdk/text-field';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FooterComponent } from './layout/footer/footer.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { MenubarComponent } from './layout/menubar/menubar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderFooterLayoutComponent } from './layout/header-footer-layout/header-footer-layout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SettingsComponent,
    MenubarComponent,
    DashboardComponent,
    HeaderFooterLayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    CdkAccordionModule,
    TextFieldModule,
    ScrollingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { HttpClientModule, HttpClient, HttpClientJsonpModule
 } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

//import { MainpageComponent } from './mainpage/mainpage.component'
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material'
import {MatInputModule} from '@angular/material/input'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatSelectModule} from '@angular/material/select'
import { LayoutModule } from '@angular/cdk/layout'
import { VpnserverComponent } from './vpnserver/vpnserver.component';
import { VpnuserdialogComponent } from './vpnuserdialog/vpnuserdialog.component';
import { InstallerComponent } from './installer/installer.component';
import { Installer1Component } from './installer1/installer1.component'
import { Installer2Component } from './installer2/installer2.component';
import { LoaderComponent } from './loader/loader.component';
import { LoggerComponent } from './logger/logger.component';
import { LoglineComponent } from './logline/logline.component';
import { HelpComponent } from './help/help.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlRu } from './app.paginator';
import { WarnDialogComponent } from './warn-dialog/warn-dialog.component';
import { HelpClientComponent } from './help-client/help-client.component';
import { HelpFaqComponent } from './help-faq/help-faq.component'

const appRoutes: Routes = [
  { path: 'help', component: HelpComponent },
  { path: 'load', component: LoaderComponent },
  { path: 'install', component: InstallerComponent },
  { path: 'install1', component: Installer1Component },
  { path: 'install2', component: Installer2Component },
  { path: 'vpn/:code', component: VpnserverComponent },
  { path: '',
    redirectTo: '/load',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/load',
    pathMatch: 'full'
  }
];



@NgModule({
  declarations: [
    AppComponent,
    VpnserverComponent,
    VpnuserdialogComponent,
    InstallerComponent,
    Installer2Component,
    LoaderComponent,
    Installer1Component,
    LoggerComponent,
    LoglineComponent,
    HelpComponent,
    WarnDialogComponent,
    HelpClientComponent,
    HelpFaqComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule

  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlRu}
  ],
  entryComponents: [VpnuserdialogComponent,WarnDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

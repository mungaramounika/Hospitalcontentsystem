import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TreatementsComponent } from './treatements/treatements.component';
import { ResearchesComponent } from './researches/researches.component';
import { TimingsComponent } from './timings/timings.component';
import { NonOperativetreatementsComponent } from './non-operativetreatements/non-operativetreatements.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DoctorComponent } from './doctor/doctor.component';
import { TransforaminalinjectionsComponent } from './transforaminalinjections/transforaminalinjections.component';
import { SurgeryComponent } from './surgery/surgery.component';
import { OpenComponent } from './open/open.component';
import { MinimallyinvasiveComponent } from './minimallyinvasive/minimallyinvasive.component';
import { MicroscopicspinesurgeryComponent } from './microscopicspinesurgery/microscopicspinesurgery.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SpinalinjectionsComponent } from './spinalinjections/spinalinjections.component';
import { SpinalrootblockComponent } from './spinalrootblock/spinalrootblock.component';
import { FacetalrootblockComponent } from './facetalrootblock/facetalrootblock.component';
import { TransforaminalrootblockComponent } from './transforaminalrootblock/transforaminalrootblock.component';
import { OtolaryngologyComponent } from './otolaryngology/otolaryngology.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    BlogComponent,
    ContactsComponent,
    TreatementsComponent,
    ResearchesComponent,
    TimingsComponent,
    NonOperativetreatementsComponent,
    NavbarComponent,
    FooterComponent,
    DoctorComponent,
    TransforaminalinjectionsComponent,
    SurgeryComponent,
    OpenComponent,
    MinimallyinvasiveComponent,
    MicroscopicspinesurgeryComponent,
    SigninComponent,
    SignupComponent,
    SpinalinjectionsComponent,
    SpinalrootblockComponent,
    FacetalrootblockComponent,
    TransforaminalrootblockComponent,
    OtolaryngologyComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

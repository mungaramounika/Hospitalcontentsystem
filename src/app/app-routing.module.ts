import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FacetalrootblockComponent } from './facetalrootblock/facetalrootblock.component';
import { HomeComponent } from './home/home.component';
import { MicroscopicspinesurgeryComponent } from './microscopicspinesurgery/microscopicspinesurgery.component';
import { MinimallyinvasiveComponent } from './minimallyinvasive/minimallyinvasive.component';
import { NonOperativetreatementsComponent } from './non-operativetreatements/non-operativetreatements.component';
import { OpenComponent } from './open/open.component';
import { OtolaryngologyComponent } from './otolaryngology/otolaryngology.component';
import { ResearchesComponent } from './researches/researches.component';
import { ServicesComponent } from './services/services.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SpinalinjectionsComponent } from './spinalinjections/spinalinjections.component';
import { SpinalrootblockComponent } from './spinalrootblock/spinalrootblock.component';
import { SurgeryComponent } from './surgery/surgery.component';
import { TimingsComponent } from './timings/timings.component';
import { TransforaminalinjectionsComponent } from './transforaminalinjections/transforaminalinjections.component';
import { TreatementsComponent } from './treatements/treatements.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'treatements',component:TreatementsComponent,children:[
    {path:'OtolaryngologyComponent',component:OtolaryngologyComponent},
    {path:'transforaminalinjections',component:TransforaminalinjectionsComponent},
    {path:'surgery',component:SurgeryComponent},
    {path:'open',component:OpenComponent},
    {path:'minimallyinvasive',component:MinimallyinvasiveComponent},
    {path:'microscopicspinesurgery',component:MicroscopicspinesurgeryComponent}
  ]},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
  
  {path:'non-operativetreatements',component:NonOperativetreatementsComponent,children:[
    {path:'OtolaryngologyComponent',component:OtolaryngologyComponent},
    {path:'spinalinjections',component:SpinalinjectionsComponent},
    {path:'spinalrootblock',component:SpinalrootblockComponent},
    {path:'facetalrootblock',component:FacetalrootblockComponent},
    {path:'transforaminalrootblock',component:TransforaminalinjectionsComponent}
  ]},
  {path:'researches',component:ResearchesComponent},
  {path:'timings',component:TimingsComponent},
  {path:'blog',component:BlogComponent},
  {path:'contacts',component:ContactsComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashBoardComponent } from './Mycomponents/admin/admin-dash-board/admin-dash-board.component';
import { LoginComponent } from './Mycomponents/login/login.component';
import { SignupComponent } from './Mycomponents/signup/signup.component';
import { AdminDashboardContentComponent } from './Mycomponents/admin/admin-dashboard-content/admin-dashboard-content.component';
import { AppComponent } from './app.component';
import { AllCustomersComponent } from './Mycomponents/admin/all-customers/all-customers.component';
import { RenterDetailsComponent } from './Mycomponents/admin/renter-details/renter-details.component';
import { BikeDetailsComponent } from './Mycomponents/admin/bike-details/bike-details.component';
import { RenterDashboardComponent } from './Mycomponents/Renter/renter-dashboard/renter-dashboard.component';
import { RenterDashboardContentComponent } from './Mycomponents/Renter/renter-dashboard-content/renter-dashboard-content.component';
import { AddBikesComponent } from './Mycomponents/Renter/add-bikes/add-bikes.component';
import { EditBikesComponent } from './Mycomponents/Renter/edit-bikes/edit-bikes.component';
import { BikeDetailComponent } from './Mycomponents/Renter/bike-detail/bike-detail.component';
import { BookingHistoryComponent } from './Mycomponents/admin/booking-history/booking-history.component';
import { RenterProfileComponent } from './Mycomponents/Renter/renter-profile/renter-profile.component';
import { EditProfileComponent } from './Mycomponents/Renter/edit-profile/edit-profile.component';
import { CommentsComponent } from './Mycomponents/Renter/comments/comments.component';
import { CustomerDashboardComponent } from './Mycomponents/Customer/customer-dashboard/customer-dashboard.component';
import { CustomerDashboardContentComponent } from './Mycomponents/Customer/customer-dashboard-content/customer-dashboard-content.component';
import { UpdateCustomerProfileComponent } from './Mycomponents/Customer/update-customer-profile/update-customer-profile.component';
import { CustomerProfileComponent } from './Mycomponents/Customer/customer-profile/customer-profile.component';
import { BikeDataComponent } from './Mycomponents/Customer/bike-data/bike-data.component';
import { RenterBookingHistoryComponent } from './Mycomponents/Renter/renter-booking-history/renter-booking-history.component';
import { CustomerBookingHistoryComponent } from './Mycomponents/Customer/customer-booking-history/customer-booking-history.component';
import { PaymentComponent } from './Mycomponents/Customer/payment/payment.component';
import { FeedbackComponent } from './Mycomponents/admin/feedback/feedback.component';
import { CustomerCommentsComponent } from './Mycomponents/Customer/customer-comments/customer-comments.component';
import { CustomerUpdatepasswordComponent } from './Mycomponents/Customer/customer-updatepassword/customer-updatepassword.component';
import { RenterUpdatepasswordComponent } from './Mycomponents/Renter/renter-updatepassword/renter-updatepassword.component';

const routes: Routes = [
 
  {path: '', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  
  {path:'admin', component:AdminDashBoardComponent,
  children: [
            { path: 'dashboard', component: AdminDashboardContentComponent},
            {path:'', redirectTo:'dashboard', pathMatch: 'full'},
            {path:'dashboard/customerDetails',component:AllCustomersComponent},
            {path:'dashboard/renterDetails',component:RenterDetailsComponent},
            {path:'dashboard/bikeDetails/:id',component:BikeDetailsComponent},
            {path:'dashboard/booking',component:BookingHistoryComponent},
            {path:'dashboard/feedback',component:FeedbackComponent},
    ] 
  },
  {path:'renter',component:RenterDashboardComponent,
  children:[
          { path: 'dashboard', component:RenterDashboardContentComponent},
          {path:'', redirectTo:'dashboard', pathMatch: 'full'},
          {path:'addBikes', component:AddBikesComponent},
          {path:'editBike/:id', component:EditBikesComponent},
          {path:'bike/:id', component:BikeDetailComponent},
          {path:'profile',component:RenterProfileComponent},
          {path:'editProfile/:id', component:EditProfileComponent},
          {path:'comments', component:CommentsComponent},
          {path:'bookingHistory', component:RenterBookingHistoryComponent},
          {path:'updatePassword/:id',component:RenterUpdatepasswordComponent},
  ]
},
  {path:'customer',component:CustomerDashboardComponent,
  children: [
            {path:'dashboard', component:CustomerDashboardContentComponent},
            {path:'', redirectTo:'dashboard', pathMatch: 'full'},
            {path:'profile', component:CustomerProfileComponent},
            {path:'editProfile/:id', component:UpdateCustomerProfileComponent},
            {path:'bikeDetails/:id', component:BikeDataComponent},
            {path:'payment',component:PaymentComponent},
            {path:'customerComments',component:CustomerCommentsComponent},
            {path:'booking', component:CustomerBookingHistoryComponent},
            {path:'updatePassword/:id', component:CustomerUpdatepasswordComponent}
  ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

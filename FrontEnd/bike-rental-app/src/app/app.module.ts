import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Mycomponents/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminDashBoardComponent } from './Mycomponents/admin/admin-dash-board/admin-dash-board.component';
import { SignupComponent } from './Mycomponents/signup/signup.component';
import { SideNavComponent } from './Mycomponents/admin/side-nav/side-nav.component';
import { BodyComponent } from './Mycomponents/admin/body/body.component';
import { AdminDashboardContentComponent } from './Mycomponents/admin/admin-dashboard-content/admin-dashboard-content.component';
import { TopbarComponent } from './Mycomponents/admin/topbar/topbar.component';
import { AllCustomersComponent } from './Mycomponents/admin/all-customers/all-customers.component';
import { RenterDetailsComponent } from './Mycomponents/admin/renter-details/renter-details.component';
import { BikeDetailsComponent } from './Mycomponents/admin/bike-details/bike-details.component';
import { AddBikesComponent } from './Mycomponents/Renter/add-bikes/add-bikes.component';
import { EditBikesComponent } from './Mycomponents/Renter/edit-bikes/edit-bikes.component';
import { RenterDashboardComponent } from './Mycomponents/Renter/renter-dashboard/renter-dashboard.component';
import { RenterProfileComponent } from './Mycomponents/Renter/renter-profile/renter-profile.component';
import { RenterSidenavComponent } from './Mycomponents/Renter/renter-sidenav/renter-sidenav.component';
import { RenterDashboardContentComponent } from './Mycomponents/Renter/renter-dashboard-content/renter-dashboard-content.component';
import { BikeDetailComponent } from './Mycomponents/Renter/bike-detail/bike-detail.component';
import { BookingHistoryComponent } from './Mycomponents/admin/booking-history/booking-history.component';
import { bikeFilterPipe } from './Mycomponents/Renter/renter-dashboard-content/bikeFilter.pipe';
import { EditProfileComponent } from './Mycomponents/Renter/edit-profile/edit-profile.component';
import { CommentsComponent } from './Mycomponents/Renter/comments/comments.component';
import { CustomerSidenavComponent } from './Mycomponents/Customer/customer-sidenav/customer-sidenav.component';
import { CustomerDashboardContentComponent } from './Mycomponents/Customer/customer-dashboard-content/customer-dashboard-content.component';
import { CustomerDashboardComponent } from './Mycomponents/Customer/customer-dashboard/customer-dashboard.component';
import { BikeDataComponent } from './Mycomponents/Customer/bike-data/bike-data.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateCustomerProfileComponent } from './Mycomponents/Customer/update-customer-profile/update-customer-profile.component';
import { CustomerProfileComponent } from './Mycomponents/Customer/customer-profile/customer-profile.component';
import { CustomerBookingHistoryComponent } from './Mycomponents/Customer/customer-booking-history/customer-booking-history.component';
import { RenterBookingHistoryComponent } from './Mycomponents/Renter/renter-booking-history/renter-booking-history.component';
import { PaymentComponent } from './Mycomponents/Customer/payment/payment.component';
import { FeedbackComponent } from './Mycomponents/admin/feedback/feedback.component';
import { CustomerCommentsComponent } from './Mycomponents/Customer/customer-comments/customer-comments.component';
import { CustomerUpdatepasswordComponent } from './Mycomponents/Customer/customer-updatepassword/customer-updatepassword.component';
import { RenterUpdatepasswordComponent } from './Mycomponents/Renter/renter-updatepassword/renter-updatepassword.component';
import {NgxPaginationModule} from 'ngx-pagination';
// import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashBoardComponent,
    SignupComponent,
    SideNavComponent,
    BodyComponent,
    AdminDashboardContentComponent,
    TopbarComponent,
    AllCustomersComponent,
    RenterDetailsComponent,
    BikeDetailsComponent,
    AddBikesComponent,
    EditBikesComponent,
    RenterDashboardComponent,
    RenterProfileComponent,
    RenterSidenavComponent,
    RenterDashboardContentComponent,
    BikeDetailComponent,
    BookingHistoryComponent,
    bikeFilterPipe,
    EditProfileComponent,
    CommentsComponent,
    CustomerSidenavComponent,
    CustomerDashboardContentComponent,
    CustomerDashboardComponent,
    BikeDataComponent,
    UpdateCustomerProfileComponent,
    CustomerProfileComponent,
    CustomerBookingHistoryComponent,
    RenterBookingHistoryComponent,
    PaymentComponent,
    FeedbackComponent,
    CustomerCommentsComponent,
    CustomerUpdatepasswordComponent,
    RenterUpdatepasswordComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

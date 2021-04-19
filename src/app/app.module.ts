import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, EmployeeComponent, EmployeeItemComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

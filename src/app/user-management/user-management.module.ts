import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    ProfileEditComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }

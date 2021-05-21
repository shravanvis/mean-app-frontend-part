import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  userform: FormGroup;
  constructor(private authService: AuthserviceService, private formBuilder: FormBuilder) {
    this.userform = formBuilder.group({
      name: ['']
    })
  }
  users: any = "";

  name: string = '';
  email: string = '';
  Userid: any = '';

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.authService.getAllUsers().subscribe(res => {
      this.users = res.result
      console.log(res)
    })
  }

  submit() {
    const newUser = {
      name: this.name,
      email: this.email
    }

    this.authService.postUser(newUser).subscribe(re => {
      console.log('succesfully posted');
      this.getUser()
    })
  }

  findById(emp: any) {
    this.userform.patchValue(emp)
  }

  updateUser() {
    const updateUser = {
      name: this.name,
      email: this.email
    }
    this.authService.update(this.Userid, updateUser).subscribe(res => {
      console.log('updated')
      this.getUser()
    })
  }

  edit(id: any) {
    console.log(id)
    this.Userid = id
    this.authService.getUserById(id).subscribe(res => {
      this.name = res.result.name
      this.email = res.result.email
    })
  }

  deleteUser(id: any) {
    this.authService.deleteUser(id).subscribe(res => {
      this.getUser();
    })
  }

  getValue() {
    console.log(this.userform.value.name)
  }

  setValue() {
    this.userform.setValue({
      name: "shravan"
    })
  }
}

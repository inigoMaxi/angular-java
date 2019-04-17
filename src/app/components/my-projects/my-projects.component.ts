import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectInterface } from 'src/app/models/project-interface';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private authService: AuthService) { }
  private projects: ProjectInterface;
  ngOnInit() {
    this.getListProject();
  }

  getListProject(): void {
    this.dataApiService
      .getMyProjects(this.authService.getUserId())
      //.subscribe((myProjects) => (console.log(myProjects)));
      .subscribe((myProjects: ProjectInterface) => (this.projects = myProjects));
  }

}

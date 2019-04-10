import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ProjectInterface } from 'src/app/models/project-interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  private projects: ProjectInterface;
  ngOnInit() {
    this.getListProject();
  }

  getListProject(): void {
    this.dataApiService
      .getAllProjects()
      .subscribe((projects: ProjectInterface) => (this.projects = projects));
  }
}

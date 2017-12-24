import { TestBed, inject } from '@angular/core/testing';

import { TeacherListDataServiceService } from './teacher-list-data-service.service';

describe('TeacherListDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherListDataServiceService]
    });
  });

  it('should be created', inject([TeacherListDataServiceService], (service: TeacherListDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});

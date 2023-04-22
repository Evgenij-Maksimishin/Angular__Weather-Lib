import { TestBed } from '@angular/core/testing';

import { WeatherLibService } from './weather-lib.service';

describe('WeatherLibService', () => {
  let service: WeatherLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

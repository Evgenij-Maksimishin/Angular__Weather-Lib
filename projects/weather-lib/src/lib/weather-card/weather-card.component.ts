import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Weather } from '../interfaces/weather.interface';
import { chooseNextPrevious, chooseDayWeek } from '../interfaces/choose.types';

@Component({
  selector: 'lib-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  @Input() weatherData!: Weather[];
  @Output() onChange = new EventEmitter<chooseNextPrevious>()
  @Output() onChangeType = new EventEmitter<chooseDayWeek>()
  @Input() disabledButton: chooseNextPrevious | null = null;

  public menuList: Array<chooseDayWeek> = ['day', 'week'];
  public selectedList!: chooseDayWeek;

  constructor() { }

  ngOnInit(): void {
    this.selectedList = this.menuList[0]
  }

  chooseDay(day: chooseNextPrevious): void {
    this.onChange.emit(day)
  }

  chooseType(type: chooseDayWeek): void {
    this.selectedList = type
    this.onChangeType.emit(type)
  }

  isDisabled(type: chooseNextPrevious): boolean {
    return type === this.disabledButton
  }

  selectIcon(weatherType: string): string {
    switch (weatherType) {
      case 'Clear':
        return 'fa-sun'

      case 'Clouds':
        return 'fa-cloud'

      case 'Snow':
        return 'fa-snowflake'

      default:
        return 'fa-cloud-showers-heavy'
    }
  }

}

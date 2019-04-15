import { Component, OnInit } from '@angular/core';
import { Movies } from '../model/Movies';
import { angularWithWebApiService } from '../services/angularWithWebApi.service';
import { ListHalls } from '../model/listHalls';
import { Movie2Hall } from '../model/movie2Hall';
import { DataSetService } from '../model/DataSetService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public _angularWithWebApiService: angularWithWebApiService, private _router: Router) { }

  moviesList: Array<Movies> = new Array<Movies>();
  movie2Hall: Array<Movie2Hall> = new Array<Movie2Hall>();
  listHalls: Array<ListHalls> = new Array<ListHalls>();
  moviesDisplay: Array<Movies>;
  searchString: string = '';

  ngOnInit() {
    this._angularWithWebApiService.getMoviesList().subscribe((x: DataSetService) => {

      //x.MovieListTable.forEach(item => this.moviesList.push(item));
      //x.MovieListTable.forEach(this.MovieListTablePush);
      for (var i = 0; i < x.MovieListTable.length; i++) {
        let item = x.MovieListTable[i];
        this.MovieListTablePush(item)
      }

      x.ListHallsTable.forEach(item => this.listHalls.push(item));
      x.Movie2HallTable.forEach(item => this.movie2Hall.push(item));
    });
  }

  MovieListTablePush(item: Movies) {
    this.moviesList.push(item);
  }

  onSearchChange($event, searchString) {
    this.moviesDisplay = new Array<Movies>();
    this.moviesList.forEach(movie => {
      if (searchString.length > 0 && movie.MovieName.includes(searchString)) this.moviesDisplay.push(movie);
    })
    debugger;
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}
    
    @Get(':id')
    getMoviesId(@Param('id') id) {
      return this.movieService.getMoviesId(id);
    }

    @Get()
    getMovies() {
      return this.movieService.getMovies();
    }

    /*insertMovie(movie){
      return this.movieService.
    }
    */
}

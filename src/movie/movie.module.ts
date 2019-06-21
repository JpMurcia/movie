import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {movie} from '../../entities/movie';
import { movie_genre } from '../../entities/movie_genre';
import { genre } from '../../entities/genre';

@Module({
  imports:[
    TypeOrmModule.forFeature([movie, movie_genre, genre])
  ],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}

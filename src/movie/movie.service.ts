import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { movie } from '../../entities/movie';
import { movie_genre } from '../../entities/movie_genre';
import { genre } from '../../entities/genre';

@Injectable()
export class MovieService {

    constructor(
        @InjectRepository(movie)
        private readonly movieRepository: Repository<movie>,
        @InjectRepository(genre)
        private readonly genreRepository: Repository<genre>,
        @InjectRepository(movie_genre)
        private readonly movie_genreRepository: Repository<movie_genre>,
      ) { }

    getMoviesId(idp) {
        return this.movie_genreRepository.find({
          relations: ["idMovie", "idGenre"],
          where: { id: idp }
        });
    }
    
    getMovies() {
        return this.movie_genreRepository.find({
          relations: ["idMovie", "idGenre"],
        });
        /*return this.movie_genreRepository.createQueryBuilder()
        .where("id = :id_mo1 or id = :id_mo2", {id_mo1:'1', id_mo2:'2'})
        .execute();*/
    }
      
    insertMovie(movie){
    }
}

import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {movie} from "./movie";
import {genre} from "./genre";


@Entity("movie_genre",{schema:"movie" } )
@Index("FK_movie_genre_movie",["idMovie",])
@Index("FK_movie_genre_genre",["idGenre",])
export class movie_genre {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>movie, movie=>movie.movieGenres,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'id_movie'})
    idMovie:movie | null;


   
    @ManyToOne(type=>genre, genre=>genre.movieGenres,{ onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'id_genre'})
    idGenre:genre | null;

}

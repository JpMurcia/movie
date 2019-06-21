import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {movie_genre} from "./movie_genre";


@Entity("genre",{schema:"movie" } )
export class genre {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"nombre"
        })
    nombre:string;
        

   
    @OneToMany(type=>movie_genre, movie_genre=>movie_genre.idGenre,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    movieGenres:movie_genre[];
    
}

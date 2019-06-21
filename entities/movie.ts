import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {movie_genre} from "./movie_genre";


@Entity("movie",{schema:"movie" } )
export class movie {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:200,
        name:"nombre"
        })
    nombre:string;
        

    @Column("date",{ 
        nullable:false,
        name:"fecha_estreno"
        })
    fecha_estreno:string;
        

    @Column("int",{ 
        nullable:false,
        name:"duracion"
        })
    duracion:number;
        

   
    @OneToMany(type=>movie_genre, movie_genre=>movie_genre.idMovie,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    movieGenres:movie_genre[];
    
}

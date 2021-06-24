import "./Home.css";
import Header from "../../common/header/Header";
import { withStyles } from "@material-ui/core/styles";
import moviesData from "../../assets/moviesData";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import genres from "../../assets/genre";
import artists from "../../assets/artists";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useState} from 'react'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  upcomingMoviesHeading: {
    textAlign: "center",
    background: "#ff9999",
    padding: "8px",
    fontSize: "1rem",
  },
  gridListUpcomingMovies: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%",
  },
  gridListMain: {
    transform: "translateZ(0)",
    cursor: "pointer",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 240,
    maxWidth: 240,
  },
  title: {
    color: theme.palette.primary.light,
  },
});

const Home =(props)=> {

const[movieName,setMovie]=useState('');
const[artistName,setArtist]=useState([]);
const[genreName,setGenre]=useState([]);


    
    const movieNameChangeHandler = (event) => {
        setMovie(event.target.value);
    };

    const genreSelectHandler = (event) => {
        setGenre(event.target.value);
      };
      
    
    const artistSelectHandler = (event) => {
        setArtist(event.target.value);
        
    };

    const movieClickHandler = (movieId) => {
        props.history.push("/movie/" + movieId);
      };
    
        const { classes } = props;

        var filterMovie = moviesData.filter((movie) => {
          return (
            movie.title.toLowerCase() ===  movieName.toLowerCase()||
             artistName.includes(
              movie.artists[0].first_name + " " + movie.artists[0].last_name
            )
          );
        });

        if (movieName.length === 0 && artistName.length === 0) {
          filterMovie = moviesData;
        }

        return (
            <div>
                <Header baseUrl={props.baseUrl} />
                <div id="upcoming-movies">
                    <span>Upcoming Movies</span>
                </div>
                <div>
                    <GridList cols={5} className={classes.gridListUpcomingMovies}>
                        {moviesData.map((tile) => (
                            <GridListTile key={tile.id} className="horizontal-tile">
                                <img
                                    src={tile.poster_url}
                                    alt={tile.title}
                                    className="movie-poster"
                                />
                                <GridListTileBar title={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>

                <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                            {filterMovie.map((movie) => (
                                <GridListTile onClick={() => movieClickHandler(movie.id)} className="released-movie-grid-item"
                                    key={"grid" + movie.id}>
                                    <img
                                        src={movie.poster_url}
                                        className="movie-poster2"
                                        alt={movie.title}
                                    />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={
                                            <span>
                                                Release Date:
                            {new Date(movie.release_date).toDateString()}
                                            </span>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color="textSecondary">
                                        FIND MOVIES BY:
                                    </Typography>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                                    <Input id="movieName" onChange={movieNameChangeHandler} />
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Genres</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox-genre" />}
                                        renderValue={selected => selected.join(',')}
                                        value={genreName}
                                        onChange={genreSelectHandler}>
                                        <MenuItem value="0">None</MenuItem>
                                        {genres.map(genre => (
                                            <MenuItem key={genre.id} value={genre.name}>
                                                <Checkbox checked={genreName.indexOf(genre.name) > -1} />
                                                <ListItemText primary={genre.name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={artistName}
                                        onChange={artistSelectHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {artists.map(artist => (
                                            <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                                                <Checkbox checked={artistName.indexOf(artist.first_name + " " + artist.last_name) > -1}  />
                                                <ListItemText primary={artist.first_name + " " + artist.last_name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="releaseDateStart"
                                        label="Release Date Start"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}

                                    />
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="releaseDateEnd"
                                        label="Release Date End"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}

                                    />
                                </FormControl>
                                <br /><br />
                                <FormControl className={classes.formControl}>
                                    <Button  variant="contained" color="primary">
                                        APPLY
                                    </Button>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        );
}

export default withStyles(styles)(Home)
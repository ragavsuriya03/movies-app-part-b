import React, { useState,useEffect } from 'react';
import Header from '../../common/header/Header';
import moviesData from '../../assets/moviesData';
import Typography from '@material-ui/core/Typography';
import './Details.css';
import YouTube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';

const Details =(props)=>{
    const [state,setState]=useState({});
const [ratings,setRatings]=useState([{starIcons:[{id: 1, stateId: "star1",color: "black"},
                    {id: 2,stateId: "star2",color: "black"},
                    {id: 3,stateId: "star3",color: "black"},
                    {id: 4,stateId: "star4",color: "black"},
                    {id: 5,stateId: "star5",color: "black"}]}]);
                  
    let filterMovie=state;  
useEffect(()=>{
        
        filterMovie= moviesData.filter((mov) => {
            return mov.id === props.match.params.id
        })[0] ; 
    setState(filterMovie);
},[]);


const  artistClickHandler = (url) => {
        window.location = url;
    }

const starClickHandler = (id) => {
        let starIconList = [];
        for (let star of ratings) {
            let starNode = star;
            if (star.id <= id) {
                starNode.color = "yellow"
            }
            else {
                starNode.color = "black";

            }
            starIconList.push(starNode);
        }
        setRatings( starIconList );
    }

        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }
        return (
            <div className="details">
            <Header id={props.match.params.id} showBookShowButton="true" />
                <div className="back">
                    <Typography>
                        <Link to="/">  &#60; Back to Home</Link>
                    </Typography>
                </div>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={state.poster_url} alt={state.title} />
                    </div>

                    <div className="middleDetails">
                        <div>
                            <Typography variant="h4" component="h2">{state.title} </Typography>
                        </div>
                        <br />
                        <div>
                            <Typography>
                                <span className="bold">Genres: </span> {state.genres}
                            </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Duration:</span> {state.duration} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Release Date:</span> {new Date(state.release_date).toDateString()} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold"> Rating:</span> {state.critics_rating}  </Typography>
                        </div>
                        <div className="marginTop16">
                            <Typography><span className="bold">Plot:</span> <a href={state.wiki_url}>(Wiki Link)</a> {state.storyline} </Typography>
                        </div>
                        <div className="trailerContainer">
                            <Typography>
                                <span className="bold">Trailer:</span>
                            </Typography>
                            <YouTube
                                videoId={state.vidId}
                                opts={opts}
                            />
                        </div>
                    </div>

                    <div className="rightDetails">
                        <Typography>
                            <span className="bold">Rate this movie: </span>
                        </Typography>
                        {ratings.map(star => (
                            <StarBorderIcon
                                className={star.color}
                                key={"star" + star.id}
                                onClick={() => starClickHandler(star.id)}
                            />
                        ))}

                        <div className="bold marginBottom16 marginTop16">
                            <Typography>
                                <span className="bold">Artists:</span>
                            </Typography>
                        </div>
                        <div className="paddingRight">
                            <GridList cellHeight={160} cols={2}>
                                {state.artists != null && state.artists.map(artist => (
                                    <GridListTile
                                        className="gridTile"
                                        onClick={() => artistClickHandler(artist.wiki_url)}
                                        key={artist.id}>
                                        <img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name} />
                                        <GridListTileBar
                                            title={artist.first_name + " " + artist.last_name}
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Details;

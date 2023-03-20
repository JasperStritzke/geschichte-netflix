import seasons, {Episode, Season} from "./data";
import {useState} from "react";

function App() {
    const [isToggled, setToggle] = useState(true)
    const [selectedSeason, setSelectedSeason] = useState<any>(seasons[0])

    const isAlleFolgen = selectedSeason == undefined;

    return (
        <div className={"popover__container"}>
            <div className={"popover"}>
                <div className={"header"}>
                    <div className={"rounded-button close-button"}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="Hawkins-Icon Hawkins-Icon-Standard" data-uia="previewModal-closebtn"
                             role="button" aria-label="close">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                                  fill="currentColor"></path>
                        </svg>
                    </div>

                    <img src={"./images/Misstraut.png"} alt={"Logo"}/>
                    <div className={"header__actions"}>
                        <button>
                            <i className="ri-play-fill"></i>
                            <span>Abspielen</span>
                        </button>

                        <div className={"rounded-button"}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                            </svg>
                        </div>

                        <div className={"rounded-button"}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z"
                                      fill="currentColor"></path>
                            </svg>
                        </div>

                        <div style={{flexGrow: '1'}}></div>

                        <div className={"rounded-button"} style={{opacity: 0.5, pointerEvents: "none"}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z"
                                      fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={"content"}>
                    <div className={"left"}>
                        <div className={"general__info"}>
                            <span className={"rating"}>97 % Übereinstimmung</span>
                            <span>2023</span>
                            <div className={"age"}>16+</div>
                            <span>{seasons.length} Staffel{seasons.length > 1 ? "n" : ""}</span>
                            <div className={"resolution"}>8K</div>
                        </div>
                        <div className={"description"}>
                            <p>Die Familie Müller ist eine normale, sozialistische Familie in der DDR. Als Doreen Müller verhaftet wurde änderte sich einiges für sie und ihren Mann, der als Inofizieller Mitarbeiter für die Stasi arbeitet.</p>
                        </div>
                    </div>
                    <div className={"cast"}>
                        <p><span className={"prefix"}>Besetzung: </span>Andy Sanberg, Sandra Bullock, Julia Roberts,
                            Scarlett Johansson, Dwayne Johnson, Robert Downey Jr</p>

                        <p><span className={"prefix"}>Drehbuch: </span>Sören Jansen, Jasper Stritzke, Christopher
                            Nolan
                        </p>

                        <p><span className={"prefix"}>Genres: </span>Romantische Dramen, Spinonage-Action und
                            -Abenteuer, Historische Dramen</p>
                    </div>
                </div>
                <div className={"episodes"}>
                    <div className={"episodes__header"}>
                        <p>Folgen</p>
                        <div className={"selection"} onClick={() => setToggle(!isToggled)}>
                            <span>{selectedSeason?.title || "Alle Folgen Anzeigen"}</span>
                            <i className={"ri-arrow-drop-down-fill"} data-toggled={isToggled}></i>

                            <div className={"dropdown"} data-toggled={isToggled}>
                                {seasons.map(season =>
                                    <div className={"season"} onClick={() => setSelectedSeason((season))} key={season.title}>
                                        <span className={"title"}>{season.title}</span>
                                        <span className={"episodes"}>({season.episodes.length} Folgen)</span>
                                    </div>
                                )}

                                <span className="all-episodes" onClick={() => setSelectedSeason(undefined)}>Alle Folgen Anzeigen</span>
                            </div>
                        </div>
                    </div>
                    
                    {isAlleFolgen ? seasons.map(season => <SeasonComponent season={season} all={isAlleFolgen} key={season.title}/>) : <SeasonComponent season={selectedSeason} all={isAlleFolgen}/>}
                </div>
            </div>
        </div>
    )
}

function SeasonComponent(props: { season: Season, all: boolean }) {
    return (
        <>
            {props.all ? <h3>{props.season.title}</h3> : undefined}
            <div>
                {props.season.episodes.map(episode => <EpisodeComponent episode={episode} key={episode.title}/>)}
            </div>
        </>
    )
}

function EpisodeComponent({episode}: { episode: Episode }) {
    return (
        <div className={"episode"}>
            <div className={"episode__number"}>{episode.number}</div>
            <div className={"episode__cover"} style={{backgroundImage: `url(${episode.cover})`}}/>
            <div className={"episode__content"}>
                <div className={"episode__header"}>
                    <span className={"episode__title"}>{episode.title}</span>
                    <div className={"episode__length"}>{episode.lengthInMinutes} Min.</div>
                </div>
                <span className={"episode__description"}>{episode.description}</span>
            </div>
        </div>
    )
}

export default App
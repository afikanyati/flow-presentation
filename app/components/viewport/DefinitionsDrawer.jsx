// Libs
import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import { CSSTransitionGroup }   from 'react-transition-group';

// Components
import FontTypes                from '../../constants/fontTypes';
import SkinTypes                from '../../constants/skinTypes';
import DefinitionsWhite         from '../../assets/images/icons/definitions-white.svg';
import PauseLightPurple         from '../../assets/images/icons/pause-lightpurple-cursor.png';
import PausePurple               from '../../assets/images/icons/pause-purple-cursor.png';

/**
 * The DefinitionsShelf component is a component used to
 */
export default class DefinitionsDrawer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // console.log("-----DefinitionsDrawer");
    }

    render() {
        let numColumns = Math.ceil(this.props.fixationWords.length/2);

        return (
            <DefinitionsContainer
                open={this.props.drawerIsOpen}
                skin={this.props.skin}
                fontFamily={FontTypes.ADOBE_GARAMOND}
                columns={`repeat(${numColumns}, 1fr)`}>
                <DefinitionsStub
                    skin={this.props.skin}
                    icon={`url(${DefinitionsWhite})`}
                    cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                    customCursor={this.props.skin == SkinTypes.DARK ?
                            `url(${PauseLightPurple}), auto`
                        :
                            `url(${PausePurple}), auto`}
                    onClick={this.props.toggleDrawer}/>
                    <CSSTransitionGroup
                          transitionName         ="definition"
                          transitionEnterTimeout ={Math.min(this.props.fixationTransitionDuration, this.props.timePerFixation)}
                          transitionLeave        ={false}>
                    {this.props.fixationWords.map((word, i) => {
                        return (
                            <Definition key={i}>
                                <Term>
                                    {word.definition && word.definition.word ?
                                            word.definition.word
                                        :
                                            word.text.toLowerCase()}
                                </Term>
                                <PartOfSpeech
                                    fontFamily={FontTypes.ADOBE_GARAMOND}>
                                    {word.definition && word.definition.results ?
                                            word.definition.results[0].partOfSpeech
                                        :
                                            ""}
                                </PartOfSpeech>
                                <Description>
                                    {word.definition && word.definition.results ?
                                            `1. ${word.definition.results[0].definition.length > 170 ? word.definition.results[0].definition.slice(0, 170) + "..." : word.definition.results[0].definition}.`
                                        :
                                            "definition unavailable"}
                                </Description>
                                {word.definition && word.definition.results && word.definition.results.length > 1 ?
                                    <More
                                        cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                                        customCursor={this.props.skin == SkinTypes.DARK ?
                                                PauseLightPurple
                                            :
                                                PausePurple}>
                                        more
                                    </More>
                                    :
                                    null
                                }
                            </Definition>
                        );
                    })}
                </CSSTransitionGroup>
            </DefinitionsContainer>
        );
    }

    componentDidMount() {
        // console.log("+++++DefinitionsDrawer");
    }

    // ========== Methods ===========
}

// ============= PropTypes ==============

DefinitionsDrawer.propTypes = {
    fixationWords             : PropTypes.array.isRequired,
    skin                      : PropTypes.string.isRequired,
    cruiseControlHaltIsActive : PropTypes.bool.isRequired,
    toggleDrawer              : PropTypes.func.isRequired,
    drawerIsOpen              : PropTypes.bool.isRequired,
    timePerFixation           : PropTypes.number.isRequired,
    fixationTransitionDuration: PropTypes.number.isRequired
};

// ============= Styled Components ==============

const DefinitionsContainer = styled.section`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    padding: 20px 110px;
    padding-top: 50px;
    font-family: ${props => props.fontFamily.regular};
    background: ${props => props.skin == SkinTypes.LIGHT ?
                "#ffffff"
            :
                props.skin == SkinTypes.CREAM ?
                        "#f9f3e9"
                    :
                        "#171717"
            };
    box-shadow: ${props => props.skin == SkinTypes.DARK ?
            "0px -6px 12px 1px rgba(181,210,236,.08)"
        :
            "0px -10px 20px 1px rgba(0,0,0,.15)"
    };
    z-index: 1;
    transition: all 0.2s ease-in-out;
    transform: ${props => props.open ? "translateY(0%)" : "translateY(calc(100% - 3vh - 30px))"};

    & span {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    	grid-template-rows: ${props => props.columns};
    	grid-gap: 0px 0px;
    }
`;

const DefinitionsStub = styled.div`
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${props => props.skin == SkinTypes.DARK ?
                props.theme.black
            :
                props.theme.lightGray

            };
    background-image: ${props => props.icon};
    background-position: 50%;
    background-size: 35px 35px;
    background-repeat: no-repeat;
    box-shadow: ${props => props.skin == SkinTypes.DARK ?
            "0 1px 5px 0 rgba(181,210,236,.1)"
        :
            "0 1px 5px 0 rgba(0,0,0,.20)"
    };
    cursor: ${props => props.cruiseControlHaltIsActive ? props.customCursor: "pointer"};
    transition        : all 0.3s;

    &:hover {
        background-color: ${props => !props.cruiseControlHaltIsActive ?
                props => props.skin == SkinTypes.LIGHT ?
                        props.theme.lightBlue
                    :
                        props.theme.darkBlue
            :
                props => props.skin == SkinTypes.DARK ?
                            props.theme.black
                        :
                            props.theme.lightGray};
    }
`;

const Definition = styled.div`
    display: inline-block;
    padding: 10px 25px;
    margin-bottom: 0;
    width: 100%;
`;

const Term = styled.h3`
    display: inline-block;
    height: 1.5em;
    font-weight: 700;
    margin: 0;
`;

const PartOfSpeech = styled.h4`
    display: inline-block;
    height: 1.5em;
    font-family: ${props => props.fontFamily.italic};
    font-weight: 400;
    margin: 0;
    margin-left: 15px;
`;

const Description = styled.p`
    display: block;
    font-weight: 400;
    margin: 0;
`;

const More = styled.h5`
    display: inline-block;
    font-weight: 400;
    color: ${props => props.theme.blue};
    margin: 0;
    cursor: ${props => props.cruiseControlHaltIsActive ? props.customCursor: "pointer"};
    transition        : all 0.3s;

    &:hover {
        color: ${props => props.theme.darkBlue};
    }
`;

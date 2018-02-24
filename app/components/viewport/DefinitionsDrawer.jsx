// Libs
import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';

// Components
import FontTypes                from '../../constants/fontTypes';
import SkinTypes                from '../../constants/skinTypes';
import DefinitionsWhite         from '../../assets/images/icons/definitions-white.svg';

/**
 * The DefinitionsShelf component is a component used to
 */
export default class DefinitionsDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    componentWillMount() {
        // console.log("-----DefinitionsDrawer");
    }

    render() {
        return (
            <DefinitionsContainer
                open={this.state.open}
                skin={this.props.skin}
                fontFamily={FontTypes.ADOBE_GARAMOND}>
                <DefinitionsStub
                    skin={this.props.skin}
                    icon={`url(${DefinitionsWhite})`}
                    cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                    customCursor={this.props.skin == SkinTypes.NIGHT ?
                            PauseLightPurple
                        :
                            PausePurple}
                    onClick={this.toggleDrawer}/>
                <Definition>
                    <Term>
                        most
                    </Term>
                    <PartOfSpeech
                        fontFamily={FontTypes.ADOBE_GARAMOND}>
                        pronoun
                    </PartOfSpeech>
                    <Description>
                        1. superlative of many, much.
                    </Description>
                    <More
                        cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                        customCursor={this.props.skin == SkinTypes.NIGHT ?
                                PauseLightPurple
                            :
                                PausePurple}>
                        more
                    </More>
                </Definition>
                <Definition>
                    <Term>
                        going
                    </Term>
                    <PartOfSpeech
                        fontFamily={FontTypes.ADOBE_GARAMOND}>
                        noun
                    </PartOfSpeech>
                    <Description>
                        1. an act or instance of leaving a place; a departure.
                    </Description>
                    <More
                        cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                        customCursor={this.props.skin == SkinTypes.NIGHT ?
                                PauseLightPurple
                            :
                                PausePurple}>
                        more
                    </More>
                </Definition>
                <Definition>
                    <Term>
                        likely
                    </Term>
                    <PartOfSpeech
                        fontFamily={FontTypes.ADOBE_GARAMOND}>
                        adjective
                    </PartOfSpeech>
                    <Description>
                        1. such as well might happen or be true; probable.
                    </Description>
                    <More
                        cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                        customCursor={this.props.skin == SkinTypes.NIGHT ?
                                PauseLightPurple
                            :
                                PausePurple}>
                        more
                    </More>
                </Definition>
                <Definition>
                    <Term>
                        to
                    </Term>
                    <PartOfSpeech
                        fontFamily={FontTypes.ADOBE_GARAMOND}>
                        preposition
                    </PartOfSpeech>
                    <Description>
                        1.expressing motion in the direction of (a particular location).
                    </Description>
                    <More
                        cruiseControlHaltIsActive={this.props.cruiseControlHaltIsActive}
                        customCursor={this.props.skin == SkinTypes.NIGHT ?
                                PauseLightPurple
                            :
                                PausePurple}>
                        more
                    </More>
                </Definition>
            </DefinitionsContainer>
        );
    }

    componentDidMount() {
        // console.log("+++++DefinitionsDrawer");
    }

    // ========== Methods ===========

    toggleDrawer = (e) => {
        e.stopPropagation();
        this.setState({
            open: !this.state.open
        });
    }
}

// ============= PropTypes ==============

DefinitionsDrawer.propTypes = {
    fixationWords: PropTypes.array.isRequired,
    skin: PropTypes.string.isRequired,
    cruiseControlHaltIsActive: PropTypes.bool.isRequired
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
    background: ${props => props.skin == SkinTypes.WHITE ?
                "#ffffff"
            :
                props.skin == SkinTypes.CREAM ?
                        "#f9f3e9"
                    :
                        "#171717"
            };
    box-shadow: 0px -10px 20px 1px rgba(0,0,0,.15);
    z-index: 5;
    transition: all 0.2s ease-in-out;
    transform: ${props => props.open ? "translateY(0%)" : "translateY(calc(100% - 3vh - 30px))"};
`;

const DefinitionsStub = styled.div`
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${props => props.skin == SkinTypes.NIGHT ?
                props.theme.darkGray
            :
                props.theme.lightGray

            };
    background-image: ${props => props.icon};
    background-position: 50%;
    background-size: 35px 35px;
    background-repeat: no-repeat;
    transition: background-image 0.3s;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,.20);
    cursor: ${props => props.cruiseControlHaltIsActive ? props.customCursor: "pointer"};
    transition        : all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition   : all 0.3s;
    -ms-transition    : all 0.3s;

    &:hover {
        background-color: ${props => !props.cruiseControlHaltIsActive ?
                props => props.skin == SkinTypes.WHITE ?
                        props.theme.lightBlue
                    :
                        props.theme.darkBlue
            :
                props => props.skin == SkinTypes.NIGHT ?
                            props.theme.darkGray
                        :
                            props.theme.lightGray};
    }
`;

const Definition = styled.div`
    display: inline-block;
    padding: 10px 25px;
    margin-bottom: 0;
    width: 50%;
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
    -webkit-transition: all 0.3s;
    -moz-transition   : all 0.3s;
    -ms-transition    : all 0.3s;

    &:hover {
        color: ${props => props.theme.darkBlue};
    }
`;

const PauseLightPurple = "url(https://firebasestorage.googleapis.com/v0/b/flow-3db7f.appspot.com/o/flow-app-resources%2Fpause-lightpurple.png?alt=media&token=8e07a08e-ba26-4658-be64-df2e4ca2c77c), auto";
const PausePurple = "url(https://firebasestorage.googleapis.com/v0/b/flow-3db7f.appspot.com/o/flow-app-resources%2Fpause-purple.png?alt=media&token=854021c2-d26c-4f5e-8e94-22d703564351), auto";

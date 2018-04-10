// Libs
import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';

// Components
import HandTypes                from '../../constants/handTypes';
import SkinTypes                from '../../constants/skinTypes';
import PausePurple              from '../../assets/images/icons/pause-purple.svg';
import PauseLightPurple         from '../../assets/images/icons/pause-lightpurple.svg';
import PauseLightGray           from '../../assets/images/icons/pause-lightgray.svg';
import PauseGray                from '../../assets/images/icons/pause-gray.svg';
import PauseBlack               from '../../assets/images/icons/pause-black.svg';
import NoAnnotationsPurple      from '../../assets/images/icons/no-annotations-purple.svg';
import NoAnnotationsLightPurple from '../../assets/images/icons/no-annotations-lightpurple.svg';
import NoAnnotationsLightGray   from '../../assets/images/icons/no-annotations-lightgray.svg';
import NoAnnotationsGray        from '../../assets/images/icons/no-annotations-gray.svg';
import NoAnnotationsBlack       from '../../assets/images/icons/no-annotations-black.svg';
import PacePurple               from '../../assets/images/icons/pace-purple.svg';
import PaceLightPurple          from '../../assets/images/icons/pace-lightpurple.svg';

/**
 * The FunctionBar component is a component used to
 */
export default class FunctionBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            changingReadingPace: false
        };
    }

    componentWillMount() {
        // console.log("-----FunctionBar");
    }

    render() {
        return (
            <FunctionBarContainer
                hand={this.props.hand}>
                {window.innerWidth > 430 ?
                    <FunctionSystem>
                        <FunctionIcon
                            title={`Words per Minute`}
                            icon={this.props.skin == SkinTypes.LIGHT ?
                                        `url(${PacePurple})`
                                    :
                                        this.props.skin == SkinTypes.CREAM ?
                                                `url(${PacePurple})`
                                            :
                                                `url(${PaceLightPurple})`}/>
                        {this.props.editingPace ?
                            <PaceInput
                                type="text"
                                innerRef={comp => this.pace = comp}
                                autoFocus={true}
                                maxLength="4"
                                defaultValue={this.props.readingPace}
                                onBlur={this.finishEdit}
                                onKeyPress={this.checkEnterOrEscape}
                                placeholder="wpm"
                                skin={this.props.skin} />
                        :
                            <FunctionText
                                skin={this.props.skin}
                                changingReadingPace={this.state.changingReadingPace}
                                onClick={this.edit}>
                                {this.props.readingPace}
                            </FunctionText>
                        }
                    </FunctionSystem>
                :
                    null
                }
                {window.innerWidth > 600 ?
                    <FunctionIcon
                        title={`Annotations ${this.props.showAnnotations ? "Visible" : "Hidden"}`}
                        icon={!this.props.showAnnotations ?
                            this.props.skin == SkinTypes.LIGHT ?
                                `url(${NoAnnotationsPurple})`
                            :
                                this.props.skin == SkinTypes.CREAM ?
                                        `url(${NoAnnotationsPurple})`
                                    :
                                        `url(${NoAnnotationsLightPurple})`
                        :
                            this.props.skin == SkinTypes.LIGHT ?
                                    `url(${NoAnnotationsLightGray})`
                                :
                                    this.props.skin == SkinTypes.CREAM ?
                                            `url(${NoAnnotationsGray})`
                                        :
                                            `url(${NoAnnotationsBlack})`}/>
                :
                    null
                }
                {window.innerWidth > 600 ?
                    <FunctionIcon
                        title={`Cruise Control Halt ${this.props.cruiseControlHaltIsActive ? "Activated" : "Deactivated"}`}
                        icon={this.props.cruiseControlHaltIsActive ?
                                this.props.skin == SkinTypes.LIGHT ?
                                            `url(${PausePurple})`
                                        :
                                            this.props.skin == SkinTypes.CREAM ?
                                                    `url(${PausePurple})`
                                                :
                                                    `url(${PauseLightPurple})`
                            :
                                this.props.skin == SkinTypes.LIGHT ?
                                            `url(${PauseLightGray})`
                                        :
                                            this.props.skin == SkinTypes.CREAM ?
                                                    `url(${PauseGray})`
                                                :
                                                    `url(${PauseBlack})`}/>
                :
                    null
                }
            </FunctionBarContainer>
        );
    }

    componentDidMount() {
        // console.log("+++++StatusBar");
    }

    componentWillReceiveProps(nextProps) {
        let changingReadingPace;

        if (nextProps.isScrolling != this.props.isScrolling) {
            changingReadingPace = true;
        }

        this.setState({
            changingReadingPace: changingReadingPace
        });
    }

    // ========== Methods ===========

    edit = (e) => {
        // Enter edit mode.
        this.props.toggleEditingPace();
    };

    checkEnterOrEscape = (e) => {
        // The user hit *enter*, let's finish up.
        if (e.key === 'Enter') {
            this.finishEdit(e);
        } else if (e.key === "Escape") {
            this.finishEdit(e);
        }
    };

    finishEdit = (e) => {
        // Exit edit mode.
        e.stopPropagation();
        let newPace = parseInt(this.pace.value);
        if (newPace && 0 < newPace && newPace < 10000) {
            this.props.setReadingPace(newPace);
        }

        this.props.toggleEditingPace();
    }
}

// ============= PropTypes ==============

FunctionBar.propTypes = {
    cruiseControlHaltIsActive: PropTypes.bool.isRequired,
    hand                     : PropTypes.string.isRequired,
    readingPace              : PropTypes.number.isRequired,
    setReadingPace           : PropTypes.func.isRequired,
    skin                     : PropTypes.string.isRequired,
    showAnnotations          : PropTypes.bool.isRequired,
    isScrolling              : PropTypes.number
};

// ============= Styled Components ==============

const FunctionBarContainer = styled.div`
    position: fixed;
    top: 5px;
    left: ${props => props.hand == HandTypes.RIGHT ? "10px" : "auto"};
    right: ${props => props.hand == HandTypes.LEFT ? "10px" : "auto"};
    z-index: 1;
`;

const FunctionIcon = styled.div`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 40px;
    background-image: ${props => props.icon};
    background-position: 50%;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    transition: all 0.2s;
`;

const FunctionSystem = styled.div`
    display: inline-flex;
    position: relative;
    height: 40px;
    align-items: center;
    margin-right: 20px;
`;

const FunctionText = styled.h3`
    position: relative;
    top: 1px;
    display: inline-block;
    font-size: ${props => props.changingReadingPace ? "1.5em" : "0.9em"};
    margin: 0;
    color: ${props => props.skin == SkinTypes.LIGHT ?
                props.theme.black
            :
                props.skin == SkinTypes.CREAM ?
                        props.theme.creamTextColor
                    :
                        props.theme.gray
            };
    font-weight: 400;
    user-select: none;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        font-weight: 700;
    }
`;

const PaceInput = styled.input`
    border-radius: 3px;
    appearance: none;
    padding: 0.6em 0.6em;
    margin: 0;
    width: 70px;
    height: 40px;
    background-color: ${props => props.skin == SkinTypes.LIGHT ?
                props.theme.lightGray
            :
                props.skin == SkinTypes.CREAM ?
                        props.theme.gray
                    :
                        props.theme.black
            };
    border: none;
    font-size: 1.2em;
    font-weight: 500;
    color: ${props => props.skin == SkinTypes.LIGHT ?
                props.theme.black
            :
                props.skin == SkinTypes.CREAM ?
                        props.theme.creamTextColor
                    :
                        props.theme.gray
            };
    line-height: normal;
    text-align: center;
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.22);
`;

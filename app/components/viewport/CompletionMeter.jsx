// Libs
import React            from 'react';
import PropTypes        from 'prop-types';
import styled           from 'styled-components';

// Components
import SkinTypes        from '../../constants/skinTypes';
import arrowLightGray   from '../../assets/images/icons/arrow-lightgray.svg';
import arrowGray        from '../../assets/images/icons/arrow-gray.svg';
import arrowDarkGray    from '../../assets/images/icons/arrow-darkGray.svg';
import arrowBlack       from '../../assets/images/icons/arrow-black.svg';

/**
 * The CompletionMeter component is a component used to
 */
export default class CompletionMeter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            meterLength: 200,
            lastPage: 0
        }
    }

    componentWillMount() {
        // console.log("-----CompletionMeter");
    }

    render() {
        const pageProgress = this.getPageProgress();
        const docProgress = this.getDocProgress();
        const currentPage = Math.floor(this.props.doc.assets[this.props.docPosition.asset].index.asset/this.props.numPageParagraphs);
        return (
            <MeterContainer
                offset={`${this.state.lastPage > 19 ? 1*this.props.fontSize : 0}px`}>
                <BackArrow
                    skin={this.props.skin}
                    lightGrayIcon={`url(${arrowLightGray})`}
                    grayIcon={`url(${arrowGray})`}
                    darkGrayIcon={`url(${arrowDarkGray})`}
                    blackIcon={`url(${arrowBlack})`}
                    active={!(currentPage == 0 && pageProgress[0] == 0)}
                    onClick={this.props.selectPage.bind({}, Math.max(0, currentPage - 1))} />
                <PageNumberIndicator
                    skin={this.props.skin}>
                    {1}
                </PageNumberIndicator>
                <CompleteMeter
                    skin={this.props.skin}
                    complete={`${docProgress * this.state.meterLength}px`}
                    onClick={this.handleMeterClick.bind({}, "complete")} />
                <PageMeter
                    skin={this.props.skin}>
                    <CurrentPageNumberIndicator
                        skin={this.props.skin}>
                        {currentPage + 1}
                    </CurrentPageNumberIndicator>
                    {pageProgress.map((paragraphCompletion, i) => {
                        return (
                            <ParagraphMeter
                                key={i}
                                skin={this.props.skin}
                                height={`${100/this.props.numPageParagraphs}%`}
                                progress={`${paragraphCompletion}%`} />
                        );
                    })}
                </PageMeter>
                <IncompleteMeter
                    skin={this.props.skin}
                    incomplete={`${(1 - docProgress) * this.state.meterLength}px`}
                    onClick={this.handleMeterClick.bind({}, "incomplete")} />
                <PageNumberIndicator
                    skin={this.props.skin}>
                    {this.state.lastPage + 1}
                </PageNumberIndicator>
                <ForwardArrow
                    skin={this.props.skin}
                    lightGrayIcon={`url(${arrowLightGray})`}
                    grayIcon={`url(${arrowGray})`}
                    darkGrayIcon={`url(${arrowDarkGray})`}
                    blackIcon={`url(${arrowBlack})`}
                    active={currentPage != this.state.lastPage}
                    onClick={this.props.selectPage.bind({}, currentPage + 1)} />
            </MeterContainer>
        );
    }

    componentDidMount() {
        // console.log("+++++CompletionMeter");
        let lastPage = Math.floor(this.props.doc.assets[this.props.doc.assets.length - 1].index.asset/this.props.numPageParagraphs);
        this.setState({
            lastPage: lastPage
        });
    }

    // ========== Methods ===========

    getDocProgress = () => {
        let completedPages = Math.floor(this.props.doc.assets.slice(0, this.props.docPosition.asset).length / this.props.numPageParagraphs);
        let totalPages = this.state.lastPage;
        let docProgress = completedPages/totalPages;
        return docProgress;
    }

    getPageProgress = () => {
        let pageProgress = new Array(this.props.numPageParagraphs).fill(0);
        let completedPages = Math.floor(this.props.doc.assets.slice(0, this.props.docPosition.asset).length / this.props.numPageParagraphs);
        let completedAssets = this.props.doc.assets.slice(0, this.props.docPosition.asset).reduce((total, asset) => {
                            return total + 1;
                        }, 0);

        let completedPageParagraphs = completedAssets - this.props.numPageParagraphs * completedPages;

        for (let i = 0; i < completedPageParagraphs; i++) {
            pageProgress[i] = 100;
        }

        let currentParagraphCompletion = this.props.getCurrentAssetHistory().wordCount / this.props.doc.assets[this.props.docPosition.asset].wordCount;
        pageProgress[completedPageParagraphs] = 100 * currentParagraphCompletion;

        return pageProgress;
    }

    handleMeterClick = (type, e) => {
        // Get Percentage
        const targetRect = e.target.getBoundingClientRect();
        const clickPosX = e.clientX;
        const lengthLeftSideTarget = clickPosX - targetRect.left;
        const totalLengthTarget = targetRect.right - targetRect.left;
        const percent = lengthLeftSideTarget/totalLengthTarget;

        let destinationPage;
        let currentPage = Math.floor(this.props.doc.assets[this.props.docPosition.asset].index.asset/this.props.numPageParagraphs);
        if (type == "complete") {
            destinationPage = Math.round(percent * currentPage);
        } else {
            destinationPage = Math.round(percent * (this.state.lastPage - currentPage) + currentPage);
        }

        this.props.selectPage(destinationPage);
    }
}

// ============= PropTypes ==============

CompletionMeter.propTypes = {
    doc: PropTypes.object.isRequired,
    docPosition: PropTypes.object.isRequired,
    skin: PropTypes.string.isRequired,
    numPageParagraphs: PropTypes.number.isRequired,
    getCurrentAssetHistory: PropTypes.func.isRequired,
    selectPage: PropTypes.func.isRequired,
};

// ============= Styled Components ==============

const MeterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    top: 10px;
    left: 50%;
    margin-left: ${props => props.offset};
    transform: translateX(-50%);
    height: 40px;
    z-index: 1;
`;

const BackArrow = styled.div`
    width: 20px;
    height: 20px;
    transform: scaleX(-1);
    background-image: ${props => props.skin == SkinTypes.LIGHT ?
            props.active ?
                props.lightGrayIcon
            :
                "none"
        :
            props => props.skin == SkinTypes.CREAM ?
                props.active ?
                    props.grayIcon
                :
                    "none"
            :
                props.active ?
                    props.blackIcon
                :
                    "none"
    };
    background-position: 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0 5px;
    cursor: ${props => props.active ? "pointer" : "default"};
    transition: all 0.2s;

    &:hover {
        background-image: ${props => props.skin == SkinTypes.LIGHT ?
                props.active ?
                    props.grayIcon
                :
                    "none"
            :
                props.active ?
                    props.darkGrayIcon
                :
                    "none"
        };
    }
`;

const ForwardArrow = styled.div`
    width: 20px;
    height: 20px;
    background-image: ${props => props.skin == SkinTypes.LIGHT ?
            props.active ?
                props.lightGrayIcon
            :
                "none"
        :
            props => props.skin == SkinTypes.CREAM ?
                props.active ?
                    props.grayIcon
                :
                    "none"
            :
                props.active ?
                    props.blackIcon
                :
                    "none"
    };
    background-position: 50%;
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0 5px;
    cursor: ${props => props.active ? "pointer" : "default"};
    transition: all 0.2s;

    &:hover {
        background-image: ${props => props.skin == SkinTypes.LIGHT ?
                props.active ?
                    props.grayIcon
                :
                    "none"
            :
                props.active ?
                    props.darkGrayIcon
                :
                    "none"
        };
    }
`;

const PageNumberIndicator = styled.h3`
    color: ${props => props.skin == SkinTypes.LIGHT ?
                props.theme.black
            :
                props.skin == SkinTypes.CREAM ?
                        props.theme.creamTextColor
                    :
                        props.theme.gray
            };
    font-weight: 400;
    font-size: 0.9em;
    user-select: none;
    margin: 0;
`;

const CurrentPageNumberIndicator = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.skin == SkinTypes.DARK ?
            props.theme.lightGray
        :
            props.theme.white
    };
    font-weight: 300;
    font-size: 0.9em;
    user-select: none;
    margin: 0;
`;

const CompleteMeter = styled.div`
    position: relative;
    top: 6px;
    height: 6px;
    width: ${props => props.complete};
    border-radius: 3px;
    margin: 0 8px;
    padding: 0;
    background: ${props => props.theme.lightPurple};
    cursor: pointer;
    transition: width 0.2s, background 0.2s;

    &:hover {
        background: ${props => props.theme.purple};
    }
`;

const IncompleteMeter = styled.div`
    position: relative;
    top: 6px;
    height: 6px;
    width: ${props => props.incomplete};
    border-radius: 3px;
    margin: 0 8px;
    padding: 0;
    background: ${props => props.skin == SkinTypes.LIGHT ?
                props.theme.lightGray
            :
                props.skin == SkinTypes.CREAM ?
                        props.theme.gray
                    :
                        props.theme.black
            };
    cursor: pointer;
    transition: width 0.2s, background 0.2s;

    &:hover {
        background: ${props => props.skin == SkinTypes.LIGHT ?
                    props.theme.gray
                :
                    props.theme.darkGray
        };
    }
`;

const PageMeter = styled.div`
    position: relative;
    width: 30px;
    height: 40px;
    background: ${props => props.skin == SkinTypes.LIGHT ?
            props.theme.lightGray
        :
            props => props.skin == SkinTypes.CREAM ?
                props.theme.gray
            :
                props.theme.black
    };
    border-radius: 2px;
    padding: 3px;
`;

const ParagraphMeter = styled.div`
    width: ${props => props.progress};
    height: ${props => props.height};
    background: ${props => props.theme.lightPurple};

    &:nth-child(2) {
        border-top-right-radius: 2px;
        border-top-left-radius: 2px;
    }

    &:last-child {
        border-bottom-right-radius: 2px;
        border-bottom-left-radius: 2px;
    }
`;

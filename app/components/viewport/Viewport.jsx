// Libraries
import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import { CSSTransitionGroup }   from 'react-transition-group';

// Components
import ScrollDirectionTypes     from '../../constants/scrollDirectionTypes';
import SkinTypes                from '../../constants/skinTypes';
import FeatureMenu              from './FeatureMenu';
import Paragraph                from './Paragraph';
import Word                     from './Word';
import StatusBar              from './StatusBar';
import CruiseControlButton      from './CruiseControlButton';
import MapButton                from './MapButton';
import DefinitionsDrawer        from './DefinitionsDrawer';
import CompletionBar            from './CompletionBar';

/**
 * The Viewport component is a component used to
 */
export default class Viewport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll            : 0,
            assetCurrentIndex : 0,
            doc            : {},
            highlightIsActive: false,
            cruiseControlIsActive: false,
            cruiseControlHaltIsActive: false,
            timePerFixation: 0, // In milliseconds,
            checkAddDelay: false, // checked once every fixation cycle
        }
    }

    componentWillMount() {
        // console.log("-----Viewport");

        let para = "";
        console.log(JSON.stringify(para.split(" ")));

        // Get document
        // Populate viewport with first document asset
        let doc = {
                "assets":[
                    {
                        "type":"paragraph",
                        "history":[

                        ],
                        "fixationWindow":[

                        ],
                        "future":[
                            {
                                "index":0,
                                "text":"We",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":1,
                                "text":"keep",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":2,
                                "text":"claiming",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":3,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":4,
                                "text":"technology",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":5,
                                "text":"will",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":6,
                                "text":"transform",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":7,
                                "text":"education.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":8,
                                "text":"We",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":9,
                                "text":"said",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":10,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":11,
                                "text":"when",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":12,
                                "text":"computers",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":13,
                                "text":"hit",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":14,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":15,
                                "text":"market",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":16,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":17,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":18,
                                "text":"real",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":19,
                                "text":"way",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":20,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":21,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":22,
                                "text":"1980s.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":23,
                                "text":"We",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":24,
                                "text":"said",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":25,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":26,
                                "text":"when",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":27,
                                "text":"artificial",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":28,
                                "text":"intelligence",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":29,
                                "text":"began",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":30,
                                "text":"reaching",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":31,
                                "text":"Siri",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":32,
                                "text":"levels.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":33,
                                "text":"And",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":34,
                                "text":"we’re",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":35,
                                "text":"saying",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":36,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":37,
                                "text":"now,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":38,
                                "text":"when",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":39,
                                "text":"spatial",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":40,
                                "text":"computing",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":41,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":42,
                                "text":"taking",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":43,
                                "text":"its",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":44,
                                "text":"strongest",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":45,
                                "text":"steps",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":46,
                                "text":"forward",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":47,
                                "text":"since",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":48,
                                "text":"we",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":49,
                                "text":"began",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":50,
                                "text":"seriously",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":51,
                                "text":"working",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":52,
                                "text":"on",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":53,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":54,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":55,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":56,
                                "text":"80s.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":57,
                                "text":"But",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":58,
                                "text":"while",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":59,
                                "text":"those",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":60,
                                "text":"early",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":61,
                                "text":"technologies",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":62,
                                "text":"have",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":63,
                                "text":"certainly",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":64,
                                "text":"impacted",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":65,
                                "text":"schooling,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":66,
                                "text":"they",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":67,
                                "text":"haven’t",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":68,
                                "text":"transformed",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":69,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":70,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":71,
                                "text":"way",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":72,
                                "text":"we",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":73,
                                "text":"hoped",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":74,
                                "text":"they",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":75,
                                "text":"might.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            }
                        ],
                        "index":0,
                        "delay":15,
                        "length":76
                    },
                    {
                        "type":"paragraph",
                        "history":[

                        ],
                        "fixationWindow":[

                        ],
                        "future":[
                            {
                                "index":0,
                                "text":"Take",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":1,
                                "text":"computers.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":2,
                                "text":"Many",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":3,
                                "text":"schools",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":4,
                                "text":"now",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":5,
                                "text":"require",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":6,
                                "text":"all",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":7,
                                "text":"assignments",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":8,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":9,
                                "text":"be",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":10,
                                "text":"typed",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":11,
                                "text":"instead",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":12,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":13,
                                "text":"handwritten — they’re",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":14,
                                "text":"easier",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":15,
                                "text":"on",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":16,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":17,
                                "text":"eyes,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":18,
                                "text":"after",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":19,
                                "text":"all,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":20,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":21,
                                "text":"no",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":22,
                                "text":"more",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":23,
                                "text":"demerit",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":24,
                                "text":"points",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":25,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":26,
                                "text":"sloppy",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":27,
                                "text":"cursive.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":28,
                                "text":"But",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":29,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":30,
                                "text":"vision",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":31,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":32,
                                "text":"30",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":33,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":34,
                                "text":"sitting",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":35,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":36,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":37,
                                "text":"class",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":38,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":39,
                                "text":"eight",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":40,
                                "text":"hours",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":41,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":42,
                                "text":"day",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":43,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":44,
                                "text":"front",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":45,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":46,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":47,
                                "text":"computer",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":48,
                                "text":"learning",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":49,
                                "text":"lessons",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":50,
                                "text":"from",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":51,
                                "text":"programs",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":52,
                                "text":"never",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":53,
                                "text":"materialized.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":54,
                                "text":"Whether",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":55,
                                "text":"that’s",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":56,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":57,
                                "text":"positive",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":58,
                                "text":"or",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":59,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":60,
                                "text":"negative",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":61,
                                "text":"can",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":62,
                                "text":"be",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":63,
                                "text":"debated",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":64,
                                "text":"ad",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":65,
                                "text":"nauseum,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":66,
                                "text":"but",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":67,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":68,
                                "text":"fact",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":69,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":70,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":71,
                                "text":"adoption",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":72,
                                "text":"was",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":73,
                                "text":"hampered",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":74,
                                "text":"by",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":75,
                                "text":"cost.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":76,
                                "text":"Most",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":77,
                                "text":"schools",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":78,
                                "text":"have",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":79,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":80,
                                "text":"single",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":81,
                                "text":"computer",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":82,
                                "text":"lab",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":83,
                                "text":"where",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":84,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":85,
                                "text":"take",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":86,
                                "text":"turns",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":87,
                                "text":"studying",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":88,
                                "text":"computers",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":89,
                                "text":"specifically — they",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":90,
                                "text":"aren’t",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":91,
                                "text":"using",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":92,
                                "text":"data",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":93,
                                "text":"modeling",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":94,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":95,
                                "text":"their",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":96,
                                "text":"stats",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":97,
                                "text":"class,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":98,
                                "text":"or",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":99,
                                "text":"testing",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":100,
                                "text":"components",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":101,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":102,
                                "text":"chemistry.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":103,
                                "text":"Computers",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":104,
                                "text":"have",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":105,
                                "text":"been",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":106,
                                "text":"relegated",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":107,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":108,
                                "text":"something",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":109,
                                "text":"you",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":110,
                                "text":"learn",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":111,
                                "text":"about",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":112,
                                "text":"rather",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":113,
                                "text":"than",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":114,
                                "text":"something",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":115,
                                "text":"you",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":116,
                                "text":"learn",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":117,
                                "text":"from,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":118,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":119,
                                "text":"there",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":120,
                                "text":"are",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":121,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":122,
                                "text":"lot",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":123,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":124,
                                "text":"opportunities",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":125,
                                "text":"we’ve",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":126,
                                "text":"missed",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":127,
                                "text":"because",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":128,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":129,
                                "text":"that.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            }
                        ],
                        "index":1,
                        "delay":24,
                        "length":130
                    },
                    {
                        "type":"paragraph",
                        "history":[

                        ],
                        "fixationWindow":[

                        ],
                        "future":[
                            {
                                "index":0,
                                "text":"The",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":1,
                                "text":"failure",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":2,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":3,
                                "text":"launch",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":4,
                                "text":"artificial",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":5,
                                "text":"intelligence",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":6,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":7,
                                "text":"education",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":8,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":9,
                                "text":"directly",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":10,
                                "text":"linked",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":11,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":12,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":13,
                                "text":"failure",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":14,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":15,
                                "text":"adopt",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":16,
                                "text":"widespread",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":17,
                                "text":"computers.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":18,
                                "text":"A",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":19,
                                "text":"virtual",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":20,
                                "text":"tutor",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":21,
                                "text":"can’t",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":22,
                                "text":"help",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":23,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":24,
                                "text":"figure",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":25,
                                "text":"out",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":26,
                                "text":"their",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":27,
                                "text":"unique",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":28,
                                "text":"learning",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":29,
                                "text":"style",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":30,
                                "text":"if",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":31,
                                "text":"seventy",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":32,
                                "text":"five",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":33,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":34,
                                "text":"are",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":35,
                                "text":"all",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":36,
                                "text":"sharing",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":37,
                                "text":"time",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":38,
                                "text":"on",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":39,
                                "text":"one",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":40,
                                "text":"computer.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":41,
                                "text":"These",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":42,
                                "text":"technologies",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":43,
                                "text":"are",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":44,
                                "text":"finding",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":45,
                                "text":"traction",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":46,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":47,
                                "text":"alternative",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":48,
                                "text":"education",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":49,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":50,
                                "text":"tutoring,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":51,
                                "text":"however,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":52,
                                "text":"where",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":53,
                                "text":"assessment",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":54,
                                "text":"tests",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":55,
                                "text":"help",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":56,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":57,
                                "text":"learn",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":58,
                                "text":"about",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":59,
                                "text":"their",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":60,
                                "text":"own",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":61,
                                "text":"learning",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":62,
                                "text":"styles.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":63,
                                "text":"There’s",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":64,
                                "text":"much",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":65,
                                "text":"further",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":66,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":67,
                                "text":"AI",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":68,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":69,
                                "text":"go,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":70,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":71,
                                "text":"course,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":72,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":73,
                                "text":"hopefully",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":74,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":75,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":76,
                                "text":"future",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":77,
                                "text":"we’ll",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":78,
                                "text":"see",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":79,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":80,
                                "text":"being",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":81,
                                "text":"used",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":82,
                                "text":"even",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":83,
                                "text":"more.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            }
                        ],
                        "index":2,
                        "delay":15,
                        "length":84
                    },
                    {
                        "type":"paragraph",
                        "history":[

                        ],
                        "fixationWindow":[

                        ],
                        "future":[
                            {
                                "index":0,
                                "text":"So",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":1,
                                "text":"now",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":2,
                                "text":"we",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":3,
                                "text":"begin",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":4,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":5,
                                "text":"wonder",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":6,
                                "text":"how",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":7,
                                "text":"virtual",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":8,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":9,
                                "text":"augmented",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":10,
                                "text":"reality",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":11,
                                "text":"will",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":12,
                                "text":"fare",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":13,
                                "text":"when",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":14,
                                "text":"up",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":15,
                                "text":"against",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":16,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":17,
                                "text":"same",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":18,
                                "text":"legislative",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":19,
                                "text":"hurdles",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":20,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":21,
                                "text":"have",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":22,
                                "text":"hampered",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":23,
                                "text":"past",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":24,
                                "text":"technologies.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":25,
                                "text":"Virtual",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":26,
                                "text":"reality",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":27,
                                "text":"has",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":28,
                                "text":"been",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":29,
                                "text":"getting",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":30,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":31,
                                "text":"lot",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":32,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":33,
                                "text":"well-deserved",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":34,
                                "text":"ink",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":35,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":36,
                                "text":"its",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":37,
                                "text":"potential",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":38,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":39,
                                "text":"transform",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":40,
                                "text":"education,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":41,
                                "text":"but",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":42,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":43,
                                "text":"infrastructure",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":44,
                                "text":"necessary",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":45,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":46,
                                "text":"bring",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":47,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":48,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":49,
                                "text":"program",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":50,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":51,
                                "text":"every",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":52,
                                "text":"kid",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":53,
                                "text":"can",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":54,
                                "text":"engage",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":55,
                                "text":"with",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":56,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":57,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":58,
                                "text":"stopper",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":59,
                                "text":"even",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":60,
                                "text":"more",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":61,
                                "text":"significant",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":62,
                                "text":"than",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":63,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":64,
                                "text":"was",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":65,
                                "text":"with",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":66,
                                "text":"computers.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":67,
                                "text":"After",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":68,
                                "text":"all,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":69,
                                "text":"VR",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":70,
                                "text":"not",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":71,
                                "text":"only",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":72,
                                "text":"requires",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":73,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":74,
                                "text":"computer",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":75,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":76,
                                "text":"each",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":77,
                                "text":"student — it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":78,
                                "text":"requires",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":79,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":80,
                                "text":"top",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":81,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":82,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":83,
                                "text":"line",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":84,
                                "text":"computer.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":85,
                                "text":"Given",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":86,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":87,
                                "text":"most",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":88,
                                "text":"schools",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":89,
                                "text":"are",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":90,
                                "text":"still",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":91,
                                "text":"running",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":92,
                                "text":"computers",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":93,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":94,
                                "text":"are",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":95,
                                "text":"ten",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":96,
                                "text":"years",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":97,
                                "text":"old",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":98,
                                "text":"or",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":99,
                                "text":"more,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":100,
                                "text":"that’s",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":101,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":102,
                                "text":"hurdle.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            }
                        ],
                        "index":3,
                        "delay":14,
                        "length":103
                    },
                    {
                        "type":"paragraph",
                        "history":[

                        ],
                        "fixationWindow":[

                        ],
                        "future":[
                            {
                                "index":0,
                                "text":"But",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":1,
                                "text":"there",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":2,
                                "text":"are",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":3,
                                "text":"some",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":4,
                                "text":"people",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":5,
                                "text":"doing",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":6,
                                "text":"amazing",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":7,
                                "text":"things",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":8,
                                "text":"with",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":9,
                                "text":"VR",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":10,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":11,
                                "text":"education.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":12,
                                "text":"We’re",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":13,
                                "text":"not",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":14,
                                "text":"going",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":15,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":16,
                                "text":"waste",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":17,
                                "text":"much",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":18,
                                "text":"time",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":19,
                                "text":"on",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":20,
                                "text":"Google",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":21,
                                "text":"Expeditions,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":22,
                                "text":"because",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":23,
                                "text":"you’re",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":24,
                                "text":"probably",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":25,
                                "text":"all",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":26,
                                "text":"familiar",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":27,
                                "text":"with",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":28,
                                "text":"them,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":29,
                                "text":"but",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":30,
                                "text":"if",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":31,
                                "text":"you",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":32,
                                "text":"aren’t,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":33,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":34,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":35,
                                "text":"nutshell:",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":36,
                                "text":"Google",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":37,
                                "text":"lets",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":38,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":39,
                                "text":"explore",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":40,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":41,
                                "text":"world",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":42,
                                "text":"using",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":43,
                                "text":"cell",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":44,
                                "text":"phones",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":45,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":46,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":47,
                                "text":"piece",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":48,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":49,
                                "text":"cardboard.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":50,
                                "text":"It’s",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":51,
                                "text":"great",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":52,
                                "text":"because",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":53,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":54,
                                "text":"doesn’t",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":55,
                                "text":"need",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":56,
                                "text":"an",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":57,
                                "text":"expensive",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":58,
                                "text":"computer,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":59,
                                "text":"but",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":60,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":61,
                                "text":"still",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":62,
                                "text":"requires",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":63,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":64,
                                "text":"lot",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":65,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":66,
                                "text":"funding",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":67,
                                "text":"from",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":68,
                                "text":"Google",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":69,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":70,
                                "text":"make",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":71,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":72,
                                "text":"happen.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":73,
                                "text":"They",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":74,
                                "text":"rent",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":75,
                                "text":"out",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":76,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":77,
                                "text":"phones,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":78,
                                "text":"provide",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":79,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":80,
                                "text":"cardboards",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":81,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":82,
                                "text":"free,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":83,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":84,
                                "text":"even",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":85,
                                "text":"give",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":86,
                                "text":"training",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":87,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":88,
                                "text":"teachers",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":89,
                                "text":"on",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":90,
                                "text":"how",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":91,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":92,
                                "text":"lead",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":93,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":94,
                                "text":"expedition.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":95,
                                "text":"It’s",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":96,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":97,
                                "text":"fun",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":98,
                                "text":"learning",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":99,
                                "text":"tool,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":100,
                                "text":"but",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":101,
                                "text":"likely",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":102,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":103,
                                "text":"be",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":104,
                                "text":"used",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":105,
                                "text":"by",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":106,
                                "text":"teachers",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":107,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":108,
                                "text":"way",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":109,
                                "text":"they",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":110,
                                "text":"used",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":111,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":112,
                                "text":"use",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":113,
                                "text":"crappy",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":114,
                                "text":"British",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":115,
                                "text":"documentaries — give",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":116,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":117,
                                "text":"teacher",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":118,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":119,
                                "text":"break",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":120,
                                "text":"from",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":121,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":122,
                                "text":"classroom,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":123,
                                "text":"let",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":124,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":125,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":126,
                                "text":"have",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":127,
                                "text":"some",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":128,
                                "text":"fun,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":129,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":130,
                                "text":"then",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":131,
                                "text":"get",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":132,
                                "text":"back",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":133,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":134,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":135,
                                "text":"real",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":136,
                                "text":"learning.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            }
                        ],
                        "index":4,
                        "delay":32,
                        "length":137
                    },
                    {
                        "type":"paragraph",
                        "history":[

                        ],
                        "fixationWindow":[

                        ],
                        "future":[
                            {
                                "index":0,
                                "text":"We’ve",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":1,
                                "text":"seen",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":2,
                                "text":"VR",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":3,
                                "text":"take",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":4,
                                "text":"off",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":5,
                                "text":"as",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":6,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":7,
                                "text":"form",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":8,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":9,
                                "text":"job",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":10,
                                "text":"training,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":11,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":12,
                                "text":"advantage",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":13,
                                "text":"there",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":14,
                                "text":"being",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":15,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":16,
                                "text":"budgets",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":17,
                                "text":"necessary",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":18,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":19,
                                "text":"pull",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":20,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":21,
                                "text":"off.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":22,
                                "text":"But",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":23,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":24,
                                "text":"boost",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":25,
                                "text":"up",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":26,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":27,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":28,
                                "text":"get",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":29,
                                "text":"from",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":30,
                                "text":"learning",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":31,
                                "text":"first-hand",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":32,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":33,
                                "text":"incredibly",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":34,
                                "text":"important",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":35,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":36,
                                "text":"schools,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":37,
                                "text":"too.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":38,
                                "text":"A",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":39,
                                "text":"lot",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":40,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":41,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":42,
                                "text":"learn",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":43,
                                "text":"better",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":44,
                                "text":"by",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":45,
                                "text":"doing",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":46,
                                "text":"than",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":47,
                                "text":"listening,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":48,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":49,
                                "text":"virtual",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":50,
                                "text":"reality",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":51,
                                "text":"gives",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":52,
                                "text":"them",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":53,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":54,
                                "text":"opportunity",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":55,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":56,
                                "text":"learn",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":57,
                                "text":"hands",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":58,
                                "text":"on",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":59,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":60,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":61,
                                "text":"way",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":62,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":63,
                                "text":"classic",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":64,
                                "text":"education",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":65,
                                "text":"simply",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":66,
                                "text":"can’t.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":67,
                                "text":"Training",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":68,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":69,
                                "text":"becoming",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":70,
                                "text":"huge",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":71,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":72,
                                "text":"industry,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":73,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":74,
                                "text":"hopefully",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":75,
                                "text":"as",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":76,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":77,
                                "text":"matures",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":78,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":79,
                                "text":"will",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":80,
                                "text":"trickle",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":81,
                                "text":"down",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":82,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":83,
                                "text":"high",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":84,
                                "text":"school",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":85,
                                "text":"level",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":86,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":87,
                                "text":"as",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":88,
                                "text":"well",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":89,
                                "text":"(right",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":90,
                                "text":"now",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":91,
                                "text":"we’re",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":92,
                                "text":"mostly",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":93,
                                "text":"seeing",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":94,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":95,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":96,
                                "text":"college",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":97,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":98,
                                "text":"on",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":99,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":100,
                                "text":"job).",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":101,
                                "text":"Of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":102,
                                "text":"course,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":103,
                                "text":"hands-on",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":104,
                                "text":"training",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":105,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":106,
                                "text":"school",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":107,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":108,
                                "text":"about",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":109,
                                "text":"more",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":110,
                                "text":"than",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":111,
                                "text":"just",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":112,
                                "text":"learning",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":113,
                                "text":"how",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":114,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":115,
                                "text":"do",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":116,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":117,
                                "text":"job.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":118,
                                "text":"It",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":119,
                                "text":"also",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":120,
                                "text":"means",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":121,
                                "text":"letting",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":122,
                                "text":"them",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":123,
                                "text":"explore",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":124,
                                "text":"how",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":125,
                                "text":"physics",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":126,
                                "text":"works",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":127,
                                "text":"instead",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":128,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":129,
                                "text":"just",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":130,
                                "text":"telling",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":131,
                                "text":"them,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":132,
                                "text":"or",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":133,
                                "text":"watching",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":134,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":135,
                                "text":"famous",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":136,
                                "text":"battle",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":137,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":138,
                                "text":"learn",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":139,
                                "text":"history.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            }
                        ],
                        "index":5,
                        "delay":24,
                        "length":140
                    },
                    {
                        "type":"paragraph",
                        "history":[

                        ],
                        "fixationWindow":[

                        ],
                        "future":[
                            {
                                "index":0,
                                "text":"If",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":1,
                                "text":"virtual",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":2,
                                "text":"reality",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":3,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":4,
                                "text":"being",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":5,
                                "text":"hampered",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":6,
                                "text":"by",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":7,
                                "text":"cost,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":8,
                                "text":"augmented",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":9,
                                "text":"reality",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":10,
                                "text":"might",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":11,
                                "text":"have",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":12,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":13,
                                "text":"leg-up",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":14,
                                "text":"on",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":15,
                                "text":"its",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":16,
                                "text":"more",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":17,
                                "text":"resource",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":18,
                                "text":"intensive",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":19,
                                "text":"cousin.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":20,
                                "text":"With",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":21,
                                "text":"AR,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":22,
                                "text":"teachers",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":23,
                                "text":"can",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":24,
                                "text":"get",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":25,
                                "text":"started",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":26,
                                "text":"with",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":27,
                                "text":"nothing",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":28,
                                "text":"but",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":29,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":30,
                                "text":"cell",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":31,
                                "text":"phone.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":32,
                                "text":"Granted,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":33,
                                "text":"one",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":34,
                                "text":"phone",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":35,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":36,
                                "text":"an",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":37,
                                "text":"entire",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":38,
                                "text":"classroom",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":39,
                                "text":"isn’t",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":40,
                                "text":"an",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":41,
                                "text":"ideal",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":42,
                                "text":"scenario — so",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":43,
                                "text":"AR",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":44,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":45,
                                "text":"pressing",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":46,
                                "text":"forward",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":47,
                                "text":"using",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":48,
                                "text":"other",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":49,
                                "text":"avenues.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            }
                        ],
                        "index":6,
                        "delay":11,
                        "length":50
                    },
                    {
                        "type":"paragraph",
                        "history":[

                        ],
                        "fixationWindow":[

                        ],
                        "future":[
                            {
                                "index":0,
                                "text":"Take",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":1,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":2,
                                "text":"augmented",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":3,
                                "text":"reality",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":4,
                                "text":"sandbox,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":5,
                                "text":"which",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":6,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":7,
                                "text":"being",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":8,
                                "text":"used",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":9,
                                "text":"around",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":10,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":11,
                                "text":"world",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":12,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":13,
                                "text":"help",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":14,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":15,
                                "text":"learn",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":16,
                                "text":"about",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":17,
                                "text":"topography",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":18,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":19,
                                "text":"geography.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":20,
                                "text":"All",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":21,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":22,
                                "text":"requires",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":23,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":24,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":25,
                                "text":"projector,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":26,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":27,
                                "text":"single",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":28,
                                "text":"computer,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":29,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":30,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":31,
                                "text":"few",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":32,
                                "text":"sensors.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":33,
                                "text":"With",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":34,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":35,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":36,
                                "text":"can",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":37,
                                "text":"leap",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":38,
                                "text":"into",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":39,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":40,
                                "text":"fully",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":41,
                                "text":"responsive",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":42,
                                "text":"experience",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":43,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":44,
                                "text":"reacts",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":45,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":46,
                                "text":"their",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":47,
                                "text":"input.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":48,
                                "text":"Following",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":49,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":50,
                                "text":"line",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":51,
                                "text":"has",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":52,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":53,
                                "text":"potential",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":54,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":55,
                                "text":"get",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":56,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":57,
                                "text":"whole",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":58,
                                "text":"classroom",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":59,
                                "text":"involved",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":60,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":61,
                                "text":"AR",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":62,
                                "text":"with",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":63,
                                "text":"realistic",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":64,
                                "text":"resource",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":65,
                                "text":"requirements.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            }
                        ],
                        "index":7,
                        "delay":13,
                        "length":66
                    },
                    {
                        "type":"paragraph",
                        "history":[

                        ],
                        "fixationWindow":[

                        ],
                        "future":[
                            {
                                "index":0,
                                "text":"Of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":1,
                                "text":"course,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":2,
                                "text":"we’re",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":3,
                                "text":"also",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":4,
                                "text":"entering",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":5,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":6,
                                "text":"age",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":7,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":8,
                                "text":"ARKit",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":9,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":10,
                                "text":"ARCore,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":11,
                                "text":"which",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":12,
                                "text":"means",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":13,
                                "text":"that",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":14,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":15,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":16,
                                "text":"few",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":17,
                                "text":"years,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":18,
                                "text":"every",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":19,
                                "text":"cell",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":20,
                                "text":"phone",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":21,
                                "text":"will",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":22,
                                "text":"have",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":23,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":24,
                                "text":"ability",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":25,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":26,
                                "text":"be",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":27,
                                "text":"used",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":28,
                                "text":"as",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":29,
                                "text":"an",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":30,
                                "text":"educational",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":31,
                                "text":"tool.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":32,
                                "text":"While",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":33,
                                "text":"lots",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":34,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":35,
                                "text":"students",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":36,
                                "text":"don’t",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":37,
                                "text":"have",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":38,
                                "text":"their",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":39,
                                "text":"own",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":40,
                                "text":"phones,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":41,
                                "text":"buying",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":42,
                                "text":"cheap",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":43,
                                "text":"mobile",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":44,
                                "text":"devices",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":45,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":46,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":47,
                                "text":"whole",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":48,
                                "text":"classroom",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":49,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":50,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":51,
                                "text":"lot",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":52,
                                "text":"easier",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":53,
                                "text":"than",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":54,
                                "text":"buying",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":55,
                                "text":"computers",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":56,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":57,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":58,
                                "text":"whole",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":59,
                                "text":"classroom.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":60,
                                "text":"And",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":61,
                                "text":"even",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":62,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":63,
                                "text":"these",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":64,
                                "text":"early",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":65,
                                "text":"days,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":66,
                                "text":"we’re",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":67,
                                "text":"seeing",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":68,
                                "text":"exciting",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":69,
                                "text":"concepts",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":70,
                                "text":"like",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":71,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":72,
                                "text":"Atom",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":73,
                                "text":"Visualizer,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":74,
                                "text":"which",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":75,
                                "text":"lets",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":76,
                                "text":"you",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":77,
                                "text":"place",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":78,
                                "text":"models",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":79,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":80,
                                "text":"atomic",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":81,
                                "text":"structures",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":82,
                                "text":"around",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":83,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":84,
                                "text":"room",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":85,
                                "text":"and",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":86,
                                "text":"then",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":87,
                                "text":"examine",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":88,
                                "text":"them",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":89,
                                "text":"in",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":90,
                                "text":"3",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":91,
                                "text":"dimensions.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            }
                        ],
                        "index":8,
                        "delay":18,
                        "length":92
                    },
                    {
                        "type":"paragraph",
                        "history":[

                        ],
                        "fixationWindow":[

                        ],
                        "future":[
                            {
                                "index":0,
                                "text":"How",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":1,
                                "text":"soon",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":2,
                                "text":"we’re",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":3,
                                "text":"likely",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":4,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":5,
                                "text":"see",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":6,
                                "text":"this",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":7,
                                "text":"take",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":8,
                                "text":"off",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":9,
                                "text":"remains",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":10,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":11,
                                "text":"key",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":12,
                                "text":"question.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":13,
                                "text":"While",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":14,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":15,
                                "text":"technology",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":16,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":17,
                                "text":"here,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":18,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":19,
                                "text":"point",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":20,
                                "text":"at",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":21,
                                "text":"which",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":22,
                                "text":"it",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":23,
                                "text":"becomes",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":24,
                                "text":"cheap",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":25,
                                "text":"enough",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":26,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":27,
                                "text":"mass",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":28,
                                "text":"adoption",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":29,
                                "text":"is",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":30,
                                "text":"still",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":31,
                                "text":"at",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":32,
                                "text":"least",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":33,
                                "text":"a",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":34,
                                "text":"few",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":35,
                                "text":"years",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":36,
                                "text":"away.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":37,
                                "text":"AR",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":38,
                                "text":"will",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":39,
                                "text":"probably",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":40,
                                "text":"beat",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":41,
                                "text":"its",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":42,
                                "text":"cousin",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":43,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":44,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":45,
                                "text":"finish",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":46,
                                "text":"line,",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"pause",
                                    "factor":1
                                }
                            },
                            {
                                "index":47,
                                "text":"but",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"proposition",
                                    "factor":1
                                }
                            },
                            {
                                "index":48,
                                "text":"VR",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":49,
                                "text":"may",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":50,
                                "text":"take",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":51,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":52,
                                "text":"final",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":53,
                                "text":"prize",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":54,
                                "text":"of",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":55,
                                "text":"being",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":56,
                                "text":"the",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":57,
                                "text":"first",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":58,
                                "text":"technology",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":59,
                                "text":"to",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":60,
                                "text":"truly",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":61,
                                "text":"change",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":62,
                                "text":"education.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            },
                            {
                                "index":63,
                                "text":"Only",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":64,
                                "text":"time",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":65,
                                "text":"will",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":66,
                                "text":"tell",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":67,
                                "text":"for",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{

                                }
                            },
                            {
                                "index":68,
                                "text":"sure.",
                                "definition":{

                                },
                                "isHighlighted":false,
                                "hasBookmark":false,
                                "attachments":{

                                },
                                "delay":{
                                    "type":"ending",
                                    "factor":2
                                }
                            }
                        ],
                        "index":9,
                        "delay":12,
                        "length":69
                    }
                ],
                "delay":188,
                "title":"Virtual Reality and Augmented Reality in Education",
                "author":"Hammer & Tusk",
                "date":"2017-09-21T00:00:00.000Z",
                "subtitle":"",
                "cover":"",
                "tags":[
                    "Virtual Reality",
                    "Augmented Reality",
                    "Education",
                    "Immersive",
                    "VR"
                ],
                "genre":"Science"
            };

        // let assetDelay = 0;
        // let sentenceEndingSet = new Set([".", "?", "!", "..."]);
        // let pauseSet = new Set([",", ";", ":", "\u2014"]); // \u2014 is the em dash
        // let transitionSet = new Set(TransitionWords);
        //
        // for (let asset in assets) {
        //     let words = assets[asset].future;
        //     let refactoredWords = [];
        //     let paragraphDelay = 0;
        //     for (let i in words) {
        //         let word = words[i];
        //         word["attachments"] = {};
        //         word["delay"] = {};
        //         if (sentenceEndingSet.has(word.text.charAt(word.text.length - 1))) {
        //             // Sentence Ending
        //             word["delay"] = {type: "ending", factor: 2};
        //             paragraphDelay += 2;
        //         } else if (pauseSet.has(word.text.charAt(word.text.length - 1))) {
        //             // Punctuation Pauses
        //             word["delay"] = {type: "pause", factor: 1};
        //             paragraphDelay += 1;
        //         } else if (transitionSet.has(word.text.replace(/[,.?!;:]/, '').toLowerCase())) {
        //             // Propositional Integration Word Pause
        //             word["delay"] = {type: "proposition", factor: 1};
        //             paragraphDelay += 1;
        //         }
        //         refactoredWords.push(word);
        //     }
        //     assets[asset].future = refactoredWords;
        //     assets[asset]["delay"] = paragraphDelay;
        //     assetDelay += paragraphDelay;
        // }
        //
        // let doc = {
        //     assets: assets,
        //     delay: assetDelay + assets.length,
        //     title: "Virtual Reality and Augmented Reality in Education",
        //     author: "Hammer & Tusk",
        //     date: new Date().toISOString(),
        //     subtitle: "",
        //     cover: "",
        //     tags: ["Virtual Reality", "Augmented Reality", "Education", "Immersive", "VR"],
        //     genre: "Science"
        // };
        //

        console.log(JSON.stringify(doc));

        this.setState({
            doc        : doc
        }, () => {
            console.log(this.state.doc);
            this.loadAsset(this.state.assetCurrentIndex);
        });
    }

    render() {
        let progress = this.getProgress();
        return (
            <Container
                skin={this.props.skin}
                cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                customCursor={this.props.skin == SkinTypes.NIGHT ?
                        PauseLightPurple
                    :
                        PausePurple}
                onClick={this.handleClick}>
                <StatusBar
                    hand                  ={this.props.hand}
                    skin={this.props.skin}
                    readingSpeed={this.props.readingSpeed}
                    cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                    showAnnotations={this.props.showAnnotations}
                />
                <CompletionBar
                    skin={this.props.skin}
                    progress={progress}/>
                <TitleBar>{this.state.doc.title}</TitleBar>
                <HistoryContainer
                    skin={this.props.skin}
                    fontSize={this.props.fontSize}>
                    {[this.state.doc.assets[this.state.assetCurrentIndex]].map((asset) => {
                      return (
                          <Paragraph
                              key           ={`parent =[null], this =[type ='${asset.type}-history', index ='${this.state.assetCurrentIndex}']`}
                              type          ={"history"}
                              asset         ={asset}
                              fontSize      ={this.props.fontSize}
                              fontFamily    ={this.props.fontFamily}
                              skipToWord    ={this.skipToWord}
                              highlightColor={this.props.highlightColor}
                              skin={this.props.skin}
                              showAnnotations={this.props.showAnnotations}
                              cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                              />
                      );
                  })}
                  {this.state.doc.assets.slice(Math.max(0, this.state.assetCurrentIndex - 2), this.state.assetCurrentIndex).map((asset, index) => {
                    return (
                        <Paragraph
                            key           ={`parent =[null], this =[type ='${asset.type}', index ='${asset.index}']`}
                            type          ={"history"}
                            asset         ={asset}
                            fontSize     ={this.props.fontSize}
                            fontFamily   ={this.props.fontFamily}
                            skipToWord   ={this.skipToWord}
                            highlightColor={this.props.highlightColor}
                            skin={this.props.skin}
                            showAnnotations={this.props.showAnnotations}
                            cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                            />
                    );
                })}
                </HistoryContainer>
                <FixationWindowContainer
                    fontSize={this.props.fontSize}>
                    <FixationWindow
                        highlightIsActive={this.state.highlightIsActive}
                        highlightColor={this.props.highlightColor}
                        fontSize={this.props.fontSize}
                        fontFamily={this.props.fontFamily}>
                        <CSSTransitionGroup
                              transitionName         ="fixation"
                              transitionEnterTimeout ={400}
                              transitionLeave        ={false}>
                            {this.state.doc.assets[this.state.assetCurrentIndex].fixationWindow.map((word, index) => {
                                return (
                                    <Word
                                        key        ={`parent=[type='paragraph', index='${this.state.assetCurrentIndex}'], this=[type='word', index='${word.index}']`}
                                        paragraph  ={this.state.assetCurrentIndex}
                                        word       ={word}
                                        inFixationWindow={true}
                                        fontFamily ={this.props.fontFamily}
                                        skipToWord ={this.skipToWord}
                                        skin={this.props.skin}
                                        highlightColor={this.props.highlightColor}
                                        showAnnotations={this.props.showAnnotations}
                                        cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                                    />
                                );
                            })}
                        </CSSTransitionGroup>
                    </FixationWindow>
                </FixationWindowContainer>
                <FutureContainer
                    skin={this.props.skin}
                    fontSize={this.props.fontSize}>
                    {[this.state.doc.assets[this.state.assetCurrentIndex]].map((asset) => {
                        return (
                            <Paragraph
                                key          ={`parent =[null], this =[type ='${asset.type}-future', index ='${this.state.assetCurrentIndex}']`}
                                type         ={"future"}
                                asset        ={asset}
                                fontSize     ={this.props.fontSize}
                                fontFamily   ={this.props.fontFamily}
                                skipToWord   ={this.skipToWord}
                                highlightColor={this.props.highlightColor}
                                skin={this.props.skin}
                                showAnnotations={this.props.showAnnotations}
                                cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                                />
                        );
                    })}
                    {this.state.doc.assets.slice(this.state.assetCurrentIndex + 1, Math.min(this.state.assetCurrentIndex + 3, this.state.doc.assets.length)).map((asset, index) => {
                        return (
                            <Paragraph
                                key                 ={`parent =[null], this =[type ='${asset.type}', index ='${asset.index}']`}
                                type                ={"future"}
                                asset               ={asset}
                                fontSize            ={this.props.fontSize}
                                fontFamily          ={this.props.fontFamily}
                                skipToWord          ={this.skipToWord}
                                highlightColor={this.props.highlightColor}
                                skin={this.props.skin}
                                showAnnotations={this.props.showAnnotations}
                                cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                                />
                        );
                })}
                </FutureContainer>
                <DefinitionsDrawer
                    skin={this.props.skin}
                    fixationWords={this.state.doc.assets[this.state.assetCurrentIndex].fixationWindow}
                    cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                />
                <FeatureMenu
                    hand                  ={this.props.hand}
                    skin={this.props.skin}
                    toggleHighlight={this.toggleHighlight}
                    toggleWordBookmark={this.toggleWordBookmark}
                    fixationWindow={this.state.doc.assets[this.state.assetCurrentIndex].fixationWindow}
                    highlightColor={this.props.highlightColor}
                    highlightIsActive={this.state.highlightIsActive}
                    performWriteOperation={this.performWriteOperation}
                    performImageOperation={this.performImageOperation}
                    performRecordOperation={this.performRecordOperation}
                    performDrawOperation={this.performDrawOperation}
                    cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                />
                <CruiseControlButton
                    hand                  ={this.props.hand}
                    skin={this.props.skin}
                    cruiseControlIsActive ={this.state.cruiseControlIsActive}
                    toggleCruiseControl   ={this.toggleCruiseControl}
                    cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                />
                <MapButton
                    hand={this.props.hand}
                    skin={this.props.skin}
                    toggleMap={this.toggleMap}
                    cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                />
            </Container>
        );
    }

    componentDidMount() {
        // console.log("+++++Viewport");
        window.addEventListener('DOMMouseScroll', this.handleScroll, false);
        window.onwheel      = this.handleScroll; // modern standard
        window.onmousewheel = document.onmousewheel = this.handleScroll; // older browsers, IE
        window.ontouchmove  = this.handleScroll; // mobile
        document.onkeydown  = this.handleKeys;
        window.addEventListener('mousedown', this.handleCruiseMouseDown, false);
        window.addEventListener('mouseup', this.handleCruiseMouseUp, false);
        // Web App Visibility
        document.addEventListener('visibilitychange', this.handleWindowFocusState);

        // Set timePerFixation
        this.setTimePerFixation(0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.readingSpeed != this.props.readingSpeed) {
            let secondsInMinute = 60;
            let milliSecondFactor = 1000;
            let numFixations = (nextProps.readingSpeed/this.props.fixationWidth); // in 60 seconds
            let timePerFixation = milliSecondFactor * secondsInMinute/numFixations; // measured in ms
            this.setState({
                timePerFixation: timePerFixation
            }, () => {
                this.isScrolling = setTimeout(() => {
                    clearTimeout(this.timer);
                    this.moveText(new Date().getTime());
                }, 200);
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.removeEventListener('mousedown', this.handleCruiseMouseDown, false);
        window.removeEventListener('mouseup', this.handleCruiseMouseUp, false);
        clearTimeout(this.timer);
    }

    // ========== Methods ===========

    handleClick = (e) => {

    }

    handleCruiseMouseDown = (e) => {
        e.stopPropagation();
        if (this.state.cruiseControlIsActive &&
            e.target.offsetParent.id != "cruiseControlButton") {
            clearTimeout(this.timer);
            this.setState({
                cruiseControlHaltIsActive: true
            });
        }
    }

    handleCruiseMouseUp = (e) => {
        // NOTE: If user clicks and mouse up outside of viewport, get error
        e.stopPropagation();
        if (this.state.cruiseControlIsActive && e.target.offsetParent.id != "cruiseControlButton") {
            this.moveText(new Date().getTime());
            this.setState({
                cruiseControlHaltIsActive: false
            });
        }
    }

    handleKeys = (e) => {

        let keys = {
            37: true,   // Left
            38: true,   // Up
            39: true,   // Right
            40: true    // Down
        };

        if (keys[e.keyCode]) {
            this.preventDefault(e);

            // Up or Left
            if (e.keyCode == 37 || e.keyCode == 38) {
                if (this.state.cruiseControlIsActive) {
                    window.clearTimeout(this.isScrolling);
                    this.props.modifyReadingSpeed(ScrollDirectionTypes.DOWN);
                } else {
                    this.updateViewport(ScrollDirectionTypes.UP);
                }

            // Down or Right
            } else if (e.keyCode == 39 || e.keyCode == 40) {
                if (this.state.cruiseControlIsActive) {
                    window.clearTimeout(this.isScrolling);
                    this.props.modifyReadingSpeed(ScrollDirectionTypes.UP);
                } else {
                    this.updateViewport(ScrollDirectionTypes.DOWN);
                }
            }

            return false;
        } else if (e.keyCode == 32) {
            this.preventDefault(e);
            this.toggleCruiseControl(e);
        }
    }

    handleScroll = (e) => {
        this.preventDefault(e);

        if (this.state.scroll > this.props.trackingSpeed
            && !this.state.cruiseControlIsActive) {
            let direction = this.getScrollDirection(e);
            this.updateViewport(direction);
            this.setState({
                scroll: 0
            });
        } else if (this.state.cruiseControlIsActive) {
            let direction = this.getScrollDirection(e);
            window.clearTimeout(this.isScrolling);
            this.props.modifyReadingSpeed(direction);
        }

        this.setState({
            scroll: this.state.scroll + 1
        });
    }

    updateViewport = (direction) => {
        let doc = this.state.doc;
        let assets = doc.assets;
        let history = assets[this.state.assetCurrentIndex].history,
            fixationWindow = assets[this.state.assetCurrentIndex].fixationWindow,
            future = assets[this.state.assetCurrentIndex].future;


        if (direction == ScrollDirectionTypes.UP
            && assets[this.state.assetCurrentIndex].history.length == 0
            && this.state.assetCurrentIndex > 0) {
            // We have hit beginning of current asset
            // Load previous one
            if (this.state.highlightIsActive) {
                let start, end;
                start = 0;
                end = assets[this.state.assetCurrentIndex].fixationWindow[assets[this.state.assetCurrentIndex].fixationWindow.length - 1].index + 1;

                assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
                doc.assets = assets;

                this.setState({
                    doc : doc
                });
            }

            this.loadAsset(this.state.assetCurrentIndex - 1);
        } else if (direction == ScrollDirectionTypes.UP
            && assets[this.state.assetCurrentIndex].history.length == 0
            && this.state.assetCurrentIndex == 0) {
            // We have hit beginning of document
            // Exit function
            return;
        }

        if (direction == ScrollDirectionTypes.UP) {
            if (assets[this.state.assetCurrentIndex].history.length - this.props.fixationWidth > 0) {
                if (this.state.highlightIsActive) {
                    let start, end;

                    if (assets[this.state.assetCurrentIndex].history[assets[this.state.assetCurrentIndex].history.length - 1].isHighlighted) {
                        start = assets[this.state.assetCurrentIndex].history[assets[this.state.assetCurrentIndex].history.length - this.props.fixationWidth].index;
                        end = assets[this.state.assetCurrentIndex].history.length;
                    } else {
                        start = assets[this.state.assetCurrentIndex].fixationWindow[0].index;
                        end = assets[this.state.assetCurrentIndex].fixationWindow[assets[this.state.assetCurrentIndex].fixationWindow.length - 1].index + 1;
                    }

                    assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
                }


                future         = assets[this.state.assetCurrentIndex].fixationWindow.concat(assets[this.state.assetCurrentIndex].future);
                fixationWindow = assets[this.state.assetCurrentIndex].history.slice(assets[this.state.assetCurrentIndex].history.length - this.props.fixationWidth, assets[this.state.assetCurrentIndex].history.length);
                history        = assets[this.state.assetCurrentIndex].history.slice(0, assets[this.state.assetCurrentIndex].history.length - this.props.fixationWidth);
            } else {
                // Edge Case that causes wrong fixation window
                if (this.state.highlightIsActive) {
                    let start, end;

                    if (assets[this.state.assetCurrentIndex].history[assets[this.state.assetCurrentIndex].history.length - 1].isHighlighted) {
                        start = 0;
                        end = assets[this.state.assetCurrentIndex].history.length;
                    } else {
                        let diff = assets[this.state.assetCurrentIndex].history.length;
                        start = assets[this.state.assetCurrentIndex].fixationWindow[assets[this.state.assetCurrentIndex].fixationWindow.length - diff].index;
                        end = assets[this.state.assetCurrentIndex].fixationWindow[assets[this.state.assetCurrentIndex].fixationWindow.length - 1].index + 1;
                    }

                    assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
                }

                future         = assets[this.state.assetCurrentIndex].history.concat(assets[this.state.assetCurrentIndex].fixationWindow, assets[this.state.assetCurrentIndex].future); // proxy future to re-establish fixationWindow
                history       = [];
                fixationWindow = future.slice(0, this.props.fixationWidth);
                future         = future.slice(this.props.fixationWidth);
            }
        } else {
            // Scroll Direction Down
            if (this.state.highlightIsActive) {
                let start, end;

                start = assets[this.state.assetCurrentIndex].fixationWindow[0].index;
                end = assets[this.state.assetCurrentIndex].fixationWindow[assets[this.state.assetCurrentIndex].fixationWindow.length - 1].index + 1;

                assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
            }
            history        = assets[this.state.assetCurrentIndex].history.concat(assets[this.state.assetCurrentIndex].fixationWindow);
            fixationWindow = assets[this.state.assetCurrentIndex].future.slice(0, this.props.fixationWidth);
            future         = assets[this.state.assetCurrentIndex].future.slice(this.props.fixationWidth, assets[this.state.assetCurrentIndex].future.length);
        }

        assets[this.state.assetCurrentIndex].history        = history;
        assets[this.state.assetCurrentIndex].fixationWindow = fixationWindow;
        assets[this.state.assetCurrentIndex].future         = future;

        doc.assets = assets;

        this.setState({
            doc : doc
        }, () => {
            if (direction == ScrollDirectionTypes.DOWN
                && fixationWindow.length == 0
                && future.length == 0
                && this.state.assetCurrentIndex + 1 < this.state.doc.assets.length) {
                // End of paragraph, have pause
                this.setTimePerFixation(this.state.timePerFixation);
                // We have hit end of current asset
                // Load next one
                this.loadAsset(this.state.assetCurrentIndex + 1);
            } else if (direction == ScrollDirectionTypes.DOWN
                && fixationWindow.length == 0
                && future.length == 0
                && this.state.assetCurrentIndex + 1 == this.state.doc.assets.length
                && this.state.cruiseControlIsActive) {
                // We have hit end of document
                // and Cruise Control is active
                // We deactivate it
                this.toggleCruiseControl();
            } else if (direction == ScrollDirectionTypes.DOWN
                && fixationWindow.length == 0
                && future.length == 0
                && this.state.assetCurrentIndex + 1 == this.state.doc.assets.length) {
                    // We have hit end of document
                    // Cruise Control is not Active
                    return;
            }
        });
    }

    preventDefault = (e) => {
      e = e || window.event;
      if (e.preventDefault) {
          e.preventDefault();
      }
      e.returnValue = false;
    }

    getScrollDirection = (e) => {
        let delta;

        if (e.wheelDelta) {
            delta = e.wheelDelta;
        } else {
            delta = -1 * e.deltaY;
        }

        if (delta < 0) {
            return ScrollDirectionTypes.DOWN;
        } else if (delta > 0){
            return ScrollDirectionTypes.UP;
        }
    }

    skipToWord = (word, paragraphIndex, wordIndex, e) => {
        e.stopPropagation();
        let doc = this.state.doc;
        let assets           = doc.assets;

        // reset current paragraph if skipping to a new one
        if (paragraphIndex > this.state.assetCurrentIndex) {
            // Skip ahead
            // Make current asset history

            // Highlight if active
            if (this.state.highlightIsActive) {
                let start = assets[this.state.assetCurrentIndex].fixationWindow[0].index;
                let end = assets[this.state.assetCurrentIndex].future.length > 0 ? assets[this.state.assetCurrentIndex].future[assets[this.state.assetCurrentIndex].future.length - 1].index + 1 : assets[this.state.assetCurrentIndex].fixationWindow[assets[this.state.assetCurrentIndex].fixationWindow.length - 1].index + 1;
                assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
            }

            let currentAsset = assets[this.state.assetCurrentIndex];
            assets[this.state.assetCurrentIndex].history = currentAsset.history.concat(currentAsset.fixationWindow, currentAsset.future);
            assets[this.state.assetCurrentIndex].fixationWindow = [];
            assets[this.state.assetCurrentIndex].future = [];
        } else if (paragraphIndex < this.state.assetCurrentIndex) {
            // Skip back
            // Make current asset future

            // Highlight if active
            if (this.state.highlightIsActive) {
                let start = 0;
                let end = assets[this.state.assetCurrentIndex].history[assets[this.state.assetCurrentIndex].history.length - 1].index + 1;
                assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
            }

            let currentAsset = assets[this.state.assetCurrentIndex];
            assets[this.state.assetCurrentIndex].future = currentAsset.history.concat(currentAsset.fixationWindow, currentAsset.future);
            assets[this.state.assetCurrentIndex].history = [];
            assets[this.state.assetCurrentIndex].fixationWindow = [];
        }

        // Highlight remaining words in new asset or currentAsset
        if (this.state.highlightIsActive && paragraphIndex > this.state.assetCurrentIndex) {
            // Progression
            let nextAssetWords = assets[paragraphIndex].history.concat(assets[paragraphIndex].fixationWindow, assets[paragraphIndex].future);
            let start = 0;
            let end = nextAssetWords[wordIndex].index;
            assets = this.toggleWordHighlight(paragraphIndex, start, end);
        } else if (this.state.highlightIsActive && paragraphIndex < this.state.assetCurrentIndex) {
            // Regression
            let previousAssetWords = assets[paragraphIndex].history.concat(assets[paragraphIndex].fixationWindow, assets[paragraphIndex].future);
            let start = previousAssetWords[wordIndex].index;
            let end = previousAssetWords.length;
            assets = this.toggleWordHighlight(paragraphIndex, start, end);
        } else if (this.state.highlightIsActive) {
            // Same Asset
            let currentAssetWords = assets[this.state.assetCurrentIndex].history.concat(assets[this.state.assetCurrentIndex].fixationWindow, assets[this.state.assetCurrentIndex].future);
            let start = wordIndex >= assets[this.state.assetCurrentIndex].history.length ? assets[this.state.assetCurrentIndex].history.length: wordIndex;
            let end = wordIndex >= assets[this.state.assetCurrentIndex].history.length ? wordIndex : assets[this.state.assetCurrentIndex].history.length;
            assets = this.toggleWordHighlight(this.state.assetCurrentIndex, start, end);
        }

        let words = assets[paragraphIndex].history.concat(assets[paragraphIndex].fixationWindow, assets[paragraphIndex].future);
        let history = words.slice(0, wordIndex);
        let fixationWindow = words.slice(wordIndex, wordIndex + this.props.fixationWidth);
        let future = words.slice(wordIndex + this.props.fixationWidth);

        assets[paragraphIndex].history        = history;
        assets[paragraphIndex].fixationWindow = fixationWindow;
        assets[paragraphIndex].future         = future;

        doc.assets = assets;

        this.setState({
            assetCurrentIndex : paragraphIndex,
            doc            : doc
        });
    }

    loadAsset = (index) => {
        let doc = this.state.doc;
        let assets                   = doc.assets;
        let direction = index >= this.state.assetCurrentIndex ? ScrollDirectionTypes.DOWN : ScrollDirectionTypes.UP;

        if (direction == ScrollDirectionTypes.DOWN) {
            // Place first words of next asset into fixation window
            assets[index].fixationWindow = assets[index].future.slice(0, this.props.fixationWidth);
            assets[index].future         = assets[index].future.slice(this.props.fixationWidth);
        } else {
            // === Read from bottom to top to understand logic ===
            //
            // Reset last current asset to have all words in future
            assets[index + 1].future = assets[index + 1].history.concat(assets[index + 1].fixationWindow, assets[index + 1].future);
            assets[index + 1].fixationWindow = [];
            assets[index + 1].history = [];

            // Place last words of last asset into fixation window
            assets[index].fixationWindow = assets[index].history.slice(assets[index].history.length - this.props.fixationWidth);
            assets[index].history         = assets[index].history.slice(0, assets[index].history.length - this.props.fixationWidth);
        }

        doc.assets = assets;

        this.setState({
            scroll            : 0,
            doc: doc,
            assetCurrentIndex : index
        }, () => {
            return;
        });
    }

    toggleWordHighlight = (paragraphIndex, start, end) => {

        let history    = [],
        fixationWindow = [],
        future         = [];

        let lastWordIndexHistory = this.state.doc.assets[paragraphIndex].history.length > 0 ? this.state.doc.assets[paragraphIndex].history[this.state.doc.assets[paragraphIndex].history.length - 1].index : 0;
        let lastWordIndexFixationWindow = this.state.doc.assets[paragraphIndex].fixationWindow.length > 0 ? this.state.doc.assets[paragraphIndex].fixationWindow[this.state.doc.assets[paragraphIndex].fixationWindow.length - 1].index : 0;
        let words = this.state.doc.assets[paragraphIndex].history.concat(this.state.doc.assets[paragraphIndex].fixationWindow, this.state.doc.assets[paragraphIndex].future);

        for (let i = start; i < end; i++) {
            words[i].isHighlighted = !words[i].isHighlighted;
        }

        history        = words.slice(0, lastWordIndexHistory + 1),
        fixationWindow = this.state.doc.assets[paragraphIndex].fixationWindow.length < this.props.fixationWidth ? words.slice(lastWordIndexHistory + 1) : words.slice(lastWordIndexHistory + 1, lastWordIndexFixationWindow + 1),
        future         = this.state.doc.assets[paragraphIndex].fixationWindow.length < this.props.fixationWidth ? [] : words.slice(lastWordIndexFixationWindow + 1);

        let assets = this.state.doc.assets;
        assets[paragraphIndex].history = history;
        assets[paragraphIndex].fixationWindow = fixationWindow;
        assets[paragraphIndex].future = future;

        return assets;
    }

    toggleHighlight = () => {
        this.setState({
            highlightIsActive: !this.state.highlightIsActive
        });
    }

    toggleWordBookmark = (e) => {
        e.stopPropagation();
        let doc = this.state.doc;
        let assets = doc.assets;
        let wordParagraph = assets[this.state.assetCurrentIndex];

        wordParagraph.fixationWindow[0].hasBookmark = !wordParagraph.fixationWindow[0].hasBookmark;

        assets[this.state.assetCurrentIndex] = wordParagraph;

        doc.assets = assets;

        this.setState({
            doc : doc
        }, () => {
            return;
        });
    }

    toggleCruiseControl = (e) => {
        if (e) e.stopPropagation();

        if (!this.state.cruiseControlIsActive) {
            this.moveText(new Date().getTime());
        } else {
            clearTimeout(this.timer);
        }

        this.setState({
            cruiseControlIsActive: !this.state.cruiseControlIsActive
        });
    }
    /**
     * [setTimePerFixation description]
     * @param {[type]} addDelay in milliseconds
     */
    setTimePerFixation = (addDelay) => {
        // We model the number of fixations as displacement
        // We want to determine the fixations/s (velocity)
        // We use the following equation of motion: x_f = x_0 + v_0*t + 0.5*a*t^2

        let secondsInMinute = 60;
        let milliSecondFactor = 1000;
        let numFixations = (this.props.readingSpeed/this.props.fixationWidth); // in 60 seconds
        let timePerFixation = milliSecondFactor * secondsInMinute/numFixations + addDelay; // measured in ms
        this.setState({
            timePerFixation: timePerFixation
        });
    }

    /**
     * [doTimer description]
     * @param  {[type]} length     [description]
     * @param  {[type]} resolution in frames/s
     * @param  {[type]} oninstance [description]
     * @param  {[type]} oncomplete [description]
     */
    doTimer = (length, resolution, oninstance, oncomplete) => {
        let steps = (length / 100) * (resolution / 10),
            speed = length / steps,
            count = 0,
            start = new Date().getTime();

        let instance = () => {
            if(count++ < steps) {
                oninstance(steps, count);
                let diff = (new Date().getTime() - start) - (count * speed);
                this.timer = window.setTimeout(instance, (speed - diff));
            } else {
                let timestamp = new Date().getTime();
                this.setState({
                    checkAddDelay: false
                });
                oncomplete();
                this.moveText(timestamp);
            }
        }

        this.timer = window.setTimeout(instance, speed);
    }

    checkAddDelay = () => {
        // Runs fully once per doTimer
        // Only checks end of sentence for punctiation currently
        if (!this.state.checkAddDelay) {
            const sentenceEndingSet = new Set([".", "?", "!", "..."]);
            const pauseSet = new Set([",", ";", ":", "\u2014"]); // \u2014 is the em dash
            const transitionSet = new Set(TransitionWords);
            let addDelay = 0;
            let futureFixationWindow = this.state.doc.assets[this.state.assetCurrentIndex].future.slice(0, this.props.fixationWidth);

            // Determine if need to add time
            futureFixationWindow.forEach((word) => {
                if (sentenceEndingSet.has(word.text.charAt(word.text.length - 1))) {
                    // Sentence Ending
                    addDelay += 2 * this.state.timePerFixation/3;
                } else if (pauseSet.has(word.text.charAt(word.text.length - 1))) {
                    // Punctuation Pauses
                    addDelay += this.state.timePerFixation/3;
                } else if (transitionSet.has(word.text.replace(/[,.?!;:]/, '').toLowerCase())) {
                    // Propositional Integration Word Pause
                    addDelay += this.state.timePerFixation/3;
                }
            });

            // Set state as checked
            this.setState({
                checkAddDelay: true
            });

            // Update FixationTime
            this.setTimePerFixation(addDelay);
        }
    }

    /**
     * [moveText description]
     * @param  {[type]} timestamp time of method call
     */
    moveText = (timestamp) => {
        // Apply first transition
        // Avoid waiting for timePerFixation to elapse
        let diff = new Date().getTime() - timestamp;
        this.doTimer(
            this.state.timePerFixation - diff,
            20,
            this.checkAddDelay
            ,
            this.updateViewport.bind({}, ScrollDirectionTypes.DOWN));
    }

    toggleMap = (e) => {
        e.stopPropagation();
        alert("Still To Implement: Will display a global map of text document.");
    }

    performWriteOperation = (e) => {
        e.stopPropagation();
        alert("Still To Implement: Will open writing interface to attach text note.");
    }

    performImageOperation = (e) => {
        e.stopPropagation();
        alert("Still To Implement: Will open up dialog to select image to attach.");
    }

    performRecordOperation = (e) => {
        e.stopPropagation();
        alert("Still To Implement: Will open up interface to record voicenote to attach.");
    }

    performDrawOperation = (e) => {
        e.stopPropagation();
        alert("Still To Implement: Will open up interface to draw a sketch to attach.");
    }

    getProgress = (total, asset) => {
        let completed = this.state.doc.assets[this.state.assetCurrentIndex].history.length +
                            this.state.doc.assets[this.state.assetCurrentIndex].fixationWindow.length +
                            this.state.doc.assets.slice(0, this.state.assetCurrentIndex).reduce((total, asset) => {
                                return total + (asset.history.length + asset.fixationWindow.length + asset.future.length);
                            }, 0);

        let totalWords = this.state.doc.assets.reduce((total, asset) => {
            return total + (asset.history.length + asset.fixationWindow.length + asset.future.length);
        }, 0);

        let progress = completed/totalWords * 100;

        return progress;
    }

    handleWindowFocusState = (e) => {
        if (!document.hidden && this.state.cruiseControlIsActive) {
            // Stop cruise control if leave web app tab
            this.moveText(new Date().getTime());
        } else if (document.hidden && this.state.cruiseControlIsActive) {
            // Resume cruise control if return to web app tab
            clearTimeout(this.timer);
        }
    }
}

// ============= PropTypes ==============

Viewport.propTypes = {
    fontSize           : PropTypes.number.isRequired,
    fontFamily         : PropTypes.object.isRequired,
    fixationWidth      : PropTypes.number.isRequired,
    trackingSpeed      : PropTypes.number.isRequired,
    hand               : PropTypes.string.isRequired,
    skin               : PropTypes.string.isRequired,
    readingSpeed       : PropTypes.number.isRequired,
    highlightColor     : PropTypes.string.isRequired,
    showAnnotations    : PropTypes.bool.isRequired,
    modifyReadingSpeed : PropTypes.func.isRequired

};

// ============= Styled Components ==============
const Container = styled.div`
    height                : 100vh;
    width                 : 100vw;
    display               : -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display               : -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display               : -ms-flexbox; /* TWEENER - IE 10 */
    display               : -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display               : flex;
    -webkit-flex-direction: column;
    -ms-flex-direction    : column;
    -moz-flex-direction   : column;
    flex-direction        : column;
    -webkit-align-items   : center;
	-ms-align-items       : center;
	-moz-align-items      : center;
	align-items           : center;
    overflow              : hidden;
    cursor: ${props => props.cruiseControlHaltIsActive ? props.customCursor : "auto"};
    color: ${props => props.skin == SkinTypes.WHITE ?
                "rgba(0,0,0,0.87)"
            :
                props.skin == SkinTypes.CREAM ?
                        "#5f3e24"
                    :
                        "#bebebe"
            };
    background: ${props => props.skin == SkinTypes.WHITE ?
                "#ffffff"
            :
                props.skin == SkinTypes.CREAM ?
                        "#f9f3e9"
                    :
                        "#171717"
            };
`;

const HistoryContainer = styled.section`
    position : relative;
    display               : -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display               : -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display               : -ms-flexbox; /* TWEENER - IE 10 */
    display               : -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display               : flex;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction    : column-reverse;
    -moz-flex-direction   : column-reverse;
    flex-direction        : column-reverse;
    -webkit-align-items   : flex-end;
	-ms-align-items       : flex-end;
	-moz-align-items      : flex-end;
	align-items           : flex-end;
    width    : 100%;
    max-width: ${props => 30*props.fontSize + 'px'};
    height   : 35vh;
    margin   : 0;
    opacity  : 0.8;

    &:after {
        position      : absolute;
        bottom        : 0;
        height        : 100%;
        width         : 100%;
        content       : "";
        background: ${props => props.skin == SkinTypes.WHITE ?
                    "linear-gradient(to bottom,rgba(255,255,255, 1) 20%,rgba(255,255,255, 0) 70%)"
                :
                    props.skin == SkinTypes.CREAM ?
                            "linear-gradient(to bottom,rgba(249,243,233, 1) 20%,rgba(249,243,233, 0) 70%)"
                        :
                            "linear-gradient(to bottom,rgba(23,23,23, 1) 20%, rgba(23,23,23, 0) 70%)"
                };
        pointer-events: none; /* so the text is still selectable */
    }
`;

const FixationWindowContainer = styled.section`
    position                 : relative;
    display                  : -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display                  : -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display                  : -ms-flexbox; /* TWEENER - IE 10 */
    display                  : -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display                  : flex;
    -webkit-flex-direction   : row;
    -ms-flex-direction       : row;
    -moz-flex-direction      : row;
    flex-direction           : row;
    -webkit-align-items      : center;
	-ms-align-items          : center;
	-moz-align-items         : center;
	align-items              : center;
    -webkit-justify-content  : center;
    -ms-align-justify-content: center;
    -moz-justify-content     : center;
    justify-content          : center;
    width                    : 100vw;
    max-width                : ${window.innerWidth - 200};
    height                   : 30vh;
    margin                   : 0;
`;

const FixationWindow = styled.p`
    font-family       : ${props => props.fontFamily.regular || serif};
    font-size         : ${props => 2.5*props.fontSize + 'px' || '40px'};
    line-height       : ${props => 2.5*props.fontSize + 'px' || '40px'};
    margin            : 0;
    border-left-width: ${props => props.highlightIsActive ? "5px" : "0px"};
    border-left-color: ${props => props.theme[props.highlightColor]};
    border-left-style: solid;
    padding-left: ${props => props.highlightIsActive ? "10px" : "0px"};
    transition        : all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition   : all 0.3s;
    -ms-transition    : all 0.3s;
`;

const FutureContainer = styled.section`
    position : relative;
    width    : 100%;
    max-width: ${props => 30*props.fontSize + 'px'};
    height   : 35vh;
    margin   : 0;
    opacity  : 0.2;

    &:after {
        position      : absolute;
        bottom        : 0;
        height        : 100%;
        width         : 100%;
        content       : "";
        background: ${props => props.skin == SkinTypes.WHITE ?
                    "linear-gradient(to top, rgba(255,255,255, 1) 40%, rgba(255,255,255, 0) 80%)"
                :
                    props.skin == SkinTypes.CREAM ?
                            "linear-gradient(to top, rgba(249,243,233, 1) 40%, rgba(249,243,233, 0) 80%)"
                        :
                            "linear-gradient(to top, rgba(23,23,23, 1) 40%, rgba(23,23,23, 0) 80%)"
                };
        pointer-events: none; /* so the text is still selectable */
    }
`;

const TitleBar = styled.h3`
    position: fixed;
    top: 0px;
    left: 50%;
    margin: 15px 0px;
    transform: translateX(-50%);
    color: ${props => props.theme.gray};
    z-index: 5;
    font-weight: 200;
    font-size: 0.9em;
    user-select: none;
`;

const PauseLightPurple = "url(https://firebasestorage.googleapis.com/v0/b/flow-3db7f.appspot.com/o/flow-app-resources%2Fpause-lightpurple.png?alt=media&token=8e07a08e-ba26-4658-be64-df2e4ca2c77c), auto";
const PausePurple = "url(https://firebasestorage.googleapis.com/v0/b/flow-3db7f.appspot.com/o/flow-app-resources%2Fpause-purple.png?alt=media&token=854021c2-d26c-4f5e-8e94-22d703564351), auto";
const TransitionWords = ["and", "also", "then", "moreoever", "likewise", "comparatively", "correspondingly", "similarly", "furthermore", "additionally",
    "notably", "including", "namely", "chiefly", "indeed", "surely", "markedly", "especially", "specifically", "expressively", "surprisingly", "frequently", "significantly",
    "hence", "suddenly", "shortly", "henceforth", "meanwhile", "presently", "occasionally", "thus", "because", "but", "unlike", "or", "yet", "while", "albeit", "besides",
    "if", "unless", "lest", "lastly", "finally", "too", "although"];

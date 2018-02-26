// Libraries
import React                    from 'react';
import PropTypes                from 'prop-types';
import styled                   from 'styled-components';
import { CSSTransitionGroup }   from 'react-transition-group';

// Components
import ScrollDirectionTypes     from '../../constants/scrollDirectionTypes';
import HighlightTypes          from '../../constants/highlightColorTypes';
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
            showAnnotations: true,
            highlightColor : null
        }
    }

    componentWillMount() {
        // console.log("-----Viewport");

        let para = "";
        // console.log(JSON.stringify(para.split(" ")));

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
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":1,
                            "text":"keep",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":2,
                            "text":"claiming",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":3,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":4,
                            "text":"technology",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":5,
                            "text":"will",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":6,
                            "text":"transform",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":7,
                            "text":"education.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":8,
                            "text":"We",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":9,
                            "text":"said",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":10,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":11,
                            "text":"when",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":12,
                            "text":"computers",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":13,
                            "text":"hit",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":14,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":15,
                            "text":"market",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":16,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":17,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":18,
                            "text":"real",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":19,
                            "text":"way",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":20,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":21,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":22,
                            "text":"1980s.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":23,
                            "text":"We",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":24,
                            "text":"said",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":25,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":26,
                            "text":"when",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":27,
                            "text":"artificial",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":28,
                            "text":"intelligence",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":29,
                            "text":"began",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":30,
                            "text":"reaching",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":31,
                            "text":"Siri",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":32,
                            "text":"levels.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":33,
                            "text":"And",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":34,
                            "text":"we’re",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":35,
                            "text":"saying",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":36,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":37,
                            "text":"now,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":38,
                            "text":"when",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":39,
                            "text":"spatial",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":40,
                            "text":"computing",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":41,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":42,
                            "text":"taking",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":43,
                            "text":"its",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":44,
                            "text":"strongest",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":45,
                            "text":"steps",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":46,
                            "text":"forward",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":47,
                            "text":"since",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":48,
                            "text":"we",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":49,
                            "text":"began",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":50,
                            "text":"seriously",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":51,
                            "text":"working",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":52,
                            "text":"on",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":53,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":54,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":55,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":56,
                            "text":"80s.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":57,
                            "text":"But",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":58,
                            "text":"while",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":59,
                            "text":"those",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":60,
                            "text":"early",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":61,
                            "text":"technologies",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":62,
                            "text":"have",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":63,
                            "text":"certainly",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":64,
                            "text":"impacted",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":65,
                            "text":"schooling,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":66,
                            "text":"they",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":67,
                            "text":"haven’t",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":68,
                            "text":"transformed",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":69,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":70,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":71,
                            "text":"way",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":72,
                            "text":"we",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":73,
                            "text":"hoped",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":74,
                            "text":"they",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":75,
                            "text":"might.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
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
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":1,
                            "text":"computers.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":2,
                            "text":"Many",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":3,
                            "text":"schools",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":4,
                            "text":"now",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":5,
                            "text":"require",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":6,
                            "text":"all",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":7,
                            "text":"assignments",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":8,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":9,
                            "text":"be",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":10,
                            "text":"typed",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":11,
                            "text":"instead",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":12,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":13,
                            "text":"handwritten — they’re",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":14,
                            "text":"easier",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":15,
                            "text":"on",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":16,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":17,
                            "text":"eyes,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":18,
                            "text":"after",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":19,
                            "text":"all,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":20,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":21,
                            "text":"no",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":22,
                            "text":"more",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":23,
                            "text":"demerit",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":24,
                            "text":"points",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":25,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":26,
                            "text":"sloppy",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":27,
                            "text":"cursive.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":28,
                            "text":"But",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":29,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":30,
                            "text":"vision",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":31,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":32,
                            "text":"30",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":33,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":34,
                            "text":"sitting",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":35,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":36,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":37,
                            "text":"class",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":38,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":39,
                            "text":"eight",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":40,
                            "text":"hours",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":41,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":42,
                            "text":"day",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":43,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":44,
                            "text":"front",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":45,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":46,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":47,
                            "text":"computer",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":48,
                            "text":"learning",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":49,
                            "text":"lessons",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":50,
                            "text":"from",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":51,
                            "text":"programs",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":52,
                            "text":"never",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":53,
                            "text":"materialized.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":54,
                            "text":"Whether",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":55,
                            "text":"that’s",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":56,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":57,
                            "text":"positive",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":58,
                            "text":"or",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":59,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":60,
                            "text":"negative",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":61,
                            "text":"can",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":62,
                            "text":"be",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":63,
                            "text":"debated",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":64,
                            "text":"ad",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":65,
                            "text":"nauseum,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":66,
                            "text":"but",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":67,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":68,
                            "text":"fact",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":69,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":70,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":71,
                            "text":"adoption",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":72,
                            "text":"was",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":73,
                            "text":"hampered",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":74,
                            "text":"by",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":75,
                            "text":"cost.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":76,
                            "text":"Most",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":77,
                            "text":"schools",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":78,
                            "text":"have",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":79,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":80,
                            "text":"single",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":81,
                            "text":"computer",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":82,
                            "text":"lab",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":83,
                            "text":"where",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":84,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":85,
                            "text":"take",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":86,
                            "text":"turns",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":87,
                            "text":"studying",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":88,
                            "text":"computers",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":89,
                            "text":"specifically — they",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":90,
                            "text":"aren’t",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":91,
                            "text":"using",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":92,
                            "text":"data",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":93,
                            "text":"modeling",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":94,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":95,
                            "text":"their",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":96,
                            "text":"stats",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":97,
                            "text":"class,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":98,
                            "text":"or",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":99,
                            "text":"testing",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":100,
                            "text":"components",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":101,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":102,
                            "text":"chemistry.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":103,
                            "text":"Computers",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":104,
                            "text":"have",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":105,
                            "text":"been",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":106,
                            "text":"relegated",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":107,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":108,
                            "text":"something",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":109,
                            "text":"you",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":110,
                            "text":"learn",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":111,
                            "text":"about",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":112,
                            "text":"rather",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":113,
                            "text":"than",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":114,
                            "text":"something",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":115,
                            "text":"you",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":116,
                            "text":"learn",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":117,
                            "text":"from,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":118,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":119,
                            "text":"there",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":120,
                            "text":"are",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":121,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":122,
                            "text":"lot",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":123,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":124,
                            "text":"opportunities",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":125,
                            "text":"we’ve",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":126,
                            "text":"missed",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":127,
                            "text":"because",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":128,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":129,
                            "text":"that.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
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
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":1,
                            "text":"failure",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":2,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":3,
                            "text":"launch",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":4,
                            "text":"artificial",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":5,
                            "text":"intelligence",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":6,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":7,
                            "text":"education",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":8,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":9,
                            "text":"directly",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":10,
                            "text":"linked",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":11,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":12,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":13,
                            "text":"failure",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":14,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":15,
                            "text":"adopt",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":16,
                            "text":"widespread",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":17,
                            "text":"computers.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":18,
                            "text":"A",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":19,
                            "text":"virtual",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":20,
                            "text":"tutor",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":21,
                            "text":"can’t",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":22,
                            "text":"help",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":23,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":24,
                            "text":"figure",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":25,
                            "text":"out",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":26,
                            "text":"their",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":27,
                            "text":"unique",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":28,
                            "text":"learning",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":29,
                            "text":"style",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":30,
                            "text":"if",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":31,
                            "text":"seventy",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":32,
                            "text":"five",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":33,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":34,
                            "text":"are",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":35,
                            "text":"all",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":36,
                            "text":"sharing",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":37,
                            "text":"time",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":38,
                            "text":"on",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":39,
                            "text":"one",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":40,
                            "text":"computer.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":41,
                            "text":"These",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":42,
                            "text":"technologies",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":43,
                            "text":"are",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":44,
                            "text":"finding",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":45,
                            "text":"traction",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":46,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":47,
                            "text":"alternative",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":48,
                            "text":"education",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":49,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":50,
                            "text":"tutoring,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":51,
                            "text":"however,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":52,
                            "text":"where",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":53,
                            "text":"assessment",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":54,
                            "text":"tests",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":55,
                            "text":"help",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":56,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":57,
                            "text":"learn",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":58,
                            "text":"about",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":59,
                            "text":"their",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":60,
                            "text":"own",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":61,
                            "text":"learning",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":62,
                            "text":"styles.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":63,
                            "text":"There’s",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":64,
                            "text":"much",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":65,
                            "text":"further",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":66,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":67,
                            "text":"AI",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":68,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":69,
                            "text":"go,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":70,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":71,
                            "text":"course,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":72,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":73,
                            "text":"hopefully",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":74,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":75,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":76,
                            "text":"future",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":77,
                            "text":"we’ll",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":78,
                            "text":"see",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":79,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":80,
                            "text":"being",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":81,
                            "text":"used",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":82,
                            "text":"even",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":83,
                            "text":"more.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
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
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":1,
                            "text":"now",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":2,
                            "text":"we",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":3,
                            "text":"begin",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":4,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":5,
                            "text":"wonder",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":6,
                            "text":"how",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":7,
                            "text":"virtual",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":8,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":9,
                            "text":"augmented",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":10,
                            "text":"reality",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":11,
                            "text":"will",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":12,
                            "text":"fare",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":13,
                            "text":"when",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":14,
                            "text":"up",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":15,
                            "text":"against",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":16,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":17,
                            "text":"same",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":18,
                            "text":"legislative",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":19,
                            "text":"hurdles",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":20,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":21,
                            "text":"have",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":22,
                            "text":"hampered",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":23,
                            "text":"past",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":24,
                            "text":"technologies.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":25,
                            "text":"Virtual",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":26,
                            "text":"reality",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":27,
                            "text":"has",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":28,
                            "text":"been",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":29,
                            "text":"getting",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":30,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":31,
                            "text":"lot",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":32,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":33,
                            "text":"well-deserved",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":34,
                            "text":"ink",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":35,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":36,
                            "text":"its",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":37,
                            "text":"potential",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":38,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":39,
                            "text":"transform",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":40,
                            "text":"education,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":41,
                            "text":"but",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":42,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":43,
                            "text":"infrastructure",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":44,
                            "text":"necessary",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":45,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":46,
                            "text":"bring",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":47,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":48,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":49,
                            "text":"program",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":50,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":51,
                            "text":"every",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":52,
                            "text":"kid",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":53,
                            "text":"can",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":54,
                            "text":"engage",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":55,
                            "text":"with",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":56,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":57,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":58,
                            "text":"stopper",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":59,
                            "text":"even",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":60,
                            "text":"more",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":61,
                            "text":"significant",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":62,
                            "text":"than",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":63,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":64,
                            "text":"was",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":65,
                            "text":"with",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":66,
                            "text":"computers.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":67,
                            "text":"After",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":68,
                            "text":"all,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":69,
                            "text":"VR",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":70,
                            "text":"not",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":71,
                            "text":"only",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":72,
                            "text":"requires",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":73,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":74,
                            "text":"computer",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":75,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":76,
                            "text":"each",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":77,
                            "text":"student — it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":78,
                            "text":"requires",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":79,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":80,
                            "text":"top",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":81,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":82,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":83,
                            "text":"line",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":84,
                            "text":"computer.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":85,
                            "text":"Given",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":86,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":87,
                            "text":"most",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":88,
                            "text":"schools",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":89,
                            "text":"are",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":90,
                            "text":"still",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":91,
                            "text":"running",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":92,
                            "text":"computers",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":93,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":94,
                            "text":"are",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":95,
                            "text":"ten",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":96,
                            "text":"years",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":97,
                            "text":"old",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":98,
                            "text":"or",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":99,
                            "text":"more,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":100,
                            "text":"that’s",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":101,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":102,
                            "text":"hurdle.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
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
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":1,
                            "text":"there",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":2,
                            "text":"are",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":3,
                            "text":"some",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":4,
                            "text":"people",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":5,
                            "text":"doing",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":6,
                            "text":"amazing",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":7,
                            "text":"things",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":8,
                            "text":"with",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":9,
                            "text":"VR",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":10,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":11,
                            "text":"education.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":12,
                            "text":"We’re",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":13,
                            "text":"not",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":14,
                            "text":"going",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":15,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":16,
                            "text":"waste",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":17,
                            "text":"much",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":18,
                            "text":"time",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":19,
                            "text":"on",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":20,
                            "text":"Google",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":21,
                            "text":"Expeditions,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":22,
                            "text":"because",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":23,
                            "text":"you’re",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":24,
                            "text":"probably",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":25,
                            "text":"all",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":26,
                            "text":"familiar",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":27,
                            "text":"with",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":28,
                            "text":"them,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":29,
                            "text":"but",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":30,
                            "text":"if",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":31,
                            "text":"you",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":32,
                            "text":"aren’t,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":33,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":34,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":35,
                            "text":"nutshell:",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":36,
                            "text":"Google",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":37,
                            "text":"lets",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":38,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":39,
                            "text":"explore",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":40,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":41,
                            "text":"world",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":42,
                            "text":"using",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":43,
                            "text":"cell",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":44,
                            "text":"phones",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":45,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":46,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":47,
                            "text":"piece",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":48,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":49,
                            "text":"cardboard.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":50,
                            "text":"It’s",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":51,
                            "text":"great",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":52,
                            "text":"because",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":53,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":54,
                            "text":"doesn’t",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":55,
                            "text":"need",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":56,
                            "text":"an",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":57,
                            "text":"expensive",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":58,
                            "text":"computer,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":59,
                            "text":"but",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":60,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":61,
                            "text":"still",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":62,
                            "text":"requires",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":63,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":64,
                            "text":"lot",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":65,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":66,
                            "text":"funding",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":67,
                            "text":"from",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":68,
                            "text":"Google",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":69,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":70,
                            "text":"make",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":71,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":72,
                            "text":"happen.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":73,
                            "text":"They",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":74,
                            "text":"rent",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":75,
                            "text":"out",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":76,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":77,
                            "text":"phones,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":78,
                            "text":"provide",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":79,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":80,
                            "text":"cardboards",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":81,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":82,
                            "text":"free,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":83,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":84,
                            "text":"even",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":85,
                            "text":"give",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":86,
                            "text":"training",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":87,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":88,
                            "text":"teachers",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":89,
                            "text":"on",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":90,
                            "text":"how",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":91,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":92,
                            "text":"lead",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":93,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":94,
                            "text":"expedition.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":95,
                            "text":"It’s",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":96,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":97,
                            "text":"fun",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":98,
                            "text":"learning",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":99,
                            "text":"tool,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":100,
                            "text":"but",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":101,
                            "text":"likely",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":102,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":103,
                            "text":"be",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":104,
                            "text":"used",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":105,
                            "text":"by",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":106,
                            "text":"teachers",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":107,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":108,
                            "text":"way",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":109,
                            "text":"they",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":110,
                            "text":"used",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":111,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":112,
                            "text":"use",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":113,
                            "text":"crappy",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":114,
                            "text":"British",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":115,
                            "text":"documentaries — give",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":116,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":117,
                            "text":"teacher",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":118,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":119,
                            "text":"break",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":120,
                            "text":"from",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":121,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":122,
                            "text":"classroom,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":123,
                            "text":"let",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":124,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":125,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":126,
                            "text":"have",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":127,
                            "text":"some",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":128,
                            "text":"fun,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":129,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":130,
                            "text":"then",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":131,
                            "text":"get",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":132,
                            "text":"back",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":133,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":134,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":135,
                            "text":"real",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":136,
                            "text":"learning.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
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
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":1,
                            "text":"seen",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":2,
                            "text":"VR",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":3,
                            "text":"take",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":4,
                            "text":"off",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":5,
                            "text":"as",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":6,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":7,
                            "text":"form",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":8,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":9,
                            "text":"job",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":10,
                            "text":"training,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":11,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":12,
                            "text":"advantage",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":13,
                            "text":"there",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":14,
                            "text":"being",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":15,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":16,
                            "text":"budgets",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":17,
                            "text":"necessary",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":18,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":19,
                            "text":"pull",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":20,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":21,
                            "text":"off.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":22,
                            "text":"But",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":23,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":24,
                            "text":"boost",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":25,
                            "text":"up",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":26,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":27,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":28,
                            "text":"get",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":29,
                            "text":"from",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":30,
                            "text":"learning",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":31,
                            "text":"first-hand",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":32,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":33,
                            "text":"incredibly",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":34,
                            "text":"important",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":35,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":36,
                            "text":"schools,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":37,
                            "text":"too.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":38,
                            "text":"A",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":39,
                            "text":"lot",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":40,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":41,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":42,
                            "text":"learn",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":43,
                            "text":"better",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":44,
                            "text":"by",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":45,
                            "text":"doing",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":46,
                            "text":"than",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":47,
                            "text":"listening,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":48,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":49,
                            "text":"virtual",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":50,
                            "text":"reality",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":51,
                            "text":"gives",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":52,
                            "text":"them",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":53,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":54,
                            "text":"opportunity",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":55,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":56,
                            "text":"learn",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":57,
                            "text":"hands",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":58,
                            "text":"on",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":59,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":60,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":61,
                            "text":"way",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":62,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":63,
                            "text":"classic",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":64,
                            "text":"education",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":65,
                            "text":"simply",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":66,
                            "text":"can’t.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":67,
                            "text":"Training",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":68,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":69,
                            "text":"becoming",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":70,
                            "text":"huge",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":71,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":72,
                            "text":"industry,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":73,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":74,
                            "text":"hopefully",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":75,
                            "text":"as",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":76,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":77,
                            "text":"matures",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":78,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":79,
                            "text":"will",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":80,
                            "text":"trickle",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":81,
                            "text":"down",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":82,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":83,
                            "text":"high",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":84,
                            "text":"school",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":85,
                            "text":"level",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":86,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":87,
                            "text":"as",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":88,
                            "text":"well",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":89,
                            "text":"(right",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":90,
                            "text":"now",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":91,
                            "text":"we’re",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":92,
                            "text":"mostly",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":93,
                            "text":"seeing",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":94,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":95,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":96,
                            "text":"college",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":97,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":98,
                            "text":"on",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":99,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":100,
                            "text":"job).",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":101,
                            "text":"Of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":102,
                            "text":"course,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":103,
                            "text":"hands-on",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":104,
                            "text":"training",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":105,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":106,
                            "text":"school",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":107,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":108,
                            "text":"about",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":109,
                            "text":"more",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":110,
                            "text":"than",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":111,
                            "text":"just",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":112,
                            "text":"learning",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":113,
                            "text":"how",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":114,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":115,
                            "text":"do",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":116,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":117,
                            "text":"job.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":118,
                            "text":"It",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":119,
                            "text":"also",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":120,
                            "text":"means",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":121,
                            "text":"letting",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":122,
                            "text":"them",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":123,
                            "text":"explore",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":124,
                            "text":"how",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":125,
                            "text":"physics",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":126,
                            "text":"works",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":127,
                            "text":"instead",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":128,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":129,
                            "text":"just",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":130,
                            "text":"telling",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":131,
                            "text":"them,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":132,
                            "text":"or",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":133,
                            "text":"watching",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":134,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":135,
                            "text":"famous",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":136,
                            "text":"battle",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":137,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":138,
                            "text":"learn",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":139,
                            "text":"history.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
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
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":1,
                            "text":"virtual",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":2,
                            "text":"reality",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":3,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":4,
                            "text":"being",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":5,
                            "text":"hampered",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":6,
                            "text":"by",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":7,
                            "text":"cost,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":8,
                            "text":"augmented",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":9,
                            "text":"reality",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":10,
                            "text":"might",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":11,
                            "text":"have",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":12,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":13,
                            "text":"leg-up",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":14,
                            "text":"on",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":15,
                            "text":"its",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":16,
                            "text":"more",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":17,
                            "text":"resource",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":18,
                            "text":"intensive",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":19,
                            "text":"cousin.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":20,
                            "text":"With",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":21,
                            "text":"AR,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":22,
                            "text":"teachers",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":23,
                            "text":"can",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":24,
                            "text":"get",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":25,
                            "text":"started",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":26,
                            "text":"with",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":27,
                            "text":"nothing",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":28,
                            "text":"but",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":29,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":30,
                            "text":"cell",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":31,
                            "text":"phone.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":32,
                            "text":"Granted,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":33,
                            "text":"one",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":34,
                            "text":"phone",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":35,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":36,
                            "text":"an",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":37,
                            "text":"entire",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":38,
                            "text":"classroom",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":39,
                            "text":"isn’t",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":40,
                            "text":"an",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":41,
                            "text":"ideal",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":42,
                            "text":"scenario — so",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":43,
                            "text":"AR",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":44,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":45,
                            "text":"pressing",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":46,
                            "text":"forward",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":47,
                            "text":"using",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":48,
                            "text":"other",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":49,
                            "text":"avenues.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
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
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":1,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":2,
                            "text":"augmented",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":3,
                            "text":"reality",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":4,
                            "text":"sandbox,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":5,
                            "text":"which",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":6,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":7,
                            "text":"being",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":8,
                            "text":"used",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":9,
                            "text":"around",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":10,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":11,
                            "text":"world",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":12,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":13,
                            "text":"help",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":14,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":15,
                            "text":"learn",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":16,
                            "text":"about",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":17,
                            "text":"topography",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":18,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":19,
                            "text":"geography.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":20,
                            "text":"All",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":21,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":22,
                            "text":"requires",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":23,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":24,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":25,
                            "text":"projector,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":26,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":27,
                            "text":"single",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":28,
                            "text":"computer,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":29,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":30,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":31,
                            "text":"few",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":32,
                            "text":"sensors.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":33,
                            "text":"With",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":34,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":35,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":36,
                            "text":"can",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":37,
                            "text":"leap",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":38,
                            "text":"into",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":39,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":40,
                            "text":"fully",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":41,
                            "text":"responsive",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":42,
                            "text":"experience",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":43,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":44,
                            "text":"reacts",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":45,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":46,
                            "text":"their",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":47,
                            "text":"input.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":48,
                            "text":"Following",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":49,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":50,
                            "text":"line",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":51,
                            "text":"has",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":52,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":53,
                            "text":"potential",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":54,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":55,
                            "text":"get",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":56,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":57,
                            "text":"whole",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":58,
                            "text":"classroom",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":59,
                            "text":"involved",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":60,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":61,
                            "text":"AR",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":62,
                            "text":"with",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":63,
                            "text":"realistic",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":64,
                            "text":"resource",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":65,
                            "text":"requirements.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
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
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":1,
                            "text":"course,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":2,
                            "text":"we’re",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":3,
                            "text":"also",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":4,
                            "text":"entering",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":5,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":6,
                            "text":"age",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":7,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":8,
                            "text":"ARKit",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":9,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":10,
                            "text":"ARCore,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":11,
                            "text":"which",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":12,
                            "text":"means",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":13,
                            "text":"that",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":14,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":15,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":16,
                            "text":"few",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":17,
                            "text":"years,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":18,
                            "text":"every",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":19,
                            "text":"cell",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":20,
                            "text":"phone",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":21,
                            "text":"will",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":22,
                            "text":"have",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":23,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":24,
                            "text":"ability",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":25,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":26,
                            "text":"be",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":27,
                            "text":"used",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":28,
                            "text":"as",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":29,
                            "text":"an",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":30,
                            "text":"educational",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":31,
                            "text":"tool.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":32,
                            "text":"While",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":33,
                            "text":"lots",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":34,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":35,
                            "text":"students",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":36,
                            "text":"don’t",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":37,
                            "text":"have",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":38,
                            "text":"their",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":39,
                            "text":"own",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":40,
                            "text":"phones,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":41,
                            "text":"buying",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":42,
                            "text":"cheap",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":43,
                            "text":"mobile",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":44,
                            "text":"devices",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":45,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":46,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":47,
                            "text":"whole",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":48,
                            "text":"classroom",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":49,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":50,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":51,
                            "text":"lot",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":52,
                            "text":"easier",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":53,
                            "text":"than",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":54,
                            "text":"buying",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":55,
                            "text":"computers",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":56,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":57,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":58,
                            "text":"whole",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":59,
                            "text":"classroom.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":60,
                            "text":"And",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":61,
                            "text":"even",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":62,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":63,
                            "text":"these",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":64,
                            "text":"early",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":65,
                            "text":"days,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":66,
                            "text":"we’re",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":67,
                            "text":"seeing",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":68,
                            "text":"exciting",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":69,
                            "text":"concepts",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":70,
                            "text":"like",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":71,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":72,
                            "text":"Atom",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":73,
                            "text":"Visualizer,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":74,
                            "text":"which",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":75,
                            "text":"lets",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":76,
                            "text":"you",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":77,
                            "text":"place",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":78,
                            "text":"models",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":79,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":80,
                            "text":"atomic",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":81,
                            "text":"structures",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":82,
                            "text":"around",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":83,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":84,
                            "text":"room",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":85,
                            "text":"and",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":86,
                            "text":"then",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":87,
                            "text":"examine",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":88,
                            "text":"them",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":89,
                            "text":"in",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":90,
                            "text":"3",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":91,
                            "text":"dimensions.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
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
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":1,
                            "text":"soon",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":2,
                            "text":"we’re",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":3,
                            "text":"likely",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":4,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":5,
                            "text":"see",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":6,
                            "text":"this",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":7,
                            "text":"take",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":8,
                            "text":"off",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":9,
                            "text":"remains",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":10,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":11,
                            "text":"key",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":12,
                            "text":"question.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":13,
                            "text":"While",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":14,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":15,
                            "text":"technology",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":16,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":17,
                            "text":"here,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":18,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":19,
                            "text":"point",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":20,
                            "text":"at",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":21,
                            "text":"which",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":22,
                            "text":"it",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":23,
                            "text":"becomes",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":24,
                            "text":"cheap",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":25,
                            "text":"enough",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":26,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":27,
                            "text":"mass",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":28,
                            "text":"adoption",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":29,
                            "text":"is",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":30,
                            "text":"still",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":31,
                            "text":"at",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":32,
                            "text":"least",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":33,
                            "text":"a",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":34,
                            "text":"few",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":35,
                            "text":"years",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":36,
                            "text":"away.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":37,
                            "text":"AR",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":38,
                            "text":"will",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":39,
                            "text":"probably",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":40,
                            "text":"beat",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":41,
                            "text":"its",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":42,
                            "text":"cousin",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":43,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":44,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":45,
                            "text":"finish",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":46,
                            "text":"line,",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"pause",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":47,
                            "text":"but",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"proposition",
                                "factor":1
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":48,
                            "text":"VR",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":49,
                            "text":"may",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":50,
                            "text":"take",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":51,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":52,
                            "text":"final",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":53,
                            "text":"prize",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":54,
                            "text":"of",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":55,
                            "text":"being",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":56,
                            "text":"the",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":57,
                            "text":"first",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":58,
                            "text":"technology",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":59,
                            "text":"to",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":60,
                            "text":"truly",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":61,
                            "text":"change",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":62,
                            "text":"education.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":63,
                            "text":"Only",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":64,
                            "text":"time",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":65,
                            "text":"will",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":66,
                            "text":"tell",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":67,
                            "text":"for",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{

                            },
                            "highlight":{
                                "active":false,
                                "color":null
                            }
                        },
                        {
                            "index":68,
                            "text":"sure.",
                            "definition":{

                            },
                            "hasBookmark":false,
                            "attachments":{

                            },
                            "delay":{
                                "type":"ending",
                                "factor":2
                            },
                            "highlight":{
                                "active":false,
                                "color":null
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
        // doc = {
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

        // console.log(JSON.stringify(doc));

        this.setState({
            doc        : doc
        }, () => {
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
                    showAnnotations={this.state.showAnnotations}
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
                              skin={this.props.skin}
                              showAnnotations={this.state.showAnnotations}
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
                            skin={this.props.skin}
                            showAnnotations={this.state.showAnnotations}
                            cruiseControlHaltIsActive={this.state.cruiseControlHaltIsActive}
                            />
                    );
                })}
                </HistoryContainer>
                <FixationWindowContainer
                    fontSize={this.props.fontSize}>
                    <FixationWindow
                        highlightIsActive={this.state.highlightIsActive}
                        highlightColor={this.state.highlightColor}
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
                                        showAnnotations={this.state.showAnnotations}
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
                                skin={this.props.skin}
                                showAnnotations={this.state.showAnnotations}
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
                                skin={this.props.skin}
                                showAnnotations={this.state.showAnnotations}
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
                    handleHighlight={this.handleHighlight}
                    toggleWordBookmark={this.toggleWordBookmark}
                    fixationWindow={this.state.doc.assets[this.state.assetCurrentIndex].fixationWindow}
                    highlightIsActive={this.state.highlightIsActive}
                    highlightColor={this.state.highlightColor}
                    deactivateHighlight={this.deactivateHighlight}
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
            let currentAsset = this.state.doc.assets[this.state.assetCurrentIndex];
            let millisecondsInMinute = 60000;
            let readMinutes = currentAsset.length/nextProps.readingSpeed;
            let numFixations = (nextProps.readingSpeed/this.props.fixationWidth); // in 60 seconds
            let effectiveMillisecondsInMinute = millisecondsInMinute/(1 + currentAsset.delay/(3*readMinutes*numFixations));
            let timePerFixation = effectiveMillisecondsInMinute/numFixations; // measured in ms

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
                    this.props.changeReadingSpeed(ScrollDirectionTypes.UP);
                } else {
                    this.updateViewport(ScrollDirectionTypes.UP);
                }

            // Down or Right
            } else if (e.keyCode == 39 || e.keyCode == 40) {
                if (this.state.cruiseControlIsActive) {
                    window.clearTimeout(this.isScrolling);
                    this.props.changeReadingSpeed(ScrollDirectionTypes.DOWN);
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
            this.props.changeReadingSpeed(direction);
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
            if (!words[i].highlight.active) {
                words[i].highlight.active = true;
                words[i].highlight.color = this.state.highlightColor;
            } else {
                words[i].highlight.active = false;
                words[i].highlight.color = null;
            }
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

    handleHighlight = (color) => {
        if (!this.state.highlightColor) {
            // First activation
            this.setState({
                highlightIsActive: !this.state.highlightIsActive,
                highlightColor: color
            });
        } else if (color == this.state.highlightColor) {
            // Highlight active, and deactivating
            this.setState({
                highlightIsActive: !this.state.highlightIsActive,
                highlightColor: null
            });
        } else if (color != this.state.highlightColor) {
            // Highlight is active and moving colors
            this.setState({
                highlightColor: color
            });
        }
    }

    deactivateHighlight = () => {
        this.setState({
            highlightIsActive: false,
            highlightColor: null
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

        let currentAsset = this.state.doc.assets[this.state.assetCurrentIndex];
        let millisecondsInMinute = 60000;
        let readMinutes = currentAsset.length/this.props.readingSpeed;
        let numFixations = (this.props.readingSpeed/this.props.fixationWidth); // in 60 seconds
        let effectiveMillisecondsInMinute = (millisecondsInMinute - (addDelay*currentAsset.delay)/(3*readMinutes))/(1 + currentAsset.delay/(3*readMinutes*numFixations));
        let timePerFixation = effectiveMillisecondsInMinute/numFixations + addDelay; // measured in ms
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
        let addDelay = 0;
        // Runs fully once per doTimer
        // Only checks end of sentence for punctiation currently
        if (!this.state.checkAddDelay) {
            let futureFixationWindow = this.state.doc.assets[this.state.assetCurrentIndex].future.slice(0, this.props.fixationWidth);

            // Determine if need to add time
            futureFixationWindow.forEach((word) => {
                if (word.delay && Object.keys(word.delay).length > 0) {
                    addDelay += word.delay.factor * this.state.timePerFixation/3;
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
        //console.log("moveText diff: ", diff);
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
                                return total + asset.length;
                            }, 0);

        let totalWords = this.state.doc.assets.reduce((total, asset) => {
            return total + asset.length;
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
    changeReadingSpeed : PropTypes.func.isRequired

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

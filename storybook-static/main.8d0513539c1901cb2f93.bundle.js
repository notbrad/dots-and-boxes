(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(module,__webpack_exports__,__webpack_require__){"use strict";var slicedToArray=__webpack_require__(156),react=__webpack_require__(0),react_default=__webpack_require__.n(react),Grid=__webpack_require__(70);__webpack_require__(370);function Score(props){return react_default.a.createElement("div",{className:"score-container"},react_default.a.createElement("div",{className:"title"},props.title),react_default.a.createElement("div",{className:"value"},props.value))}var components_Score=Score;Score.__docgenInfo={description:"",methods:[],displayName:"Score"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Score.js"]={name:"Score",docgenInfo:Score.__docgenInfo,path:"src/components/Score.js"});var defineProperty=__webpack_require__(98),toConsumableArray=__webpack_require__(71);function gridBlockObject(row,column,left,top,completedBy){return{row:row,column:column,left:left,top:top,completedBy:completedBy}}function generateGrid(rows,columns){var i,j,rowData,grid=[];for(i=0;i<columns;i++){for(rowData=[],j=0;j<=rows;j++){var isLastRow=j===rows;rowData.push(gridBlockObject(j,i,0,isLastRow?null:0,isLastRow?null:0))}grid.push(rowData)}for(rowData=[],j=0;j<rows;j++)rowData.push(gridBlockObject(j,i,null,0,null));return grid.push(rowData),grid}function deepCopyArrayWhileUpdatingRowValues(array,row,column,valueToBeUpdatedAtRow){return Object.assign(Object(toConsumableArray.a)(array),Object(defineProperty.a)({},column,Object.assign(Object(toConsumableArray.a)(array[column]),Object(defineProperty.a)({},row,valueToBeUpdatedAtRow))))}function togglePlayer(state,action){return 1===state.currentPlayer?2:1}function getUpdatedScores(scores,currentTurnScore,currentPlayer){var updatedScores=Object(toConsumableArray.a)(scores);return updatedScores[currentPlayer-1]=updatedScores[currentPlayer-1]+currentTurnScore,updatedScores}function getUpdatedState(state,action,type){var currentPlayer=state.currentPlayer,grid=state.grid,scores=state.scores,_action$payload=action.payload,row=_action$payload.row,column=_action$payload.column,isTopBarUpdated="top"===type,currentBlockState=grid[column][row],currentTurnScore=0;if(isTopBarUpdated?0!==currentBlockState.top:0!==currentBlockState.left)return state;var updatedBlockState=Object.assign(currentBlockState,isTopBarUpdated?{top:currentPlayer}:{left:currentPlayer}),updatedGrid=deepCopyArrayWhileUpdatingRowValues(state.grid,row,column,updatedBlockState),shouldTogglePlayer=!0,currentBlock=updatedBlockState,isNotPresentOnEdge=!1;isTopBarUpdated?isNotPresentOnEdge=column<state.columns:isNotPresentOnEdge=row<state.rows;if(isNotPresentOnEdge){var bottomBlock=grid[column+1][row],rightBlock=grid[column][row+1];0!==updatedBlockState.left&&0!==updatedBlockState.top&&0!==bottomBlock.top&&0!==rightBlock.left&&(shouldTogglePlayer=!1,currentTurnScore+=1,updatedGrid=deepCopyArrayWhileUpdatingRowValues(state.grid,row,column,Object.assign(updatedBlockState,{completedBy:currentPlayer})))}if(isTopBarUpdated){if(column>0){var topBlock=grid[column-1][row],topRightBlock=grid[column-1][row+1];0!==topBlock.left&&0!==topBlock.top&&0!==currentBlock.top&&0!==topRightBlock.left&&(shouldTogglePlayer=!1,currentTurnScore+=1,updatedGrid=deepCopyArrayWhileUpdatingRowValues(state.grid,row,column-1,Object.assign(topBlock,{completedBy:currentPlayer})))}}else if(row>0){var leftBlock=grid[column][row-1],bottomLeftBlock=grid[column+1][row-1];0!==leftBlock.left&&0!==leftBlock.top&&0!==bottomLeftBlock.top&&0!==currentBlock.left&&(currentTurnScore+=1,shouldTogglePlayer=!1,updatedGrid=deepCopyArrayWhileUpdatingRowValues(state.grid,row-1,column,Object.assign(leftBlock,{completedBy:currentPlayer})))}return Object.assign({},state,{grid:updatedGrid},{currentPlayer:shouldTogglePlayer?togglePlayer(state):currentPlayer},{scores:getUpdatedScores(scores,currentTurnScore,currentPlayer)})}var initialState={rows:5,columns:5,currentPlayer:1,scores:[0,0],grid:[]};function reducer(state,action){switch(action.type){case"UPDATE_ROWS_AND_COLUMNS":return Object.assign({},state,action.payload);case"START_GAME":return Object.assign({},state,{grid:generateGrid(state.rows,state.columns)});case"UPDATE_GRID_TOP":return console.log(state),getUpdatedState(state,action,"top");case"UPDATE_GRID_LEFT":return console.log(state),getUpdatedState(state,action,"left");default:return null}}__webpack_require__(371);function GameContainer(props){var _useReducer=Object(react.useReducer)(reducer,initialState),_useReducer2=Object(slicedToArray.a)(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1];return react_default.a.createElement("div",{className:"game-container"},react_default.a.createElement("button",{onClick:function(){return dispatch({type:"START_GAME"})}},"START GAME"),react_default.a.createElement(components_Score,{title:"Player 1",value:state.scores[0]}),react_default.a.createElement(components_Score,{title:"Player 2",value:state.scores[1]}),react_default.a.createElement(Grid.a,{state:state,dispatch:dispatch}))}__webpack_exports__.a=GameContainer;GameContainer.__docgenInfo={description:"",methods:[],displayName:"GameContainer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/containers/GameContainer.js"]={name:"GameContainer",docgenInfo:GameContainer.__docgenInfo,path:"src/containers/GameContainer.js"})},157:function(module,exports,__webpack_require__){__webpack_require__(158),__webpack_require__(238),module.exports=__webpack_require__(239)},239:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(29);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){__webpack_require__(356)},module)}.call(this,__webpack_require__(120)(module))},356:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(29),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(14),_components_Dot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(68),_components_Bar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(59),_components_Box__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(69),_components_Grid__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(70),_containers_GameContainer__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(155);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Dot",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dot__WEBPACK_IMPORTED_MODULE_3__.a,null)});var storiesOfBar=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Bar",module);storiesOfBar.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs),storiesOfBar.add("default",function(){var typeValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Type",{0:0,1:1,2:2,null:null},0),orientationValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Orientation",{horizontal:"horizontal",vertical:"vertical"},"vertical");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bar__WEBPACK_IMPORTED_MODULE_4__.a,{type:typeValue,orientation:orientationValue})});var storiesOfBox=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Box",module);storiesOfBox.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs),storiesOfBox.add("default",function(){var typeValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Type",{0:0,1:1,2:2,null:null},0),textValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Text","P1");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Box__WEBPACK_IMPORTED_MODULE_5__.a,{type:typeValue,text:textValue})});var storiesOfGrid=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Grid",module);storiesOfGrid.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs),storiesOfGrid.add("default",function(){var rowValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Rows",3),colValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Columns",3);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,{rows:rowValue,column:colValue})});var storiesOfGameContainer=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("GameContainer",module);storiesOfGameContainer.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs),storiesOfGameContainer.add("default",function(){var rowValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Rows",3),colValue=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Columns",3);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_GameContainer__WEBPACK_IMPORTED_MODULE_7__.a,{rows:rowValue,column:colValue})})}.call(this,__webpack_require__(120)(module))},365:function(module,exports,__webpack_require__){},366:function(module,exports,__webpack_require__){},367:function(module,exports,__webpack_require__){},368:function(module,exports,__webpack_require__){},369:function(module,exports,__webpack_require__){},370:function(module,exports,__webpack_require__){},371:function(module,exports,__webpack_require__){},59:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(366);function Bar(props){var orientation=props.orientation,styles={};switch(props.type){case 0:styles.backgroundColor="#d0d0d0";break;case 1:styles.backgroundColor="#4c0045";break;case 2:styles.backgroundColor="#bd512f";break;default:styles.display="none"}var className="vertical"===orientation?"vertical-bar":"horizontal-bar";return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:className,style:styles,onClick:props.onBarClick})}Bar.defaultProps={type:void 0,orientation:"horizontal"},__webpack_exports__.a=Bar,Bar.__docgenInfo={description:"",methods:[],displayName:"Bar",props:{type:{defaultValue:{value:"undefined",computed:!0},required:!1},orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Bar.js"]={name:"Bar",docgenInfo:Bar.__docgenInfo,path:"src/components/Bar.js"})},68:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(365);function Dot(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"dot"})}__webpack_exports__.a=Dot,Dot.__docgenInfo={description:"",methods:[],displayName:"Dot"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dot.js"]={name:"Dot",docgenInfo:Dot.__docgenInfo,path:"src/components/Dot.js"})},69:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(367);function Box(props){var type=props.type,text=props.text,styles={};switch(type){case 0:styles.backgroundColor="#ffffff";break;case 1:styles.backgroundColor="#6f0765";break;case 2:styles.backgroundColor="#ffb228";break;default:styles.display="none"}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"box",style:styles},text)}Box.defaultProps={color:"tomato",type:0},__webpack_exports__.a=Box,Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{color:{defaultValue:{value:'"tomato"',computed:!1},required:!1},type:{defaultValue:{value:"0",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Box.js"]={name:"Box",docgenInfo:Box.__docgenInfo,path:"src/components/Box.js"})},70:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Dot=__webpack_require__(68),Box=__webpack_require__(69),Bar=__webpack_require__(59);__webpack_require__(368);function GridBlock(props){var block=props.block,dispatch=props.dispatch;function handleBarClick(payload,type){if("top"===type)return dispatch({type:"UPDATE_GRID_TOP",payload:payload});dispatch({type:"UPDATE_GRID_LEFT",payload:payload})}var row=block.row,column=block.column,top=block.top,left=block.left,completedBy=block.completedBy;return react_default.a.createElement("div",{className:"grid__basic-block"},react_default.a.createElement("div",{className:"grid__basic-block__dot-and-bar"},react_default.a.createElement(Dot.a,null),react_default.a.createElement(Bar.a,{type:top,orientation:"horizontal",onBarClick:function(){return handleBarClick({row:row,column:column},"top")}})),react_default.a.createElement("div",{className:"grid__basic-block__bar-and-box"},react_default.a.createElement(Bar.a,{type:left,orientation:"vertical",onBarClick:function(){return handleBarClick({row:row,column:column},"left")}}),react_default.a.createElement(Box.a,{type:completedBy,text:props.text})))}var components_GridBlock=GridBlock;GridBlock.__docgenInfo={description:"",methods:[],displayName:"GridBlock"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GridBlock.js"]={name:"GridBlock",docgenInfo:GridBlock.__docgenInfo,path:"src/components/GridBlock.js"});__webpack_require__(369);function Grid(props){var state=props.state,dispatch=props.dispatch,rows=state.rows,width=80*rows+10*(rows+1);return react_default.a.createElement("div",{className:"grid",style:{width:width}},function(state,dispatch){return state.grid.map(function(row){return react_default.a.createElement("div",{className:"grid__row"},row.map(function(block){return react_default.a.createElement(components_GridBlock,{block:block,dispatch:dispatch})}))})}(state,dispatch))}Grid.defaultProps={state:{currentPlayer:0,grid:[[{row:0,column:0,left:0,top:0,completedBy:0},{row:1,column:0,left:0,top:void 0,completedBy:void 0}],[{row:0,column:1,left:void 0,top:0,completedBy:void 0}]]},dispatch:function(){}};__webpack_exports__.a=Grid;Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{state:{defaultValue:{value:"{currentPlayer:0,grid:[[{row:0,column:0,left:0,top:0,completedBy:0},{row:1,column:0,left:0,top:undefined,completedBy:undefined}],[{row:0,column:1,left:undefined,top:0,completedBy:undefined}]]}",computed:!1},required:!1},dispatch:{defaultValue:{value:"function dispatch(){}",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Grid.js"]={name:"Grid",docgenInfo:Grid.__docgenInfo,path:"src/components/Grid.js"})}},[[157,1,2]]]);
//# sourceMappingURL=main.8d0513539c1901cb2f93.bundle.js.map
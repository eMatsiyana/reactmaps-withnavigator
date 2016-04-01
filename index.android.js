/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var React = require('react-native');
var Map1 = require('./Views/Map');

var {
  AppRegistry,
  Navigator,
  View,
  Text
} = React;

var MapTest = React.createClass({

  renderMap1:function(){
    return <Map1/>;
  },

  renderMap2:function(){
    return <Map2/>;
  },

  renderScene:function(route,navigator){
    var Scene = null;
    switch(route.id){
      case 'Map1':
        Scene = this.renderMap1();
        break;
      case 'Map2':
        Scene = this.renderMap2();
        break;
      default:
        Scene = this.noRoute(navigator);
        break;
    }
    return Scene;
  },

  render:function() {
    return <Navigator
            initialRoute={{id:'Map1'}}
            renderScene={this.renderScene}/>;
  },

  noRoute: function(navigator) {
    return <View> <Text> No route here </Text></View>;
  }

});

AppRegistry.registerComponent('MapTest', () => MapTest);

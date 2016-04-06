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
  renderScene:function(route,navigator){
    switch(route.id){
      case 'Map1':
        return (
          <View style={{flex: 1}}>
            <Map1 style={{flex: 1}} />
          </View>
        );
        break;
      default:
        return this.noRoute(navigator);
        break;
    }
  },
  render: function() {
    // return this.renderMap1();
    return <Navigator
            style={{flex: 1}}
            initialRoute={{id:'Map1'}}
            renderScene={this.renderScene}/>;
  },
  noRoute: function(navigator) {
    return <View><Text>{'No route here'}</Text></View>;
  }
});


AppRegistry.registerComponent('MapTest', () => MapTest);

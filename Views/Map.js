var React = require('react-native');
var { StyleSheet, Dimensions } = React;

var {height, width} = Dimensions.get('window');

var WebViewAndroid = require('react-native-webview-android');

var Map = React.createClass({
    onNavigationStateChange: function(event) {
      console.log(event);
    },
    render: function() {
        return ( <WebViewAndroid 
                    ref = "webViewAndroid"
                    javaScriptEnabled = {true}
                    geolocationEnabled = {true}
                    builtInZoomControls = {false}
                    onNavigationStateChange = {this.onNavigationStateChange}
                    url = {"http://sendr-maps-dev.eu-west-1.elasticbeanstalk.com/#/me"}
                    style = {styles.containerWebView}/>
        );
    }
});

var styles = StyleSheet.create({
  containerWebView: {
    width: width,
    height:height
  }
});

module.exports = Map;

var React = require('react-native');
var { Dimensions, StyleSheet } = React;

var WebViewAndroid = require('react-native-webview-android');

var jsForInjection = `
  var el = document.getElementsByTagName('body')[0];
  el.style.height = '${Dimensions.get('window').height}px';
`;

var Map = React.createClass({
    onNavigationStateChange: function(event) {
      console.log(event);
    },
    render: function() {
        return (<WebViewAndroid
                  ref="webViewAndroid"
                  javaScriptEnabled={true}
                  geolocationEnabled={true}
                  injectedJavaScript={jsForInjection}
                  onNavigationStateChange={this.onNavigationStateChange}
                  url={"https://dl.dropboxusercontent.com/u/42999/temp/maps/index.html#/me?_k=f68mj8"}
                  style={styles.containerWebView} />);
    }
});

var styles = StyleSheet.create({
  containerWebView: {
    flex: 1,
  }
});

module.exports = Map;

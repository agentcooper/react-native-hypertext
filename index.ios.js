'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Hypertext = require('./Hypertext.ios');

var reactNativeHypertext = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Hypertext>
          {'<a href="http://www.w3.org/WhatIs.html">Hypertext</a> is text which contains <a href="http://www.w3.org/Terms.html#link">links</a> to other texts.'}
        </Hypertext>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactNativeHypertext', () => reactNativeHypertext);

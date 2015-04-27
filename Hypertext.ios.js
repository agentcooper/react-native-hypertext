var React = require('react-native');

var {
  Text,
  StyleSheet,
  LinkingIOS
} = React;

var styles = StyleSheet.create({
  link: {
    color: '#0000ff',
    flexWrap: 'wrap',
    fontWeight: 'bold'
  },
  text: {
  },
  container: {
    width: 300
  }
});

var splitHypertext = require('./splitHypertext');

var Hypertext = React.createClass({
  onPress: function(href) {
    if (typeof this.props.onLinkClick === 'function') {
      this.props.onLinkClick.apply(this, arguments);
    } else if (href) {
      LinkingIOS.openURL(href);
    }
  },

  splitHypertext: splitHypertext,

  render: function() {
    var children = this.splitHypertext({
      input: this.props.children,

      onLink: function(text, href) {
        return <Text style={styles.link} onPress={
          this.onPress.bind(this, href)
        }>{text}</Text>;
      },

      onText: function(text) {
        return <Text style={styles.text}>{text}</Text>;
      }
    });

    return (
      <Text>{children}</Text>
    )
  }
});

module.exports = Hypertext;

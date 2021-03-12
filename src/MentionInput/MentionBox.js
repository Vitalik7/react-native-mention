import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'

import colors from '../constants/colors'
import PaginatedFlatList from "../../../../components/PaginatedFlatlist";

export const HEIGHT = 134

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    zIndex: 10,
    elevation: 10,
    borderRadius: 5,
    height: HEIGHT,
    position: 'absolute',
    shadowRadius: 5,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    backgroundColor: 'white'
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noSuggestionText: {}
})

class MentionBox extends React.Component {

  render() {
    if (this.props.data.length === 0) {
      return (
        <View style={[styles.mainContainer, this.props.style]}>
          <View style={styles.subContainer}>
            <Text style={styles.noSuggestionText}>No Suggestions</Text>
          </View>
        </View>
      )
    }

    return (
      <View style={[styles.mainContainer, this.props.style]}>
        <FlatList
          data={this.props.data}
          renderItem={this.props.renderCell}
          keyboardShouldPersistTaps="always"
          onEndReachedThreshold={0.2}
          scrollEnabled
          onEndReached={this.props.onEndReached}
          ListFooterComponent={this.props.ListFooterComponent}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
          updateCellsBatchingPeriod={500}
        />
      </View>
    )
  }
}

export default MentionBox

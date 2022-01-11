import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { issuesAPI } from "../api/Api";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const FlatListIssues = () => {
  const [issuesList, setIssuesList] = useState([]);
  const navigation = useNavigation();
  const [offset, setOffset] = useState(1);
  const [limit, setLimit] = useState(20);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    getData();
    return () => {};
  }, [offset]);

  const getData = async () => {
    issuesAPI
      .get("/repos/facebook/react-native/issues", {
        per_page: limit,
        page: offset,
      })
      .then(function (response) {
        setIssuesList([...issuesList, ...response.data]);
        setisLoading(false);
      });
  };

  const onScrollHandler = () => {
    setOffset(offset + 20);
    setisLoading(true);
  };

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          return navigation.navigate("IssuesDetails", {
            titleIssue: item.title,
            stateIssue: item.state,
            bodyIssue: item.body,
          });
        }}
        backgroundColor="red"
      />
    );
  };

  const renderFooter = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={issuesList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={onScrollHandler}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListIssues;

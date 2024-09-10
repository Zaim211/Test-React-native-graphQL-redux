import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setPosts, selectPost } from '../store/postsSlice';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_POSTS = gql`
  query {
    posts {
      data {
        id
        title
      }
    }
  }
`;

const PostListScreen = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  useEffect(() => {
    if (data) {
      dispatch(setPosts(data.posts.data));
    }
  }, [data]);

  const posts = useSelector((state: RootState) => state.posts.posts);

  const handlePostPress = (post: any) => {
    dispatch(selectPost(post));
    navigation.navigate('PostDetail');
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
      
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePostPress(item)} style={styles.postItem}>
            <Text style={styles.postTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light grey background
    padding: 16,
  },
  postItem: {
    backgroundColor: '#fff', // White card background
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4, // Shadow for Android
  },
  postTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default PostListScreen;

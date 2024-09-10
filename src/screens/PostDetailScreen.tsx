import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const PostDetailScreen = () => {
  const post = useSelector((state: RootState) => state.posts.selectedPost);

  if (!post) {
    return <Text style={styles.noPostText}>No post selected</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Post Detail</Text>
        <Text style={styles.postDetail}>ID: {post.id}</Text>
        <Text style={styles.postDetail}>Title: {post.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light grey background for contrast
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff', // White background for the card
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Adds a shadow on Android
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  postDetail: {
    fontSize: 18,
    color: '#555', // Lighter text color for details
    marginBottom: 10,
    textAlign: 'center',
  },
  noPostText: {
    fontSize: 18,
    color: '#f00',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default PostDetailScreen;

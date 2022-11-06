  //Courselist componenet 
  import React from 'react'
  import Course from './Course';
  import {ScrollView, View, StyleSheet} from 'react-native'

  const CourseList = ({courses}) => (
    //defines a view for multiple Course components mapped from courses
    <ScrollView>
      <View style={styles.courseList}>
        {courses.map(course => <Course key={course.id} course={course} />)}
      </View>
    </ScrollView>
  );
const styles = StyleSheet.create({
    courseList: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
export default CourseList;


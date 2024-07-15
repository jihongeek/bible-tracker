import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['kr'] = {
  monthNames: [...Array(12)].map((_,month)=>`${month+1}월`),
  monthNamesShort: [...Array(12)].map((_,month)=>`${month+1}월`),
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: "오늘"
};
LocaleConfig.defaultLocale = 'kr';
const App = ()=> {
  const [selected, setSelected] = useState('');
  return (
    <View style={styles.container}>
      <Text>성경통독 {4}일차</Text>
      <Text>오늘 읽을 성경 : 로마서 12장</Text>
      <Calendar
        onDayPress={day => {
          console.log('selected day', day);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
});

export default App;
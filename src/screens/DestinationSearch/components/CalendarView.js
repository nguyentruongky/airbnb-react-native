import React from 'react';
import {useState} from 'react';
import {View, Pressable, Text, SafeAreaView, Dimensions} from 'react-native';
import {Calendar} from 'react-native-calendario';

export const CalendarView = ({setSelectedRangeString}) => {
  const size = Dimensions.get('screen');
  const [dayDiff, setDayDiff] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [durationString, setDurationString] = useState('');
  function updateDayDiff(diff) {
    setDayDiff(diff);
    if (durationString.length !== 0) {
      let newString = durationString + ' (+/-' + diff + ')';
      setSelectedRangeString(newString);
    }
  }
  function formatDate(range) {
    let dateString = '';
    const startDate = range.startDate;
    let startDay = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(
      startDate,
    );
    if (startDate) {
      dateString = startDay;
    }
    const endDate = range.endDate;
    if (endDate) {
      let day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(endDate);
      let mo = new Intl.DateTimeFormat('en', {month: 'short'}).format(endDate);

      dateString += ' - ' + day + ' ' + mo;
    }

    if (dateString == startDay) {
      let mo = new Intl.DateTimeFormat('en', {month: 'short'}).format(
        startDate,
      );
      dateString += ' ' + mo;
    }

    setDurationString(dateString);
    setSelectedRangeString(dateString);
  }
  return (
    <SafeAreaView style={{}}>
      <Calendar
        onChange={range => {
          setStartDate(range.startDate);
          setEndDate(range.endDate);
          formatDate(range);
        }}
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        dayNames={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
        theme={{
          monthTitleTextStyle: {
            color: '#333',
            fontWeight: '600',
            fontSize: 18,
          },
          emptyMonthContainerStyle: {},
          emptyMonthTextStyle: {
            color: '#333',
            fontWeight: '600',
            fontSize: 18,
          },
          weekColumnsContainerStyle: {},
          weekColumnStyle: {
            paddingVertical: 10,
          },
          weekColumnTextStyle: {
            color: '#333',
            fontWeight: '500',
            fontSize: 16,
          },
          nonTouchableDayContainerStyle: {},
          nonTouchableDayTextStyle: {},
          startDateContainerStyle: {
            backgroundColor: '#232323',
          },
          endDateContainerStyle: {
            backgroundColor: '#232323',
          },
          dayContainerStyle: {
            backgroundColor: 'white',
          },
          dayTextStyle: {
            color: '#333',
            fontWeight: '700',
            fontSize: 15,
          },
          dayOutOfRangeContainerStyle: {},
          dayOutOfRangeTextStyle: {
            textDecorationColor: '#999',
            textDecorationLine: 'line-through',
            color: '#999',
            fontWeight: '700',
            fontSize: 15,
          },
          todayContainerStyle: {},
          todayTextStyle: {},
          activeDayContainerStyle: {
            backgroundColor: '#232323',
          },
          activeDayTextStyle: {
            fontWeight: '700',
            fontSize: 15,
            color: 'white',
          },
          nonTouchableLastMonthDayTextStyle: {},
        }}
      />
      <View
        style={{
          backgroundColor: 'white',
          borderTopColor: 'lightgray',
          borderTopWidth: 1,
          borderBottomColor: 'lightgray',
          borderBottomWidth: 1,
          paddingVertical: 16,
          position: 'absolute',
          width: size.width,
          bottom: 0,
        }}>
        <View style={{flexDirection: 'row', marginLeft: 16}}>
          <DayDiff
            title="1 day"
            selectedDayDiff={dayDiff}
            setDayDiff={updateDayDiff}
          />
          <DayDiff
            title="3 days"
            selectedDayDiff={dayDiff}
            setDayDiff={updateDayDiff}
          />
          <DayDiff
            title="7 days"
            selectedDayDiff={dayDiff}
            setDayDiff={updateDayDiff}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const DayDiff = ({title, selectedDayDiff, setDayDiff}) => (
  <Pressable
    onPress={() => setDayDiff(title)}
    style={{
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: selectedDayDiff === title ? '#232323' : 'lightgray',
      marginRight: 16,
    }}>
    <Text style={{fontWeight: '500'}}>+/-{title}</Text>
  </Pressable>
);

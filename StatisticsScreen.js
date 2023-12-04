import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { AntDesign } from '@expo/vector-icons';

const ChartContainer = ({ children }) => (
  <View style={styles.chartContainer}>
    {children}
  </View>
);

const StatisticsScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const barChartWidth = windowWidth * 0.7; // Set the bar chart width to 80% of the screen width
  const pieChartWidth = windowWidth * 0.7; // Set the pie chart width to 70% of the minimum of screen width and height
  const chartHeight = windowHeight / 2;
  const monthsData = ['January', 'February', 'March', 'April', 'May', 'June'];
  const weekData = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

  const barChartData = {
    labels: weekData,
    datasets: [
      {
        data: [20, 45, 28, 80],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        barPercentage: 0.4,
        barRadius: 3,
        strokeWidth: 2,
      },
    ],
  };

  const barChartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.4,
  };

  const pieChartData = [
    { name: 'Category 1', population: 35, color: '#FFD700', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Category 2', population: 40, color: '#FF6347', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Category 3', population: 25, color: '#90EE90', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  const [selectedDate, setSelectedDate] = useState(0);

  const handleDateChange = (direction) => {
    if (direction === 'prev' && selectedDate > 0) {
      setSelectedDate((prevDate) => prevDate - 1);
    } else if (direction === 'next' && selectedDate < monthsData.length - 1) {
      setSelectedDate((prevDate) => prevDate + 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground
        source={require('./assets/SnowBackground.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Statistics</Text>

          <View style={styles.dateNavigation}>
            <TouchableOpacity onPress={() => handleDateChange('prev')}>
              <AntDesign name="arrowleft" size={24} color="#000" />
            </TouchableOpacity>
            <Text>{monthsData[selectedDate]}</Text>
            <TouchableOpacity onPress={() => handleDateChange('next')}>
              <AntDesign name="arrowright" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <ChartContainer>
            <BarChart data={barChartData} width={barChartWidth} height={chartHeight} chartConfig={barChartConfig} />
          </ChartContainer>

          <ChartContainer>
            <PieChart
              data={pieChartData}
              width={pieChartWidth}
              height={chartHeight}
              chartConfig={{ color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})` }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
            />
          </ChartContainer>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dateNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  chartContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default StatisticsScreen;

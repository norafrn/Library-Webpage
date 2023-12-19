/*
 * CSCI 1170: Introduction to Web Design and Development
 * Fall 2023
 * Author: Dr. Raghav V. Sampangi (raghav@cs.dal.ca)
 *
 * This file contains JSON Data stored in a JavaScript variable.
 * Include this script if you wish to use this data in Assignment 4.
 * 
 * Description of the data:
 * This data gives simple weather records of cities.
 * Each weather record has a unique ID (identifier), name of the city, the main weather of the city, current temperature in the city, temperature unit, what the temperature feels like, and the possibility of rain (percentage).
 * There are 27 weather records in total.
 * 
 * City names generated using: https://www.fantasynamegenerators.com/city-names.php
 * Weather info from: https://weather.fandom.com/wiki/Types_of_Weather
 */

let jsonDataWeather = [
	{
	  "CityID": "W00300",
	  "CityName": "Hetset",
	  "MainWeather": "Cloudy",
	  "Temp": 20,
	  "TempUnit": "Celcius",
	  "FeelsLike": 16,
	  "RainPossibilityPercentage": 90
	},
	{
	  "CityID": "W00301",
	  "CityName": "Icreland",
	  "MainWeather": "Fog",
	  "Temp": 7,
	  "TempUnit": "Celcius",
	  "FeelsLike": 5,
	  "RainPossibilityPercentage": 72
	},
	{
	  "CityID": "W00302",
	  "CityName": "Zrosridge",
	  "MainWeather": "Partially cloudy",
	  "Temp": 18,
	  "TempUnit": "Celcius",
	  "FeelsLike": 17,
	  "RainPossibilityPercentage": 67
	},
	{
	  "CityID": "W00303",
	  "CityName": "Nuuginia",
	  "MainWeather": "Snow",
	  "Temp": -15,
	  "TempUnit": "Celcius",
	  "FeelsLike": -22,
	  "RainPossibilityPercentage": 78
	},
	{
	  "CityID": "W00304",
	  "CityName": "Shicpool",
	  "MainWeather": "Tornadoes",
	  "Temp": 25,
	  "TempUnit": "Celcius",
	  "FeelsLike": 20,
	  "RainPossibilityPercentage": 29
	},
	{
	  "CityID": "W00305",
	  "CityName": "Trosa",
	  "MainWeather": "Clear",
	  "Temp": 25,
	  "TempUnit": "Celcius",
	  "FeelsLike": 24,
	  "RainPossibilityPercentage": 70
	},
	{
	  "CityID": "W00306",
	  "CityName": "Lane",
	  "MainWeather": "Tornadoes",
	  "Temp": 25,
	  "TempUnit": "Celcius",
	  "FeelsLike": 20,
	  "RainPossibilityPercentage": 53
	},
	{
	  "CityID": "W00307",
	  "CityName": "Qesa",
	  "MainWeather": "Rain",
	  "Temp": 12,
	  "TempUnit": "Celcius",
	  "FeelsLike": 15,
	  "RainPossibilityPercentage": 90
	},
	{
	  "CityID": "W00308",
	  "CityName": "Aloving",
	  "MainWeather": "Hurricanes",
	  "Temp": 20,
	  "TempUnit": "Celcius",
	  "FeelsLike": 17,
	  "RainPossibilityPercentage": 40
	},
	{
	  "CityID": "W00309",
	  "CityName": "Esapus",
	  "MainWeather": "Partially cloudy",
	  "Temp": 18,
	  "TempUnit": "Celcius",
	  "FeelsLike": 17,
	  "RainPossibilityPercentage": 43
	},
	{
	  "CityID": "W00310",
	  "CityName": "Peshire",
	  "MainWeather": "Tornadoes",
	  "Temp": 25,
	  "TempUnit": "Celcius",
	  "FeelsLike": 20,
	  "RainPossibilityPercentage": 88
	},
	{
	  "CityID": "W00311",
	  "CityName": "Drafield",
	  "MainWeather": "Drizzle",
	  "Temp": 10,
	  "TempUnit": "Celcius",
	  "FeelsLike": 9,
	  "RainPossibilityPercentage": 65
	},
	{
	  "CityID": "W00312",
	  "CityName": "Ucrihsey",
	  "MainWeather": "Sandstorms",
	  "Temp": 25,
	  "TempUnit": "Celcius",
	  "FeelsLike": 23,
	  "RainPossibilityPercentage": 49
	},
	{
	  "CityID": "W00313",
	  "CityName": "Jusa",
	  "MainWeather": "Partially cloudy",
	  "Temp": 18,
	  "TempUnit": "Celcius",
	  "FeelsLike": 17,
	  "RainPossibilityPercentage": 30
	},
	{
	  "CityID": "W00314",
	  "CityName": "Shecester",
	  "MainWeather": "Fog",
	  "Temp": 7,
	  "TempUnit": "Celcius",
	  "FeelsLike": 5,
	  "RainPossibilityPercentage": 44
	},
	{
	  "CityID": "W00315",
	  "CityName": "Praso",
	  "MainWeather": "Sandstorms",
	  "Temp": 25,
	  "TempUnit": "Celcius",
	  "FeelsLike": 23,
	  "RainPossibilityPercentage": 86
	},
	{
	  "CityID": "W00316",
	  "CityName": "Aclence",
	  "MainWeather": "Partially cloudy",
	  "Temp": 18,
	  "TempUnit": "Celcius",
	  "FeelsLike": 17,
	  "RainPossibilityPercentage": 70
	},
	{
	  "CityID": "W00317",
	  "CityName": "Agrock",
	  "MainWeather": "Sandstorms",
	  "Temp": 25,
	  "TempUnit": "Celcius",
	  "FeelsLike": 23,
	  "RainPossibilityPercentage": 59
	},
	{
	  "CityID": "W00318",
	  "CityName": "Ertonport",
	  "MainWeather": "Stormy",
	  "Temp": 15,
	  "TempUnit": "Celcius",
	  "FeelsLike": 14,
	  "RainPossibilityPercentage": 19
	},
	{
	  "CityID": "W00319",
	  "CityName": "Isonstin",
	  "MainWeather": "Clear",
	  "Temp": 25,
	  "TempUnit": "Celcius",
	  "FeelsLike": 24,
	  "RainPossibilityPercentage": 67
	},
	{
	  "CityID": "W00320",
	  "CityName": "Chusey",
	  "MainWeather": "Snow",
	  "Temp": -15,
	  "TempUnit": "Celcius",
	  "FeelsLike": -22,
	  "RainPossibilityPercentage": 42
	},
	{
	  "CityID": "W00321",
	  "CityName": "Rosbury",
	  "MainWeather": "Tornadoes",
	  "Temp": 25,
	  "TempUnit": "Celcius",
	  "FeelsLike": 20,
	  "RainPossibilityPercentage": 26
	},
	{
	  "CityID": "W00322",
	  "CityName": "Kinross",
	  "MainWeather": "Drizzle",
	  "Temp": 10,
	  "TempUnit": "Celcius",
	  "FeelsLike": 9,
	  "RainPossibilityPercentage": 84
	},
	{
	  "CityID": "W00323",
	  "CityName": "Brehby",
	  "MainWeather": "Stormy",
	  "Temp": 15,
	  "TempUnit": "Celcius",
	  "FeelsLike": 14,
	  "RainPossibilityPercentage": 86
	},
	{
	  "CityID": "W00324",
	  "CityName": "Raver",
	  "MainWeather": "Snow",
	  "Temp": -15,
	  "TempUnit": "Celcius",
	  "FeelsLike": -22,
	  "RainPossibilityPercentage": 71
	},
	{
	  "CityID": "W00325",
	  "CityName": "Sreles",
	  "MainWeather": "Stormy",
	  "Temp": 15,
	  "TempUnit": "Celcius",
	  "FeelsLike": 14,
	  "RainPossibilityPercentage": 79
	},
	{
	  "CityID": "W00326",
	  "CityName": "Praco",
	  "MainWeather": "Hurricanes",
	  "Temp": 20,
	  "TempUnit": "Celcius",
	  "FeelsLike": 17,
	  "RainPossibilityPercentage": 21
	}
]

jsonDataWeather = JSON.stringify(jsonDataWeather)
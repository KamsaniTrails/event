const cities = [
    {
        city: "New York",
        growth_from_2000_to_2013: "4.8%",
        latitude: 40.7128,
        longitude: -74.0060,
        population: 8405837,
        rank: 1,
        state: "New York"
    },
    {
        city: "Los Angeles",
        growth_from_2000_to_2013: "4.8%",
        latitude: 34.0522,
        longitude: -118.2437,
        population: 3884307,
        rank: 2,
        state: "California"
    },
    {
        city: "Chicago",
        growth_from_2000_to_2013: "-6.1%",
        latitude: 41.8781,
        longitude: -87.6298,
        population: 2718782,
        rank: 3,
        state: "Illinois"
    },
    {
        city: "Houston",
        growth_from_2000_to_2013: "11.0%",
        latitude: 29.7604,
        longitude: -95.3698,
        population: 2195914,
        rank: 4,
        state: "Texas"
    },
    {
        city: "Phoenix",
        growth_from_2000_to_2013: "14.0%",
        latitude: 33.4484,
        longitude: -112.0740,
        population: 1513367,
        rank: 5,
        state: "Arizona"
    },
    {
        city: "Philadelphia",
        growth_from_2000_to_2013: "2.6%",
        latitude: 39.9526,
        longitude: -75.1652,
        population: 1553165,
        rank: 6,
        state: "Pennsylvania"
    },
    {
        city: "San Antonio",
        growth_from_2000_to_2013: "21.0%",
        latitude: 29.4241,
        longitude: -98.4936,
        population: 1409019,
        rank: 7,
        state: "Texas"
    },
    {
        city: "San Diego",
        growth_from_2000_to_2013: "10.5%",
        latitude: 32.7157,
        longitude: -117.1611,
        population: 1355896,
        rank: 8,
        state: "California"
    },
    {
        city: "Dallas",
        growth_from_2000_to_2013: "5.6%",
        latitude: 32.7767,
        longitude: -96.7970,
        population: 1257676,
        rank: 9,
        state: "Texas"
    },
    {
        city: "San Jose",
        growth_from_2000_to_2013: "10.5%",
        latitude: 37.3382,
        longitude: -121.8863,
        population: 998537,
        rank: 10,
        state: "California"
    },
    {
        city: "Austin",
        growth_from_2000_to_2013: "31.8%",
        latitude: 30.2672,
        longitude: -97.7431,
        population: 885400,
        rank: 11,
        state: "Texas"
    },
    {
        city: "Jacksonville",
        growth_from_2000_to_2013: "9.3%",
        latitude: 30.3322,
        longitude: -81.6557,
        population: 842583,
        rank: 12,
        state: "Florida"
    },
    {
        city: "San Francisco",
        growth_from_2000_to_2013: "7.7%",
        latitude: 37.7749,
        longitude: -122.4194,
        population: 837442,
        rank: 13,
        state: "California"
    },
    {
        city: "Indianapolis",
        growth_from_2000_to_2013: "7.8%",
        latitude: 39.7684,
        longitude: -86.1581,
        population: 843393,
        rank: 14,
        state: "Indiana"
    },
    {
        city: "Columbus",
        growth_from_2000_to_2013: "14.8%",
        latitude: 39.9612,
        longitude: -82.9988,
        population: 822553,
        rank: 15,
        state: "Ohio"
    },
    {
        city: "Fort Worth",
        growth_from_2000_to_2013: "34.1%",
        latitude: 32.7555,
        longitude: -97.3308,
        population: 792727,
        rank: 16,
        state: "Texas"
    },
    {
        city: "Charlotte",
        growth_from_2000_to_2013: "39.1%",
        latitude: 35.2271,
        longitude: -80.8431,
        population: 792862,
        rank: 17,
        state: "North Carolina"
    },
    {
        city: "Detroit",
        growth_from_2000_to_2013: "-25.0%",
        latitude: 42.3314,
        longitude: -83.0458,
        population: 688701,
        rank: 18,
        state: "Michigan"
    },
    {
        city: "El Paso",
        growth_from_2000_to_2013: "19.4%",
        latitude: 31.7619,
        longitude: -106.4850,
        population: 674433,
        rank: 19,
        state: "Texas"
    },
    {
        city: "Seattle",
        growth_from_2000_to_2013: "15.6%",
        latitude: 47.6062,
        longitude: -122.3321,
        population: 652405,
        rank: 20,
        state: "Washington"
    },
    { city: "Seattle", growth_from_2000_to_2013: "15.6%", latitude: 47.6062, longitude: -122.3321, population: 652405, rank: 18, state: "Washington" },
    { city: "Denver", growth_from_2000_to_2013: "16.7%", latitude: 39.7392, longitude: -104.9903, population: 649495, rank: 19, state: "Colorado" },
    { city: "El Paso", growth_from_2000_to_2013: "19.4%", latitude: 31.7619, longitude: -106.4850, population: 674433, rank: 20, state: "Texas" },
    { city: "Nashville", growth_from_2000_to_2013: "16.3%", latitude: 36.1627, longitude: -86.7816, population: 659042, rank: 21, state: "Tennessee" },
    { city: "Detroit", growth_from_2000_to_2013: "-27.1%", latitude: 42.3314, longitude: -83.0458, population: 688701, rank: 22, state: "Michigan" },
    { city: "Oklahoma City", growth_from_2000_to_2013: "20.2%", latitude: 35.4676, longitude: -97.5164, population: 610613, rank: 23, state: "Oklahoma" },
    { city: "Las Vegas", growth_from_2000_to_2013: "24.5%", latitude: 36.1699, longitude: -115.1398, population: 603488, rank: 24, state: "Nevada" },
    { city: "Portland", growth_from_2000_to_2013: "15.0%", latitude: 45.5234, longitude: -122.6762, population: 609456, rank: 25, state: "Oregon" },
    { city: "Memphis", growth_from_2000_to_2013: "-5.0%", latitude: 35.1495, longitude: -90.0490, population: 653450, rank: 26, state: "Tennessee" },
    { city: "Louisville", growth_from_2000_to_2013: "10.0%", latitude: 38.2527, longitude: -85.7585, population: 612780, rank: 27, state: "Kentucky" }
];

module.exports = cities;

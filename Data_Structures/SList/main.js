var SList = require('./slist');

var cities = new SList();
cities.insert("Los Angeles", "head");
cities.insert("San Francisco", "Los Angeles");
cities.insert("Seattle", "San Francisco");
cities.display();

var basketballTeams = new SList();
basketballTeams.insert("Lakers", "head");
basketballTeams.insert("Blazers", "Lakers");
basketballTeams.insert("Celtics", "Blazers");
basketballTeams.insert("Kings", "Celtics");
basketballTeams.display();
console.log("Removing Celtics");
basketballTeams.remove("Celtics");
basketballTeams.display();
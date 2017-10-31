// Code your solution in this file!
function logDriverNames (drivers) {
  drivers.map(function (driver) {
    console.log(driver.name);
  });
};

function logDriversByHometown (drivers, hometown) {
  matchingDrivers = drivers.filter(function (driver) {
    return driver.hometown === hometown;
  });

  matchingDrivers.forEach(function (driver) {
    console.log(driver.name)
  });
};

function driversByRevenue (drivers) {
  return [...drivers].sort(function (a,b) {
    return a.revenue - b.revenue;
  });
};

function driversByName (drivers) {
  return [...drivers].sort(function (a,b) {
    return (a.name).localeCompare(b.name);
  });
};

function totalRevenue (drivers) {
  return drivers.reduce(function (sum, driver) {
    return sum + driver.revenue;
  }, 0);
};

function averageRevenue (drivers) {
  return totalRevenue(drivers) / drivers.length;
};

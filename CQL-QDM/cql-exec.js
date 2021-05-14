
const Calculator = require('cqm-execution').Calculator;

// Example fixture loader (useful for this example).
const fs = require('fs');
const getJSONFixture = function(fixturePath) { 
  var contents = fs.readFileSync('spec/fixtures/json/' + fixturePath);
  return JSON.parse(contents);
};

// Load value sets from test fixtures, the getJSONFixture base path is spec/fixtures/json
const valueSets = getJSONFixture('measures/CMS107v6/value_sets.json');

// Load a measure from test fixtures.
const measure = getJSONFixture('measures/CMS107v6/CMS107v6.json');

// Load in an example patient from test fixtures
let patients = [];
// The calculator will return results for each patient in this array
patients.push(getJSONFixture('patients/CMS107v6/IPPFail_LOS=121Days.json'));

// Example options; includes directive to produce pretty statement results.
const options = { doPretty: true };

// Calculate results.
const calculationResults = Calculator.calculate(measure, patients, valueSets, options);

console.log(calculationResults);
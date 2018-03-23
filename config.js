exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  multiCapabilities: [
    {
      browserName: 'chrome',
      // shardTestFiles: true,
      // maxInstances: 2,
      // specs: ['./specs/SecondSpec.js','./specs/SecondSpec.js','./specs/SecondSpec.js']
    },
    {
      browserName: 'firefox',
      // shardTestFiles: true,
      // maxInstances: 2,
      // specs: ['./specs/FirstSpec.js','./specs/FirstSpec.js','./specs/FirstSpec.js']
    }
  ],
  framework: 'jasmine',
  specs: ['./specs/FirstSpec.js','./specs/SecondSpec.js','./specs/FirstSpec.js','./specs/SecondSpec.js'],
  shardTestFiles: true,
  maxInstances: 2,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

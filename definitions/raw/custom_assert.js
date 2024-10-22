const commonAssertions = require("dataform-assertions");

const commonAssertionsResult = commonAssertions({
  globalAssertionsParams: {
    // If not provided, the default Dataform project config will be used
    "database": "gcp-project-id",
    "schema": "bigquery-dataset",
    "location": "bigquery-location",
    "tags": ["global-assertions-tag"],
    "disabledInEnvs": ["dv"] // Check match with 'dataform.projectConfig.vars.env' value
  },
  rowConditions: {
    "dataform": {
      "raw_c": {
        "id_not_null": "id IS NOT NULL",
      }
    }
  }
});
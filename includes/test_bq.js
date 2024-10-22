async function runBigQueryJob() {
  // Imports the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');

  const projectId="carion-aw-dev"
  location = "US"
  query="SELECT 1"

  // Creates a client
  const bigquery = new BigQuery({
    projectId: projectId,
    location: location,
  });

  // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs#configuration.query
  const options = {
    query: query,
    // Location must match that of the dataset(s) referenced in the query.
    location: location,
  };

  // Runs the job
  const [job] = await bigquery.createQueryJob(options);
  console.log(`Job ${job.id} started.`);

  // Wait for the query to finish
  const [rows] = await job.getQueryResults();

  // Return the job response
  return { job, rows };
}
'use strict';

const { Storage } = require('@google-cloud/storage');
const path = require('path');

const gcpCredentials = JSON.parse(process.env.GCP_CREDENTIALS);
const bucketName = 'gondolkodas-orome-poc';

const storage = new Storage({
  projectId: gcpCredentials.project_id,
  credentials: gcpCredentials
});

(async () => {
  try {
    const filePath = path.join(__dirname, '../dist/app.js');
    const bucket = storage.bucket(bucketName);
    await bucket.upload(filePath, {
      destination: 'staging.js',
      metadata: { cacheControl: 'no-cache' }
    });

    console.log(`uploaded app.js to bucket ${bucketName}`);
  } catch (error) {
    console.log(`failed to upload app.js to bucket ${bucketName}`, error);
    process.exit(1);
  }
})();

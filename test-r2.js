const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const R2_ACCOUNT_ID = 'your_account_id_here';
const R2_ENDPOINT = 'https://your_account_id_here.r2.cloudflarestorage.com';
const R2_ACCESS_KEY_ID = 'your_access_key_here';
const R2_SECRET_ACCESS_KEY = 'your_secret_access_key_here';
const R2_BUCKET_NAME = 'your_bucket_name_here';

const r2Client = new S3Client({
    region: 'auto',
    forcePathStyle: true,
    endpoint: R2_ENDPOINT,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY
    }
});

async function test() {
    try {
        const command = new GetObjectCommand({
            Bucket: R2_BUCKET_NAME,
            Key: 'video_videos_1pengenalan.mp4'
        });
        const url = await getSignedUrl(r2Client, command, { expiresIn: 3600 });
        console.log('Success URL:', url);
    } catch (err) {
        console.error('Error generating secure R2 URL:', err);
    }
}

test();

import { Storage } from "@google-cloud/storage";

let projectId = "reraauth";
let keyFileName = "keyfile.json";
const storage = new Storage({
  projectId,
  keyFilename: keyFileName,
});

const bucket = storage.bucket("profile_uploads");

const uploadAvatar = (file, email) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No file found in the request"));
    }

    const blob = bucket.file(email);
    const blobStream = blob.createWriteStream();

    blobStream.on("error", (err) => {
      console.error("Error uploading file:", err);
      reject(new Error("File upload failed"));
    });

    blobStream.on("finish", () => {
      console.log("Avatar Uploaded");
      resolve();
    });

    blobStream.end(file.buffer);
  });
};

export default uploadAvatar;

exports.audio =
{
  encoding        : 'LINEAR16',
  sampleRateHertz : 16000,
  languageCode    : 'ko-KR'
};

exports.ttsConfig =
{
  useSpeaker      : true
};

exports.firebaseConfig =
{
  useFirebase     : true,
  databaseURL     : "user_database_url",
  serviceAccount  : "../keys/your_service_account_key.json"
};

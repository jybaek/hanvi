# hanvi project
AI( Artificial Intelligent ) Speaker

## Prerequisite
### Authentication
```bash
$ gcloud auth application-default login
```

### Install Dependencies
```bash
$ npm install
```

## Usage
```bash
$ node controllers/hanvi.js
Listening, press Ctrl+C to stop.
Transcription: 좋은 아침입니다
Transcription:  음성인식을 테스트 중입니다
Transcription:  생각보다 잘 됩니다
```

## TODO
  - [ ] Fixed to respond only when calling `hanvi`
  - [ ] Analyzes the voice and returns the desired answer in `TTS( text to speech )`.

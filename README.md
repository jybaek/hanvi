

![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)
![node](https://img.shields.io/badge/node-6.15.x-brightgreen.svg)
![node](https://img.shields.io/badge/node-9.4.x-brightgreen.svg)

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

## Simple Architecture
<img src="/arch/architecture.png" style="max-width:100%;max-height:100%;">

## Usage
```bash
$ node hanvi.js
Listening, press Ctrl+C to stop.
Transcription: 좋은 아침입니다
Transcription:  음성인식을 테스트 중입니다
Transcription:  생각보다 잘 됩니다
```

## TODO
  - [ ] Fixed to respond only when calling `hanvi`
  - [ ] Analyzes the voice and returns the desired answer in `TTS( text to speech )`.
  - [ ] TTS and STT development. ( Without using the Google API )

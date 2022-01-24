// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

export default class Localization {
  static get isoCode() {
    return 'en-US';
  }

  static get Messages() {
    return Localization.Languages[Localization.isoCode].Messages;
  }

  static get Tooltips() {
    return Localization.Languages[Localization.isoCode].Tooltips;
  }

  static get Buttons() {
    return Localization.Languages[Localization.isoCode].Buttons;
  }

  static get Alerts() {
    return Localization.Languages[Localization.isoCode].Alerts;
  }

  static get Statuses() {
    return Localization.Languages[Localization.isoCode].Statuses;
  }

  static get Languages() {
    return {
      'en-US': {
        Messages: {
          /* signin flow */
          Title: 'IONE Digital | Media Dashboard',
          PasswordRequirement: 'Password must be at least <abbr title="eight characters">eight</abbr> characters long and contain <abbr title="one uppercase character">one</abbr> uppercase, <abbr title="one lowercase character">one</abbr> lowercase, <abbr title="one numeric character">one</abbr> number, and <abbr title="one special character">one</abbr> special character.',
          ResetSendCode: 'Please enter the username and press <strong>Send code</strong>. You should receive a 6-digits code in mail in a few minutes. You will need the code to reset the password.',
          ResetPassword: 'Please enter the verification code that has sent to your email address and your new password.',
          /* main view */
          SolutionName: 'IOne Digital | Media Dashboard',
          /* about tab panel */
          AboutTab: 'About',
          Mission: 'AWS Media2Cloud Solution is designed to help customers to blah...',
          Design: 'Architecture Design goes here...',
          Team: 'Team member goes here...',
          /* stats tab panel */
          StatsTab: 'Stats',
          /* face collection tab panel */
          FaceCollectionTab: 'FaceCollection',
          /* setting tab panel */
          SettingsTab: 'Settings',
          SettingsDesc: 'This setting page allows you to configure and fine tune AI/ML settings for each of the Amazon AI services.',
          DatastoreFeature: 'Local Data Store (IndexedDB)',
          DatastoreFeatureDesc: 'Media2Cloud uses <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" target="_blank">IndexedDB</a> to cache thumbnail images, datasets, and other settings locally. Click <strong/>Clean up data store</strong> to delete the local data.',
          RekognitionFeatures: 'Amazon Rekognition Settings',
          RekognitionFeaturesDesc: '<a href="https://aws.amazon.com/rekognition" target="_blank">Amazon Rekognition</a> allows you to detect celebrities, faces, labels, objects or create your own <a href="https://docs.aws.amazon.com/rekognition/latest/dg/collections.html" target="_blank">Face Collection</a> to match faces in your collection.',
          ComprehendFeatures: 'Amazon Comprehend Settings',
          ComprehendFeaturesDesc: '<a href="https://aws.amazon.com/comprehend/" target="_blank">Amazon Comprehend</a> allows you to extract keyphrases, entities, sentiments, and classification. You can also train your <a href="https://docs.aws.amazon.com/comprehend/latest/dg/custom-entity-recognition.html" target="_blank">Custom Entity Recognizer</a> to identify custom entities for your business needs. Check out this blog post, <a href="https://aws.amazon.com/blogs/machine-learning/build-a-custom-entity-recognizer-using-amazon-comprehend/" target="_blank">Build a custom entity recognizer using Amazon Comprehend</a>.',
          TranscribeFeatures: 'Amazon Transcribe Settings',
          TranscribeFeaturesDesc: '<a href="https://aws.amazon.com/transcribe/" target="_blank">Amazon Transcribe</a> is a automatic speech recognition (ASR) service. Media2Cloud extracts audio stream from your asset and autmatically create subtitle track using <a href="https://aws.amazon.com/blogs/aws/amazon-transcribe-now-supports-automatic-language-identification/" target="_blank">Amazon Transcribe Automatic Language Identification feature</a>. You can also train a custom language model to improve the ASR result. Check out this blog post, <a href="https://aws.amazon.com/blogs/machine-learning/building-custom-language-models-to-supercharge-speech-to-text-performance-for-amazon-transcribe/" target="_blank">Building custom language models to supercharge speech-to-text performance for Amazon Transcribe</a>. (Note that Custom Language Model currently supports English only.)',
          TextractFeatures: 'Amazon Textract Settings',
          TextractFeaturesDesc: '<a href="https://aws.amazon.com/textract/">Amazon Textract</a> is an optical character recognition (OCR) service that allows you to extract text and relationship of a document such as PDF file.',
          AIMLSetting: 'AI/ML Settings',
          AdvanceFeatures: 'Advanced Features',
          /* collection tab panel */
          CollectionTab: 'Collection',
          /* upload tab panel */
          UploadTab: 'Upload',
          ReviewAnalysisSettings: '',
          Enabled: 'Enabled',
          Disabled: 'Disabled',
          NotSet: 'Not set',
          /* search component */
          Search: 'Search',
          Submit: 'Submit',
          SearchDesc: 'Fine tune search results by selecting media type(s) such as <strong>Video</strong> or <strong>Photo</strong>, type(s) of categories such as <strong>Known faces</strong> to search Celebrities and Faces found in Face Collection, <strong>Labels</strong> to search Rekognition labels, <strong>Transcript</strong> to search speech to text results, and/or <strong>Content attributes</strong> to search group name and attributes associated with uploaded content. Select <strong>Exact match</strong> to search exact terms',
          SearchQueryFailed: 'Fail to query the search results',
          // SearchDesc: 'Specify options to refine search results. Select specific category such as \'Video\' or \'Photo\' returns results in the selected categories. Select \'Exact match\' returns results that contains the exact phrases.',
          ExactMatch: 'Exact match',
          PageSize10: '10 results per page',
          PageSize30: '30 results per page',
          PageSize50: '50 results per page',
          SearchResultDesc: 'Search results',
          Category: 'Category',
          /* ai options */
          Transcript: 'Transcript',
          KnownFaces: 'Known faces',
          Keyphrases: 'Key phrases',
          Entities: 'Entities',
          VisualText: 'Visual text',
          ContentAttributes: 'Content attributes',
          TranscriptPhrasesEntities: 'Transcript, Phrases, & Entities',
          LabelsModeration: 'Labels & Moderation',
          /* content sub-tab */
          ContentTab: 'Content',
          /* processing tab */
          VideoTab: 'Video',
          PhotoTab: 'Photo',
          PodcastTab: 'Podcast',
          DocumentTab: 'Document',
          GroupTab: 'Group',
          NoMediaPresent: 'You don\'t have any <abbr title="media">{{MEDIATYPE}}</abbr> files in your collection. Navigate to <abbr title="upload">{{UPLOADTAB}} Tab</abbr> to start adding files.',
          MediaInProcess: '<p><strong>{{BASENAME}}</strong> media is still in process. Please navigate to <strong>{{PROCESSINGTAB}} Tab</strong> to check the progress.</p>',
          MediaError: '<p><strong>{{BASENAME}}</strong> media has failed to process. Please navigate to <strong>{{PROCESSINGTAB}} Tab</strong> to see more details.</p>',
          RemoveMedia: '<p/>Removing <strong/>{{BASENAME}}</strong> will <u>delete</u> all proxies, metadata, and records from the collection.</p><p>Would you like to proceed?</p>',
          ProcessingTab: 'Processing',
          ProcessingDesc: 'List of processing jobs',
          ProcessingError: 'Fail to process <abbr title="basename">{{BASENAME}}</abbr>. Navigate to <abbr title="processing">{{PROCESSINGTAB}} Tab</abbr> to check the details.',
          ErrorDesc: 'List of recent error jobs',
          Name: 'Name',
          Uuid: 'Unique Id',
          Status: 'Current status',
          OverallStatus: 'Overall status',
          /* dropzone */
          DropzoneDesc: '',
          AttributeDesc: '',
          AnalysisDesc: 'Media2Cloud uses various AWS AI services to analyze video, images, audio, and documents. The analysis includes detecting celebrities, faces, labels, moderations, key phrases, entities, sentiments, and transcription. To learn more about AWS AI services, please visit <a href="https://aws.amazon.com/rekognition/" target="_blank">Amazon Rekognition</a>, <a href="https://aws.amazon.com/transcribe/" target="_blank">Amazon Transcribe</a>, and <a href="https://aws.amazon.com/comprehend/" target="_blank">Amazon Comprehend</a>.',
          FinalizeUploadDesc: 'This final upload process assigns an unique ID (uuid) to each file, checks for collision, computes a MD5 checksum of the file, and uses <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html" target="_blank">multipart upload</a> to transfer the file to your Amazon S3 Bucket, {{BUCKET}}. Please confirm the final list below and click on \'Start now\' to start the process.',
          DropFileHere: 'Drop file(s) here to start',
          FileToBeProcessed: 'File(s) to be processed:',
          /* attribute component */
          GroupName: 'Specify group name',
          GroupDesc: 'Specify a group name to tie all the files together. You can then search the files by group later on. The group name should only contain alphanumeric, dash, and underscore characters. Leave it blank if you don\'t want to group them.',
          AttrDesc: 'Searchable text attributes.',
          /* analysis component */
          FramebasedDesc: '<span class="text-success">New feature:</span> Frame based analysis uses Amazon Rekognition Image APIs instead of Amazon Rekognition Video APIs to analyze video files. Detections include celebrities, faces, labels, moderations, and texts. (Note: segment and person pathing detections continue to use Amazon Rekognition Video APIs.)',
          Framebased: 'Frame based analysis',
          FaceCollectionId: 'Face Collection',
          CustomLabelModels: 'Custom label model(s)',
          FrameCaptureMode: 'Frame capture mode',
          FrameCaptureModeNone: 'Disable frame capture',
          FrameCaptureMode1FPS: '1 frame per second',
          FrameCaptureMode2FPS: '2 frames per second',
          FrameCaptureMode3FPS: '3 frames per second',
          FrameCaptureMode4FPS: '4 frames per second',
          FrameCaptureMode5FPS: '5 frames per second',
          FrameCaptureMode10FPS: '10 frames per second',
          FrameCaptureMode12FPS: '12 frames per second',
          FrameCaptureMode15FPS: '15 frames per second',
          FrameCaptureModeAllFrames: 'Every frame',
          FrameCaptureModeEveryOtherFrame: 'Every other frame',
          FrameCaptureMode1FramePer2Seconds: '1 frame every 2 seconds',
          FrameCaptureMode1FramePer5Seconds: '1 frame every 5 seconds',
          TextROI: 'Text regions of interest',
          LanguageCode: 'Language code',
          CustomLanguageModel: 'Custom Language Model',
          CustomVocabulary: 'Custom vocabulary',
          CustomEntityRecognizer: 'Custom Entity Recognizer',
          TextRegionOfInterest: 'Region of Interest for Amazon Rekognition Text Detection',
          SelectModel: 'Select a model...',
          SelectModels: 'Select model(s)...',
          SelectFrameCaptureMode: 'Auto select...',
          SelectLanguageCode: 'Auto detect language...',
          SelectCollection: 'Select a collection...',
          MinConfidence: 'Min. confidence',
          Celeb: 'Celebrity detection',
          Label: 'Label detection',
          Face: 'Face detection',
          Facematch: 'Face match detection',
          Person: 'Person detection',
          Moderation: 'Moderation detection',
          Text: 'Text detection',
          Entity: 'Entity detection',
          Keyphrase: 'Keyphrase detection',
          Sentiment: 'Sentiment analysis',
          Topic: 'Topic analysis',
          Document: 'Document analysis',
          Segment: 'Shot segment detection',
          CustomlabelDesc: '',
          Customlabel: 'Custom label detection',
          ComprehendInCertainLanguage: '** Comprehend features may not be available in certain languages',
          /* finalize component */
          Summary: 'Summary',
          Source: 'Source',
          FileName: 'Name',
          FileSize: 'Size',
          FileType: 'Type',
          LastModified: 'Last modified',
          Destination: 'Destination',
          Bucket: 'Bucket',
          Key: 'Key',
          Attributes: 'Attributes',
          UploadStatus: 'Upload status',
          ValidateUuid: 'Validate uuid',
          ComputeChecksum: 'Compute checksum',
          UploadS3: 'Upload to S3',
          /* content tab */
          VideoCategory: 'Video category',
          PhotoCategory: 'Photo category',
          PodcastCategory: 'Podcast category',
          DocumentCategory: 'Document category',
          GroupCategory: 'Group category',
          CelebrityCategory: 'Celebrity category',
          LoadMore: 'Load more...',
          NoMoreData: 'No more data...',
          /* preview */
          NoData: 'No relevant data...',
          /** technical */
          GeneralGroup: 'General',
          ProxyGroup: 'Proxies',
          MediaInfoGroup: 'MediaInfo',
          EXIFGroup: 'EXIF',
          BasicGroup: 'Basic',
          GPSGroup: 'GPS',
          PDFGroup: 'PDF Info',
          OthersGroup: 'Others',
          TechnicalGroup: 'Technical',
          SourceTab: 'Source',
          ProxiesTab: 'Proxies',
          MediainfoTab: 'Mediainfo',
          ImageinfoTab: 'EXIF Info',
          Basic: 'Basic',
          GPS: 'GPS',
          ShowMap: 'Show location',
          More: 'More...',
          DocinfoTab: 'Docinfo',
          /** analysis */
          AnalysisGroup: 'Analysis',
          StatisticsTab: 'Statistics',
          SearchResultTab: 'Search Results',
          ReAnalyzeTab: 'Re-Analyze',
          SummaryTab: 'Summary',
          WorkflowHistory: 'AWS Step Functions (workflow history)',
          Rekognition: 'Amazon Rekognition',
          Comprehend: 'Amazon Comprehend',
          Transcribe: 'Amazon Transcribe',
          Textract: 'Amazon Textract',
          Labels: 'Labels',
          DownlaodJson: 'Download JSON',
          TranscribeTab: 'Transcribe',
          CelebTab: 'Celebrity',
          LabelTab: 'Label',
          FaceMatchTab: 'Face Match',
          FaceTab: 'Face',
          PersonTab: 'Person',
          SegmentTab: 'Segment',
          TextTab: 'Text',
          ModerationTab: 'Moderation',
          KeyphraseTab: 'Keyphrase',
          EntityTab: 'Entity',
          SentimentTab: 'Sentiment',
          TopicTab: 'Topic',
          ClassificationTab: 'Classification',
          TextractTab: 'Textract',
          CustomLabelTab: 'Custom label',
          EnableAll: 'Enable all labels',
          ToggleAll: 'Toggle all labels',
          TranscriptionJob: 'Transcription Job',
          SubtitleSwitch: 'Turn subtitle on/off',
          DownloadEDLDesc: 'Media2Cloud converts AI/ML detection results to Edit Decision List (EDL) format that allows you to import the detection results as timelines into popular editing software.',
          ScatterGraphDesc: 'Toggle a legend to show or hide data points of the selected label. Click on individual data point to seek to the timestamp on the video to see the detection results.',
          /* textract */
          Row: 'Row',
          Rows: 'Rows',
          Table: 'Table',
          Tables: 'Tables',
          KeyValueSets: 'Key Value Sets',
          Lines: 'Lines',
          Page: 'Page',
          /** tools */
          ToolsGroup: 'Tools',
          SnapshotTab: 'Snapshot',
          EnableSnapshot: 'Enable snapshot',
          DoneSnapshot: 'Done snapshot',
          CaptureImage: 'Capture image',
          SelectLabels: 'Select label(s)...',
          SelectNone: 'Deselect all',
          SelectAll: 'Select all',
          /* Stats */
          StatsDesc: 'Provide overall and categorized statistics of your collection.',
          OverallStats: 'Overall stats',
          TotalCount: 'Total number of media per category',
          TotalSize: 'Total sizes of media per category',
          WorkflowStatuses: 'Overview of workflow statuses',
          MostRecentStats: 'Most recently ingested media',
          Aggregations: 'Aggregations of AI/ML metadata',
          TopKnownFaces: 'Top known faces in library',
          TopLabels: 'Top labels in library',
          TopModerations: 'Top moderation labels in library',
          TopKeyphrases: 'Top keyphrases in library',
          TopEntities: 'Top entities in library',
          LongestFile: 'Longest duration in library',
          LargestFile: 'Largest filesize in library',
          /* FaceCollection */
          FaceCollectionDesc: 'Create, view and manage your Amazon Rekognition Face Collection(s).',
          AvailableFaceCollections: 'List of available face collection(s)',
          IndexedFacesInCollection: 'Indexed faces found in <strong>{{FACE_COLLECTION}}</strong> collection',
          SelectFaceCollection: 'Select a face collection...',
          Alternatively: 'Alternatively,',
          /* Snapshot */
          EnableSnapshotMode: 'Snapshot mode',
        },
        Tooltips: {
          /* main view */
          VisitSolutionPage: 'IONE Digital',
          Logout: 'ready to logout?',
          RemoveMedia: 'Remove media from collection',
          /* analysis component */
          MinConfidence: 'Set the minimum confidence level for various Amazon Rekognition detection(s) to return the result set',
          FaceColection: 'Uses Amazon Rekognition Face Collection',
          CustomLabelModels: 'Uses Amazon Rekognition Custom Labels feature',
          FrameCaptureMode: 'Define frame interval to run Custom Labels detection',
          TextROI: 'Define the regions of interest to run Amazon Rekognition Text detection',
          LanguageCode: 'Specify language code to run Amazon Transcribe',
          CustomLanguageModel: 'Uses Amazon Transcribe Custom Language Model (English only)',
          CustomVocabulary: 'Uses Amazon Transcribe Custom Vocabulary',
          CustomEntityRecognizer: 'Uses Amazon Comprehend Custom Entity Recognizer',
          TextRegionOfInterest: 'Define region of interest for Amazon Rekognition Text Detection',
          Celeb: 'Uses Amazon Rekognition celebrity recognition detection',
          Label: 'Uses Amazon Rekognition label detection',
          Face: 'Uses Amazon Rekognition face detection',
          Facematch: 'Uses Amazon Rekognition face search to match indexed faces in your own face collection',
          Person: 'Uses Amazon Rekognition person pathing detection',
          Moderation: 'Uses Amazon Rekognition moderation detection',
          Text: 'Uses Amazon Rekognition text detection to extract texts from images and videos',
          Customlabel: 'Uses Amazon Rekognition Custom Labels to detect objects',
          Framebased: 'Opt in to use Amazon Rekognition Image APIs',
          Transcribe: 'Uses Amazon Transcribe to convert speech to text from audio file or track',
          Entity: 'Uses Amazon Comprehend to extract entities such as locations, dates, and quantities from the transcription',
          Keyphrase: 'Uses Amazon Comprehend to extract key phrases from the transcription',
          Sentiment: 'Uses Amazon Comprehend to analyze sentiments of the phrases from the transcription',
          Topic: 'Uses Amazon Comprehend to analyze topics of the phrases from the transcription',
          Document: 'Uses Amazon Textract to extract form, key-value pairs, and texts from documents',
          SetAsDefault: 'Save settings as default on your local browser',
          RestoreOriginal: 'Restore settings to the originals',
          ReloadSettings: 'Reload analysis settings',
          /* upload */
          RemoveFromList: 'Remove file from the list?',
          UploadOnly: 'File will be uploaded but won\'t be analyzed',
          /* preview */
          ViewOnAWSConsole: 'view on console',
          ViewJobOnAWSConsole: 'View job on AWS Console',
          DownloadFile: 'download file',
          DeveloperWarning: 'To remove \'For development purposes only\' message, go to \'Settings\' page, enter your Google Map API Key, and refresh the page.',
          Confidence: 'Confidence',
          DeleteImage: 'Delete image',
          SelectMultipleItems: 'Select multiple items',
          PreviewMedia: 'Preview media',
          RefreshStats: 'Refresh stats',
          /* face collection */
          RemoveFaceFromCollection: 'Remove face from collection',
          RemoveFaceCollection: 'Delete the entire face collection!',
          /* snapshot */
          IndexFace: 'Enter a name of the cropped face and select a face collection to store the face',
        },
        Buttons: {
          Back: 'Back',
          Next: 'Advanced Settings',
          Cancel: 'Cancel',
          Close: 'Close',
          Done: 'Done',
          QuickUpload: 'Begin upload',
          Startover: 'Start over',
          StartNow: 'Start now',
          Remove: 'Remove',
          BrowseFiles: 'Browse files',
          SetAsDefault: 'Save as default',
          RestoreOriginal: 'Restore original',
          DownloadSummary: 'Download summary',
          ClosePreview: 'Close preview window',
          DownloadEDL: 'Download EDL Package',
          ReloadSettings: 'Reload settings',
          Refresh: 'Refresh',
          CreateNewCollection: 'Create new collection',
          RemoveFaceCollection: 'Delete face collection',
          IndexFace: 'Index face',
          CleanupDatastore: 'Clean up data store',
          ReAnalyzeContent: 'Re-run AI/ML analysis',
        },
        Statuses: {
          NotStarted: 'Not started',
          Queuing: 'Queuing',
          Waiting: 'Waiting',
          Processing: 'Processing',
          Completed: 'Completed',
          Error: 'Error',
          Total: 'Total',
        },
        Alerts: {
          Oops: 'Oops...',
          Warning: 'Warning',
          Confirmed: 'Confirmed',
          /* sign in */
          PasswordConformance: 'Passwords don\'t conform with the requirements. Please make sure the password is at least 8 characters, 1 uppercase, 1 lowercase, 1 numeric, and 1 special character.',
          UsernameConformance: 'Username don\'t conform with the requirements. Please make sure the username only contains alphanumeric and/or \'.\', \'_\', \'%\', \'+\', \'-\' characters',
          SignInProblem: 'Problem to sign in. Please try again.',
          MismatchPasswords: 'Passwords don\'t match. Please re-enter the password',
          PasswordConfirmed: 'Your new password has been set. Please re-sign in to the portal.',
          SessionExpired: 'Session expired. Please sign in again.',
          /* upload sub-tab */
          NoValidFile: 'No valid file has been imported.',
          /* file component */
          FileTypeNotSupported: 'File type is not supported',
          FileCannotImported: 'A few files cannot be imported.',
          /* attribute component */
          InvalidGroupName: 'Invalid group name. <strong>Group Name</strong> can contain alphnumeric, dash, or underscore characters and must be less than 128 characters.',
          InvalidKeyValue: 'Invalid key or value. <strong>Key</strong> can contain alphnumeric, dash, or underscore characters and must be less than 128 characters. <strong>Value</strong> can contain alphanumeric, dash, underscore, comma, period, or percent sign characters and must be less than 255 characters',
          MaxNumOfAttrs: 'You can add at most 20 attributes.',
          CreateUuidError: 'fail to create an unique uuid...',
          ComputeChecksumError: 'fail to compute MD5 checksum...',
          UploadS3Error: 'fail to upload file to S3 bucket...',
          StartWorkflowError: 'fail to start ingest workflow...',
          /* face collection */
          InvalidFaceCollectionName: 'Face Collection name can only contain alphnumeric, period, dash, and underscore characters and be less than 255 characters',
          /* snapshot */
          InvalidIndexedName: 'Name can only contain alphnumeric, space, period, dash, and underscore characters and be less than 255 characters',
          InvalidFaceCollectionSelection: 'Make sure to select a face collection. If you don`t have any face collection, navigate to <strong>FaceCollection Tab</strong> to create one.',
          ConfirmFaceIndexed: '<strong>{{NAME}}</strong> has successfully added to <strong>{{FACECOLLECTION}}</strong> collection!',
          /* ReAnalyze */
          ReAnalzyeFailed: 'Fail to re-run AI/ML analysis process for <strong>{{BASENAME}}</strong> media.',
          ReAnalyzeSubmitted: 'Re-runing the AI/ML analysis process for <strong>{{BASENAME}}</strong> media.',
        },
      },
    };
  }
}

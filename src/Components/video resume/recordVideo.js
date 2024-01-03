import React, { useRef, useEffect, useState } from 'react';
import '../Assets/Styles/videoresume.css';
// import { DefaultPlayer as Video } from 'react-html5video';
// import ReactPlayer from 'react-player';
import RecordRTC from 'recordrtc';
import Nav from '../Nav';

function RecordVideo() {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [done, setDone] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        setFile(selectedFile);

        if (selectedFile) {
            const objectUrl = URL.createObjectURL(selectedFile);
            setPreviewUrl(objectUrl);
        } else {
            setPreviewUrl(null);
        }
    };




    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('video', file);

        setProcessing(true); // Start processing

        setTimeout(() => {
            setProcessing(false);
            setDone(true)
        }, [20000]);

        try {
            const res = await fetch('http://localhost:8000/uploads', {
                method: 'POST',
                Headers: {
                    "Content-Type": "multipart/form-data"
                },
                body: formData,
            })

            if (res.ok) {
                console.log("file uploaded successfully")
                // setPreviewUrl("");
                // setFile("")
            } else {
                console.log('File upload failed')
            }


        } catch (error) {
            console.log("Error", error)
        }
    }

    const [videoDetails, setVideoDetails] = useState([]);
    const [transcribe, setTranscribe] = useState([]);
    // console.log(transcribe)


    const getData = async () => {
        const res = await fetch('http://localhost:8000/getFile')
        const data = await res.json();
        const transcriptionResult = data.getData;
        console.log(transcriptionResult)
        setTranscribe(transcriptionResult)
        // setTranscribe(data.getData.map((e) => e.transcription))

    }

    useEffect(() => {
        setDone(false);
    }, [file])

    const deleteUser = async (id) => {
        console.log(id)
        await fetch(`http://localhost:8000/delete/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // const deleteData = await res2.json()
        //   alert("Data Delete Successfully");
        getData();
    }

    // const transcribeText = "Hi myself Angel noyel, I'm 19 years old."

    const [feedback, setFeedback] = useState('');

    const generateFeedback = async (transcription, id) => {
        console.log(transcription, id)

        try {
            const response = await fetch(`http://localhost:8000/generate-feedback/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ transcription }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const feedback = await response.json();
            setFeedback(feedback)
            console.log('Feedback from server:', feedback);
        } catch (error) {
            console.error('API Request Error:', error.message);
        }
    };

    const handleFeedbackGeneration = (transcription, id) => {
        generateFeedback(transcription, id);
    };

    //  muhe particuler uss document ki id chahiye jis transcribe text ko model ko send karna ha then
    //  uska use kar ke feedback ko mongodb mai store karana hai?

    const sendToChatGPT = (transcription) => {
        console.log(transcription)
    }


    // record a user video code 

    const [recordedBlob, setRecordedBlob] = useState(null);
    const [recorder, setRecorder] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const videoRef = useRef(null);

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                const newRecorder = RecordRTC(stream, {
                    type: 'video',
                    timeSlice: 60000, // 1 minute

                });

                newRecorder.startRecording();
                setRecorder(newRecorder);
                setIsRecording(true);

                // Display live recording to the user
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((error) => {
                console.error('Error accessing media devices:', error);
            });
    };

    const stopRecording = () => {
        if (recorder) {
            recorder.stopRecording(() => {
                const blob = recorder.getBlob();
                setRecordedBlob(blob);
                setIsRecording(false);

                // Stop live recording display
                if (videoRef.current) {
                    videoRef.current.srcObject = null;
                }

                // Destroy the recorder
                recorder.destroy();
            });
        }
    };


    const handleUpload = () => {
        // Implement your upload logic here
        // You can use 'recordedBlob' for the recorded video blob
        console.log('Uploading recorded video:', recordedBlob);
    };


    //  remove file from input box and preview window 

    const removeFile = () => {
        setFile(null);
        setPreviewUrl(null);

        // Reset the input file element
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.value = null;
        }

        // Reset the live recording display
        setRecordedBlob(null);

    }


    return (
        <div>
            <Nav />
            <div className='container mainBox'>
                <div>
                    {file || recordedBlob ?
                        <button onClick={removeFile}>remove file</button>
                        :
                        ""
                    }
                </div>

                <div className='filePath'>
                    <h5>Upload video:</h5>
                    <div>
                        <input id="fileInput" class="form-control" onChange={handleFileChange} accept='video' type='file' />
                    </div>
                    {isRecording ? (
                        <button className='btn btn-primary mt-2' onClick={stopRecording}>Stop Recording</button>
                    ) : (
                        <button className='btn btn-primary mt-2' onClick={startRecording}>Start Recording</button>
                    )}
                    <button className='btn btn-primary mt-2' onClick={handleSubmit}>Submit</button><hr />
                    <button className='btn btn-success' onClick={getData}>Get Transcription</button>


                    {file && !processing && done && (
                        <h5>Your Transcription is Ready!!!</h5>
                    )}
                    {file && processing && (
                        <h5>Transcription is in progress...</h5>
                    )}
                    {!file && !processing && (
                        <h6> Please add video/mp3  for transcription.</h6>
                    )}

                </div>

                <div className='showFile'>
                    {
                        previewUrl ?
                            <>
                                {previewUrl && (
                                    <div>
                                        <video controls={true} width="480" height="240" src={previewUrl}>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                )}
                                {/* {videoDetails.map((video, index) => (
                                    <div key={video._id}>
                                    <video controls={true} width="480" height="240" src={`http://localhost:8000/uploads/${video.media}`}>
                                       Your browser does not support the video tag.
                                    </video>
                                    </div>
                                    ))} */}
                            </>
                            :
                            (
                                <>
                                    <video
                                        ref={videoRef}
                                        width="480"
                                        height="240"
                                        controls
                                        style={{ display: recordedBlob ? 'none' : 'block' }}
                                    />
                                    {recordedBlob && (
                                        <video
                                            width="480"
                                            height="240"
                                            controls
                                            src={URL.createObjectURL(recordedBlob)}
                                        />
                                    )}
                                </>
                            )
                    }



                </div>
            </div>

            <h4 className='mx-5 mt-4'>Transcribe Text:</h4>

            {/* {!processing && transcribe} */}

            {transcribe.length === 0 ?
                (
                    <div className='container textArea'>
                        No transcriptions available.
                    </div>

                ) : (
                    <>
                        {transcribe.map((e) => {
                            return (
                                <div key={e._id}>
                                    <div style={{ textAlign: 'right', marginRight: '6rem', marginTop: '1rem' }}>
                                        <button className='bg-danger' onClick={() => deleteUser(e._id)}>delete</button>
                                        <button onClick={() => handleFeedbackGeneration(e.transcription, e._id)}>Feedback</button>
                                        {/* <button onClick={() => sendToChatGPT(e.transcription)}>sendOnlyText</button> */}
                                    </div>
                                    <div className='container textArea' >

                                        {e.transcription}

                                    </div>
                                </div>
                            )
                        })}
                    </>
                )}

            <h4 className='mx-5 mt-4'>AI Genrative Feedback:</h4>

            <div className='container textArea'>

                <ul>
                    <li>
                        {transcribe.map((e) => {
                            return (
                                <>
                                    {e.feedback}

                                </>
                            )
                        })}
                    </li>
                    <br />
                    <li>
                        {feedback}

                    </li>
                </ul>
            </div>


            {/* video record code */}


            {/* <div>
                {isRecording ? (
                    <button onClick={stopRecording}>Stop Recording</button>
                ) : (
                    <button onClick={startRecording}>Start Recording</button>
                )}
                <button onClick={handleUpload} disabled={!recordedBlob}>
                    Upload Video
                </button>
            </div> */}

        </div>
    )
}

export default RecordVideo;




{/* {videoDetails.map((video) => (
                        <div key={video._id}>
                            <ReactPlayer url={`http://localhost:8000/uploads/${video.media}`} controls />
                        </div>
                    ))} */}
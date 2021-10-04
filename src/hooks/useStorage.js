//This hook handles file uploads and file storafes to the firebase storage
import { useState, useEffect } from "react";
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress ] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransfered/ snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    }, [file]);
    return { progress, url, error}
}

export default useStorage;


// this hook is responsible for handling our file uploads and
// retaining some useful values about that up load 